import { useState, useEffect } from 'react';
import TextArea from './components/TextArea';
import umlautize from "./common/umlautize";
import Legend from './components/Legend';
import HeaderBar from "./components/HeaderBar";

function App() {
  const [ inputArea, setInputArea ] = useState("");
  const [ outputArea, setOutputArea ] = useState("");
  const [ legendCollapsed, setlegendCollapsed ] = useState(true);
  useEffect(() => {
    const legendSetting = window.localStorage.getItem("legendCollapsed");
    if (legendSetting) {
      setlegendCollapsed(JSON.parse(legendSetting));
    }
  }, []);
  const copyToClipboard = ({ currentTarget }) => {
    const value = document.getElementById("outputfield");
    value.select();
    value.setSelectionRange(0, 99999);
    document.execCommand("copy");
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
    }
  }
  return (
    <div className="App">
      <HeaderBar btnActive={legendCollapsed} onClick={toggleLegend} />
      <div className="main">
        <div hidden={legendCollapsed} className="main-item small">
          <Legend />
        </div>
        <div className="main-item big">
          <form onSubmit={(e) => { e.preventDefault(); setOutputArea(umlautize(inputArea)); }}>
            <TextArea onKeyDown={handleEnter} className="textfield" id="inputfield" name="Input" value={inputArea} onChange={(e) => setInputArea(e.currentTarget.value)} />
            <TextArea className="textfield" id="outputfield" name="Output" value={outputArea} onChange={(e) => setOutputArea(e.currentTarget.value)} />
            <button id="submitBtn" className="btn btn-primary" disabled={inputArea === "" && true} type="submit" >Umlautize!</button>
            <button className="btn btn-secondary" disabled={outputArea === "" && true} type="button" onClick={copyToClipboard}>copy to clipboard</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
