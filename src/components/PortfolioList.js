import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../features/portfolioSlice';

const PortfolioList = () => {
  const items = useSelector((state) => state.portfolio.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h2>Portfolio Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
