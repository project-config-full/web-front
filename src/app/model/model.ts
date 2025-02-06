export interface Buttons{
  predefinidos: boolean,
  troca_animation: boolean,
  button_state: boolean,
  troca_text: boolean,
  remove_text: boolean,
  reload: boolean,
  reload_especial: boolean
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

export interface animations{
  id: string,
  checked: boolean,
  color: { remov_text: string, troca_text: string },
  identifier: { remov: string, troca: string },
  title: { troca: string, remov: string },
}

export interface colorAnimation{
  remov_text: string,
  troca_text: string
}
