import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsExampleComponent } from './animations-example.component';

@NgModule({
  declarations: [AnimationsExampleComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class AnimationsExampleModule { }
