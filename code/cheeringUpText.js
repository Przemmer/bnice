module.exports.function = function cheeringUpText () {
  
  var quotes = [
    "Life is too short for us to dwell on sadness. Cheer up and live life to the fullest.",
    "Keep believing, keep growing. Heaven will be cheering you on today, tomorrow, forever.",
    "In the middle of difficulty lies opportunity.",
    "Although life may not be easy now, in the end it’s all worth it. Everything will get better in time. So smile!",
    "You are confined only by the walls you build yourself.",
    "You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    "One of the happiest moments in life is when you find the courage to let go of what you can’t change.",
    "Stars can’t shine without darkness.",
    "What screws us up most in life is the picture in our head of how it’s supposed to be.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Someday, everything will make perfect sense. So for now, laugh at the confusion, smile through the tears, and keep reminding yourself that everything happens for a reason.",
    "You have to fight through some bad days to earn the best days of your life.",
    "Knowing when to walk away is wisdom. Being able to is courage. Walking away, with your head held high is dignity.",
    "Forget what’s gone, appreciate what remains, and look forward what’s coming next.",
    "Being happy doesn’t mean that everything is perfect. It simply means that you’ve decided to look beyond the imperfections of life."
  ];
  var roll = Math.floor(Math.random() * quotes.length)
  return quotes[roll];
}
