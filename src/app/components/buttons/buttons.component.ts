import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, isFormArray } from '@angular/forms';
import { PredefinidosComponent } from '../predefinidos/predefinidos.component';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { Buttons, GetStyleButton, predefinidos } from '../../model/model';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, FormsModule, PredefinidosComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
  animations: [
    trigger('btnReload', [
      transition('inative <=> active', [
        animate('3s', keyframes([
          style({ opacity: 0.3 , pointerEvents: 'none'}),
          style({ opacity: 1 })
        ]))
      ])
    ])
  ]
})
export class ButtonsComponent {
  buttons: Buttons[] = [
    {
      predefinidos: true,
      button_state: false,
      troca_text: false,
      remove_text: false,
      reload: false,
      text_h4: 'Cor na tela',
      button_id: 'color_of_screen',
      text_button: { on: 'Outro', off: 'Padrão' },
      color_button: { on: '#C0C0C0', off: '#2C2C2C' },
      cirlce_left: { on: '80px', off: '0px' }
    },
    {
      predefinidos: false,
      button_state: false,
      troca_text: true,
      remove_text: false,
      reload: true,
      text_h4: 'Trocar texto',
      button_id: 'troca_text',
      text_button: { on: 'Chat', off: 'Lorem' },
      color_button: { on: '#C0C0C0', off: '#2C2C2C' },
      cirlce_left: { on: '80px', off: '0px' }
    },
    {
      predefinidos: false,
      button_state: false,
      troca_text: false,
      remove_text: true,
      reload: true,
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

  @Output() enviButtonState = new EventEmitter<boolean>()
  @Output() enviInput = new EventEmitter<{ color: string, index: number }>()
  @Output() enviPrede = new EventEmitter<predefinidos>()

  enviButtonActive(button: Buttons){
    if(button === this.buttons[0]){
      setTimeout(()=>{
        this.enviButtonState.emit(this.buttons[0].button_state)
      }, 10);
    }
  }

  receberInput(val: { color: string, index: number }){
    this.enviInput.emit(val);
  }

  receberPrede(prede: predefinidos){
    this.enviPrede.emit(prede)
  }

  @Output() enviTrocaText = new EventEmitter<boolean>();
  @Output() enviRemoveText = new EventEmitter<boolean>();

  ativar_reload: boolean = false;
  troca_text: boolean = false;
  remove_text: boolean = false;

  reloadBtn(button: Buttons){
    if(button.reload){
      this.ativar_reload = !this.ativar_reload;


      if(button.troca_text){
        this.troca_text = !this.troca_text;
      }

      if(button.remove_text){
        this.remove_text = !this.remove_text;
      }

      this.enviTrocaText.emit(this.troca_text);
      this.enviRemoveText.emit(this.remove_text);
    }
  }
}
