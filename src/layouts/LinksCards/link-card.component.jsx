// App.js

import React, { useState } from 'react';

import * as S from './link-card.styles.jsx';

import LinkComponent from './link.component.jsx';
import CardsComponent from './card.component.jsx';

function App() {
  const [activeLink, setActiveLink] = useState(1);

  const handleLinkClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };

  return (
    <S.Container>
      <S.Links>
        {[1, 2, 3, 4].map((linkNumber) => (
          <LinkComponent
            key={linkNumber}
            linkNumber={linkNumber}
            activeLink={activeLink}
            onClick={handleLinkClick}
          />
        ))}
      </S.Links>
      <CardsComponent activeLink={activeLink} />
    </S.Container>
  );
}

export default App;
