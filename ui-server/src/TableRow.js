import React from 'react';
import "./Table.css";
import "./TableRow.css";

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
  const srmStyle = srmNumber !== "" ? srmToRGBLookupTable[Math.round(srmNumber)] : srmToRGBLookupTable[1]; // TODO: right way to check empty string?
  const bugu = beer.og > 1 ? (beer.ibu / ((beer.og - 1) * 1000)).toFixed(2) : "0.00"; // TODO: format to two decimal places
  const ibuHeight = beer.ibu > 100 ? 100 : beer.ibu;

  var kegImgClass = "";
  var percentRemaining = beer.remainAmount / beer.startAmount * 100;

  var calFromAlc = (1881.22 * (beer.fg * (beer.og - beer.fg))) / (1.775 - beer.og);
  var calFromCarbs = 3550.0 * beer.fg * ((0.1808 * beer.og) + (0.8192 * beer.fg) - 1.0004);

  if ((beer.og === 1) && (beer.fg === 1)) {
    calFromAlc = 0;
    calFromCarbs = 0;
  }

  const calories = (calFromAlc + calFromCarbs).toFixed();

  const abv = (beer.og - beer.fg) * 131;
  var numCups = 0;
  var remaining = abv * 20;
  var abvContent;

  do {
    var level;
    if (remaining < 100) {
      level = remaining;
    } else {
      level = 100;
    }
    abvContent = <div className="abv-indicator"><div className="abv-full" style={{height:level + "%"}}></div></div>
    remaining = remaining - level;
    numCups++;
  } while (remaining > 0 && numCups < 2);

  if (remaining > 0) {
    abvContent = <div className="abv-offthechart"></div>;
  }

  if (beer.remainAmount <= 0 ) {
    kegImgClass = "keg-empty";
    percentRemaining = 100;
  } else if (percentRemaining < 15) {
    kegImgClass = "keg-red";
  } else if (percentRemaining < 25) {
    kegImgClass = "keg-orange";
  } else if (percentRemaining < 45) {
    kegImgClass = "keg-yellow";
  } else if (percentRemaining < 100) {
    kegImgClass = "keg-green";
  } else if (percentRemaining >= 100) {
    kegImgClass = "keg-full";
  }
  const kegClass = "keg-full " + kegImgClass;

  const beerPoured = ((beer.startAmount - beer.remainAmount) * 128).toFixed();
  const beerLeft = (beer.remainAmount * 128).toFixed();

  return (
    <div className="row" key={beer.id}>
			<div className="column tap-num">
				<span className="tapcircle">{beer.tapNumber}</span>
			</div>

			<div className="column srm">
				<h3>{beer.og} OG</h3>

				<div className="srm-container">
					<div className="srm-indicator" style={{backgroundColor: srmStyle}}></div>
					<div className="srm-stroke"></div>
				</div>

				<h2>{beer.srm} SRM</h2>
			</div>

			<div className="column ibu">
				<h3>
					{bugu} BU:GU
				</h3>

				<div className="ibu-container">
					<div className="ibu-indicator"><div className="ibu-full" style={{height: ibuHeight + "%"}}></div></div>
				</div>
				<h2>{beer.ibu} IBU</h2>
			</div>

  		<div className="column name">
  			<h1>{beer.beername}</h1>
  			<h2 className="subhead">{beer.style}</h2>
  			<p>{beer.notes}</p>
  		</div>

      <div className="column abv">
        <h3>{calories} kCal</h3>
        <div className="abv-container">
          {abvContent}
        </div>
        <h2>{abv.toFixed(1)}%</h2>
      </div>

    	<div className="column keg">
    		<h3>{beerPoured} fl oz poured</h3>
    		<div className="keg-container">
    			<div className="keg-indicator"><div className={kegClass} style={{height: percentRemaining + "%"}}></div></div>
    		</div>
    		<h2>{beerLeft} fl oz left</h2>
    	</div>
  	</div>
  )
}

export default TableRow;
