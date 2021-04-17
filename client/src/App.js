import {Route, Switch} from 'react-router-dom'
import './App.css';
import FresherJobs from './Component/FresherJobs';
import Internships from './Component/Internships';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import OnlineTrainings from './Component/OnlineTrainings';
import Register from './Component/Register';
import Search from './Component/Search'

function App() {
  return (
   <>
   <Navbar/>
    <Switch>
    <Route exact  path = "/" component ={Internships}/>
    <Route exact path="/Online Trainings" component ={OnlineTrainings} />
    <Route exact path="/Fresher Jobs" component ={FresherJobs} />
    <Route exact path = "/Login" component={Login} />
    <Route exact path="/Register" component ={Register} />
    

    </Switch>
    
  
   </>
  );
}

export default App;
