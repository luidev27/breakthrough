import styled from 'styled-components';

export const AnimationButton = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  &:hover {
    > span {
      max-width: 500px;
      padding-left: 10px;
      color: ${(props) => props.color};
    }
  }
  &:focus {
    outline: none;
  }
`;

export const Text = styled.span`
  display: inline-block;
  z-index: 997;
  left: auto;
  right: 0;
  max-width: 0;
  overflow: hidden;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
  color: transparent;
  transition: all 300ms ease;
  transition-delay: 300ms;
  white-space: nowrap;
`;
