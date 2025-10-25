import { motion } from "motion/react";

export function AnimatedHouses() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* House 1 - Floating top left */}
      <motion.div
        initial={{ x: -100, y: 0, opacity: 0 }}
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: 1
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 20L100 50V95H70V70H50V95H20V50L60 20Z" fill="#1e3a8a" opacity="0.3"/>
          <rect x="30" y="60" width="15" height="20" fill="#1e40af" opacity="0.4"/>
          <rect x="75" y="60" width="15" height="20" fill="#1e40af" opacity="0.4"/>
          <rect x="55" y="45" width="10" height="10" fill="#fbbf24" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* House 2 - Floating top right */}
      <motion.div
        initial={{ x: 100, y: 0, opacity: 0 }}
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          opacity: 1
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M50 15L85 42V82H65V60H35V82H15V42L50 15Z" fill="#dc2626" opacity="0.3"/>
          <rect x="25" y="50" width="12" height="15" fill="#b91c1c" opacity="0.4"/>
          <rect x="63" y="50" width="12" height="15" fill="#b91c1c" opacity="0.4"/>
          <circle cx="50" cy="35" r="4" fill="#fbbf24" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* House 3 - Floating middle */}
      <motion.div
        initial={{ x: 0, y: 100, opacity: 0 }}
        animate={{ 
          x: [0, 40, 0],
          y: [0, -40, 0],
          opacity: 1
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-1/4"
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <path d="M45 12L75 35V72H55V52H35V72H15V35L45 12Z" fill="#16a34a" opacity="0.3"/>
          <rect x="22" y="42" width="10" height="13" fill="#15803d" opacity="0.4"/>
          <rect x="58" y="42" width="10" height="13" fill="#15803d" opacity="0.4"/>
          <path d="M45 25L55 32V40L45 33L35 40V32L45 25Z" fill="#fbbf24" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* House 4 - Floating bottom right */}
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0 }}
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          opacity: 1
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-20 right-1/4"
      >
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
          <path d="M55 18L92 47V88H68V65H42V88H18V47L55 18Z" fill="#7c3aed" opacity="0.3"/>
          <rect x="28" y="55" width="13" height="17" fill="#6d28d9" opacity="0.4"/>
          <rect x="69" y="55" width="13" height="17" fill="#6d28d9" opacity="0.4"/>
          <rect x="50" y="40" width="10" height="10" fill="#fbbf24" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Small decorative houses */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-10"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 10L50 25V48H38V35H22V48H10V25L30 10Z" fill="#ea580c" opacity="0.3"/>
        </svg>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-1/3 left-20"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path d="M35 12L58 30V55H43V40H27V55H12V30L35 12Z" fill="#0891b2" opacity="0.3"/>
        </svg>
      </motion.div>
    </div>
  );
}
