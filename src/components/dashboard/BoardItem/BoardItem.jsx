import React from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const BoardItem = ({
  name, description, collaborators, comments,
}) => (
  <div className="board-item">
    <Link to={`/${name}`}>{name}</Link>
    <ParagraphText width="15pt" weight="200" color="#555" margin="15px 0">{description}</ParagraphText>
    <ParagraphText weight="200" color="#999">
      {`${collaborators} Collaborators  |  ${comments} Comments`}
    </ParagraphText>
  </div>
);

BoardItem.propTypes = {
  name: string,
  description: string,
  collaborators: number,
  comments: number,
};

BoardItem.defaultProps = {
  name: '',
  description: '',
  collaborators: 0,
  comments: 0,
};

export default BoardItem;
