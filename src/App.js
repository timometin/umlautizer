import { useState } from 'react';
import TextArea from './components/TextArea';
import umlautize from "./common/umlautize";

function App() {
  const [ inputArea, setInputArea ] = useState("");
  const [ outputArea, setOutputArea ] = useState("");
  return (
    <div className="App">
      <form onSubmit={(e) => { e.preventDefault(); setOutputArea(umlautize(inputArea)); }}>
        <TextArea id="inputfield" name="Input" value={inputArea} onChange={(e) => setInputArea(e.currentTarget.value)} />
        <TextArea id="outputfield" name="Output" value={outputArea} onChange={(e) => setOutputArea(e.currentTarget.value)} />
        <button type="submit" >Umlautize!</button>
      </form>
    </div>
  );
}

export default App;
