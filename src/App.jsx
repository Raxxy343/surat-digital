import { useState } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      {!open ? (
        <img
          src="/envelope.png"
          alt="Envelope"
          className="envelope"
          onClick={() => setOpen(true)}
        />
      ) : (
        <div className="letter">
          <h1>💌 Halo!</h1>

          <p>
            Terima kasih sudah membuka surat ini.
            <br />
            Semoga harimu menyenangkan.
          </p>

          <img
            className="qr"
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://google.com"
            alt="QR Code"
          />

          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Buka Link
          </a>
        </div>
      )}
    </div>
  );
}