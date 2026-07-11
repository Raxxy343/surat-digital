import { useState, useRef } from "react";
import "./App.css";
import Confetti from "react-confetti";

export default function App() {
  const [open, setOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  // === FITUR BUKA SURAT + CONFETTI ===
  const openLetter = async () => {
    setOpen(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    try {
      audioRef.current.volume = 0.2;
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (err) {
      console.log(err);
    }
  };

  // === FITUR MUTE MUSIK ===
  const toggleMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="container">
      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Tombol Info - di pojok kanan atas */}
      <button
        className="infoBtn"
        onClick={() => setShowInfo(true)}
      >
        ℹ️
      </button>

      {/* Tombol Mute Musik - di pojok kiri atas */}
      <button
        className="musicBtn"
        onClick={toggleMusic}
      >
        {isMuted ? '🔇' : '🔊'}
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

      {/* Hiasan Stiker Jatuh - Sekarang lebih variatif */}
      <div className="stickers">
        {/* Hati */}
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💞</span>
        <span>💘</span>
        <span>💝</span>
        <span>💓</span>
        <span>❤️</span>
        
        {/* Bintang */}
        <span>⭐</span>
        <span>🌟</span>
        <span>✨</span>
        <span>💫</span>
        
        {/* Bunga */}
        <span>🌸</span>
        <span>🌺</span>
        <span>🌹</span>
        <span>🌷</span>
        <span>🌻</span>
        <span>🌼</span>
        
        {/* Kupu-kupu & Animal */}
        <span>🦋</span>
        <span>🐝</span>
        <span>🐞</span>
        <span>🌈</span>
        
        {/* Love & Mood */}
        <span>🥰</span>
        <span>😍</span>
        <span>🤗</span>
        <span>💋</span>
        
        {/* Tambahan aesthetic */}
        <span>🎀</span>
        <span>🎈</span>
        <span>🎉</span>
        <span>🎊</span>
        <span>🪷</span>
        <span>🌊</span>
        <span>☁️</span>
        <span>🌙</span>
      </div>

      {!open ? (
        <>
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