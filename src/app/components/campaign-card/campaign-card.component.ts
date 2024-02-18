import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Campaign } from '../../models/campaign';
import moment from 'moment';
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
  ngOnInit(): void {
    console.log('this.campaign;', this.campaign);
  }
  openUpdateModal(id: string) {
    this.openModalEvent.emit(id);
  }
  openDeleteModal(id: string) {
    this.openDeleteModalEvent.emit(id);
  }
}
