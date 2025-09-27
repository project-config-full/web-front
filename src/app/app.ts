import { Component, signal, HostListener } from '@angular/core';
import { Config } from "./components/config/config";
import { Conteudo } from "./components/conteudo/conteudo";
import { CommonModule } from '@angular/common';
import { ChangeColor } from './services/change_color/change-color';
import { ChangeColorI } from './interfaces/change-color-i';

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

  colorOfConfig: string = "darkred";
  colorOfContent: string = "#2c2c2c";

  constructor(
    private changeColorService: ChangeColor
  ) {
    this.changeColorService.$colorVal.subscribe((val: ChangeColorI)=>{
      this.colorOfConfig = val.colorConfig ? val.colorConfig : this.colorOfConfig;
      this.colorOfContent = val.colorContent ? val.colorContent : this.colorOfContent;
    });

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
