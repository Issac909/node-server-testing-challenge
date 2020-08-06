import React, {useState} from "react";

const Register = () => {
  const [user, setUser] = useState({username:'', password: ''});

  const handleChanges = e => {
      const { name, value } = e.target
      
      setUser({...user, [name]: value})
  }

  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <div>
            <input name="username" type="text" value = {user.username}/>
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input name="password" type="password" value = {user.password} onChange = {handleChanges}/>
          </div>
        </div>
        <button type = 'submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
