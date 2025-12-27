import { Component, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ChangeModalWindow } from '../../services/changeModalWindow/change-modal-window';

@Component({
  selector: 'app-modal-window',
  imports: [MatIcon],
  templateUrl: './modal-window.html',
  styleUrl: './modal-window.scss'
})
export class ModalWindow {
  constructor(
    private changeModalWindowService: ChangeModalWindow
  ) {}

  @HostListener('document:keydown.escape')
  closeModalWindow() {
    this.changeModalWindowService.setOpeningModalWindow(false);
  }
}
