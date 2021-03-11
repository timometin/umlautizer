import { useState } from 'react';
import TextArea from './components/TextArea';
import umlautize from "./common/umlautize";
import Legend from './components/Legend';

function App() {
  const [ inputArea, setInputArea ] = useState("");
  const [ outputArea, setOutputArea ] = useState("");
  const [ legendCollapsed, setlegendCollapsed ] = useState(true);
  const copyToClipboard = ({ currentTarget }) => {
    const value = document.getElementById("outputfield");
    value.select();
    value.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  const toggleLegendCollapsed = () => {
    setlegendCollapsed(legendCollapsed === true ? false : true);
  }
  return (
    <div className="App">
      <Legend onClick={toggleLegendCollapsed} legendClass={legendCollapsed === true ? "legend" : "legend expanded"} tableClass={legendCollapsed === true ? "legend-table collapsed" : "legend-table"} />
      <div className={legendCollapsed === true ? "main" : "main expanded"}>
        <form onSubmit={(e) => { e.preventDefault(); setOutputArea(umlautize(inputArea)); }}>
          <div className="row">
            <TextArea className="textfield" id="inputfield" name="Input" value={inputArea} onChange={(e) => setInputArea(e.currentTarget.value)} />
            <TextArea className="textfield" id="outputfield" name="Output" value={outputArea} onChange={(e) => setOutputArea(e.currentTarget.value)} />
          </div>
          <div className="row">
            <button id="submitBtn" className="btn btn-primary" disabled={inputArea === "" && true} type="submit" >Umlautize!</button>
            <button className="btn btn-secondary" disabled={outputArea === "" && true} type="button" onClick={copyToClipboard}>copy to clipboard</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
