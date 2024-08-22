import React from 'react';
import AddPortfolioItem from './components/AddPortfolioItem';
import PortfolioList from './components/PortfolioList';

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <AddPortfolioItem />
      <PortfolioList />
    </div>
  );
};

export default App;
