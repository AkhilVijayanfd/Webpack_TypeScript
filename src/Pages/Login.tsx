import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// import { styles } from  '../styles.css';


interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
 const Value = [{username:"akhil", password:"akhil@123"}]

const Login: React.FC<Props> = ({ setIsAuth }) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (username: string, password: string) => {


      for (let i =0; i < Value.length; i++){
        if  (username === Value[i].username && password === Value[i].password)
        {
          setIsAuth(true);
          history.push("/profile");
        }
        else 
        {
          setIsAuth(false);
        }
      }
      
  };

    return( 
    

  
   
    <div className="form">
    <h1>Login Form</h1>
    <label>username :</label>
    <input 
    type="text"
    name="username"
    placeholder="Username"
    onChange={(e) => setUsername(e.target.value)}
    />
    <br></br>
    <label>password :</label>
    <input
    type="password"
    name="password"
    placeholder="password"
    onChange={ (e) => setPassword(e.target.value)}
    />
    <br></br>
    <button onClick={() => handleLogin(username, password)}>Submit</button>
    </div>

    );
};

export default Login;