import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';
import { PredeService } from '../../service/prede/prede.service';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css',
  animations: [
    trigger('trocaText', [
      transition('active <=> inactive', [
        animate('3s', keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0.5, transform: 'rotateY(100deg)'}),
          style({ opacity: 0 , transform: 'rotateY(180deg)'}),
          style({ opacity: 1, transform: 'rotateY(360eg)' })
        ]))
      ])
    ]),
    trigger('RemovText', [
      transition('inative => active', [
        animate('3s', keyframes([
          style({ opacity: 1, transform: 'scale(1) rotateZ(0deg)' }),
          style({ opacity: 0.5, transform: 'scale(0.5) rotateZ(360deg)' }),
          style({ opacity: 0.3, transform: 'scale(0.3) rotateZ(-180deg)' }),
          style({ opacity: 0, transform: 'scale(0) rotateZ(0deg)' })
        ]))
      ]),
      transition('active => inative', [
        animate('3s', keyframes([
          style({ transform: 'scale(0) rotateZ(0deg)' }),
          style({ transform: 'scale(0.5) rotateZ(360deg)' }),
          style({ transform: 'scale(1) rotateZ(0deg)' })
        ]))
      ])
   ])
  ]
})
export class ConteudoComponent implements OnInit {
  constructor(private serviceLocalS: LocalStorageService, private predeService: PredeService) {}

  @Output() envi_config_value = new EventEmitter<boolean>();
  config: boolean = true;
  text_ativo = {
    lorem: true,
    chat: false
  }
  @Input() color_conteudo: string = "#2c2c2c";
  @Input() color_icon_config: string = "#000000";
  @Input() color_text: string = "#f5f5f5";
  btn_color_screen_value: boolean = false;
  removeText: boolean = false;
  trocaText: boolean = false;

  ngOnInit(): void {
    this.btn_color_screen_value = this.serviceLocalS.getButton('color_of_screen') ?? false;

    this.config = this.serviceLocalS.getConfigOpen() ? false : true;
    this.text_ativo.lorem = this.serviceLocalS.getButton('troca_text') ? false : true;
    this.text_ativo.chat = this.serviceLocalS.getButton('troca_text');

    if(this.serviceLocalS.getPrede() !== null && this.serviceLocalS.getPrede() > 0 && this.btn_color_screen_value){
      
      if(this.serviceLocalS.getInput('color_conteudo_input') === this.predeService.predefinidos[this.predeService.index()].color_conteudo){
        this.color_conteudo = this.predeService.predefinidos[this.predeService.index()].color_conteudo;  
      }else{
        this.color_conteudo = this.serviceLocalS.getInput('color_conteudo_input');
      }

      if(this.serviceLocalS.getInput('color_icon_config_input') === this.predeService.predefinidos[this.predeService.index()].color_icon_config){
        this.color_icon_config = this.predeService.predefinidos[this.predeService.index()].color_icon_config;
      }else{
        this.color_icon_config = this.serviceLocalS.getInput('color_icon_config_input');
      }

      if(this.serviceLocalS.getInput('color_text_input') === this.predeService.predefinidos[this.predeService.index()].color_text){
        this.color_text = this.predeService.predefinidos[this.predeService.index()].color_text;
      }else{
        this.color_text = this.serviceLocalS.getInput('color_text_input');
      }
    }

    if(this.serviceLocalS.getButton('remov_text')){
      this.remove_text = this.serviceLocalS.getButton('remov_text');
      clearTimeout(this.timeout);

      this.text_ativo.lorem = false;
      this.text_ativo.chat = false;
    }
  }

  enviConfigValue(){
    this.envi_config_value.emit(this.config);
  }

  enviInfos(){
    this.enviConfigValue();
    this.serviceLocalS.setConfigOpen(this.config);
  }

  @Input()
  set button_state(val: boolean){ 
    this.color_conteudo = val ? "#B87333" : "#2c2c2c";
    this.color_icon_config = val ? "#873408" : "#000000";
    this.color_text = val ? "#833434" : "#f5f5f5";
  }

  @Input()
  set troca_text(val: boolean){
    this.trocaText = val;

    setTimeout(()=>{
      if(!this.removeText){
        this.text_ativo.lorem = val ? false : true;
        this.text_ativo.chat = val;
      }
    }, 2000)
  }

  timeout!: ReturnType<typeof setTimeout>;

  @Input()
  set remove_text(val: boolean){
    if(this.removeText !== val) {
      this.removeText = val;
      if(val){
        this.timeout = setTimeout(()=>{
          this.text_ativo.lorem = false;
          this.text_ativo.chat = false;
        }, 3000);
      }else{
        if(this.trocaText){
          this.text_ativo.lorem = false;
          this.text_ativo.chat = true;
        }else{
          this.text_ativo.lorem = true;
          this.text_ativo.chat = false;
        }
      }
    } 
  }
}
