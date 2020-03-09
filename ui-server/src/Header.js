import React from 'react';

const Header = () => {
  return (
    <div className="header clearfix">
      <div className="HeaderLeft">
      <a href="admin/admin.php"><img src="" height="100" alt="" /></a>
      </div>
      <div className="HeaderCenter">
          <h1 id="HeaderTitle">Jeremy's Beers</h1>
      </div>
      <div className="HeaderRight">
        <a href="http://www.raspberrypints.com"><img src="img/RaspberryPints.png" height="100" alt="" /></a>
      </div>
    </div>
  )
}

export default Header;
