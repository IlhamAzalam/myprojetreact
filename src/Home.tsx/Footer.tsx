import React from 'react';

function Footer() {
  const footerStyle: React.CSSProperties = {
    textAlign: 'right',
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return (
      <footer style={footerStyle}>
        <h6>
          Edité par: Azalam Ilham
          <br />
          Dernière mise à jour: {day}/{month}/{year}
          <br />
          Copyright © 2022-2023 by Azalam Ilham. All Rights Reserved.
        </h6>
      </footer>
    );
  };

  return getCurrentDate();
}

export default Footer;
