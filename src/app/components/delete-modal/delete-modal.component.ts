import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CampaignService } from '../../services/campaign.service';

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
  campaignName: string = '';
  constructor(private campaignService: CampaignService) {}
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'show') {
        (document.querySelector('#deleteModal') as HTMLElement).style.display =
          this.show ? 'block' : 'none';
      }
      if (propName === 'campaignId' && this.campaignId) {
        let data = this.campaignService.findCampaign(this.campaignId)[0];
        this.campaignName = data.title;
      }
    }
  }

  closePopup() {
    this.onCloseEvent.emit();
  }

  deleteCampaign() {
    this.campaignService.deleteCampaign(this.campaignId);
    this.onCloseEvent.emit();
  }
}
