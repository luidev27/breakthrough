/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Element from '../../components/_shared/Element';
import { ParagraphText } from '../../components/_shared/Text';
import BoardCommentLogs from '../../components/dashboard/BoardCommentLogs';
import BoardItem from '../../components/dashboard/BoardItem';
import Article from '../../components/dashboard/Article';
import DashboardHeader from './header';
import * as data from '../../assets/data';

import './style.scss';

const Dashboard = () => (
  <div className="dashboard-page">
    <Container>
      <Row>
        <Col xs="12" md="8" lg="9">
          <div className="mb-3">
            <DashboardHeader />
          </div>
          <div className="mb-3">
            <Element>
              <Row className="p-4">
                <Col xs="8">
                  <BoardCommentLogs logs={data.CommentLogs} />
                </Col>
                <Col xs="4" className="logs-border">
                  <ParagraphText color="#808080" transform="uppercase">
                    My Boards
                  </ParagraphText>
                  {data.Boards.map((board, index) => <BoardItem key={index} {...board} />)}
                </Col>
              </Row>
            </Element>
          </div>
        </Col>
        <Col xs="12" md="4" lg="3">
          {data.Articles.map((article) => (
            <Article key={article.date} video={article.video} img={article.img} date={article.date}>
              {article.children}
            </Article>
          ))}
        </Col>
      </Row>
    </Container>
  </div>
);

export default Dashboard;
