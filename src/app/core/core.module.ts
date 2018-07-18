import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { CoreRoutingModule } from './core-routing.module';
import { RoutingExampleModule } from './routing-example/routing-example.module';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { LifecycleHooksModule } from './lifecycle-hooks/lifecycle-hooks.module';
import { FormsExampleModule } from './forms-example/forms-example.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    RoutingExampleModule,
    ComponentInteractionModule,
    LifecycleHooksModule,
    FormsExampleModule
  ],
  declarations: [CoreComponent, SidebarComponent, DashboardComponent, BannerComponent],
  exports: []
})
export class CoreModule { }
