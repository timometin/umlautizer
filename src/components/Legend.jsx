// Ä, ä  \u00c4, \u00e4
// Ö, ö  \u00d6, \u00f6
// Ü, ü  \u00dc, \u00fc
// ß     \u00df
const Legend = () => {
  return (
    <div className="legend">
      <p>You can use Umlautizer to add german Umlaute to your Text without the need for a german keyboard. Simply use the placeholders from the table below.</p>
      <p>Pressing <b>ENTER</b> within the upper text field or pressing the <b>Umlautize!</b> button will generate your Text with the proper Umlaute in the lower text field.</p>
      <p>To add a new line use <b>SHIFT+ENTER.</b></p>
      <p>In some words, one of the placeholders might be part of the actual word and shouldn't be converted into an Umlaut.<br/>To prevent the umlautization of the placeholder simply add the escape sign in front of the placeholder:<br/>vis\uelle<br/>Fra\uen</p>
      <table>
        <caption>Placeholders</caption>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}
 
export default Legend;
