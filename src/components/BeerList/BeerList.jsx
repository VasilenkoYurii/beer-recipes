import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useStore } from 'zustandStore/zustandStore';
import { BeerItem } from 'components/BeerItem/BeerItem';

import { ListBeer, ItemBeerList, ListContainer } from './BeerList.styled';

export const BeerList = () => {
  const navigate = useNavigate();
  const recipes = useStore(state => state.recipes);

  const [selectedItemIds, setSelectedItemIds] = useState(
    JSON.parse(localStorage.getItem('selectedItemIds'))
  );

  useEffect(() => {
    localStorage.setItem('selectedItemIds', JSON.stringify(selectedItemIds));
  }, [selectedItemIds]);

  const handleItemClick = (recipe, e) => {
    e.preventDefault();

    if (e.button === 2) {
      setSelectedItemIds(prevIds => {
        if (prevIds.includes(recipe.id)) {
          return prevIds.filter(id => id !== recipe.id);
        } else {
          return [...prevIds, recipe.id];
        }
      });
    } else if (e.button === 0 && e.target.localName !== 'button') {
      navigate(`/beer-card/${recipe.id}`);
    }
  };

  return (
    <ListContainer>
      {recipes === null ? (
        <div>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="80"
            visible={true}
          />
        </div>
      ) : (
        <ListBeer onContextMenu={e => e.preventDefault()}>
          {recipes.map(recipe => {
            const isSelected = selectedItemIds.includes(recipe.id);
            const liStyle = {
              borderBottom: isSelected ? '4px solid #c47676' : '4px solid #fff',
            };

            return (
              <ItemBeerList
                key={recipe.id}
                style={liStyle}
                onMouseDown={e => handleItemClick(recipe, e)}
              >
                <BeerItem recipe={recipe} isActive={isSelected} />
              </ItemBeerList>
            );
          })}
        </ListBeer>
      )}
    </ListContainer>
  );
};
