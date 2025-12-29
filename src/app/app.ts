import { Component, signal, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Config } from "./components/config/config";
import { Conteudo } from "./components/conteudo/conteudo";
import { CommonModule } from '@angular/common';
import { ChangeColor } from './services/change_color/change-color';
import { ChangeColorI } from './interfaces/change-color-i';
import { SettingSide } from './services/settingSide/setting-side';
import { SettingsSideModel } from './models/settings_side_model/settings-side-model';
import { ModalWindow } from "./components/modal-window/modal-window";
import { ChangeModalWindow } from './services/changeModalWindow/change-modal-window';

@Component({
  selector: 'app-root',
  imports: [Config, Conteudo, CommonModule, ModalWindow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit{
  protected readonly title = signal('project-config');

  configIsOpen!: boolean;
  activeChangeSideConfig!: boolean;
  transitionOff: boolean = false;

  colorOfConfig: string = "darkred";
  colorOfContent: string = "#2c2c2c";

  sideAll: string = "left";

  modalWindowIsOpen: boolean = false;

  constructor(
    private changeColorService: ChangeColor,
    private settingSideService: SettingSide,
    private changeModalWindowService: ChangeModalWindow,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.changeModalWindowService.$openingModalWindow.subscribe((val: boolean)=>{
      this.modalWindowIsOpen = val;
    });

    this.changeColorService.$colorVal.subscribe((val: ChangeColorI)=>{
      this.colorOfConfig = val.colorConfig ? val.colorConfig : this.colorOfConfig;
      this.colorOfContent = val.colorContent ? val.colorContent : this.colorOfContent;
    });

    const configIsOpenLS = localStorage.getItem('configIsOpen');
    this.configIsOpen = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;

    this.settingSideService.$settingSideVal.subscribe((val: SettingsSideModel) => {
      this.transitionOff = true;

      setTimeout(() => this.transitionOff = false, 100);

      this.activeChangeSideConfig = (val.side && val.side !== "left" && val.side !== "right") as boolean;

      this.sideAll = val.side || "left";
    });

    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onRisize(event: any): void {
    this._applyStylesInConteudoCmp(event.target.innerWidth);
  }

  private widthIsSmall: boolean = window.innerWidth <= 700;

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

    if(width <= 700 && !this.widthIsSmall){
      this.widthIsSmall = true;
      window.location.reload();
    }

    if(width > 700 && this.widthIsSmall){
      this.widthIsSmall = false;
      window.location.reload();
    }
  }
}
