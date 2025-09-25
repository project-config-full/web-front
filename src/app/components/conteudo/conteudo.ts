import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeConfig } from '../../services/changeConfig/change-config';

@Component({
  selector: 'app-conteudo',
  imports: [CommonModule],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.scss'
})
export class Conteudo {
  constructor(private changeConfigService: ChangeConfig){}

  @Output() changeConfigEnv = new EventEmitter<boolean>();

  changeConfig(): void{
    const configIsOpenLS = localStorage.getItem('configIsOpen');
    const configIsOpenVal = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;

    localStorage.setItem('configIsOpen', JSON.stringify(!configIsOpenVal));

    this.changeConfigService.setConfigVal(!configIsOpenVal);
    this.changeConfigEnv.emit(!configIsOpenVal);
  }
}
