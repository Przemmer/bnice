module.exports.function = function choosePicture () {
  
  var numPictures = 5;

  var roll = Math.ceil(Math.random() * numPictures);
  
  switch (roll) {
  case 1:
    return "http://bnice.pl/Leon.png"
  case 2:
    return "http://bnice.pl/Parmi.png";
  case 3:
    return "http://bnice.pl/Spidee.png";
  case 4:
    return "http://bnice.pl/Ybee.png";
  }
  return "http://bnice.pl/Lovee.png"
}
