/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

import chroma from 'chroma-js';

import { toast } from 'react-toastify';

import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const Colors = () => {
  const [col, setCols] = React.useState<NodeListOf<Element> | []>([]);
  const [btn1, setBtn1] = React.useState<Boolean>(false);
  const [btn2, setBtn2] = React.useState<Boolean>(false);
  const [btn3, setBtn3] = React.useState<Boolean>(false);
  const [btn4, setBtn4] = React.useState<Boolean>(false);
  const [btn5, setBtn5] = React.useState<Boolean>(false);

  const toastyCopy = () =>
    toast(`🤖 Сopied color`, {
      position: 'top-center',
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const toastyStart = () =>
    toast('🦄 Press space for update colors and click name-color for copy!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const setRandomColors = () => {
    col.forEach((item: any) => {
      const isLocked = item.querySelector('svg').classList.contains('fa-lock');
      const text = item.querySelector('h2');
      const button = item.querySelector('button');
      const color = generateRandomColors();

      if (!isLocked) {
        text.textContent = color;
        item.style.background = color;

        setTextColor(text, color);
        setTextColor(button, color);
      }
    });
  };

  const generateRandomColors = () => {
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#' + color;
  };

  const setTextColor = (text: any, color: string) => {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
  };

  const copyToClick = (text: string) => {
    navigator.clipboard.writeText(text);
    toastyCopy();
  };

  React.useEffect(() => {
    const cols: NodeListOf<Element> = document.querySelectorAll('.col');
    setCols(cols);

    document.addEventListener('click', (e: any) => {
      const color = e.target;
      if (color.dataset.type === 'copy') {
        copyToClick(color.textContent);
      }
    });
    toastyStart();
  }, []);

  React.useEffect(() => {
    col.length && setRandomColors();

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.code.toLowerCase() === 'space') {
        setRandomColors();
      }
    });
  }, [col]);
  return (
    <div className="root">
      <div className="col">
        <h2 data-type="copy"></h2>
        <button onClick={() => setBtn1((btn1: Boolean) => !btn1)}>
          {btn1 ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
        </button>
      </div>
      <div className="col">
        <h2 data-type="copy"></h2>
        <button onClick={() => setBtn2((btn2: Boolean) => !btn2)}>
          {btn2 ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
        </button>
      </div>
      <div className="col">
        <h2 data-type="copy"></h2>
        <button onClick={() => setBtn3((btn3: Boolean) => !btn3)}>
          {btn3 ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
        </button>
      </div>
      <div className="col">
        <h2 data-type="copy"></h2>
        <button onClick={() => setBtn4((btn4: Boolean) => !btn4)}>
          {btn4 ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
        </button>
      </div>
      <div className="col">
        <h2 data-type="copy"></h2>
        <button onClick={() => setBtn5((btn5: Boolean) => !btn5)}>
          {btn5 ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
        </button>
      </div>
    </div>
  );
};

export default Colors;
