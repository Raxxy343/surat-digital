import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

 const openLetter = async () => {
  setOpen(true);

  try {
    audioRef.current.volume = 0.4; // 20% volume
    audioRef.current.currentTime = 0;
    await audioRef.current.play();
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="container">

      <div className="hearts">
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💞</span>
        <span>💘</span>
        <span>💝</span>
        <span>💓</span>
        <span>💖</span>
      </div>

      {!open ? (
        <>
          <h1 className="title">💌 Surat Digital</h1>

          <p className="subtitle">
            Ada sebuah pesan spesial untukmu...
          </p>

          <img
            src="/envelope.png"
            alt="Envelope"
            className="envelope"
          />

          <button
            className="button"
            onClick={openLetter}
          >
            💖 Buka Surat
          </button>
        </>
      ) : (
        <div className="letter">

          <h1>💌 Halo!</h1>

          <p>
            Terima kasih sudah membuka surat ini.
            <br />
            Klik tombol di bawah untuk bergabung
            ke server Discord kami.
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

      <audio ref={audioRef} loop>
        <source
          src="/lagu.mp3"
          type="audio/mpeg"
        />
      </audio>

    </div>
  );
}