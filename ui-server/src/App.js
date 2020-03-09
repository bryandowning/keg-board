import React from 'react';
import './App.css';
import "./Table.css";
import Header from './Header'
import TableRow from './TableRow'

function App() {
  const beers = [
    { id: 1, beername: "BK Pils", style: "Pilsner", notes: "", og: 1.046, fg: 1.011, srm: 4, ibu: 33, startAmount: 5, amountPoured: 1.3, remainAmount: 3.7, tapNumber: 1 },
    { id: 2, beername: "Three Blind Mice Pale Ale", style: "Pale Ale", notes: "Dry hopped for four weeks", og: 1.049, fg: 1.010, srm: 4.5, ibu: 37, startAmount: 5, amountPoured: 0.5, remainAmount: 4.5, tapNumber: 2 },
    { id: 3, beername: "Traditional Bock", style: "Bock", notes: "", og: 1.090, fg: 1.030, srm: 17, ibu: 24, startAmount: 5, amountPoured: 3.2, remainAmount: 2.8, tapNumber: 3 },
    { id: 4, beername: "Hop Crisis Mild", style: "British Ale", notes: "", og: 1.038, fg: 1.012, srm: 18, ibu: 14, startAmount: 5, amountPoured: 4.6, remainAmount: 0.4, tapNumber: 4 },
    { id: 5, beername: "TexanBrew Flanders", style: "Flanders Ale", notes: "The beer is aged in the barrel for at least one year", og: 1.052, fg: 1.013, srm: 16, ibu: 0, startAmount: 5, amountPoured: 3.9, remainAmount: 1.1, tapNumber: 5 }
  ]

  const rows = beers.map((beer) => <TableRow key={beer.id} beer={beer} />)

  return (
    <div>
      <Header />
      <table>
  			<thead>
  				<tr>
  					<th className="tap-num">
  						TAP<br />#
  					</th>

  					<th className="srm">
  						GRAVITY<hr />COLOR
  					</th>

  					<th className="ibu">
  						BALANCE<hr />BITTERNESS
  					</th>

  					<th className="name">
  						BEER NAME &nbsp; &amp; &nbsp; STYLE<hr />TASTING NOTES
  					</th>

  					<th className="abv">
  						CALORIES<hr />ALCOHOL
  					</th>

  					<th className="keg">
  						POURED<hr />REMAINING
  					</th>
  				</tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default App;
