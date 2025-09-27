import { Component } from '@angular/core';
import { InputPresets } from '../../../../models/input_presets/input-presets';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-presets',
  imports: [FormsModule],
  templateUrl: './presets.html',
  styleUrl: './presets.scss'
})
export class Presets {
  inputs: InputPresets[] = [
    new InputPresets({
      title: "Setting color",
      colorId: "color_config",
      colorInput: "red",
      changeColor: (color: string) => {}
    }),
    new InputPresets({
      title: "Content color",
      colorId: "color_content",
      colorInput: "blue",
      changeColor: (color: string) => {}
    }),
    new InputPresets({
      title: "Text color",
      colorId: "color_text",
      colorInput: "green",
      changeColor: (color: string) => {}
    }),
    new InputPresets({
      title: "Settings icon color",
      colorId: "color_icon",
      colorInput: "yellow",
      changeColor: (color: string) => {}
    })
  ];
}
