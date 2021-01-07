import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import PropTypes from 'prop-types';
import { ParagraphText } from '../../_shared/Text';
import * as Style from './style';

const FontItem = ({ fontFamily, title }) => (
  <Style.Container>
    <GoogleFontLoader fonts={[{ font: fontFamily, weights: [200, 400, 700] }]} />
    <ParagraphText height="1.5" color="#555" margin="0 0 0.625rem" transform="uppercase">
      <strong>{title}</strong>
    </ParagraphText>
    <Style.FontPanel>
      <ParagraphText family={fontFamily} width="36px" height="1.4" spacing="0.01rem" color="#333" align="center" margin="0 0 0.625rem">
        Aa
      </ParagraphText>
      <ParagraphText family={fontFamily} width="14pt" height="1.4" weight="200" spacing="0.01rem" color="#333" align="center">
        {`${fontFamily} Light - 200`}
      </ParagraphText>
      <ParagraphText family={fontFamily} width="14pt" height="1.4" weight="700" spacing="0.01rem" color="#333" align="center">
        {`${fontFamily} Bold - 700`}
      </ParagraphText>
    </Style.FontPanel>
    <Style.Download
      href={`https://fonts.google.com/specimen/${fontFamily.replace(' ', '+')}`}
      target="_blank"
      rel="noreferrer"
    >
      Download
    </Style.Download>
  </Style.Container>
);

FontItem.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FontItem;
