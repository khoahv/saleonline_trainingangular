import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent } from '../../layout/layout/layout.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { SlideComponent } from '../../layout/slide/slide.component';
import { ContentPhoneComponent } from '../../layout/content-phone/content-phone.component';
import { ContentLaptopComponent } from '../../layout/content-laptop/content-laptop.component';
import { PromotionComponent } from '../../layout/promotion/promotion.component';
import { PhoneItemComponent } from '../../layout/content-phone/phone-item/phone-item.component'
import { DialogDetailComponent } from '../../layout/dialog-detail/dialog-detail.component';
import { LaptopItemComponent } from '../../layout/content-laptop/laptop-item/laptop-item.component';
import { Dialog2Component } from '../dialog2/dialog2.component';

@NgModule({
  declarations: [
 
    LayoutComponent,
    HeaderComponent,
    SlideComponent,
    ContentPhoneComponent,
    ContentLaptopComponent,
    PromotionComponent,
    PhoneItemComponent,
    DialogDetailComponent,
    LaptopItemComponent,
    Dialog2Component
  ],
  exports: [
      
    LayoutComponent,
    HeaderComponent,
    SlideComponent,
    ContentPhoneComponent,
    ContentLaptopComponent,
    PromotionComponent,
    PhoneItemComponent,
    DialogDetailComponent,
    LaptopItemComponent,
    Dialog2Component


  ],
  imports: [
    BrowserModule
  ],
})
export class LayoutModule { }
