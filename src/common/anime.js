const anime = require('animejs/lib/anime');
export function animeInit() {
  anime({
    targets: ['.slideDown'],
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100)
  })
}
