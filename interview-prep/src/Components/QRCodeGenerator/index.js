import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [input, setInput] = useState('');

  const handleQRCodeGenerate = () => {
    setValue(input);
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <h1>QR Code</h1>
      <div
        style={{
          margin: '20px',
        }}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          name="QR code"
          type="text"
          placeholder="Enter the value to generate QR code"
          style={{ width: '400px', height: '40px', fontSize: '20px' }}
        />
      </div>
      <div
        style={{
          margin: '20px',
        }}
      >
        <QRCode value={value} size={400} />
      </div>
			<button
				onClick={handleQRCodeGenerate}
				disabled={!input}
			>Generate QR Code</button>
    </div>
  );
};

export default QRCodeGenerator;
