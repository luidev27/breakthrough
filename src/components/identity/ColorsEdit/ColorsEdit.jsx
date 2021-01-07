import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { func, array } from 'prop-types';
import './style.scss';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

const rgb2cmyk = (red, green, blue) => {
  let computedC = 0;
  let computedM = 0;
  let computedY = 0;
  let computedK = 0;
  // remove spaces from input RGB values, convert to int
  const r = parseInt((`${red}`).replace(/\s/g, ''), 10);
  const g = parseInt((`${green}`).replace(/\s/g, ''), 10);
  const b = parseInt((`${blue}`).replace(/\s/g, ''), 10);

  if (r === null || g === null || b === null
      || isNaN(r) || isNaN(g) || isNaN(b)) {
    return '';
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    return '';
  }

  // BLACK
  if (r === 0 && g === 0 && b === 0) {
    computedK = 1;
    return '(0%, 0%, 0%, 100%)';
  }

  computedC = 1 - (r / 255);
  computedM = 1 - (g / 255);
  computedY = 1 - (b / 255);

  const minCMY = Math.min(computedC,
    Math.min(computedM, computedY));
  computedC = Math.round((computedC - minCMY) / (1 - minCMY) * 100);
  computedM = Math.round((computedM - minCMY) / (1 - minCMY) * 100);
  computedY = Math.round((computedY - minCMY) / (1 - minCMY) * 100);
  computedK = Math.round(minCMY * 100);

  return `(${computedC}%, ${computedM}%, ${computedY}%, ${computedK}%)`;
};

const ColorsEdit = ({ colors, onChange }) => {
  const [colorArray, setColorArray] = React.useState([]);
  const handleChangeColor = (value, index) => {
    const arr = [...colorArray];
    arr.splice(index, 1, value);
    setColorArray(arr);
  };
  const saveColors = () => {
    onChange(colors.map((color, index) => ({ title: color.title, hex: colorArray[index] })));
  };
  React.useEffect(() => {
    setColorArray(colors.map((color) => color.hex));
  }, [colors]);

  return (
    <div className="colors-edit">
      <div className="colors-edit-header">
        Edit Colors
      </div>
      <div className="colors-edit-content">
        {Array.isArray(colorArray) && colorArray.map((color, index) => (
          <div className="color-item" key={colors[index].title}>
            <h2>{colors[index].title}</h2>
            <div className="color-hex">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>HEX</InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                  <InputGroup.Text>(e.g, #00aadf)</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={color}
                  onChange={(e) => (handleChangeColor(e.target.value, index))}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>RGB</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={hexToRgb(color) ? `(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b})` : ''} readOnly />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>CMYK</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={hexToRgb(color) ? rgb2cmyk(hexToRgb(color).r, hexToRgb(color).g, hexToRgb(color).b) : ''} readOnly />
              </InputGroup>
            </div>
          </div>
        ))}
        <Button variant="primary" onClick={() => saveColors()} block>Save Colors</Button>
      </div>
    </div>
  );
};

ColorsEdit.propTypes = {
  colors: array,
  onChange: func,
};

export default ColorsEdit;
