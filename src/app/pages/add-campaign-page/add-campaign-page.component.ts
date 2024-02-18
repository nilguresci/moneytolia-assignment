import { Component } from '@angular/core';
import moment from 'moment';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { NgIf, NgStyle } from '@angular/common';
type formType = {
  title: string;
  description: string;
  point: number;
};
@Component({
  selector: 'app-add-campaign-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgStyle, NgIf],
  templateUrl: './add-campaign-page.component.html',
  styleUrl: './add-campaign-page.component.scss',
})
export class AddCampaignPageComponent {
  currentDate = moment().format('DD MM YYYY');
  campaigns: Campaign[] = [];

  isBtnClicked: boolean = false;
  isWarningTexts: boolean = false;
  constructor(
    private campaignService: CampaignService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group<formType>({
    title: '',
    description: '',
    point: 0,
  });
  ngOnInit(): void {
    console.log('campaigns', this.campaigns);
  }
  isEmpty(value: any) {
    return (
      value == null || (typeof value === 'string' && value.trim().length === 0)
    );
  }
  addCampaign(): void {
    console.log(this.checkoutForm.valid); // false
    if (
      this.checkoutForm.valid &&
      !this.isEmpty(this.checkoutForm.value.title) &&
      !this.isEmpty(this.checkoutForm.value.description)
    ) {
      let campaign2: Campaign = {
        id: uuidv4(),
        title: this.checkoutForm.value.title!,
        description: this.checkoutForm.value.description!,
        date: moment().format(),
        point: this.checkoutForm.value.point || 0,
      };
      this.campaignService.addCampaign(campaign2);
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
      this.isBtnClicked = false;
    } else {
      console.log('else');
      this.isBtnClicked = true;
      this.isWarningTexts = true;
    }
  }
}
