import { NgStyle } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-update-campaign-modal',
  standalone: true,
  imports: [NgStyle, FormsModule, ReactiveFormsModule],
  templateUrl: './update-campaign-modal.component.html',
  styleUrl: './update-campaign-modal.component.scss',
})
export class UpdateCampaignModalComponent {
  @Input() campaignId = '';
  @Input() show: boolean = false;
  @Output() onCloseEvent = new EventEmitter();
  campaign: Campaign = {
    id: '',
    date: '',
    description: '',
    point: 0,
    title: '',
  };
  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'show') {
        (document.querySelector('#updateModal') as HTMLElement).style.display =
          this.show ? 'block' : 'none';
      }
      if (propName === 'campaignId' && this.campaignId) {
        let data = this.campaignService.findCampaign(this.campaignId)[0];
        this.campaign.title = data.title;
        this.campaign.description = data.description;
        this.campaign.date = moment(data.date).format('DD MM YYYY');
      }
    }
  }

  closePopup() {
    this.onCloseEvent.emit();
  }

  updateCampaign(): void {
    let updateData = {
      id: this.campaignId,
      title: this.campaign.title,
      description: this.campaign.description,
    };
    this.campaignService.updateCampaign({ updateData });
  }
}
