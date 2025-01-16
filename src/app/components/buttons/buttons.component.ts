import { Component } from '@angular/core';
import { Buttons } from './../../services/interface/interfaces.service'
import { CommonModule } from '@angular/common';
import { GetStyleButton } from './../../services/interface/interfaces.service';
import { FormsModule } from '@angular/forms';
import { PredefinidosComponent } from '../predefinidos/predefinidos.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, FormsModule, PredefinidosComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  buttons: Buttons[] = [
    {
      predefinidos: true,
      button_state: false,
      text_h4: 'Cor na tela',
      button_id: 'color_of_screen',
      text_button: { on: 'Outro', off: 'Padrão' },
      color_button: { on: '#C0C0C0', off: '#2C2C2C' },
      cirlce_left: { on: '80px', off: '0px' }
    },
    {
      predefinidos: false,
      button_state: false,
      text_h4: 'Trocar texto',
      button_id: 'troca_text',
      text_button: { on: 'Chat', off: 'Lorem' },
      color_button: { on: '#C0C0C0', off: '#2C2C2C' },
      cirlce_left: { on: '80px', off: '0px' }
    },
    {
      predefinidos: false,
      button_state: false,
      text_h4: 'Remover texto',
      button_id: 'remov_text',
      text_button: { on: 'Sem', off: 'Com' },
      color_button: { on: '#C0C0C0', off: '#2C2C2C' },
      cirlce_left: { on: '80px', off: '0px' }
    }
  ]

  getStyleButton(button: Buttons): GetStyleButton{
    return button.button_state ? {
      text_button: button.text_button.on,
      color_button: button.color_button.on,
      color_text: button.color_button.off,
      circle_left: button.cirlce_left.on
    } : {
      text_button: button.text_button.off,
      color_button: button.color_button.off,
      color_text: button.color_button.on,
      circle_left: button.cirlce_left.off
    }
  }

  teste(button = this.buttons[0]){
    console.log(this.getStyleButton(button).color_button);
  }
}
