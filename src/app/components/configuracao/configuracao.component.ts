import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { CommonModule } from '@angular/common';
import { predefinidos } from '../../model/model';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';
import { PredeService } from '../../service/prede/prede.service';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [ButtonsComponent, CommonModule],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent implements OnInit {
  constructor(private serviceLocalS: LocalStorageService, private predeService: PredeService) {}

  @Output() enviState = new EventEmitter<boolean>()
  @Output() enviInput = new EventEmitter<{ color: string, index: number }>()
  @Output() enviPrede = new EventEmitter<predefinidos>()
  @Output() enviRemoveText = new EventEmitter<boolean>()
  @Output() enviTrocaText = new EventEmitter<boolean>()
  @Output() enviAnimation = new EventEmitter<number>()
  @Output() enviAnimationVal = new EventEmitter<boolean>()
  color_config: string = "#8b0000";
  btn_color_screen_value: boolean = false;

  ngOnInit(): void {
    this.btn_color_screen_value = this.serviceLocalS.getButton('color_of_screen') ?? false;

    if(this.serviceLocalS.getPrede() !== null && this.serviceLocalS.getPrede() > 0 && this.btn_color_screen_value){
      if(this.serviceLocalS.getInput('color_config_input') === this.predeService.predefinidos[this.predeService.index()].color_config){
        this.color_config = this.predeService.predefinidos[this.predeService.index()].color_config;
      }else{
        this.color_config = this.serviceLocalS.getInput('color_config_input');
      }
    }
  }

  receberButtonState(val: boolean){
    this.enviState.emit(val)
    this.color_config = val ? "#5acf5d" : "#8b0000";
    this.btn_color_screen_value = val;
  }

  receberInput(val: { color: string, index: number }){
    if(val.index === 0){
      this.color_config = val.color;
      return;
    }

    this.enviInput.emit(val);
  }

  receberAnimation(index: number){
    this.enviAnimation.emit(index);
  }

  receberPrede(prede: predefinidos){
    this.color_config = prede.color_config;

    this.enviPrede.emit(prede);
  }

  receberRemovText(val: boolean){
    this.enviRemoveText.emit(val);
  }

  receberTrocaText(val: boolean){
    this.enviTrocaText.emit(val);
  }
}
