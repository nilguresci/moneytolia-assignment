import { Component, Input, SimpleChanges } from '@angular/core';
import { CampaignCardComponent } from '../../components/campaign-card/campaign-card.component';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign';
import moment from 'moment';
import { CommonModule } from '@angular/common';
import { UpdateCampaignModalComponent } from '../../components/update-campaign-modal/update-campaign-modal.component';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CampaignCardComponent,
    CommonModule,
    UpdateCampaignModalComponent,
    DeleteModalComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  campaigns: Campaign[] = [];
  modalShow = false;
  modalId: string = '';
  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {
    console.log('campaigns', this.campaigns);
    this.getCampaigns();
  }

  getCampaigns(): void {
    this.campaigns = this.campaignService.getCampaigns();
    console.log('this.campaigns', this.campaigns);
  }

  openModal(id: string) {
    console.log('id', id);
    this.modalShow = true;
    this.modalId = id;
  }
  closeModal() {
    this.modalShow = false;
  }
}
