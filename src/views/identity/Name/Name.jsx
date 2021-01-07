/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { object } from 'prop-types';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../../../components/_shared/Drawer';
import AnimationButton from '../../../components/_shared/AnimationButton';
import { ParagraphText } from '../../../components/_shared/Text';
import NameEdit from '../../../components/identity/NameEdit';
import NameBox from '../../../components/identity/NameBox';

const Name = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [nameStr, setNameStr] = React.useState('');
  const [doNotArr, setDoNotArr] = React.useState([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!ready && data) {
      setNameStr(data.information_elements[0].content);
      setDoNotArr(data.information_elements[1].content);
      setReady(true);
    }
  }, [ready, data]);

  if (ready && nameStr && doNotArr) {
    return (
      <>
        <Drawer
          isOpen={open}
          size={{
            xs: 100, sm: 70, md: 50, lg: 50, xl: 50,
          }}
          onChange={(val) => setOpen(val)}
        >
          <NameEdit
            name={nameStr}
            doNot={doNotArr}
            onChange={({ name, doNot }) => {
              setNameStr(name);
              setDoNotArr(doNot);
              setOpen(false);
            }}
          />
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
          <div className="name-body">
            <NameBox name={nameStr} doNot={doNotArr} />
          </div>
        </div>
      </>
    );
  }

  return <div />;
};

Name.propTypes = {
  data: object.isRequired,
};

export default Name;
