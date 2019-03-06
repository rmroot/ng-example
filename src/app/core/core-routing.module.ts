import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreComponent } from './core.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { HttpExampleComponent } from './http-example/http-example.component';

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
            },
            {
                path: 'lifecycle-hooks',
                component: LifecycleHooksComponent
            },
            {
                path: 'forms-example',
                component: FormsExampleComponent
            },
            {
                path: 'pipes-example',
                component: PipesExampleComponent
            },
            {
                path: 'http-example',
                component: HttpExampleComponent
            },
            {
                path: 'http-example/:id',
                component: HttpExampleComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }