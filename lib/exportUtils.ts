import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Convierte un arreglo JSON genérico en formato CSV descargable.
 */
export function exportToCSV(data: any[], filename: string = 'exportacion.csv') {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]);
  const rows = data.map(row => headers.map(h => JSON.stringify(row[h] || '')).join(','));
  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Genera un PDF extendido y estructurado (Reporte Forense)
 */
export function exportToPDFExtendido(title: string, subtitle: string, columns: string[], rows: any[][], filename: string = 'reporte_generado.pdf') {
  const doc = new jsPDF('landscape');
  doc.setFontSize(20);
  doc.text(title, 14, 22);
  doc.setFontSize(11);
  doc.setTextColor(100);
  doc.text(subtitle, 14, 30);
  autoTable(doc, {
    startY: 36,
    head: [columns],
    body: rows,
    theme: 'grid',
    styles: { fontSize: 8 },
    headStyles: { fillColor: [41, 128, 185] },
  });
  doc.save(filename);
}
