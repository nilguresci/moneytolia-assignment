import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss',
})
export class DeleteModalComponent {
  @Input() campaignId = '';
  @Input() show: boolean = false;
  @Output() onCloseEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    for (const propName in changes) {
      console.log('propName', propName);
      if (propName === 'show') {
        (document.querySelector('#deleteModal') as HTMLElement).style.display =
          this.show ? 'block' : 'none';
      }
      if (propName === 'campaignId') {
        //sil
      }
    }
  }

  closePopup() {
    this.onCloseEvent.emit();
  }
}
