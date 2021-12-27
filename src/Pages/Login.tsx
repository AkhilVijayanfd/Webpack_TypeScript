import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
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
    const initialValues = { name: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Username is required!";
        }

        if (!values.password) {
          errors.password = "Password is required";
        }
        return errors;
      };
    return( 

    <form onSubmit={handleSubmit}>
    <h1>Login Form</h1>
    <div className="login">
    <label>Username :</label>
    <input 
    type="text"
    name="username"
    placeholder="Username"
    value={formValues.name}
    onChange={handleChange}
    />
    <p>{formErrors.username}</p>
    <br></br>
    <label>password :</label>
    <input
    type="password"
    name="password"
    placeholder="password"
    value={formValues.password}
    onChange={handleChange}
    />
    <p>{formErrors.password}</p>
    <br></br>
    <button onClick={() => handleLogin()}>Submit</button>
    </div>
    </form>
    );
};

export default Login;