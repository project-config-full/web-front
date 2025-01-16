import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inputs } from '../../services/interface/interfaces.service';

@Component({
  selector: 'app-predefinidos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './predefinidos.component.html',
  styleUrl: './predefinidos.component.css'
})
export class PredefinidosComponent {
  inputs: inputs[] = [
    { color: '#8b0000', for: 'Cor das Configurações'},
    {color: '#2c2c2c', for: 'Cor do Conteudo'},
    {color: '#f5f5f5', for: 'Cor do texto'},
    {color: '#000000', for: 'Cor do icone das configurações'}
  ]

  predefinidos = [
    { color_config: '#4CAF50', color_conteudo: '#B87333', color_text: '#f5f5f5', color_icon_config: '#3E2723' },
    { color_config: '#FF69B4', color_conteudo: '#800080', color_text: '#f5f5f5', color_icon_config: '#FFFFFF' },
    { color_config: '#4682B4', color_conteudo: '#C0C0C0', color_text: '#000000', color_icon_config: '#3E2723' }
  ]
}
