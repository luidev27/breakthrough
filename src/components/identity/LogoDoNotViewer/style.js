import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  margin-bottom: 3%;
  border-radius: 5px;
  box-shadow: 9px 9px 57px 2px rgba(85, 85, 85, .16);
`;
