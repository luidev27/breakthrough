import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 90%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  margin-bottom: 3%;
  border-radius: 5px;
  box-shadow: 9px 9px 57px 2px rgba(85, 85, 85, .16);
`;

export const Download = styled.a`
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #1385c2;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 8px;
`;
