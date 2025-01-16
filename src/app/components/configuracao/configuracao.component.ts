import { Component } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent {

}
