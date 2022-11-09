import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import PeopleDisplay from './views/PeopleDisplay';
import PlanetsDisplay from './views/PlanetsDisplay';

function App() {
  return (
    <fieldset>
      <legend>APP.JSX</legend>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='/people/:people_id' 
        element={<PeopleDisplay />} />
        <Route path='/planets/:planets_id' 
        element={<PlanetsDisplay/>}/>

      </Routes>
    </fieldset>





  );
}

export default App;
