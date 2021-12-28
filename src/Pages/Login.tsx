import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import '../styles.css';

interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Value = [
  {username: "akhil", password:"akhil@123"},
  {username: "akhilvijayan", password:"akhil@111"}
]


const Login: React.FC<Props> = ({ setIsAuth }) => {
    
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();
    const handleLogin = (username: string, password: string) => {

      
      for(let i =0; i < Value.length; i++)
      {
        if (username == Value[i].username && password == Value[i].password)
        {
        setIsAuth(true);
        history.push("/profile");
        }
      }
    };

    return( 

    <form>
    <h1>Login Form</h1>
    <div className="login">
    <label>username :</label>
    <input 
    type="text"
    name="username"
    placeholder="Username"
    />
    <br></br>
    <label>password :</label>
    <input
    type="password"
    name="password"
    placeholder="password"

    />
    <br></br>
    <button onSubmit={() => handleLogin() }>Submit</button>
    </div>
    </form>
    );
};

export default Login;