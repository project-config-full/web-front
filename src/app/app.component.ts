import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { ConteudoComponent } from "./components/conteudo/conteudo.component";

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

  receberValueConfig(config: boolean){
    this.value_config = config;
  }
}
