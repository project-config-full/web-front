import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { predefinidos, inputs } from '../../model/model';
import { PredeService } from '../../service/prede/prede.service';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-predefinidos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './predefinidos.component.html',
  styleUrl: './predefinidos.component.css'
})
export class PredefinidosComponent implements OnInit {
  constructor(private predeService: PredeService, private serviceLocalS: LocalStorageService) {}

  @Input() btn_color_screen_value: boolean = false;

  inputs: inputs[] = [];

  predefinidos: predefinidos[] = [];

  ngOnInit(): void {
    this.predefinidos = this.predeService.predefinidos;
    this.inputs = this.predeService.inputs;

    if(this.serviceLocalS.getPrede() !== null && this.serviceLocalS.getPrede() > 0 && this.btn_color_screen_value){
      this.inputs.forEach(input =>{
        input.color = this.serviceLocalS.getInput(input._idLS);
      })
    }
  }

  @Output() enviInput = new EventEmitter<{ color: string, index: number }>();
  @Output() enviPredefinidos = new EventEmitter<predefinidos>()

  enviInputColor(color: string, index: number, _idLS: string){
    this.enviInput.emit({color, index})
    this.serviceLocalS.setInput(_idLS, color);
  }

  enviPrede(prede: predefinidos){
    this.inputs[0].color = prede.color_config;
    this.inputs[1].color = prede.color_conteudo;
    this.inputs[2].color = prede.color_text;
    this.inputs[3].color = prede.color_icon_config;
    this.enviPredefinidos.emit(prede);
    this.serviceLocalS.setPrede(this.verificarIndex(prede) + 1);

    this.inputs.forEach(input =>{
      this.serviceLocalS.setInput(input._idLS, input.color);
    })
  }

  verificarIndex(prede: predefinidos): number {
    for(let i = 0; i < this.predefinidos.length; i++){
        if(prede === this.predefinidos[i]){
          return i;
        }
    }

    return -1;
  }
}
