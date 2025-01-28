export interface Buttons{
  predefinidos: boolean,
  button_state: boolean,
  troca_text: boolean,
  remove_text: boolean,
  reload: boolean,
  text_h4: string,
  button_id: string,
  text_button: { on: string, off: string },
  color_button: { on: string, off: string },
  circle_left: { on: string, off: string },
  color_circle: string;
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
  id: number,
  _idLS: string
}

export interface predefinidos{
  [_idLS: string]: string | { on: string, off: string };
  color_config: string,
  color_text: string,
  color_conteudo: string,
  color_icon_config: string,
  color_button: { on: string, off: string },
  color_circle: string
}

export interface color_buttons{
  on: string,
  off: string
}