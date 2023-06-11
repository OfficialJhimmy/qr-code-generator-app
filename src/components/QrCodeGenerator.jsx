import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
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

  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrCodeRef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        console.error("Error generating QR code:", error);
      });
  };

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

        {qrIsVisible && (
          <div className="qrcode__download">
            <div className="qrcode__image">
              <QRCode value={url} size={300} />
            </div>
            <button onClick={downloadQRCode}>Download QR Code</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QrCodeGenerator;
