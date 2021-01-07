import styled from 'styled-components';

export const ParagraphText = styled.p`
  font-family: ${(props) => props.family || 'Roboto'};
  font-size: ${(props) => props.width || '14px'};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => props.height || 1};
  letter-spacing: ${(props) => props.spacing || 'normal'};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  color: ${(props) => props.color || '#fff'};
  text-transform: ${(props) => props.transform || 'none'};
  text-align: ${(props) => props.align || 'left'};
`;

export const InlineText = styled.span`
  font-family: ${(props) => props.family || 'Roboto'};
  font-size: ${(props) => props.width || '14px'};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => props.height || 1};
  letter-spacing: ${(props) => props.spacing || 'normal'};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  color: ${(props) => props.color || '#fff'};
  text-transform: ${(props) => props.transform || 'none'};
  text-align: ${(props) => props.align || 'left'};
`;
