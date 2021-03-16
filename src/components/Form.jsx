import { useState } from 'react';
import TextArea from './TextArea';
import umlautize from "../common/umlautize";
import { toast } from "react-toastify";

const Form = () => {
  const [ inputArea, setInputArea ] = useState("");
  const [ outputArea, setOutputArea ] = useState("");
  
  const submitForm = (e) => {
    e.preventDefault();
    setOutputArea(umlautize(inputArea));
  }
  const handleEnter = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) { 
      submitForm(e);
      document.getElementById("outputfield").focus();
    }
  }
  const handleCopy = (e) => {
    if (e.keyCode === 67 && e.shiftKey && e.ctrlKey) { 
      e.preventDefault(); 
      copyToClipboard();
    }
  }
  const copyToClipboard = () => {
    const value = document.getElementById("outputfield")
    value.select();
    value.setSelectionRange(0, 99999);
    document.execCommand("copy");
    toast.info("👌 copied to clipboard!", { draggable: false, pauseOnHover: false, autoClose: 3000,  pauseOnFocusLoss: false, closeButton: false })
  }
  return (
    <form onSubmit={submitForm}>
    <TextArea onKeyDown={handleEnter} className="textfield" id="inputfield" name="Your text goes here..." value={inputArea} onChange={(e) => setInputArea(e.currentTarget.value)} />
    <TextArea onKeyDown={handleCopy} className="textfield" id="outputfield" name="Umlautized text comes out here..." value={outputArea} onChange={(e) => setOutputArea(e.currentTarget.value)} />
    <div className="btnContainer">
      <button id="submitBtn" className="btn btn-primary" disabled={inputArea === "" && true} type="submit" >✅ Umlautize!</button>
      <button className="btn btn-secondary" disabled={outputArea === "" && true} type="button" onClick={copyToClipboard}>📝 copy to clipboard</button>
    </div>
  </form>
  );
}
 
export default Form;
