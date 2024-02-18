import { Injectable } from '@angular/core';
import { Campaign, UpdateCampaign } from '../models/campaign';
import storageHelper from '../helpers/storage.helper';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor() {}

  addCampaign(campaign: Campaign): Campaign {
    console.log('storageHelpe', storageHelper.getValueWithKey('campaigns'));
    let campaigns = this.getCampaigns();
    //  JSON.parse(storageHelper.getValueWithKey('campaigns')!)
    //   ? JSON.parse(storageHelper.getValueWithKey('campaigns')!)
    //   : [];
    console.log('campaigns', campaigns);
    campaigns.push(campaign);
    storageHelper.setValueWithKey('campaigns', campaigns);
    return campaign;
  }
  getCampaigns(): Campaign[] {
    let campaigns = JSON.parse(storageHelper.getValueWithKey('campaigns')!);
    console.log('campaigns', campaigns);
    return campaigns;
  }
  findCampaign(id: string) {
    let campaigns = this.getCampaigns();
    return campaigns.filter((c) => (c.id = id));
  }
  updateCampaign(data: UpdateCampaign) {
    let campaigns = this.getCampaigns();
    let updatedCampaigns = campaigns.map((campaign) => {
      if (campaign.id === data.updateData.id) {
        campaign = {
          id: campaign.id,
          date: campaign.date,
          description: data.updateData.description,
          point: campaign.point,
          title: data.updateData.title,
        };
      }
    });
    storageHelper.setValueWithKey('campaigns', updatedCampaigns);
  }
  updatePoint(id: string, point: number) {
    let campaigns = this.getCampaigns();
    let updatedCampaigns = campaigns.map((campaign) => {
      if (campaign.id === id) {
        campaign.point = point;
      }
    });
    storageHelper.setValueWithKey('campaigns', updatedCampaigns);
  }
}
