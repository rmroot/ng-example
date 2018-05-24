import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { ChangesExampleComponent } from './changes-example/changes-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LifecycleHooksComponent, ChangesExampleComponent]
})
export class LifecycleHooksModule { }
