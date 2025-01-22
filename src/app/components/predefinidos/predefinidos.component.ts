import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inputs } from '../../services/interface/interfaces.service';
import { predefinidos } from '../../services/interface/interfaces.service';

@Component({
  selector: 'app-predefinidos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './predefinidos.component.html',
  styleUrl: './predefinidos.component.css'
})
export class PredefinidosComponent {
  inputs: inputs[] = [
    {color: '#5acf5d', for: 'Cor das Configurações', id: 0},
    {color: '#B87333', for: 'Cor do Conteudo', id: 1},
    {color: '#833434', for: 'Cor do texto', id: 2},
    {color: '#3E2723', for: 'Cor do icone das configurações', id: 3}
  ]

  predefinidos: predefinidos[] = [
    { color_config: '#5acf5d', color_conteudo: '#B87333', color_text: '#833434', color_icon_config: '#3E2723' },
    { color_config: '#FF69B4', color_conteudo: '#800080', color_text: '#f5f5f5', color_icon_config: '#FFFFFF' },
    { color_config: '#4682B4', color_conteudo: '#C0C0C0', color_text: '#000000', color_icon_config: '#3E2723' }
  ]

  @Output() enviInput = new EventEmitter<{ color: string, index: number }>();

  enviInputColor(color: string, index: number){
    this.enviInput.emit({color, index})
  }
}
