import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { animations, colorAnimation } from '../../model/model';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';
import { PredeService } from '../../service/prede/prede.service';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css',
  animations: [
      trigger('reload_animation', [
        transition('init <=> final', [
          animate('3s', keyframes([
            style({ opacity: 0.3 , pointerEvents: 'none'}),
            style({ opacity: 1 })
          ]))
        ])
      ])
    ]
})
export class AnimationsComponent implements OnInit{
  constructor(private serviceLocalS: LocalStorageService, private predeService: PredeService) {}

  ngOnInit(): void {
    if(this.serviceLocalS.getAnimation() !== null){
      this.animations.forEach((animation, index) => {
        if(index === this.serviceLocalS.getAnimation()){
          this.clickAnimations(animation);
        }
      });
    }

    if(this.btn_color_screen_value){
      this.animations.forEach(animation => {
        animation.color.remov_text = this.predeService.predefinidos[this.predeService.index()].color_button.on;
        animation.color.troca_text = this.predeService.predefinidos[this.predeService.index()].color_button.off;
      });
    }
  }

  @Output() envi_animation = new EventEmitter<number>();

  @Input() btn_color_screen_value: boolean = false;
  @Input()
  set animations_color(val: colorAnimation){
    if(this.btn_color_screen_value){
      this.animation.remov_text = "#2c2c2c";
      this.animation.troca_text = "#c0c0c0";
    }else{
      this.animation = val;

      this.animations.forEach(animation => {
        animation.color = val;
      });
    }
  }

  @Input() reload_animation: boolean = false;

  animation: colorAnimation = { remov_text: '#2c2c2c', troca_text: '#c0c0c0' };
  animations: animations[] = [
    {
      id: 'animation_0',
      checked: true,
      color: { remov_text: this.animation.remov_text, troca_text: this.animation.troca_text, },
      identifier: { remov: 'animation_0_remove', troca: 'animation_0_troca' },
      title: { troca: 'Troca de texto', remov: 'Remover texto' }
    },
    {
      id: 'animation_1',
      checked: false,
      color: { remov_text: this.animation.remov_text, troca_text: this.animation.troca_text },
      identifier: { remov: 'animation_1_remove', troca: 'animation_1_troca' },
      title: { troca: 'Troca de texto', remov: 'Remover texto' }
    },
    {
      id: 'animation_2',
      checked: false,
      color: { remov_text: this.animation.remov_text, troca_text: this.animation.troca_text },
      identifier: { remov: 'animation_2_remove', troca: 'animation_2_troca' },
      title: { troca: 'Troca de texto', remov: 'Remover texto' }
    },
    {
      id: 'animation_3',
      checked: false,
      color: { remov_text: this.animation.remov_text, troca_text: this.animation.troca_text },
      identifier: { remov: 'animation_3_remove', troca: 'animation_3_troca' },
      title: { troca: 'Troca de texto', remov: 'Remover texto' }
    },
  ]

  clickAnimations(animations: animations){
    this.animations.forEach(anim => {
      anim.checked = (anim.id === animations.id);
    });
  }

  enviAnimation(animation: animations){
    const index = this.animations.findIndex(anim => anim.id === animation.id);

    this.serviceLocalS.setAnimation(index);

    this.clickAnimations(animation);
    this.envi_animation.emit(index);
  }
}
