/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { object } from 'prop-types';
import { faTag, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimationButton from '../../../components/_shared/AnimationButton';
import Drawer from '../../../components/_shared/Drawer';
import { ParagraphText } from '../../../components/_shared/Text';
import Gallery from '../../../components/identity/Gallery';
import ImageryEdit from '../../../components/identity/ImageryEdit';

const Imagery = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [imageArray, setImageArray] = React.useState([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!ready && data) {
      setImageArray(data.information_elements[0].content);
      setReady(true);
    }
  }, [ready, data]);

  if (ready && imageArray) {
    return (
      <>
        <Drawer
          isOpen={open}
          size={{
            xs: 100, sm: 70, md: 50, lg: 50, xl: 50,
          }}
          onChange={(val) => setOpen(val)}
        >
          <ImageryEdit images={imageArray} onChange={(val) => setImageArray(val)} />
        </Drawer>
        <div id={data.title.replace(/\s/g, '-').toLowerCase()}>
          <div className="d-flex justify-content-between align-items-center pt-4 mb-2">
            <ParagraphText width="14pt" height="1.1" weight="500" color="#00add9" transform="uppercase">
              {data.title}
            </ParagraphText>
            <div className="d-flex">
              <AnimationButton
                icon={<FontAwesomeIcon icon={faPen} />}
                text="Edit"
                color="#3e3d3d"
                bgColor="#ededed"
                onClick={() => setOpen(!open)}
              />
              <AnimationButton
                className="ml-2"
                icon={<FontAwesomeIcon icon={faTag} />}
                text="Sort By Tag"
                color="#fff"
                bgColor="#006886"
              />
            </div>
          </div>
          <Gallery images={imageArray} />
        </div>
      </>
    );
  }
  return <div />;
};

Imagery.propTypes = {
  data: object.isRequired,
};

export default Imagery;
