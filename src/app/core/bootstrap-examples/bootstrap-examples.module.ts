import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapExamplesComponent } from './bootstrap-examples.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexComponent } from './flex/flex.component';
import { BootstrapExamplesRoutingModule } from './bootstrap-examples-routing.module';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapExamplesRoutingModule
  ],
  declarations: [BootstrapExamplesComponent, NavbarComponent, FlexComponent, CardsComponent]
})
export class BootstrapExamplesModule { }
