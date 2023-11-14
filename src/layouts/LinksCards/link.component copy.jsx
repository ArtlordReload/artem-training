/* // link.component.jsx

import React from 'react';

const LinkComponent = ({ linkNumber, activeLink, onClick }) => {
  const handleClick = () => {
    onClick(linkNumber);
  };

  return (
    <div
      style={{
        fontFamily: "Heebo-Medium, Helvetica",
        color: '#00AE00',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '24px',
        cursor: 'pointer',
        color: 'inherit',
        textDecoration: activeLink === linkNumber ? 'underline #FF3028' : 'none',
      }}
      onClick={handleClick}
    >
      Link {linkNumber}
    </div>
  );
};

export default LinkComponent; */