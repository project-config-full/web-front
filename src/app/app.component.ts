import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { ConteudoComponent } from "./components/conteudo/conteudo.component";
import { predefinidos } from './model/model';
import { LocalStorageService } from './service/localStorage/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConfiguracaoComponent, ConteudoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private service: LocalStorageService) {}

  width_config: string = '20%';
  width_conteudo: string = '80%';
  value_config: boolean = false;
  button_state_prede: boolean = false;
  animate: number = -1;
  animate_val: boolean = false;

  ngOnInit(): void {
    this.value_config = this.service.getConfigOpen() ?? false;
    this.button_state_prede = this.service.getButton('color_of_screen') ?? false;
    this.remove_text = this.service.getButton('remov_text') ?? false;
    this.troca_text = this.service.getButton('troca_text') ?? false;
  }

  receberValueConfig(config: boolean){
    this.value_config = config;
  }

  receberBtnState(val: boolean){
    this.button_state_prede = val;
  }

  receberAnimation(index: number){
    this.animate = index
  }

  color_conteudo: string = "#2c2c2c";
  color_icon_config: string = "#000000";
  color_text: string = "#f5f5f5";
  remove_text: boolean = false;
  troca_text: boolean = false;

  receberInput(val: { color: string, index: number }){
    if(val.index === 1){
      this.color_conteudo = val.color;
    }else if(val.index === 2){
      this.color_text = val.color;
    }else{
      this.color_icon_config = val.color
    }
  }

  receberPrede(prede: predefinidos){
    this.color_conteudo = prede.color_conteudo;
    this.color_icon_config = prede.color_icon_config;
    this.color_text = prede.color_text;
  }

  receberRemovText(val: boolean){
    this.remove_text = val;
  }

  receberTrocaText(val: boolean){
    this.troca_text = val;
  }
}
