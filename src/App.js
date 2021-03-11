import { useState } from 'react';
import TextArea from './components/TextArea';
import umlautize from "./common/umlautize";

function App() {
  const [ inputArea, setInputArea ] = useState("");
  const [ outputArea, setOutputArea ] = useState("");
  const copyToClipboard = ({ currentTarget }) => {
    const value = document.getElementById("outputfield");
    value.select();
    value.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  return (
    <div className="App">
      <form onSubmit={(e) => { e.preventDefault(); setOutputArea(umlautize(inputArea)); }}>
        <div className="row">
          <TextArea className="textfield" id="inputfield" name="Input" value={inputArea} onChange={(e) => setInputArea(e.currentTarget.value)} />
          <TextArea className="textfield" id="outputfield" name="Output" value={outputArea} onChange={(e) => setOutputArea(e.currentTarget.value)} />
        </div>
        <div className="row">
          <button id="firstbtn" className="btn btn-primary" disabled={inputArea === "" && true} type="submit" >Umlautize!</button>
          <button className="btn btn-secondary" disabled={outputArea === "" && true} type="button" onClick={copyToClipboard}>copy to clipboard</button>
        </div>
      </form>
    </div>
  );
}

export default App;
