import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import FormDisplay from './components/FormDisplay';
import SettingForm from './components/SettingForm';
function App() {
  const [user, setUser] = useState([]);
  const addToTeam = userNew => {
    setUser([...user, userNew]);
  }
  return (
    <div className="App">
      <Form setter={addToTeam} user={user}></Form>
      <FormDisplay user={user} />

    </div>
  );
}

export default App;
