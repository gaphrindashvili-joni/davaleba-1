import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/portfolioSlice';

const AddPortfolioItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newItem = {
      id: Date.now(), // Simple ID generation for example purposes
      title,
      description,
    };
    dispatch(addItem(newItem));
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Portfolio Item</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddPortfolioItem;
