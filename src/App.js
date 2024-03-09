// App.js
import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // Adjust the path based on your project structure
import ItemDisplay from './ItemDisplay';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My DynamoDB Items</h1>
        <ItemDisplay />
      </header>
    </div>
  );
}

export default App;
