/* eslint-disable camelcase */
import React from 'react';
import {
  string, func, oneOfType, number,
} from 'prop-types';
import './style.scss';

const PlanCard = ({
  id,
  name,
  price,
  currentId,
  description,
  max_board,
  max_collaborator,
  max_user,
  max_workshop,
  onExcute,
}) => (
  <div className={id === currentId ? 'plan-card current p-4 mb-4' : 'plan-card p-4 mb-4'}>
    <div className="plan-card-header">{name}</div>
    <hr className={id === currentId ? 'bg-white' : null} />
    <div className="plan-card-contents">
      {description && <div>{description}</div>}
      <div>{Number(max_user) > 1 ? `${max_user} users` : `${max_user} user`}</div>
      <div>{Number(max_collaborator) > 1 ? `${max_collaborator} collaborators` : `${max_collaborator} collaborator`}</div>
      <div>{Number(max_board) > 1 ? `${max_board} boards` : `${max_board} board`}</div>
      <div>{Number(max_workshop) > 1 ? `${max_workshop} workshops` : `${max_workshop} workshop`}</div>
    </div>
    <hr className={id === currentId ? 'bg-white' : null} />
    <div className="plan-card-footer">
      {Number(price) > 0 && <div className="price">{`$${price} / Month`}</div>}
      {Number(price) > 0 && <div className="price-description">when paid annually</div>}
      {id !== currentId && <button type="button" className="subscribe py-3 mt-3" onClick={onExcute}>Subscribe</button>}
    </div>
  </div>
);

PlanCard.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  price: oneOfType([string, number]).isRequired,
  currentId: string.isRequired,
  description: string.isRequired,
  max_board: oneOfType([string, number]).isRequired,
  max_collaborator: oneOfType([string, number]).isRequired,
  max_user: oneOfType([string, number]).isRequired,
  max_workshop: oneOfType([string, number]).isRequired,
  onExcute: func.isRequired,
};

export default PlanCard;
