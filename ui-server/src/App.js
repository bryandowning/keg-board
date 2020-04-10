import React from 'react';
import './App.css';
import "./Table.css";
import Header from './Header'
import TableRow from './TableRow'

function App() {
  // const beers = [
  //   { id: 1, beername: "BK Pils", style: "Pilsner", notes: "", og: 1.046, fg: 1.011, srm: 4, ibu: 33, startAmount: 5, amountPoured: 1.3, remainAmount: 3.7, tapNumber: 1 },
  //   { id: 2, beername: "Three Blind Mice Pale Ale", style: "Pale Ale", notes: "Dry hopped for four weeks", og: 1.049, fg: 1.010, srm: 4.5, ibu: 37, startAmount: 5, amountPoured: 0.5, remainAmount: 4.5, tapNumber: 2 },
  //   { id: 3, beername: "Traditional Bock", style: "Bock", notes: "", og: 1.090, fg: 1.030, srm: 17, ibu: 24, startAmount: 5, amountPoured: 3.2, remainAmount: 2.8, tapNumber: 3 },
  //   { id: 4, beername: "Hop Crisis Mild", style: "British Ale", notes: "", og: 1.038, fg: 1.012, srm: 18, ibu: 14, startAmount: 5, amountPoured: 4.6, remainAmount: 0.4, tapNumber: 4 },
  //   { id: 5, beername: "TexanBrew Flanders", style: "Flanders Ale", notes: "The beer is aged in the barrel for at least one year", og: 1.052, fg: 1.013, srm: 16, ibu: 0, startAmount: 5, amountPoured: 3.9, remainAmount: 1.1, tapNumber: 5 }
  // ]
  const beers = [
    { id: 1, beername: "Rauchbier", style: "Rauchbier", notes: "Smokey, amber German style of lager", og: 1.050, fg: 1.017, srm: 14, ibu: 22, startAmount: 5, amountPoured: 0.2, remainAmount: 4.8, tapNumber: 1},
    { id: 2, beername: "EMPTY", style: "N/A", notes: "", og: 1.0, fg: 1.0, srm: 0, ibu: 0, startAmount: 0, amountPoured: 0, remainAmount: 0, tapNumber: 2},
    { id: 3, beername: "HQ Big Barrel Brown Ale", style: "American Brown Ale", notes: "American brown ale, originally meant to be aged in an oak barrel", og: 1.062, fg: 1.012, srm: 19, ibu: 31, startAmount: 5, amountPoured: 1, remainAmount: 4, tapNumber: 3},
    { id: 4, beername: "Old Rasputin Clone", style: "Imperial Stout", notes: "Inspired by the Old Rasputin recipe, with slightly modified grain bill", og: 1.096, fg: 1.028, srm: 31, ibu: 29, startAmount: 5, amountPoured: 0.1, remainAmount: 4.9, tapNumber: 4},
    { id: 5, beername: "EMPTY", style: "N/A", notes: "", og: 1.0, fg: 1.0, srm: 0, ibu: 0, startAmount: 0, amountPoured: 0, remainAmount: 0, tapNumber: 5}
  ]

  const rows = beers.map((beer) => <TableRow key={beer.id} beer={beer} />)

  return (
    <div>
      <Header />

      <div className="container-fluid" style={{width: "100%"}}>
  			<div className="table-row header">
  				<div className="wrapper text">TAP #</div>
					<div className="wrapper text-2">
            <div className="wrapper text">GRAVITY</div>
            <div className="wrapper text">COLOR</div>
          </div>
					<div className="wrapper text-2">
            <div className="wrapper text">BALANCE</div>
            <div className="wrapper text">BITTERNESS</div>
          </div>
					<div className="wrapper text-2">
            <div className="wrapper text">BEER NAME</div>
            <div className="wrapper text">STYLE</div>
          </div>
  				<div className="wrapper text">TASTING NOTES</div>
					<div className="wrapper text-2">
            <div className="wrapper text">CALORIES</div>
            <div className="wrapper text">ALCOHOL</div>
          </div>
					<div className="wrapper text-2">
            <div className="wrapper text">POURED</div>
            <div className="wrapper text">REMAINING</div>
          </div>
        </div>

        {rows}
      </div>
    </div>
  );
}

export default App;
