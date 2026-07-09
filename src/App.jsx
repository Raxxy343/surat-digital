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
            Klik tombol di bawah untuk bergabung ke server Discord kami.
          </p>

          <a
            href="https://discord.gg/8gnMnJXuU"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            🚀 Join Discord
          </a>
        </div>
      )}
    </div>
  );
}