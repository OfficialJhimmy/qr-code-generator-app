import { useState, useRef } from "react";
import '../index.css'


function QrCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }

    setQrIsVisible(true);
  };

  const qrCodeRef = useRef(null);

  

  return (
    <div className="qrcode__container">
      <h1>QR Code Generator</h1>
      <div className="qrcode__container--parent" ref={qrCodeRef}>
        <div className="qrcode__input">
          <input
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        
          <button onClick={handleQrCodeGenerator}>Generate QR Code</button>
        </div>

       
      </div>
    </div>
  );
}

export default QrCodeGenerator;
