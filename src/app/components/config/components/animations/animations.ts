import { Component, OnInit } from '@angular/core';
import { AnimationsText } from '../../../../models/animations_text/animations-text.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animations',
  imports: [CommonModule],
  templateUrl: './animations.html',
  styleUrl: './animations.scss'
})
export class Animations implements OnInit{
  animations: AnimationsText[] = [
    new AnimationsText({
      changeText: "ANCT0",
      removeText: "ANRT0",
      changeTextProprietys: {
        enter: true,
        exit: false
      },
      removeTextProprietys: {
        enter: true,
        exit: false
      },
      durationProprietys: {
        remove: 2000,
        change: 5000
      }
    }),
    new AnimationsText({
      changeText: "ANCT1",
      removeText: "ANRT1",
      removeTextProprietys: {
        enter: true,
        exit: false
      },
      durationProprietys: {
        remove: 1900,
      }
    }),
    new AnimationsText({
      changeText: "ANCT2",
      removeText: "ANRT2",
      removeTextProprietys: {
        enter: true,
        exit: false
      },
      durationProprietys: {
        remove: 1900,
      }
    }),
    new AnimationsText({
      changeText: "ANCT3",
      removeText: "ANRT3",
      removeTextProprietys: {
        enter: true,
        exit: false
      },
      durationProprietys: {
        remove: 1900,
      }
    })
  ];

  ngOnInit(): void {
    this.animations.forEach((AT: AnimationsText) => {
      if(AT.durationProprietys.change){
        setInterval(() => {
          AT.CPCT();
        }, AT.durationProprietys.change);
      }

      setInterval(() => {
        AT.CPRT();
      }, AT.durationProprietys.remove);
    })
  }
}
