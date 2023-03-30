import { motion } from 'framer-motion';
import './backdrop.css'
// @ts-ignore
const Backdrop = ({ children, onClick}) => {
  return (
    <motion.div
    className="backdrop"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.85 }}
    exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;