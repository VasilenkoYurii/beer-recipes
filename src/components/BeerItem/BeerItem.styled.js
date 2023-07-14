import styled from '@emotion/styled';

export const ImageBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 200px;
  border-radius: 8px;
  display: block;
`;

export const BeerTitle = styled.h2`
  margin-top: 15px;
  font-size: 24px;
`;

export const TagPrg = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: #888;
`;

export const DescriptionPrg = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 22px;
  width: 750px;
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const DetailsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 20px;
`;

export const ButtonBox = styled.div`
  margin-left: auto;
`;

export const Button = styled.button`
  height: 100%;
  padding: 2px;
  border: 1px solid #b4b4b4;
  border-radius: 3px;
  background-color: rgb(196, 118, 118);
  cursor: pointer;

  transition: all 500ms;

  &:hover {
    background-color: rgb(255 77 77);
  }
`;
