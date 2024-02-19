import { Injectable } from '@angular/core';
import { Campaign, UpdateCampaign } from '../models/campaign';
import storageHelper from '../helpers/storage.helper';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor() {}

  addCampaign(campaign: Campaign): Campaign {
    let campaigns = this.getCampaigns();
    campaigns.push(campaign);
    storageHelper.setValueWithKey('campaigns', campaigns);
    return campaign;
  }

  getCampaigns(): Campaign[] {
    let campaignsLSValue = storageHelper.getValueWithKey('campaigns');
    let campaigns = campaignsLSValue ? JSON.parse(campaignsLSValue) : [];
    return campaigns;
  }

  findCampaign(id: string) {
    let campaigns = this.getCampaigns();
    return campaigns.filter((c) => c.id === id);
  }

  updateCampaign(data: UpdateCampaign) {
    let campaigns = this.getCampaigns();
    let updatedCampaigns = campaigns.map((campaign) => {
      if (campaign.id === data.updateData.id) {
        return {
          ...campaign,
          title: data.updateData.title,
          description: data.updateData.description,
        };
      }
      return campaign;
    });
    storageHelper.setValueWithKey('campaigns', updatedCampaigns);
  }

  updatePoint(id: string, point: number) {
    let campaigns = this.getCampaigns();
    let updatedCampaigns = campaigns.map((campaign) => {
      if (campaign.id === id) {
        return {
          ...campaign,
          point: point,
        };
      }
      return campaign;
    });
    storageHelper.setValueWithKey('campaigns', updatedCampaigns);
  }

  deleteCampaign(id: string) {
    let campaigns = this.getCampaigns();
    let updatedCampaigns = campaigns.filter((campaign) => campaign.id !== id);
    storageHelper.setValueWithKey('campaigns', updatedCampaigns);
  }
}
