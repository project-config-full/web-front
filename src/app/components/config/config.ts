import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsConfig } from '../../models/buttons_config/buttons-config.model';

@Component({
  selector: 'app-config',
  imports: [CommonModule],
  templateUrl: './config.html',
  styleUrl: './config.scss'
})
export class Config {
  buttons: ButtonsConfig[] = [
    new ButtonsConfig({
      label: "Theme",
      textInButton: {
        disable: "Default",
        active: "other"
      },
      onClick: () => {}
    }),
    new ButtonsConfig({
      label: "animation",
      textInButton: {
        disable: "Default",
        active: "other"
      },
      onClick: () => {}
    }),
    new ButtonsConfig({
      label: "Exchange text",
      textInButton: {
        disable: "Lorem",
        active: "Chat"
      },
      onClick: () => {}
    }),
    new ButtonsConfig({
      label: "Remove text",
      textInButton: {
        disable: "with",
        active: "without"
      },
      onClick: () => {}
    })
  ];
}
