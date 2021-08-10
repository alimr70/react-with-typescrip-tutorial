import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
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
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Aboutrika",
      url: "https://images.daznservices.com/di/library/GOAL/13/dc/mohamed-aboutrika-al-ahly_11687tnzgg8vy134f87jrnoe7b.jpg?t=-1304026231&quality=60&w=1200&h=800",
      age: 40,
      note: "The best player in Egypt"
    }
  ]);

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
      <AddToList />
    </div>
  );
}

export default App;
