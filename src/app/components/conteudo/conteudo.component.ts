import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {
  @Output() envi_config_value = new EventEmitter<boolean>();
  config: boolean = true;
  text_ativo = {
    lorem: true,
    chat: false
  }

  enviConfigValue(){
    this.envi_config_value.emit(this.config);
  }
}
