import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { predefinidos, inputs } from '../../model/model';
import { PredeService } from '../../service/prede/prede.service';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';

@Component({
  selector: 'app-predefinidos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './predefinidos.component.html',
  styleUrl: './predefinidos.component.css'
})
export class PredefinidosComponent implements OnInit {
  constructor(private predeService: PredeService, private serviceLocalS: LocalStorageService) {}

  inputs: inputs[] = [
    {color: '#5acf5d', for: 'Cor das Configurações', id: 0},
    {color: '#B87333', for: 'Cor do Conteudo', id: 1},
    {color: '#833434', for: 'Cor do texto', id: 2},
    {color: '#3E2723', for: 'Cor do icone das configurações', id: 3}
  ]

  predefinidos: predefinidos[] = [];

  ngOnInit(): void {
    this.predefinidos = this.predeService.predefinidos;

    if(this.serviceLocalS.getPrede() !== null && this.serviceLocalS.getPrede() > 0){
      this.inputs[0].color = this.predeService.predefinidos[this.predeService.index()].color_config;
      this.inputs[1].color = this.predeService.predefinidos[this.predeService.index()].color_conteudo;
      this.inputs[2].color = this.predeService.predefinidos[this.predeService.index()].color_text;
      this.inputs[3].color = this.predeService.predefinidos[this.predeService.index()].color_icon_config;
    }
  }

  @Output() enviInput = new EventEmitter<{ color: string, index: number }>();
  @Output() enviPredefinidos = new EventEmitter<predefinidos>()

  enviInputColor(color: string, index: number){
    this.enviInput.emit({color, index})
  }

  enviPrede(prede: predefinidos){
    this.inputs[0].color = prede.color_config;
    this.inputs[1].color = prede.color_conteudo;
    this.inputs[2].color = prede.color_text;
    this.inputs[3].color = prede.color_icon_config;
    this.enviPredefinidos.emit(prede);
    this.serviceLocalS.setPrede(this.verificarIndex(prede) + 1);
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
