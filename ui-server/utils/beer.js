/**
 * Calculate the balance ratio of a beer
 * @param   {number} og  The original gravity of the beer
 * @param   {number} ibu The bitterness of the beer
 * @returns {string}     The balance of the beer expressed as a ratio of BU:GU
 */
export function calcBalance(og, ibu) {
  const bu = Math.max(og * 1000 - 1000, 0);
  const bugu = bu ? ibu / bu : 0;
  return bugu.toFixed(2);
}

/**
 * Calculate the calories in a beer
 * @param   {number} og  The original gravity of the beer
 * @param   {number} fg  The final gravity of the beer
 * @returns {string}     The amount of calories in the beer
 */
export function calcCalories(og, fg) {
  let calFromAlc = (1881.22 * (fg * (og - fg))) / (1.775 - og);
  let calFromCarbs = 3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004);

  if (og === 1 && fg === 1) {
    calFromAlc = 0;
    calFromCarbs = 0;
  }

  return (calFromAlc + calFromCarbs).toFixed();
}

/**
 * Calculate the alcohol by volume of a beer
 * @param   {number} og  The original gravity of the beer
 * @param   {number} fg  The final gravity of the beer
 * @returns {string}     The ABV of the beer
 */
export function calcABV(og, fg) {
  const abv = ((76.08 * (og - fg)) / (1.775 - og)) * (fg / 0.794);
  return abv.toFixed(1);
}

/* Beer colors indexed by SRM */
export const beerColors = [
  '#FFE699',
  '#FFE699',
  '#FFD878',
  '#FFCA5A',
  '#FFBF42',
  '#FBB123',
  '#F8A600',
  '#F39C00',
  '#EA8F00',
  '#E58500',
  '#DE7C00',
  '#D77200',
  '#CF6900',
  '#CB6200',
  '#C35900',
  '#BB5100',
  '#B54C00',
  '#B04500',
  '#A63E00',
  '#A13700',
  '#9B3200',
  '#952D00',
  '#8E2900',
  '#882300',
  '#821E00',
  '#7B1A00',
  '#771900',
  '#701400',
  '#6A0E00',
  '#660D00',
  '#5E0B00',
  '#5A0A02',
  '#600903',
  '#520907',
  '#4C0505',
  '#470606',
  '#420607',
  '#3D0708',
  '#370607',
  '#2D0607',
  '#1F0506',
];

/**
 * Get the hex color of a beer based on its SRM
 * @param   {Number} srm The SRM of a beer
 * @returns {string}     The hex color of the beer
 */
export function getBeerColorPair(srm) {
  srm = Math.min(Math.max(srm, 1), 40);
  const beerColor = srm ? beerColors[Math.round(srm)] : beerColors[0];
  const textColor = srm > 13 ? beerColors[0] : beerColors[beerColors.length - 1];
  return [textColor, beerColor];
}
