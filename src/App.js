import React from 'react';
import './App.css';
import Tree, { Person } from './components/Tree';

function App() {
  const mother = new Person("Inconnue", "Danze"),
    father = new Person("Darija", "Danze", mother);

  return (
    <div className="App">
      <Tree tree={[{ father, children: [new Person("Ridjvan", "Danze")] }]} />
    </div>
  );
}

export default App;
