
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';


function Routes () 
{
    return (

    <Router>
    <div>
    <h1>React TypeScript Webpack Start</h1>
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/about">About (Protected)</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <ProtectedRoute path="/about" component={About} auth={false}/>
        </Switch>
    </div>
</Router>
);
}

export default Routes;