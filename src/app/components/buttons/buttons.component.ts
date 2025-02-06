import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PredefinidosComponent } from '../predefinidos/predefinidos.component';
import { AnimationsComponent } from '../animations/animations.component';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { Buttons, GetStyleButton, predefinidos, color_buttons, colorAnimation } from '../../model/model';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';
import { PredeService } from '../../service/prede/prede.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, FormsModule, PredefinidosComponent, AnimationsComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
  animations: [
    trigger('btnReload', [
      transition('init <=> final', [
        animate('3s', keyframes([
          style({ opacity: 0.3 , pointerEvents: 'none'}),
          style({ opacity: 1 })
        ]))
      ])
    ])
  ]
})
export class ButtonsComponent implements OnInit{
  constructor(private serviceLocalS: LocalStorageService, private predeService: PredeService) { }

  @Input() btn_color_screen_value: boolean = false;
  color_buttons: color_buttons = { on: '#C0C0C0', off: '#2C2C2C' };

  buttons: Buttons[] = [
    {
      predefinidos: true,
      troca_animation: false,
      button_state: false,
      troca_text: false,
      remove_text: false,
      reload: false,
      reload_especial: false,
      text_h4: 'Cor na tela',
      button_id: 'color_of_screen',
      text_button: { on: 'Outro', off: 'Padrão' },
      color_button: { on: this.color_buttons.on, off: this.color_buttons.off },
      circle_left: { on: '80px', off: '0px' },
      color_circle: "#f5deb3"
    },
    {
      predefinidos: false,
      troca_animation: true,
      button_state: false,
      troca_text: false,
      remove_text: false,
      reload: false,
      reload_especial: true,
      text_h4: 'Animação',
      button_id: 'animation',
      text_button: { on: 'Outro', off: 'Padrão' },
      color_button: { on: this.color_buttons.on, off: this.color_buttons.off },
      circle_left: { on: '80px', off: '0px' },
      color_circle: "#f5deb3"
    },
    {
      predefinidos: false,
      troca_animation: false,
      button_state: false,
      troca_text: true,
      remove_text: false,
      reload: true,
      reload_especial: false,
      text_h4: 'Trocar texto',
      button_id: 'troca_text',
      text_button: { on: 'Chat', off: 'Lorem' },
      color_button: { on: this.color_buttons.on, off: this.color_buttons.off },
      circle_left: { on: '80px', off: '0px' },
      color_circle: "#f5deb3"
    },
    {
      predefinidos: false,
      troca_animation: false,
      button_state: false,
      troca_text: false,
      remove_text: true,
      reload: true,
      reload_especial: false,
      text_h4: 'Remover texto',
      button_id: 'remov_text',
      text_button: { on: 'Sem', off: 'Com' },
      color_button: { on: this.color_buttons.on, off: this.color_buttons.off },
      circle_left: { on: '80px', off: '0px' },
      color_circle: "#f5deb3"
    }
  ]

  color_animation: colorAnimation = { remov_text: '#2c2c2c', troca_text: '#c0c0c0' };

  ngOnInit(): void {
    this.buttons.forEach(button =>{
      button.button_state = this.serviceLocalS.getButton(button.button_id);

      if(this.serviceLocalS.getPrede() !== null && this.serviceLocalS.getPrede() > 0 && this.btn_color_screen_value){
        button.color_button = this.predeService.predefinidos[this.predeService.index()].color_button;
        button.color_circle = this.predeService.predefinidos[this.predeService.index()].color_circle;
      }
    });

    this.troca_text = this.serviceLocalS.getButton('troca_text') ?? false;
    this.remove_text = this.serviceLocalS.getButton('remov_text') ?? false;
  }

  getStyleButton(button: Buttons): GetStyleButton{
    return button.button_state ? {
      text_button: button.text_button.on,
      color_button: button.color_button.on,
      color_text: button.color_button.off,
      circle_left: button.circle_left.on
    } : {
      text_button: button.text_button.off,
      color_button: button.color_button.off,
      color_text: button.color_button.on,
      circle_left: button.circle_left.off
    }
  }

  @Output() enviButtonState = new EventEmitter<boolean>()
  @Output() enviInput = new EventEmitter<{ color: string, index: number }>()
  @Output() enviPrede = new EventEmitter<predefinidos>()
  @Output() enviAnimationVal = new EventEmitter<boolean>();

  animationVal: boolean = false;

  enviButtonActive(button: Buttons){
    if(button === this.buttons[0]){
      if(button.button_state){
        this.color_animation.remov_text = "#663e10";
        this.color_animation.troca_text = "#d47a13";
      }else{
        this.color_animation.remov_text = "#2c2c2c";
        this.color_animation.troca_text = "#c0c0c0";
      }

      this.predeService.inputs[0].color = "#5acf5d";
      this.predeService.inputs[1].color = "#B87333";
      this.predeService.inputs[2].color = "#833434";
      this.predeService.inputs[3].color = "#873408";
      this.serviceLocalS.setInput('color_config_input', "#5acf5d");
      this.serviceLocalS.setInput('color_conteudo_input', "#B87333");
      this.serviceLocalS.setInput('color_text_input', "#833434");
      this.serviceLocalS.setInput('color_icon_config_input', "#873408");

      this.serviceLocalS.setPrede(1);
      setTimeout(()=>{
        this.enviButtonState.emit(this.buttons[0].button_state)
        if(button.button_state){
          this.buttons.forEach(button_ => {
            button_.color_button = { on: "#663e10", off: "#d47a13" };
            button_.color_circle = "#a35603";
          });
        }else{
          this.buttons.forEach(button_ => {
            button_.color_button = { on: "#C0C0C0", off: "#2C2C2C" };
            button_.color_circle = "#f5deb3";
          });
        }
      }, 10);
    }

    if(button === this.buttons[1]){
      if(button.button_state){
        this.enviAnimation.emit(0);
        this.serviceLocalS.setAnimation(0);
      }else{
        this.serviceLocalS.setAnimation(-1);
        this.enviAnimation.emit(-1);
      }
    }
  }

  setButton(button_id: string, val: boolean){
    this.serviceLocalS.setButton(button_id, val);
  }

  enviInfos(button: Buttons){
   this.enviButtonActive(button);
   this.setButton(button.button_id, button.button_state);
  }

  receberInput(val: { color: string, index: number }){
    this.enviInput.emit(val);
  }

  receberPrede(prede: predefinidos){
    this.enviPrede.emit(prede)
    this.color_buttons = prede.color_button;
    this.color_animation.remov_text = prede.color_button.on;
    this.color_animation.troca_text = prede.color_button.off;

    this.buttons.forEach(button => {
      button.color_button = { on: this.color_buttons.on, off: this.color_buttons.off };
      button.color_circle = prede.color_circle;
    });
  }


  @Output() enviAnimation = new EventEmitter<number>();
  @Output() enviTrocaText = new EventEmitter<boolean>();
  @Output() enviRemoveText = new EventEmitter<boolean>();

  receberAnimation(index: number){
    this.enviAnimation.emit(index);
  }

  ativar_reload: boolean = false;
  ativar_reload_especial: boolean = false;
  troca_text: boolean = false;
  remove_text: boolean = false;

  reloadBtn(button: Buttons){
    if(button.reload){
      this.ativar_reload = !this.ativar_reload;
      this.ativar_reload_especial = !this.ativar_reload_especial;

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

  click_button(button: Buttons){
    this.reloadBtn(button);
  }
}
