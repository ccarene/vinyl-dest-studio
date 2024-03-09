// ItemDisplay.js
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listItems } from './graphql/queries'; // Adjust the path based on your project structure

const ItemDisplay = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listItems));
        setItems(result.data.listItems.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDisplay;
