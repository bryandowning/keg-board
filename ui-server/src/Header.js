import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLeft">
        <a href="admin/admin.php"><img src="" height="100" alt="" /></a>
      </div>
      <div className="HeaderCenter">
          <h1 id="HeaderTitle">Jeremy's Beers</h1>
      </div>
      <div className="HeaderRight">
        <a href="http://www.raspberrypints.com"><img src={require('./img/RaspberryPints.png')} height="100" alt="" /></a>
      </div>
    </div>
  )
}

export default Header;
