import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

const items = [
  { title: 'Item 1', content: 'Content for item 1' },
  { title: 'Item 2', content: 'Content for item 2' },
  { title: 'Item 3', content: 'Content for item 3' },
];

const App = () => {
  return (
    <div >
      <h1>Accordion Example</h1>
      <div className='accord-container'>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default App;
