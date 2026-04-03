export class MarqueeClass {
  private element: HTMLElement;
  private speed: number;
  private position = 0;
  private animationId: number | null = null;
  private contentWidth = 0;

  constructor(element: HTMLElement, speed = 1) {
    this.element = element;
    this.speed = speed;

    this.init();
  }

  private init() {
    this.contentWidth = this.element.offsetWidth;
    this.animate();
  }

  private animate() {
    this.position -= this.speed;

    if (Math.abs(this.position) >= this.contentWidth) {
      this.position = 0;
    }

    this.element.style.transform = `translateX(${this.position}px)`;

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  pause() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resume() {
    if (!this.animationId) {
      this.animate();
    }
  }
}
