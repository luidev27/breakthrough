import React from 'react';
import { array, func } from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './style.scss';

const FontsEdit = ({ fonts, onChange }) => {
  const [fontArray, setFontArray] = React.useState([]);
  const handleChangeFont = (value, index) => {
    const arr = [...fontArray];
    arr.splice(index, 1, value);
    setFontArray(arr);
  };
  const saveFonts = () => {
    onChange(fonts.map((font, index) => ({ title: font.title, fontFamily: fontArray[index] })));
  };
  React.useEffect(() => {
    setFontArray(fonts.map((font) => font.fontFamily));
  }, [fonts]);

  return (
    <div className="fonts-edit">
      <div className="fonts-edit-header">
        Edit Fonts
      </div>
      <div className="fonts-edit-content">
        {Array.isArray(fontArray) && fontArray.map((font, index) => (
          <div className="font-item" key={fonts[index].title}>
            <h2>{fonts[index].title}</h2>
            <div className="font-family">
              <InputGroup>
                <FormControl
                  value={font}
                  onChange={(e) => (handleChangeFont(e.target.value, index))}
                />
              </InputGroup>
            </div>
          </div>
        ))}
        <Button variant="primary" onClick={() => saveFonts()} block>Save Fonts</Button>
      </div>
    </div>
  );
};

FontsEdit.propTypes = {
  fonts: array,
  onChange: func,
};

export default FontsEdit;
