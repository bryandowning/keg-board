import React from 'react';
import './App.css';
import Header from './Header'
import TableRow from './TableRow'

function App() {
  const beers = [
    { id: 1, beername: "Cherrywood Smoked Lager", style: "Rauchbier", notes: "Smokey, amber German style of lager", og: 1.050, fg: 1.017, srm: 14, ibu: 22, startAmount: 5, amountPoured: 0.2, remainAmount: 4.8, tapNumber: 1},
    { id: 2, beername: "EMPTY", style: "N/A", notes: "", og: 1.0, fg: 1.0, srm: 0, ibu: 0, startAmount: 0, amountPoured: 0, remainAmount: 0, tapNumber: 2},
    { id: 3, beername: "Modified Janet's Brown", style: "American Brown Ale", notes: "Slightly modified Janet's Brown recipe, adapted for liquid malt extract and a less agressive hop schedule", og: 1.062, fg: 1.012, srm: 19, ibu: 31, startAmount: 5, amountPoured: 1, remainAmount: 4, tapNumber: 3},
    { id: 4, beername: "Old Rasputin Clone", style: "Imperial Stout", notes: "Inspired by the Old Rasputin recipe, with slightly modified grain bill", og: 1.096, fg: 1.028, srm: 31, ibu: 29, startAmount: 5, amountPoured: 0.1, remainAmount: 4.9, tapNumber: 4},
    { id: 5, beername: "EMPTY", style: "N/A", notes: "", og: 1.0, fg: 1.0, srm: 0, ibu: 0, startAmount: 0, amountPoured: 0, remainAmount: 0, tapNumber: 5}
  ]

  const rows = beers.map((beer) => <TableRow key={beer.id} beer={beer} />)

  return (
    <div>
      <Header />

      <table>
        <thead>
          <tr>
            <th>Tap #</th>
            <th>Gravity</th>
            <th>Color</th>
            <th>Balance</th>
            <th>Bitterness</th>
            <th>Beer name</th>
            <th>Style</th>
            <th>Tasting notes</th>
            <th>Calories</th>
            <th>Alcohol</th>
            <th>Poured</th>
            <th>Remaining</th>
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
