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
