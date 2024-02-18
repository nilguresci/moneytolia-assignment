import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignPageComponent } from './add-campaign-page.component';

describe('AddCampaignPageComponent', () => {
  let component: AddCampaignPageComponent;
  let fixture: ComponentFixture<AddCampaignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCampaignPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
