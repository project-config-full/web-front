export interface Buttons{
  predefinidos: boolean,
  button_state: boolean
  text_h4: string,
  button_id: string,
  text_button: { on: string, off: string },
  color_button: { on: string, off: string },
  cirlce_left: { on: string, off: string }
}

export interface GetStyleButton {
  text_button: string;
  color_button: string;
  color_text: string;
  circle_left: string;
}

export interface inputs{
  color: string,
  for: string,
  id: number
}

export interface predefinidos{
  color_config: string,
  color_text: string,
  color_conteudo: string,
  color_icon_config: string
}
