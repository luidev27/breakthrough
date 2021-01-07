/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  array, func, string, object,
} from 'prop-types';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './style.scss';

const LogoItem = ({
  img, links, onChange, onRemove,
}) => {
  const [logoImg, setLogoImg] = React.useState('');
  const [eps, setEps] = React.useState('');
  const [png, setPng] = React.useState('');
  const [jpeg, setJpeg] = React.useState('');
  const [svg, setSvg] = React.useState('');
  const [edit, setEdit] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  const handleSave = () => {
    onChange({
      img: logoImg,
      links: {
        eps, png, jpeg, svg,
      },
    });
    setEdit(false);
  };

  React.useEffect(() => {
    setLogoImg(img);
    if (!ready && links) {
      setEps(links.eps);
      setPng(links.png);
      setSvg(links.svg);
      setJpeg(links.jpeg);
      setReady(true);
    }
  }, [img, links]);

  return (
    <div className="logo-item">
      {ready && (
        <>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>LOGO URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={logoImg}
              onChange={(e) => {
                setLogoImg(e.target.value);
                setEdit(true);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>EPS</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={eps}
              onChange={(e) => {
                setEps(e.target.value);
                setEdit(true);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>PNG</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={png}
              onChange={(e) => {
                setPng(e.target.value);
                setEdit(true);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>JPEG</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={jpeg}
              onChange={(e) => {
                setJpeg(e.target.value);
                setEdit(true);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>SVG</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={svg}
              onChange={(e) => {
                setSvg(e.target.value);
                setEdit(true);
              }}
            />
          </InputGroup>
          <Button
            className="mr-2"
            variant="primary"
            disabled={!edit}
            onClick={() => handleSave()}
          >
            SAVE
          </Button>
          <Button variant="secondary" onClick={() => onRemove(true)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </>
      )}
    </div>
  );
};

const DoNotItem = ({
  img, description, onChange, onRemove,
}) => {
  const [imgUrl, setImgUrl] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [edit, setEdit] = React.useState(false);
  const handleSave = () => {
    onChange({
      img: imgUrl,
      description: desc,
    });
    setEdit(false);
  };

  React.useEffect(() => {
    setImgUrl(img);
    setDesc(description);
  }, [img, description]);

  return (
    <div className="do-not-item">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>URL</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
            setEdit(true);
          }}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Description</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={desc}
          as="textarea"
          onChange={(e) => {
            setDesc(e.target.value);
            setEdit(true);
          }}
        />
      </InputGroup>
      <Button
        className="mr-2"
        variant="primary"
        disabled={!edit}
        onClick={() => handleSave()}
      >
        SAVE
      </Button>
      <Button variant="secondary" onClick={() => onRemove(true)}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};

const LogoEdit = ({ logos, doNot, onChange }) => {
  const [logoArray, setLogoArray] = React.useState([]);
  const [doNotArr, setDoNotArr] = React.useState([]);
  const handleLogoChange = (val, index) => {
    const arr = [...logoArray];
    arr.splice(index, 1, val);
    setLogoArray(arr);
    onChange({
      logos: arr,
      doNot: doNotArr,
    });
  };
  const handleLogoRemove = (val, index) => {
    const arr = [...logoArray];
    arr.splice(index, 1);
    setLogoArray(arr);
    onChange({
      logos: arr,
      doNot: doNotArr,
    });
  };
  const handleDoNotChange = (val, index) => {
    const arr = [...doNotArr];
    arr.splice(index, 1, val);
    setDoNotArr(arr);
    onChange({
      logos: logoArray,
      doNot: arr,
    });
  };
  const handleDoNotRemove = (val, index) => {
    const arr = [...doNotArr];
    arr.splice(index, 1);
    setDoNotArr(arr);
    onChange({
      logos: logoArray,
      doNot: arr,
    });
  };
  const addNewLogo = () => {
    const arr = [...logoArray, {
      img: '',
      links: {
        eps: '',
        png: '',
        jpeg: '',
        svg: '',
      },
    }];
    setLogoArray(arr);
  };
  const addNewRule = () => {
    const arr = [...doNotArr, {
      img: '',
      description: '',
    }];
    setDoNotArr(arr);
  };

  React.useEffect(() => {
    setLogoArray(logos);
    setDoNotArr(doNot);
  }, [logos, doNot]);

  return (
    <div className="logo-edit">
      <div className="logo-edit-header">
        Edit Logo
      </div>
      <div className="logo-edit-content">
        <h2>LOGO</h2>
        {Array.isArray(logoArray) && logoArray.map((logo, index) => (
          <LogoItem
            key={index}
            {...logo}
            onChange={(val) => handleLogoChange(val, index)}
            onRemove={(val) => handleLogoRemove(val, index)}
          />
        ))}
        <Button variant="primary" block onClick={() => addNewLogo()}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <hr />
        <h2>DO NOT:</h2>
        {Array.isArray(doNotArr) && doNotArr.map((rule, index) => (
          <DoNotItem
            key={index}
            {...rule}
            onChange={(val) => handleDoNotChange(val, index)}
            onRemove={(val) => handleDoNotRemove(val, index)}
          />
        ))}
        <Button variant="primary" block onClick={() => addNewRule()}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

LogoItem.propTypes = {
  img: string,
  links: object,
  onChange: func,
  onRemove: func,
};

DoNotItem.propTypes = {
  img: string,
  description: string,
  onChange: func,
  onRemove: func,
};

LogoEdit.propTypes = {
  logos: array,
  doNot: array,
  onChange: func,
};

export default LogoEdit;
