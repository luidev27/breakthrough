/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { array, func } from 'prop-types';
import './style.scss';

const ImageryEdit = ({ images, onChange }) => {
  const [imageArray, setImageArray] = React.useState([]);
  const [newImage, setNewImage] = React.useState('');
  const removeImage = (index) => {
    const arr = [...imageArray];
    arr.splice(index, 1);
    setImageArray(arr);
    onChange(arr);
  };
  const addImage = (image) => {
    const arr = [...imageArray, image];
    setImageArray(arr);
    onChange(arr);
  };
  React.useEffect(() => {
    setImageArray(images);
  }, [images]);
  return (
    <div className="imagery-edit">
      <div className="imagery-edit-header">Edit Imagery</div>
      <div className="imagery-edit-content">
        {Array.isArray(imageArray) && imageArray.map((image, index) => (
          <InputGroup key={image}>
            <FormControl value={image} readOnly />
            <InputGroup.Append>
              <Button variant="secondary" onClick={() => removeImage(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        ))}
        <InputGroup>
          <FormControl value={newImage} onChange={(e) => setNewImage(e.target.value)} />
          <InputGroup.Append>
            <Button variant="primary" onClick={() => addImage(newImage)}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
};

ImageryEdit.propTypes = {
  images: array,
  onChange: func,
};

export default ImageryEdit;
