import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect, useState } from 'react';

import {
  CardWrapper,
  ImageBox,
  Img,
  BeerTitle,
  TaglinePrg,
  DescriptionPrg,
  DetailsContainer,
  IngrContainer,
  IngrList,
  IngrItem,
  SecondaryContainer,
  BrewersPrg,
  ContributedPrg,
  GoBackContainer,
  StyledLink,
} from './BeerCard.styled';

export const BeerCard = () => {
  const { recipeId } = useParams();
  const [recipeForCard, setRecipeForCard] = useState(null);

  useEffect(() => {
    const addRecipeForCard = async () => {
      const recipe = await axios.get(
        `https://api.punkapi.com/v2/beers?ids=${recipeId}`
      );
      setRecipeForCard(...recipe.data);
    };

    addRecipeForCard();
  }, [recipeId]);

  return (
    <CardWrapper>
      {recipeForCard ? (
        <>
          <GoBackContainer>
            <StyledLink to="/">Go back</StyledLink>
          </GoBackContainer>

          <ImageBox>
            <Img src={recipeForCard.image_url} alt={recipeForCard.name} />
          </ImageBox>
          <div>
            <BeerTitle>{recipeForCard.name}</BeerTitle>
            <TaglinePrg>{recipeForCard.tagline}</TaglinePrg>
            <DescriptionPrg>{recipeForCard.description}</DescriptionPrg>
            <DetailsContainer>
              <li>ABV: {recipeForCard.abv}%</li>
              <li>IBU: {recipeForCard.ibu}</li>
              <li>
                Volume: {recipeForCard.volume.value} {recipeForCard.volume.unit}
              </li>
              <li>First Brewed: {recipeForCard.first_brewed}</li>
              <li>Attenuation Level: {recipeForCard.attenuation_level}%</li>
              <li>pH: {recipeForCard.ph}</li>
              <li>Target FG: {recipeForCard.target_fg}</li>
              <li>Target OG: {recipeForCard.target_og}</li>
              <li>EBC: {recipeForCard.ebc}</li>
              <li>SRM: {recipeForCard.srm}</li>
            </DetailsContainer>

            <IngrContainer>
              <h3>Ingredients:</h3>
              <IngrList>
                {recipeForCard.ingredients.malt.map((malt, index) => (
                  <IngrItem key={index}>
                    {malt.name}: {malt.amount.value} {malt.amount.unit}
                  </IngrItem>
                ))}
                {recipeForCard.ingredients.hops.map((hop, index) => (
                  <IngrItem key={index}>
                    {hop.name} ({hop.add}): {hop.amount.value} {hop.amount.unit}
                  </IngrItem>
                ))}
                <IngrItem>Yeast: {recipeForCard.ingredients.yeast}</IngrItem>
              </IngrList>
            </IngrContainer>
            <SecondaryContainer>
              <h3>Method:</h3>
              <IngrList>
                {recipeForCard.method.mash_temp.map((temp, index) => (
                  <li key={index}>
                    Mash Temp: {temp.temp.value} {temp.temp.unit} (Duration:{' '}
                    {temp.duration} minutes)
                  </li>
                ))}
              </IngrList>
              <p>
                Fermentation Temp:{' '}
                {recipeForCard.method.fermentation.temp.value}{' '}
                {recipeForCard.method.fermentation.temp.unit}
              </p>
            </SecondaryContainer>
            <SecondaryContainer>
              <h3>Food Pairing:</h3>
              <IngrList>
                {recipeForCard.food_pairing.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </IngrList>
            </SecondaryContainer>
            <BrewersPrg>{recipeForCard.brewers_tips}</BrewersPrg>
            <ContributedPrg>
              Contributed By: {recipeForCard.contributed_by}
            </ContributedPrg>
          </div>
        </>
      ) : (
        <div>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="80"
            visible={true}
          />
        </div>
      )}
    </CardWrapper>
  );
};
