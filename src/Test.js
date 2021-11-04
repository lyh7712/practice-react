import React, { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const Test = () => {
  const titleUpdater = useTitle('...Loading');
  setTimeout(() => titleUpdater('Home'), 3000);

  return <div>Test App</div>;
};

export default Test;
