import React from 'react';
import { string, element, oneOfType } from 'prop-types';
import Player from 'react-player';
import moment, { duration } from 'moment';
import './style.scss';

const Article = ({
  children, img, video, date,
}) => (
  <div className="article-item">
    {!img && (
      <div className="video-article">
        <p className="m-0 mb-3">{duration(moment(date).diff(moment())).humanize(true)}</p>
        <div className="children-content mb-3">{children}</div>
        {video && <Player url={video} width="100%" height="100%" controls />}
      </div>
    )}
    {img && (
      <div className="img-article">
        <div>
          <img src={img} alt="article" />
        </div>
        <div>
          <div className="children-content mb-3">{children}</div>
          <p className="m-0 mb-3">{duration(moment(date).diff(moment())).humanize(true)}</p>
        </div>
      </div>
    )}
    <hr />
  </div>
);

Article.propTypes = {
  children: oneOfType([string, element]).isRequired,
  date: string.isRequired,
  img: string,
  video: string,
};

Article.defaultProps = {
  img: '',
  video: '',
};

export default Article;
