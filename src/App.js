import { useState } from 'react';
import RaamatuDetail from './RaamatuDetail';
import RaamatudList from './RaamatudList';

import './App.css';

function App() {
  const [valitudRaamat, setValitudRaamat] = useState();

  const valiRaamat = (raamat) => {
    console.log('valiti raamat:', raamat);
    setValitudRaamat(raamat)
  }

  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <RaamatudList setValitudRaamat={valiRaamat} />
        {valitudRaamat && <RaamatuDetail raamat={valitudRaamat} />}
      </header>
    </div>
  );
}

export default App;
