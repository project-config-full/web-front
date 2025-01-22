import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

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
  @Input() color_conteudo: string = "#2c2c2c"
  @Input() color_icon_config: string = "#000000"
  @Input() color_text: string = "#f5f5f5"

  enviConfigValue(){
    this.envi_config_value.emit(this.config);
  }

  @Input()
  set button_state(val: boolean){
    this.color_conteudo = val ? "#B87333" : "#2c2c2c";
    this.color_icon_config = val ? "#873408" : "#000000";
    this.color_text = val ? "#833434" : "#f5f5f5";
  }
}
