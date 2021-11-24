jQuery(document).ready(function(){
   $('html').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/4);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/4);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '~!@#$%^&*()-___=+[{]};:\|,<.>/?123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//About Me - I am a seventh grader who likes to cube, code, and read. I study in Delhi Public School Vasant Kunj and am part of the Grey Matters and CEEC clubs.
const phrases = [
  'About Me - I am a seventh grader',
  'who likes to cube, code, and read.',
  'I study in Delhi Public School Vasant Kunj ',
  'and am part of the Grey Matters and CEEC clubs.'
]

let counter = 0
const next = () => {
  fx.setText(phrases[counter])
  counter = (counter + 1) % phrases.length
}
for (var i=0; i<phrases.length; i++){
  var ab = document.querySelector('.about')
  var el = ab.lastElementChild
  var fx = new TextScramble(el)
  next()
  ab.appendChild(document.createElement("br"))
  ab.appendChild(document.createElement("span"))
  sleep(3000)
}
