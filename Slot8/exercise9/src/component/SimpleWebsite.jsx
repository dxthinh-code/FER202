import React from 'react';

const SimpleWebsite = () => {
  return (
    <>
      {/* Header */}
      <div style={{ backgroundColor: '#f7931e', padding: '20px', textAlign: 'center' }}>
        <div style={{ marginTop: '10px' }}>
          <a href="#home" style={navStyle}>Home</a>
          <a href="#about" style={navStyle}>About</a>
          <a href="#contact" style={navStyle}>Contact</a>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h3 id="about">About</h3>
        <p>This is the about section of the website.</p>
        <h3 id="contact">Contact</h3>
        <p>
          For any inquiries, please contact me at <a href="mailto:example@example.com">xuanthinhdinh366@gmail.com</a>.
        </p>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#fdd396', padding: '10px', textAlign: 'center' }}>
        <small>© 2025 Website. All rights reserved.</small>
      </div>
    </>
  );
};

const navStyle = {
  color: '#fff',
  margin: '0 15px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default SimpleWebsite;
