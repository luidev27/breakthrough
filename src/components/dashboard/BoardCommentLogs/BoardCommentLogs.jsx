/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import moment, { duration } from 'moment';
import './style.scss';

const BoardCommentLogs = ({ logs }) => (
  <div className="board-comment-logs">
    {Array.isArray(logs) && logs.map((log) => (
      <div className="log" key={log.date}>
        <div className="log-content">
          <div style={{ backgroundImage: `url(${log.img})` }} />
          <div>
            <strong>{log.name}</strong>
            {' commented on the '}
            <Link to={`/${log.board}`}>{log.board}</Link>
            {' board.'}
          </div>
        </div>
        <div className="log-time">{`${duration(moment(log.date).diff(moment())).humanize()} ago`}</div>
      </div>
    ))}
  </div>
);

BoardCommentLogs.propTypes = {
  logs: array,
};

BoardCommentLogs.defaultProps = {
  logs: [],
};

export default BoardCommentLogs;
