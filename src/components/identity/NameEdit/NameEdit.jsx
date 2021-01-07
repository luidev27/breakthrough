import React from 'react';
import { string, array, func } from 'prop-types';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './style.scss';

const NameEdit = ({ name, doNot, onChange }) => {
  const [nameStr, setNameStr] = React.useState('');
  const [doNotArr, setDoNotArr] = React.useState([]);
  const [newRule, setNewRule] = React.useState('');
  const removeRule = (index) => {
    const arr = [...doNotArr];
    arr.splice(index, 1);
    setDoNotArr(arr);
  };
  const addRule = (value) => {
    const arr = [...doNotArr, value];
    setDoNotArr(arr);
    setNewRule('');
  };
  const saveName = () => {
    onChange({
      name: nameStr,
      doNot: doNotArr,
    });
  };

  React.useEffect(() => {
    setNameStr(name);
    setDoNotArr(doNot);
  }, [name, doNot]);

  return (
    <div className="name-edit">
      <div className="name-edit-header">
        Edit Name
      </div>
      <div className="name-edit-content">
        <h2>NAME</h2>
        <InputGroup>
          <FormControl value={nameStr} onChange={(e) => setNameStr(e.target.value)} />
        </InputGroup>
        <hr />
        <h2>DO NOT:</h2>
        {Array.isArray(doNotArr) && doNotArr.map((rule, index) => (
          <InputGroup>
            <FormControl value={rule} readOnly />
            <InputGroup.Append>
              <Button variant="secondary" onClick={() => removeRule(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        ))}
        <InputGroup>
          <FormControl value={newRule} onChange={(e) => setNewRule(e.target.value)} />
          <InputGroup.Append>
            <Button variant="primary" onClick={() => addRule(newRule)}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Button className="mt-4" variant="primary" onClick={() => saveName()} block>Save Name</Button>
      </div>
    </div>
  );
};

NameEdit.propTypes = {
  name: string,
  doNot: array,
  onChange: func,
};

export default NameEdit;
