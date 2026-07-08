import { motion } from "framer-motion";

export default function Cover({ onOpen }) {
  return (
    <div className="cover">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="cover-card"
      >
        <h3>💌 Untuk</h3>

        <h1>Rakha</h1>

        <p>Silakan buka surat ini.</p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </div>
  );
}