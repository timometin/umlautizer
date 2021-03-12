const HeaderBar = ({ onClick: handleClick, btnActive }) => {
  const style = {
    color: btnActive ? "white" : "#2eb82e"
  }
  return (
    <nav className="nav-bar">
      <div className="nav-item">
      <button style={style} onClick={handleClick} id="legendIcon"><span className="fas fa-question-circle" /></button>
      </div>
      <div className="nav-item">
        <h1 className="website-title">Umlautizer</h1>
      </div>
    </nav>
  );
}
 
export default HeaderBar;
