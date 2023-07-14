import styled from '@emotion/styled';

export const ListContainer = styled.div`
  width: 1200px;

  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export const ListBeer = styled.ul`
  list-style: none;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemBeerList = styled.li`
  display: flex;
  gap: 30px;
  padding: 20px;
  cursor: pointer;

  width: 100%;

  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
