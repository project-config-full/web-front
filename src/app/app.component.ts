import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { ConteudoComponent } from "./components/conteudo/conteudo.component";
import { predefinidos } from './services/interface/interfaces.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConfiguracaoComponent, ConteudoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  width_config: string = '20%';
  width_conteudo: string = '80%';
  value_config: boolean = false;
  button_state_prede: boolean = false;

  receberValueConfig(config: boolean){
    this.value_config = config;
  }

  receberBtnState(val: boolean){
    this.button_state_prede = val;
  }

  color_conteudo: string = "#2c2c2c";
  color_icon_config: string = "#000000";
  color_text: string = "#f5f5f5";

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
}
