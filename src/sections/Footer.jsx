import { IoFlowerOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-brand">
          <span className="footer-lily">
            <IoFlowerOutline size={28} color="#DC2626"/>
        </span>
          Indri Puspita Rini
        </span>

        <span className="footer-divider">·</span>
        <span>Kota Cimahi, West Java, Indonesia</span>

        <span className="footer-divider">·</span>
        <span>© {new Date().getFullYear()} Some rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;