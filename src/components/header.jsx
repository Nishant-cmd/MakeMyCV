import PrinterLogo from '../assets/printer.svg';
import DownloadLogo from '../assets/download.svg';
import '../App.css';

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div className="header-text">
        <h2 style={{ color: '#FFFFFF' }}>MakeMyCv</h2>
        <p style={{ color: '#a3a3a3' }}> Build your professional story</p>
      </div>
      <div className="header-buttons" style={{ display: 'flex', gap: '1.5rem' }}>
        <button type="button" className="print-btn">
          <img src={PrinterLogo} alt="Printer Image" />
          <span>Print</span>
        </button>
        <button type="button" className="download-btn">
          <img src={DownloadLogo} alt="Download Image" />
          <span>Download PDF</span>
        </button>
      </div>
    </header>
  );
}
