import { Injectable } from '@angular/core';
import { predefinidos, inputs } from '../../model/model';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PredeService {
  constructor(private service: LocalStorageService) {}

  inputs: inputs[] = [
      {color: '#5acf5d', for: 'Cor das Configurações', id: 0, _idLS: 'color_config_input'},
      {color: '#B87333', for: 'Cor do Conteudo', id: 1, _idLS: 'color_conteudo_input'},
      {color: '#833434', for: 'Cor do texto', id: 2, _idLS: 'color_text_input'},
      {color: '#873408', for: 'Cor do icone das configurações', id: 3, _idLS: 'color_icon_config_input'}
    ]

  predefinidos: predefinidos[] = [
      { 
        color_config: '#5acf5d',
        color_conteudo: '#B87333',
        color_text: '#833434',
        color_icon_config: '#873408',
        color_button: { on: '#663e10', off: '#d47a13' },
        color_circle: '#a35603'
       },
      { 
        color_config: '#FF69B4',
        color_conteudo: '#800080',
        color_text: '#FE62E2',
        color_icon_config: '#E9AEF9',
        color_button: { on: '#a909e8', off: '#e3009b' },
        color_circle: '#7509bd' 
      },
      { 
        color_config: '#4682B4',
        color_conteudo: '#C0C0C0',
        color_text: '#000000',
        color_icon_config: '#3E2723',
        color_button: { on: '#000000', off: '#C0C0C0' },
        color_circle: '#3E2723'
       }
    ]

    index(): number{
      return this.service.getPrede() - 1;
    }
}
