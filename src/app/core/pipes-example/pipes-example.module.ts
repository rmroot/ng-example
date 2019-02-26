import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesExampleComponent } from './pipes-example.component';
import { SortPeoplePipe } from './sort-people.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipesExampleComponent, SortPeoplePipe]
})
export class PipesExampleModule { }
