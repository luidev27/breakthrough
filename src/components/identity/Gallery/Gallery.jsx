import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PropTypes from 'prop-types';
import './style.scss';

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [imgsPerCol, setImgsPerCol] = useState(0);

  const openImageModal = (imageIndex) => {
    setCurrentImage(imageIndex);
    setViewerIsOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    if (images) {
      setImgsPerCol(Math.ceil(images.length / 4));
    }
  }, [images]);

  return (
    <div className="gallery">
      <div className="image-grid">
        {
          [0, 1, 2, 3].map((col) => (
            <div className="image-col">
              {
                images.map((image, index) => {
                  if (Math.floor(index / imgsPerCol) === col) {
                    return (
                      <div
                        role="button"
                        key={image}
                        tabIndex={index}
                        className="image-item"
                        onKeyDown={() => {}}
                        onClick={() => openImageModal(index)}
                      >
                        <Image src={image} />
                      </div>
                    );
                  }
                  return null;
                })
              }
            </div>
          ))
        }
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeImageModal}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((x) => ({
                src: x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
