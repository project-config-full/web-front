import { Component, signal, HostListener } from '@angular/core';
import { Config } from "./components/config/config";
import { Conteudo } from "./components/conteudo/conteudo";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Config, Conteudo, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-config');

  configIsOpen!: boolean;
  transitionOff: boolean = false;

  constructor() {
    const configIsOpenLS = localStorage.getItem('configIsOpen');
    this.configIsOpen = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;
  }

  @HostListener('window:resize', ['$event'])
  onRisize(event: any): void {
    this._applyStylesInConteudoCmp(event.target.innerWidth);
  }

  private _applyStylesInConteudoCmp(width: number): void{
    const changeTransitionOff = (): void => {
      this.transitionOff = true;
      setTimeout(() => this.transitionOff = false, 100);
    };

    if(width >= 1200) changeTransitionOff();
    if(width <= 1200) changeTransitionOff();
    if(width <= 950) changeTransitionOff();
    if(width <= 700) changeTransitionOff();
    if(width <= 450) changeTransitionOff();
  }
}
