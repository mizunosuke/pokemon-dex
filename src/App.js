import { Topbar } from './components/Topbar';
import './App.css';
import { PokeList } from "./components/PokeList";
import { Bottombar } from './components/Bottombar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <PokeList/>
      <Bottombar/>
    </div>
  );
}

export default App;
