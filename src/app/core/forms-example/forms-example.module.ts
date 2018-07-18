import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsExampleComponent } from './forms-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormsExampleComponent, TemplateExampleComponent, ReactiveExampleComponent]
})
export class FormsExampleModule { }
