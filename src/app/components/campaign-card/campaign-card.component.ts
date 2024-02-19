import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Campaign } from '../../models/campaign';
import moment from 'moment';
import { CampaignService } from '../../services/campaign.service';
@Component({
  selector: 'app-campaign-card',
  standalone: true,
  imports: [],
  templateUrl: './campaign-card.component.html',
  styleUrl: './campaign-card.component.scss',
})
export class CampaignCardComponent {
  @Input() campaign!: Campaign;
  moment = moment;
  @Output() openModalEvent = new EventEmitter<string>();

  @Output() openDeleteModalEvent = new EventEmitter<string>();

  constructor(private campaignService: CampaignService) {}
  ngOnInit(): void {}
  openUpdateModal(id: string) {
    this.openModalEvent.emit(id);
  }
  openDeleteModal(id: string) {
    this.openDeleteModalEvent.emit(id);
  }

  changePoint(point: number) {
    debugger;
    let newPoint = this.campaign.point + point;
    if (newPoint <= 10 && newPoint >= 0) {
      this.campaign.point = newPoint;
      this.campaignService.updatePoint(this.campaign.id, newPoint);
    }
  }
}
