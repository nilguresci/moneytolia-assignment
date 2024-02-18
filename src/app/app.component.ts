import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCampaignPageComponent } from './pages/add-campaign-page/add-campaign-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    AddCampaignPageComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    CampaignCardComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'campaign_list_angular';
}
