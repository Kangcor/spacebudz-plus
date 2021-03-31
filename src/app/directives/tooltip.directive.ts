import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[sbpTooltip]'
})
export class TooltipDirective {

  @Input() tooltipTitle: string;
  tooltip: HTMLElement;
  delay = 500;

  @HostListener('mouseover') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hidetooltip();
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {
  }

  showTooltip() {
    this.tooltip = this.renderer.createElement('span');
    this.tooltip.appendChild(this.renderer.createElement('span'));

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const top = hostPos.bottom;
    const left = hostPos.left + hostPos.width / 2;
    this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    this.renderer.appendChild(document.body, this.tooltip);
    this.renderer.addClass(this.tooltip, 'tooltip');
  }

  hidetooltip() {
    this.renderer.removeClass(this.tooltip, 'tooltip_show');
  }


}
