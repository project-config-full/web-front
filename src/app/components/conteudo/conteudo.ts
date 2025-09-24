import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conteudo',
  imports: [CommonModule],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.scss'
})
export class Conteudo {
  @Output() changeConfigEnv = new EventEmitter<boolean>();

  changeConfig(): void{
    const configIsOpenLS = localStorage.getItem('configIsOpen');
    const configIsOpenVal = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;

    localStorage.setItem('configIsOpen', JSON.stringify(!configIsOpenVal));

    this.changeConfigEnv.emit(!configIsOpenVal);
  }
}
