import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { BeerCard } from './BeerCard/BeerCard';
import { BeerList } from './BeerList/BeerList';
import { useStore } from 'zustandStore/zustandStore';

export const App = () => {
  const addInitialRecipes = useStore(state => state.addInitialRecipes);

  useEffect(() => {
    addInitialRecipes();
  }, [addInitialRecipes]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BeerList />} />
        <Route path="/beer-card/:recipeId" element={<BeerCard />} />
        <Route path="*" element={<BeerList />} />
      </Route>
    </Routes>
  );
};
