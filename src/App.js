import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import umlautize from "./common/umlautize";
import HeaderBar from "./components/HeaderBar";
import Legend from './components/Legend';
import TextArea from './components/TextArea';
import Footer from "./components/Footer";
import { ReactComponent as KeyCapC } from "./svg/keycap_c.svg"
import { ReactComponent as KeyCapCTRL } from "./svg/keycap_ctrl.svg"
import { ReactComponent as KeyCapSHFT } from "./svg/keycap_shft.svg"
import { ReactComponent as KeyCapEnter } from "./svg/keycap_enter.svg"

function App() {
  const [ inputArea, setInputArea ] = useState("");
  const [ outputArea, setOutputArea ] = useState("");
  const [ legendCollapsed, setlegendCollapsed ] = useState(true);

  useEffect(() => {
    const legendSetting = window.localStorage.getItem("legendCollapsed");
    if (legendSetting) {
      setlegendCollapsed(JSON.parse(legendSetting));
    }
    const returningVisitor = window.localStorage.getItem("returningVisitor");
    if (!returningVisitor) {
      toast.dark(<p>Welcome!👋<br/>Click the questionmark icon in the top left corner to learn how to use Umlautizer!</p>, { draggable: false, autoClose: 20000, pauseOnFocusLoss: true, position: "top-center" })
      window.localStorage.setItem("returningVisitor", true)
    }
  }, []);

  const copyToClipboard = () => {
    const value = document.getElementById("outputfield");
    value.select();
    value.setSelectionRange(0, 99999);
    document.execCommand("copy");
    toast.info("👌 copied to clipboard!", { draggable: false, pauseOnHover: false, autoClose: 3000,  pauseOnFocusLoss: false, closeButton: false })
  }
  const toggleLegend = () => {
    const setting = legendCollapsed === true ? false : true;
    setlegendCollapsed(setting);
    window.localStorage.setItem("legendCollapsed", setting);
  }
  const handleEnter = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) { 
      e.preventDefault(); 
      setOutputArea(umlautize(inputArea));
      document.getElementById("outputfield").focus();
    }
  }
  const handleCopy = (e) => {
    if (e.keyCode === 67 && e.shiftKey && e.ctrlKey) { 
      e.preventDefault(); 
      copyToClipboard();
    }
  }
  return (
    <div className="App">
      <ToastContainer />
      <HeaderBar btnActive={legendCollapsed} onClick={toggleLegend} />
      <div className="main">
        <div hidden={legendCollapsed} className="main-item small">
          <Legend />
        </div>
        <div className="main-item big">
          <form onSubmit={(e) => { e.preventDefault(); setOutputArea(umlautize(inputArea)); }}>
            <TextArea onKeyDown={handleEnter} className="textfield" id="inputfield" name="Your text goes here..." value={inputArea} onChange={(e) => setInputArea(e.currentTarget.value)} />
            <TextArea onKeyDown={handleCopy} className="textfield" id="outputfield" name="Umlautized text comes out here..." value={outputArea} onChange={(e) => setOutputArea(e.currentTarget.value)} />
            <div className="btnContainer">
              <button id="submitBtn" className="btn btn-primary" disabled={inputArea === "" && true} type="submit" >✅ Umlautize!</button>
              <button className="btn btn-secondary" disabled={outputArea === "" && true} type="button" onClick={copyToClipboard}>📝 copy to clipboard</button>
            </div>
          </form>
        </div>
      </div>
      <Footer>
        <p>Made with 💙 by <a target="_blank" rel="noreferrer" href="http://celik.io">Timo Celik</a></p>
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
      </Footer>
    </div>
  );
}

export default App;
