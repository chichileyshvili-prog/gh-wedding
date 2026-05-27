
const weddingDate = new Date("2026-07-18T17:00:00");

function updateTimer(){
const now = new Date();
const diff = weddingDate - now;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff/(1000*60*60))%24);
const minutes = Math.floor((diff/(1000*60))%60);

document.getElementById('timer').innerHTML =
`${days} дней • ${hours} часов • ${minutes} минут`;
}

updateTimer();
setInterval(updateTimer,60000);

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
},{threshold:0.15});

document.querySelectorAll('.fade-up').forEach(el=>{
observer.observe(el);
});

window.addEventListener('load', () => {
const audio = document.getElementById('bgMusic');

audio.volume = 0.55;

const playPromise = audio.play();

if (playPromise !== undefined) {
playPromise.then(() => {
setTimeout(() => {
audio.muted = false;
}, 400);
}).catch(() => {
document.body.addEventListener('touchstart', () => {
audio.muted = false;
audio.play();
}, { once:true });

document.body.addEventListener('click', () => {
audio.muted = false;
audio.play();
}, { once:true });
});
}
});
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");

  if (music.paused) {
    music.play();
  }
}, { once: true });
