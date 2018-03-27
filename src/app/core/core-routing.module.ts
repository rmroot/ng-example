import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreComponent } from './core.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { BootstrapExamplesComponent } from './bootstrap-examples/bootstrap-examples.component';

const coreRoutes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'routing-example',
                component: RoutingExampleComponent
            },
            {
                path: 'component-interaction',
                component: ParentComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }