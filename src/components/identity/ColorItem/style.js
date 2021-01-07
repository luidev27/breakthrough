import styled from 'styled-components';

export const ColorPanel = styled.div`
  height: 110px;
  background-color: ${(props) => props.hex};
  border-radius: 5px;
  box-shadow: 9px 9px 57px 2px rgba(85, 85, 85, .16);
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
