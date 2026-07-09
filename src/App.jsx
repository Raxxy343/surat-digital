import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const audioRef = useRef(null);

  const openLetter = async () => {
    setOpen(true);

    try {
      audioRef.current.volume = 0.4;
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {/* Tombol Info - di pojok kanan atas */}
      <button
        className="infoBtn"
        onClick={() => setShowInfo(true)}
      >
        ℹ️
      </button>

      {/* Modal Peraturan */}
      {showInfo && (
        <div className="modal">
          <div className="modalContent">
            <button
              className="closeBtn"
              onClick={() => setShowInfo(false)}
            >
              ✖
            </button>

            <h2>📢 Informasi Server</h2>

            <p>
              Sebelum masuk ke server Discord, mohon baca
              peraturan berikut ya 😊
            </p>

            <h3>📜 Peraturan</h3>

            <ul>
              <li>🤝 Sirkel gapapa, tapi jangan musuh-musuhan ya.</li>
              <li>🚫 Jangan SARA ya teman-teman.</li>
              <li>🗣️ Ngomong kasar diporsiin aja, jangan sering.</li>
              <li>💖 Jangan bikin orang nggak nyaman, saling respect.</li>
            </ul>

            <p className="thanks">
              Itu aja, tenkyuu ❤️
            </p>
          </div>
        </div>
      )}

      {/* Hiasan Hati */}
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
          {/* ✅ Judul Surat Digital tetap ada */}
          <h1 className="title">💌 Surat Digital</h1>

          {/* ✅ Pesan spesial tetap ada */}
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