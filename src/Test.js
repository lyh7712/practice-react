import React, { useEffect, useState } from 'react';

const useDeviceOrientation = () => {};

const useFavicon = (initialIcon) => {
  const [icon, setIcon] = useState(initialIcon);

  const updateIcon = () => {
    const link = document.querySelector('head link');
    link.href = icon;
  };
  return updateIcon;
};

const Test = () => {
  return (
    <>
      <div>Test App</div>
      <button
        onClick={useFavicon(
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png'
        )}
      >
        changeIcon
      </button>
    </>
  );
};

export default Test;
