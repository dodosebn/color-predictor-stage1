import { useEffect, useState } from 'react';
import './App.css';
import { Header, MainPlace } from './components';

function App() {
  const [whenLoading, setWhenLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWhenLoading(false);
    }, 1500);

    return () => {clearTimeout(timer); }
  }, []);

  return (
    <div className="App">
      {whenLoading && (
        <aside className="loading-dey">
          {/* Loading... */}
        </aside>
      )}
      <div className={`${whenLoading ? 'loading-none' : 'loading-dey'} gameCarrier`}>
        <Header />
        <MainPlace />
      </div>
    </div>
  );
}

export default App;
