import './App.css';
import {Routes, Route} from 'react-router-dom';
import Bubbles from './components/Bubbles';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Routes>
      <Route exact path="/" element={ <Main/> }/>
      <Route exact path="/bubbles" element={ <Bubbles/> }/>
      </Routes>
    </div>
  );
}

export default App;
