import React from "react";

export function validate(input){
  
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required'
  }else if(!/\S+@\S+\.\S+/.test(input.username)){
    errors.username = 'Username is invalid. It must be a valid email!';
  }
  if (!input.password) {
    errors.password = 'Password is required'
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';
  }
  return errors;
}

export default function Form() {

  //No escalable
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  //Escalable

  const [input, setInput] = React.useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  
  const handleInputOnBlur = function(e) {
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
}

  return (
    <>
    <h1 style={{margin: "2rem"}}>Login:</h1>
    <form style={{margin: "2rem"}}>
      <div>
        <label>Username:</label>
        <input 
          className={`${errors.username ? 'danger' : 'success'}`} 
          type="email" name="username" 
          value={input.username} 
          onChange={handleInputChange}
          onBlur={handleInputOnBlur} 
        />
        {
          errors.username ? <p className="danger">{errors.username}</p> : <p className="success">Good, The force is stronger in you!</p>
        }
      </div>
      <div>
        <label>Password:</label>
        <input 
          className={`${errors.password ? 'danger' : 'success'}`} 
          type="password" name="password" 
          value={input.password} 
          onChange={handleInputChange}
          onBlur={handleInputOnBlur}
        />
        {
          errors.password ? <p className="danger">{errors.password}</p> : <p className="success">Good, good, a powerfull Jedi you will become!</p>
        }
      </div>
      <br />
      <input type="submit" />
    </form>
    </>
  );
}
