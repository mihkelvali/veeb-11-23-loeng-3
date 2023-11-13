import { useState } from 'react';

import './App.css';

const RAAMATUD = [
  {
    id: 0,
    pealkiri: 'Raamat 1',
    autor: 'Keegi Paul',
    aasta: '10',
    kirjeldus: 'asdf',
    // pilt
  },
  {
    id: 1,
    pealkiri: 'Raamat 2',
    autor: 'Keegi Paul',
    aasta: '10',
    kirjeldus: 'asdf',
    // pilt
  },
  {
    id: 2,
    pealkiri: 'Raamat 3',
    autor: 'Keegi Paul',
    aasta: '10',
    kirjeldus: 'asdf',
    // pilt
  },
]

function App() {
  const [valitudRaamatuId, setValitudRaamatuId] = useState(0);

  const muudaValitudRaamatuId = () => {
    return;
  }

  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>{
          RAAMATUD.map((raamat) => (
            <a key={raamat.pealkiri} onClick={muudaValitudRaamatuId(raamat.id)} >{raamat.pealkiri}</a>
          ))
        }</div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Pealkiri: { RAAMATUD[valitudRaamatuId].pealkiri }</span>
          <span>Autor: { RAAMATUD[valitudRaamatuId].autor }</span>
        </div>
        {/* <RaamatuDetail /> */}
      </header>
    </div>
  );
}

export default App;
