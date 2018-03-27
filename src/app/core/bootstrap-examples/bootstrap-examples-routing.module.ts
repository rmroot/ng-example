import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapExamplesComponent } from './bootstrap-examples.component';
import { FlexComponent } from './flex/flex.component';
import { CoreComponent } from '../core.component';
import { CardsComponent } from './cards/cards.component';

const bootstrapRoutes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: 'bootstrap',
                component: BootstrapExamplesComponent,
                children: [
                    {
                        path: '',
                        component: FlexComponent
                    },
                    {
                        path: 'flex',
                        component: FlexComponent
                    },
                    {
                        path: 'cards',
                        component: CardsComponent
                    }
                ]
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(bootstrapRoutes)],
    exports: [RouterModule]
})
export class BootstrapExamplesRoutingModule { }