import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeConfig } from '../../services/changeConfig/change-config';
import { ChangeColor } from '../../services/change_color/change-color';
import { ChangeColorI } from '../../interfaces/change-color-i';
import { ChangeText } from '../../services/change_text/change-text';
import { ClassesTextChangeCTS } from '../../interfaces/classes-text-change-cts';
import { TextPropertiesCTS } from '../../interfaces/text-properties-cts';
import { AnimationSetClassCont } from '../../interfaces/animation-set-class-cont';

@Component({
  selector: 'app-conteudo',
  imports: [CommonModule],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.scss'
})
export class Conteudo {
  @Output() changeConfigEnv = new EventEmitter<boolean>();

  colorOfIconConfig: string = "black";
  colorOfText: string = "white";

  animations: AnimationSetClassCont = {
    change: {
      name: "",
      enterAndExit: false
    },
    remove: {
      name: "",
      enterActive: false,
      exitActive: false
    }
  }

  animationChange: string = "";
  animationRemove: string = "";

  isTextActive: boolean = true;

  firtTextActive: boolean = true;

  constructor(
    private changeConfigService: ChangeConfig,
    private changeColorService: ChangeColor,
    private changeTextService: ChangeText
  ){
    this.changeColorService.$colorVal.subscribe((val: ChangeColorI) => {
      this.colorOfIconConfig = val.colorIcon ? val.colorIcon : this.colorOfIconConfig;
      this.colorOfText = val.colorText ? val.colorText : this.colorOfText;
    });

    this.changeTextService.$CTCListen.subscribe((val: ClassesTextChangeCTS) => {
      if(val.$classChangeText){
        this.animations.change.name = val.$classChangeText;
      }

      if(val.$classRemoveText){
        this.animations.remove.name = val.$classRemoveText;
      }
    });

    this.changeTextService.$TPListen.subscribe((val: TextPropertiesCTS) => {
      if(val.$activeChangeText.enterAndExit){
        this.animations.change.enterAndExit = val.$activeChangeText.enterAndExit;
      }

      if(val.$activeChangeText.active){
        this.changeText();
        return;
      };

      if(!val.$activeRemoveText.changing) return;

      this.animations.remove.enterActive = !val.$activeRemoveText.enter;
      this.animations.remove.exitActive = val.$activeRemoveText.exit;

      if(this.animations.remove.enterActive) this.removeText();
      if(!this.animations.remove.enterActive) this.addText();
    });
  }

  changeText(): void{
    this.animationChange = this.animations.change.name;

    setTimeout(() => {
      this.firtTextActive = !this.firtTextActive;
    }, 1500)

    setTimeout(() => {
      this.animationChange = "";
    }, 3000)
  }

  removeText(): void{
    this.animationRemove = `${this.animations.remove.name} enter`;

    setTimeout(() => {
      this.isTextActive = !this.isTextActive;

      setTimeout(() => this.animationRemove = "", 200)
    }, 2800)
  }

  addText(): void{
    this.isTextActive = !this.isTextActive;
    this.animationRemove = `${this.animations.remove.name} exit`;

    setTimeout(() => {
      this.animationRemove = "";
    }, 3000)
  }

  changeConfig(): void{
    const configIsOpenLS = localStorage.getItem('configIsOpen');
    const configIsOpenVal = configIsOpenLS ? JSON.parse(configIsOpenLS) : false;

    localStorage.setItem('configIsOpen', JSON.stringify(!configIsOpenVal));

    this.changeConfigService.setConfigVal(!configIsOpenVal);
    this.changeConfigEnv.emit(!configIsOpenVal);
  }
}
