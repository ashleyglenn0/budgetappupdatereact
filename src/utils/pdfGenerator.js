import jsPDF from 'jspdf';


export const generatePDF = (content, filename) => {
  const doc = new jsPDF();
  doc.text(content, 10, 10); // Adjust formatting as needed
  doc.save(`${filename}.pdf`);
};
