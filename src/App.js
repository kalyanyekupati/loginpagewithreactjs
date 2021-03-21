import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser={
    email: "admin@kalyan.com",
    password: "kalyan"
  }
  const [user, setUser]= useState({name:"", email:""});
  const [error, setError]= useState('');

  const login=details=>{
    console.log(details);

    if (details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      console.log("Details do not match");
      setError("Details do not match!")
    }


  }

  const logout=()=>{
    setUser({name:"", email:""});

  }
  


  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome To Home <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
          </div>
      ) : (
        <LoginForm login={login} error={error}/>
      )}
    </div>
  );
}

export default App;
