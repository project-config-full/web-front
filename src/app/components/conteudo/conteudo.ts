import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeConfig } from '../../services/changeConfig/change-config';
import { ChangeColor } from '../../services/change_color/change-color';
import { ChangeColorI } from '../../interfaces/change-color-i';

@Component({
  selector: 'app-conteudo',
  imports: [CommonModule],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.scss'
})
export class Conteudo {
  @Output() changeConfigEnv = new EventEmitter<boolean>();

  colorOfIconConfig: string = "black";
  colorOfText: string = "white";

  constructor(
    private changeConfigService: ChangeConfig,
    private changeColorService: ChangeColor
  ){
    this.changeColorService.$colorVal.subscribe((val: ChangeColorI) => {
      this.colorOfIconConfig = val.colorIcon ? val.colorIcon : this.colorOfIconConfig;
      this.colorOfText = val.colorText ? val.colorText : this.colorOfText;
    });
  }

  changeConfig(): void{
    const configIsOpenLS = localStorage.getItem('configIsOpen');
    const configIsOpenVal = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;

    localStorage.setItem('configIsOpen', JSON.stringify(!configIsOpenVal));

    this.changeConfigService.setConfigVal(!configIsOpenVal);
    this.changeConfigEnv.emit(!configIsOpenVal);
  }
}
