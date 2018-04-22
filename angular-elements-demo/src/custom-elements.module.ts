import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MyRatingComponent,
  RatingService,
  RatingComponent,
} from './my-rating.component';

// Array of all element needs to be passed in Custom Element
export const CustomeElements = [MyRatingComponent];

@NgModule({
  imports: [BrowserModule],
  declarations: [MyRatingComponent, RatingComponent],
  providers: [RatingService],
  // Step 1: Declare componennt in entryComponents option, so that it can used as CE standalone
  entryComponents: CustomeElements,
})
export class CustomElementsModule {
  // Step 2: Define ngDoBootstrap hook inside CE module
  ngDoBootstrap() {}
}
