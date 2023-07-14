import { BsTrash3 } from 'react-icons/bs';
import { useStore } from 'zustandStore/zustandStore';

import {
  ImageBox,
  Img,
  BeerTitle,
  TagPrg,
  DescriptionPrg,
  DetailsContainer,
  Button,
  ButtonBox,
} from './BeerItem.styled';

export const BeerItem = ({ recipe, isActive }) => {
  const deleteItem = useStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteItem(recipe.id);
  };

  return (
    <>
      <div>
        <ImageBox>
          <Img src={recipe.image_url} alt="Skull Candy" />
        </ImageBox>
      </div>
      <div>
        <BeerTitle>{recipe.name}</BeerTitle>
        <TagPrg>{recipe.tagline}</TagPrg>
        <DescriptionPrg>{recipe.description}</DescriptionPrg>
        <DetailsContainer>
          <p>ABV: {recipe.abv}%</p>
          <p>IBU: {recipe.abv}</p>
          <p className="brewed">First Brewed: {recipe.first_brewed}</p>
          <p className="ph">pH: {recipe.ph}</p>
          <p className="ebc">EBC: {recipe.ebc}</p>
          <p className="srm">SRM: {recipe.srm}</p>
        </DetailsContainer>
      </div>
      <ButtonBox>
        {isActive && (
          <Button onClick={handleDelete}>
            <BsTrash3 size={18} />
          </Button>
        )}
      </ButtonBox>
    </>
  );
};
