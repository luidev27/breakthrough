/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DrawerContainer = styled.div`
  .panel-content {
    background-color: white;
    position: relative;
    .close-btn {
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 20px;
      line-height: 56px;
      color: white;
      cursor: pointer;
    }
  }
  .panel-container-right-enter-done {
  ${(props) => {
    const {
      xl, lg, md, sm, xs,
    } = props.size;
    let content = '';

    if (xl) {
      content += `
        @media (min-width: 1200px) {
          .glass {
            width: ${100 - xl}vw !important;
          }
          .panel {
            width: ${xl}vw !important;
          }
        }
      `;
    }
    if (lg) {
      content += `
        @media (max-width: 1199.98px) {
          .glass {
            width: ${100 - lg}vw !important;
          }
          .panel {
            width: ${lg}vw !important;
          }
        }
      `;
    }
    if (md) {
      content += `
        @media (max-width: 991.98px) {
          .glass {
            width: ${100 - md}vw !important;
          }
          .panel {
            width: ${md}vw !important;
          }
        }
      `;
    }
    if (sm) {
      content += `
        @media (max-width: 767.98px) {
          .glass {
            width: ${100 - sm}vw !important;
          }
          .panel {
            width: ${sm}vw !important;
          }
        }
      `;
    }
    if (xs) {
      content += `
        @media (max-width: 575.98px) {
          .glass {
            width: ${100 - xs}vw !important;
          }
          .panel {
            width: ${xs}vw !important;
          }
        }
      `;
    }
    return content;
  }}
  }
`;
