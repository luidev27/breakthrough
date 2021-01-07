/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { object } from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../../../components/_shared/Drawer';
import AnimationButton from '../../../components/_shared/AnimationButton';
import { ParagraphText } from '../../../components/_shared/Text';
import LogoEdit from '../../../components/identity/LogoEdit';
import LogoViewer from '../../../components/identity/LogoViewer';
import LogoDoNotViewer from '../../../components/identity/LogoDoNotViewer';

const Logo = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [logoArray, setLogoArray] = React.useState([]);
  const [doNotArr, setDoNotArr] = React.useState([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!ready && data) {
      setLogoArray(data.information_elements[0].content);
      setDoNotArr(data.information_elements[1].content);
      setReady(true);
    }
  }, [ready, data]);

  if (ready && logoArray && doNotArr) {
    return (
      <>
        <Drawer
          isOpen={open}
          size={{
            xs: 100, sm: 70, md: 50, lg: 50, xl: 50,
          }}
          onChange={(val) => setOpen(val)}
        >
          <LogoEdit
            logos={logoArray}
            doNot={doNotArr}
            onChange={({ logos, doNot }) => {
              setLogoArray(logos);
              setDoNotArr(doNot);
            }}
          />
        </Drawer>
        <div id={data.title.replace(/\s/g, '-').toLowerCase()}>
          <div className="d-flex justify-content-between align-items-center pt-4 mb-2">
            <ParagraphText width="14pt" height="1.1" weight="500" color="#00add9" transform="uppercase">
              {data.title}
            </ParagraphText>
            <AnimationButton icon={<FontAwesomeIcon icon={faPen} />} text="Edit" color="#3e3d3d" bgColor="#ededed" onClick={() => setOpen(true)} />
          </div>
          <Row>
            {Array.isArray(logoArray) && logoArray.map((logo, index) => (
              <Col xs="12" sm="6" className="mb-4" key={index}>
                <LogoViewer {...logo} />
              </Col>
            ))}
          </Row>
          <Row>
            {Array.isArray(doNotArr) && doNotArr.map((doNot, index) => (
              <Col xs="6" md="3" className="mt-4" key={index}>
                <LogoDoNotViewer {...doNot} />
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
  return <div />;
};

Logo.propTypes = {
  data: object.isRequired,
};

export default Logo;
