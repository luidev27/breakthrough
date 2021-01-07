/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { object } from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../../../components/_shared/Drawer';
import AnimationButton from '../../../components/_shared/AnimationButton';
import { ParagraphText } from '../../../components/_shared/Text';
import FontItem from '../../../components/identity/FontItem';
import FontsEdit from '../../../components/identity/FontsEdit';

const Fonts = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [fontArray, setFontArray] = React.useState([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!ready && data) {
      setFontArray(data.information_elements[0].content);
      setReady(true);
    }
  }, [data, ready]);

  if (ready && fontArray) {
    return (
      <>
        <Drawer
          isOpen={open}
          size={{
            xs: 100, sm: 70, md: 50, lg: 50, xl: 50,
          }}
          onChange={(val) => setOpen(val)}
        >
          <FontsEdit fonts={fontArray} onChange={(val) => { setFontArray(val); setOpen(false); }} />
        </Drawer>
        <div id={data.title.replace(/\s/g, '-').toLowerCase()}>
          <div className="d-flex justify-content-between align-items-center pt-4 mb-2">
            <ParagraphText width="14pt" height="1.1" weight="500" color="#00add9" transform="uppercase">
              {data.title}
            </ParagraphText>
            <AnimationButton
              icon={<FontAwesomeIcon icon={faPen} />}
              text="Edit"
              color="#3e3d3d"
              bgColor="#ededed"
              onClick={() => setOpen(true)}
            />
          </div>
          <Row>
            {fontArray.map((font) => (
              <Col key={font.title} xs="12" md="4" className="mb-4">
                <FontItem {...font} />
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
  return <div />;
};

Fonts.propTypes = {
  data: object.isRequired,
};

export default Fonts;
