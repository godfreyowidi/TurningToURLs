// Turning strings to URL recursively
function replaceSpaces(str) {
  if (str.length < 2) {
    if (str === " ")
      return '%20';
    else
      return str;
  }

  if (str.charAt(0) === " ") {
    return "%20" + replaceSpaces(str.substring(1));
  } else {
    return str.substring(0, 1) + replaceSpaces(str.substring(1));
  }
}

console.log(replaceSpaces("Godfrey Jennifer Arthur John"));