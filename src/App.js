import '.App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch, Route} from 'react-router-dom';
import Corporate from './component/Corporate';

function App() {
  return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/corporate" component={Corporate} />
      </Switch>
      
      </>
  );
}

export default App;
