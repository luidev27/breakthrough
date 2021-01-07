import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const LogoViewer = ({ img, links }) => {
  const imgTypes = ['eps', 'png', 'jpeg', 'svg'];
  return (
    <Style.Container>
      <Style.ImageContainer img={img} />
      <div className="d-flex">
        {
          imgTypes.map((imgType) => (
            <Style.Download
              key={imgType}
              href={links[imgType] ? links[imgType] : null}
              target="_blank"
            >
              {imgType}
            </Style.Download>
          ))
        }
      </div>
    </Style.Container>
  );
};

LogoViewer.propTypes = {
  img: PropTypes.string,
  links: PropTypes.object,
};

export default LogoViewer;
