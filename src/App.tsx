import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

// {
//   name: "Abo Treika",
//   url: "",
//   age: 40,
//   note: "The best player in Egypt"
// },
// {
//   name: "Essam Elhadary",
//   url: "",
//   age: 49
// }

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
