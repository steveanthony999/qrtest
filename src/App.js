import { useState } from 'react';
import QrReader from 'react-qr-reader';
import './App.css';

function App() {
  const [result, setResult] = useState();

  const handleError = (err) => {
    console.log(err);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  return (
    <div className='App'>
      <h1>Hello QR World</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </div>
  );
}

export default App;
