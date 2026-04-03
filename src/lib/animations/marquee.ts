export class MarqueeClass {
  private element: HTMLElement;
  private speed: number;
  private position = 0;
  private animationId: number | null = null;

  private contentWidth = 0;
  private containerWidth = 0;
  private scrollWidth = 0;
  private container: HTMLElement | null = null;

  constructor(element: HTMLElement, speed = 1) {
    this.element = element;
    this.speed = speed;

    this.init();
  }

  private init() {
    this.contentWidth = this.element.scrollWidth;

    this.container = this.element.parentElement;

    // if container is null do nothing again
    if (!this.container) return;
    this.containerWidth = this.container.offsetWidth;

    this.scrollWidth = -(this.contentWidth - this.containerWidth);

    this.animate();
  }

  private animate() {
    this.position -= this.speed;

    if (this.position <= this.scrollWidth) {
      this.position = 0;
    }

    this.element.style.transform = `translateX(${this.position - 80}px)`;

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

  destroy() {
    this.pause();
  }
}
