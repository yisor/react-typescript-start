import React from 'react';
import './Home.css';
import Button from 'components/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <form>
          <input defaultValue={process.env.REACT_APP_CODE} />
        </form>
      </header>
    </div>
  );
}

export default App;
