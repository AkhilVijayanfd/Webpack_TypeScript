import React from "react";
import { useHistory } from "react-router-dom";
import '../styles.css';

interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ setIsAuth }) => {
    const history = useHistory();
    const handleLogin = () => {
        setIsAuth(true);
        history.push("/profile");
    };
    return( 
    <div className="login">
    <input 
    name="name"
    placeholder="name"
    />
    <br></br>
    <input
    name="password"
    placeholder="password"
    />
    <br></br>
    <button onClick={() => handleLogin()}>Login</button>
    </div>
    );
};

export default Login;