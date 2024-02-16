import { Component } from '@angular/core';
import { CampaignCardComponent } from '../../components/campaign-card/campaign-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CampaignCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
