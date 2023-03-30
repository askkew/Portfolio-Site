import React from 'react';
// @ts-ignore
const PdfViewer = ({ pdfUrl }) => {
  return (
    <embed src={pdfUrl} type="application/pdf" width="100%" height="800px" />
  );
};

export default PdfViewer;