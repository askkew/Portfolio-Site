import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'
import './modal.css'
import PdfViewer from '../PDFViewer'
import { AiOutlineClose } from 'react-icons/ai'
import { IconButton } from '@mui/material'

const dropIn ={
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
}

// @ts-ignore
const Modal = ({ handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ display: 'flex', flexDirection: 'row'}}
      >
        <PdfViewer pdfUrl="/Luke's Resume.pdf" />
        <IconButton onClick={handleClose} style={{ position: 'absolute', top: 0, right: 0, color: 'white', padding: '5px', backdropFilter: 'blur(10px)', border: '3px white solid'}}>
          <AiOutlineClose size={40}/>
        </IconButton>
      </motion.div>
    </Backdrop>
  )
}

export default Modal