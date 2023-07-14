import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  gap: 20px;

  margin-bottom: 50px;

  position: relative;
`;

export const ImageBox = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-right: 30px;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 8px;
`;

export const BeerTitle = styled.h2`
  margin-top: 20px;
  font-size: 24px;
`;

export const TaglinePrg = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: #888;
`;

export const DescriptionPrg = styled.p`
  margin-top: 16px;
  font-size: 14px;
`;

export const DetailsContainer = styled.ul`
  margin-top: 16px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px 20px;

  list-style: none;
`;

export const DetailsItem = styled.p`
  margin-top: 16px;
`;

export const IngrContainer = styled.div`
  margin-top: 16px;
`;

export const IngrList = styled.ul`
  gap: 3px;

  list-style: inside;
  margin-left: 10px;
`;

export const IngrItem = styled.li`
  width: 400px;
  padding: 3px;
`;

export const SecondaryContainer = styled.div`
  margin-top: 16px;
`;

export const BrewersPrg = styled.p`
  margin-top: 16px;
  font-size: 14px;
`;

export const ContributedPrg = styled.p`
  margin-top: 16px;
  font-size: 12px;
  color: #888;
`;

export const GoBackContainer = styled.div`
  position: absolute;

  top: 20px;
  right: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  color: #414141;

  transition: all 500ms;

  &:hover {
    color: #7b7b7b;
  }
`;
