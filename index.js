const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "hi bb",
    "vivi loves you so much",
    "she will always try her best for you",
    "Thank you for making me feel loved",
    "vivi also want to tell you that she appreciate you",
    "and that she is thankful to have a person to comfort her",
    "vivi said she may not be that expressive but she's thankful that you still stay w her",
    "she is so proud of you",
    "she will always be here for you",
    "You make me smile",
    "vivi is so happy w you",
    "she really do love you",
    "she will always try to be the best version of myself for you",
    "I love you my loml",
    "I will always choose you",
    "I'll be a better person for you",
    "thru your lowest and greatest version I will always stay w you",
    "vivi miss you 24/7!",
    "vivi hopes you stay w her forever",
    "I love you",
    "I may not be a great to advise or help but I always try my best!",
    "I hope you feel better now",
    "We may fight but I still loves you no matter what",
    "vivi is sorry if she gave you a problem",
    "vivi is sorry if she cause you a headache",
    "I'll be here waiting for you",
    "pls take care of yourself",
    "Please don't be hard on yourself it's not bad to rest",
    "Don't push yourself if you're tired it's not a sin to rest!",
    "Hi my pahinga",
    "I really appreciate having you in my life",
    "remember walang kulang sayo sobra kapa sa sobra",
    "I'm always here",
    "whatever you're feeling right now i know you'll get thru it, ikaw yan eh!",
    "i love you my only pogi bb",
    "I'll always wait patiently for you",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})