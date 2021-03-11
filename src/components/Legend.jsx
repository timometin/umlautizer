// Ä, ä  \u00c4, \u00e4
// Ö, ö  \u00d6, \u00f6
// Ü, ü  \u00dc, \u00fc
// ß     \u00df
const Legend = ({ onClick: handleClick, tableClass, legendClass }) => {
  return (
    <div className={legendClass}>
      <div className="legend-container">
        <div className={"legend-item"}>
          <button onClick={handleClick} id="legendIconBtn"><span id="legendIcon" className="fas fa-question-circle"></span></button>
          <table className={tableClass}>
            <tr>
              <td>Ae, ae</td>
              <td>{"\u00c4, \u00e4"}</td>
            </tr>
            <tr>
              <td>Oe, oe</td>
              <td>{"\u00d6, \u00f6"}</td>
            </tr>
            <tr>
              <td>Ue, ue</td>
              <td>{"\u00dc, \u00fc"}</td>
            </tr>
            <tr>
              <td>sz</td>
              <td>{"\u00df"}</td>
            </tr>
            <tr>
              <td>\</td>
              <td>Escape sign</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
 
export default Legend;
