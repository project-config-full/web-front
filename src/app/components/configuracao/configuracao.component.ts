import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { CommonModule } from '@angular/common';
import { predefinidos } from '../../services/interface/interfaces.service';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [ButtonsComponent, CommonModule],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent {
  @Output() enviState = new EventEmitter<boolean>()
  @Output() enviInput = new EventEmitter<{ color: string, index: number }>()
  @Output() enviPrede = new EventEmitter<predefinidos>()
  color_config: string = "#8b0000"

  receberButtonState(val: boolean){
    this.enviState.emit(val)
    this.color_config = val ? "#5acf5d" : "#8b0000";
  }

  receberInput(val: { color: string, index: number }){
    if(val.index === 0){
      this.color_config = val.color;
      return;
    }

    this.enviInput.emit(val);
  }

  receberPrede(prede: predefinidos){
    this.color_config = prede.color_config;

    this.enviPrede.emit(prede);
  }
}
