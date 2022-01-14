
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Todo from '../Pages/Todo';
import ProtectedRoute from './ProtectedRoute';
import Login from '../Pages/Login';
import { useState } from 'react';
import Profile from '../Pages/Profile';


function Routes () 
{

    const [isAuth, setIsAuth] = useState(false);
    return (

    <Router>
    <div>
    
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/todo">Todo</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/todo">
                <Todo />
            </Route> 
            <Route path="/login" component={() => <Login setIsAuth = {setIsAuth}/>}/>
           <ProtectedRoute isAuth={isAuth} path="/profile" component={Profile} />
        </Switch>
    </div>
</Router>
);
}

export default Routes;