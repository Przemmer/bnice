module.exports.function = function onUserSad() {
  
  var result;
  
  var hours = new Date().getHours(); 
  
  if (hours < 6)
    return "night";
  if (hours < 8)
    return "early morning";
  if (hours < 10)
    return "morning";
  if (hours < 12)
    return "late morning";
  if (hours < 16)
    return "afternoon";
  if (hours < 18)
    return "late afternoon";
  if (hours < 22)
    return "evening";
  return "night";
}
