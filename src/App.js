import React from 'react';
import KonutKredi from './konutKredi';

function App() {
  return (
    <>
      <div
        style={{
          marginBottom: '3%',
          padding: '1rem 8rem',
          backgroundColor: '#ffff'
        }}
        className="cont"
      >
        <img
          class="main-nav__logo main-nav__logo--desktop"
          src="https://cdn.hesapkurdu.com/images/hesapkurdu-logo-black.png"
          alt="Hesapkurdu"
          title="Hesapkurdu"
          height="32px"
        />
      </div>
      <div className="content">
        <KonutKredi />
      </div>
    </>
  );
}

export default App;
