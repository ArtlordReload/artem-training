// link.component.jsx

import React from 'react';
import { CustomLink } from './link.styles';

const LinkComponent = ({ linkNumber, activeLink, onClick }) => {
  const handleClick = () => {
    onClick(linkNumber);
  };

    // Map linkNumber to corresponding text
    const linkText = {
      1: 'PREROLLS',
      2: 'CARTRIDGES',
      3: 'FLOWER',
      4: 'EDIBLES',
    };

  return (
    <CustomLink
      onClick={handleClick}
      activeLink={activeLink}
      linkNumber={linkNumber}
    >
      {linkText[linkNumber]}
    </CustomLink>
  );
};

export default LinkComponent;