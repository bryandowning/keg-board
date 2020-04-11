import React from 'react';

const srmToRGBLookupTable = [
  "#FFE699", "#FFE699",
  "#FFD878",
  "#FFCA5A",
  "#FFBF42",
  "#FBB123",
  "#F8A600",
  "#F39C00",
  "#EA8F00",
  "#E58500",
  "#DE7C00",
  "#D77200",
  "#CF6900",
  "#CB6200",
  "#C35900",
  "#BB5100",
  "#B54C00",
  "#B04500",
  "#A63E00",
  "#A13700",
  "#9B3200",
  "#952D00",
  "#8E2900",
  "#882300",
  "#821E00",
  "#7B1A00",
  "#771900",
  "#701400",
  "#6A0E00",
  "#660D00",
  "#5E0B00",
  "#5A0A02",
  "#600903",
  "#520907",
  "#4C0505",
  "#470606",
  "#420607",
  "#3D0708",
  "#370607",
  "#2D0607",
  "#1F0506"
];

const TableRow = (props) => {
  const beer = props.beer;
  var srmNumber = beer.srm;
  if (beer.srm < 1) {
    srmNumber = 1;
  } else if (beer.srm > 40) {
    srmNumber = 40;
  }
  const srmBackgroundColor = srmNumber !== "" ? srmToRGBLookupTable[Math.round(srmNumber)] : srmToRGBLookupTable[1]; // TODO: right way to check empty string?
  const srmTextColor = srmNumber > 13 ? "white" : "default";
  const bugu = beer.og > 1 ? (beer.ibu / ((beer.og - 1) * 1000)).toFixed(2) : "0.00"; // TODO: format to two decimal places

  var calFromAlc = (1881.22 * (beer.fg * (beer.og - beer.fg))) / (1.775 - beer.og);
  var calFromCarbs = 3550.0 * beer.fg * ((0.1808 * beer.og) + (0.8192 * beer.fg) - 1.0004);

  if ((beer.og === 1) && (beer.fg === 1)) {
    calFromAlc = 0;
    calFromCarbs = 0;
  }

  const calories = (calFromAlc + calFromCarbs).toFixed();
  const abv = (beer.og - beer.fg) * 131;
  const beerPoured = ((beer.startAmount - beer.remainAmount) * 128).toFixed();
  const beerLeft = (beer.remainAmount * 128).toFixed();

  return (
    <tr style={{backgroundColor: srmBackgroundColor, color: srmTextColor}}>
      <td>{beer.tapNumber}</td>
      <td>{beer.og} OG</td>
      <td>{beer.srm} SRM</td>
      <td>{bugu} BU:GU</td>
      <td>{beer.ibu} IBU</td>
      <td>{beer.beername}</td>
      <td>{beer.style}</td>
      <td>{beer.notes}</td>
      <td>{calories} kCal</td>
      <td>{abv.toFixed(1)}% ABV</td>
      <td>{beerPoured} oz</td>
      <td>{beerLeft} oz</td>
    </tr>
  )
}

export default TableRow;
