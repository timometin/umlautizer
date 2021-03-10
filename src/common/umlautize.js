// Ä, ä  \u00c4, \u00e4
// Ö, ö  \u00d6, \u00f6
// Ü, ü  \u00dc, \u00fc
// ß     \u00df

export default function umlautize(originalText) {
  try {
    // replace all umlaut placeholders that are not escaped
    let umlautized = originalText.replace(/(?<!\\)(ae|oe|ue|sz)/igm, (match) => {
      switch (match[0]) {
        case "A":
          return "\u00c4";
        case "a":
          return "\u00e4";
        case "O":
          return "\u00d6";
        case "o":
          return "\u00f6";
        case "U":
          return "\u00dc";
        case "u":
          return "\u00fc";
        default:
          return "\u00df";
      }
    });
    // remove all escape characters to receive final text
    return umlautized.replace(/\\ae|\\oe|\\ue|\\sz/igm, match => match.substring(1));
  }
  catch(err) {
    console.error("Umlautize error:\n", err.message);
    return undefined;
  }
}
