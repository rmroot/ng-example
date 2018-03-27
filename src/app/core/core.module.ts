import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { CoreRoutingModule } from './core-routing.module';
import { RoutingExampleModule } from './routing-example/routing-example.module';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { BootstrapExamplesModule } from './bootstrap-examples/bootstrap-examples.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    RoutingExampleModule,
    ComponentInteractionModule,
    BootstrapExamplesModule
  ],
  declarations: [CoreComponent, SidebarComponent, DashboardComponent, BannerComponent],
  exports: []
})
export class CoreModule { }
