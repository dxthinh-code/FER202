import React from 'react';

const FptLogo = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', padding: '30px 0' }}>
      {/* Thông tin cá nhân ở góc trên phải */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 20,
        textAlign: 'right',
        fontSize: '0.9rem',
        color: '#333',
        fontWeight: '500'
      }}>
        <div>📞 0905 123 456</div>
        <div>📘 Facebook: Đinh Xuân Thịnh</div>
      </div>

      {/* Logo FPT */}
      <img
        src="https://img5.thuthuatphanmem.vn/uploads/2022/01/16/logo-truong-dai-hoc-fpt-university_043152077.png"
        alt="FPT University"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

export default FptLogo;
