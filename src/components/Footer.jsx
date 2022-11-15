import { ReactComponent as KeyCapC } from "../svg/keycap_c.svg"
import { ReactComponent as KeyCapCTRL } from "../svg/keycap_ctrl.svg"
import { ReactComponent as KeyCapSHFT } from "../svg/keycap_shft.svg"
import { ReactComponent as KeyCapEnter } from "../svg/keycap_enter.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <p>made by <a target="_blank" rel="noreferrer" href="https://github.com/timometin">timo 💙</a></p>
      </div>
      <div className="footer-item">
        <div className="shortcuts">
          <div className="shortcuts-item">
            <p>submit:</p><KeyCapEnter />
          </div>
          <div className="shortcuts-item">
            <p>new line:</p><KeyCapSHFT /><p>+</p><KeyCapEnter />
          </div>
          <div className="shortcuts-item">
            <p>copy to clipboard:</p><KeyCapCTRL /><p>+</p><KeyCapSHFT /><p>+</p><KeyCapC />
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;
