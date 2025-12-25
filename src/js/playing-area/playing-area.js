export default class PlayingArea {
  constructor(container) {
    this.container = container;
    this.intervalId = null; 
    this.init();
  }

  init() {
    this.container.innerHTML = ''; 

    for (let i = 0; i < 16; i++) {
      const item = document.createElement('li');
      item.className = 'playing-area__item';
      this.container.appendChild(item);
    }
  }

  randomMovingGoblin = () => {
    const items = this.container.querySelectorAll('.playing-area__item');
    const current = Array.from(items).findIndex(item => item.classList.contains('goblin'));

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * items.length);
    } while (randomIndex === current);

    items.forEach(item => item.classList.remove('goblin'));

    items[randomIndex].classList.add('goblin');
  };

  start() {
    if (this.intervalId) {
      clearInterval(this.intervalId); 
    }
    this.intervalId = setInterval(this.randomMovingGoblin, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    const goblin = this.container.querySelector('.goblin');
    if (goblin) {
      goblin.classList.remove('goblin');
    }
  }
}
