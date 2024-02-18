import { NgStyle } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-update-campaign-modal',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './update-campaign-modal.component.html',
  styleUrl: './update-campaign-modal.component.scss',
})
export class UpdateCampaignModalComponent {
  @Input() campaignId = '';
  @Input() show: boolean = false;
  @Output() onCloseEvent = new EventEmitter();

  ngOnInit(): void {
    console.log('campaignId', this.campaignId);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    for (const propName in changes) {
      console.log('propName', propName);
      if (propName === 'show') {
        (document.querySelector('#updateModal') as HTMLElement).style.display =
          this.show ? 'block' : 'none';
      }
      if (propName === 'campaignId') {
        //veriyi çek
      }
    }
  }

  closePopup() {
    this.onCloseEvent.emit();
  }
}
