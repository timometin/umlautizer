import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import HeaderBar from "./components/HeaderBar";
import Legend from './components/Legend';
import Form from "./components/Form";
import Footer from "./components/Footer";


function App() {
  const [ legendCollapsed, setlegendCollapsed ] = useState(true);

  useEffect(() => {
    const legendSetting = window.localStorage.getItem("legendCollapsed");
    if (legendSetting) {
      setlegendCollapsed(JSON.parse(legendSetting));
    }
    const returningVisitor = window.localStorage.getItem("returningVisitor");
    if (!returningVisitor) {
      toast.dark(<p>Welcome!👋<br/>Click the question mark icon in the top left corner to learn how to use Umlautizer!</p>, { draggable: false, autoClose: 20000, pauseOnFocusLoss: true, position: "top-center" })
      window.localStorage.setItem("returningVisitor", true)
    }
  }, []);

  const toggleLegend = () => {
    const setting = legendCollapsed === true ? false : true;
    setlegendCollapsed(setting);
    window.localStorage.setItem("legendCollapsed", setting);
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
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
