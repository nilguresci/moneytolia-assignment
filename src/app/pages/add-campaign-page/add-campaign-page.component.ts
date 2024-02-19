import { Component } from '@angular/core';
import moment from 'moment';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
type formType = {
  title: string;
  description: string;
  point: number;
};
@Component({
  selector: 'app-add-campaign-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgStyle, NgIf, CommonModule],
  templateUrl: './add-campaign-page.component.html',
  styleUrl: './add-campaign-page.component.scss',
})
export class AddCampaignPageComponent {
  currentDate = moment().format('DD MM YYYY');
  campaigns: Campaign[] = [];
  pointOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  displayStyle = 'none';
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
  ngOnInit(): void {}
  isEmpty(value: any) {
    return (
      value == null || (typeof value === 'string' && value.trim().length === 0)
    );
  }
  addCampaign(): void {
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
        point: Number(this.checkoutForm.value.point) || 0,
      };
      this.campaignService.addCampaign(campaign2);
      this.checkoutForm.reset();
      this.isBtnClicked = false;
      this.openPopup();
      setTimeout(() => {
        this.closePopup();
      }, 2000);
    } else {
      this.isBtnClicked = true;
      this.isWarningTexts = true;
    }
  }

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }
}
