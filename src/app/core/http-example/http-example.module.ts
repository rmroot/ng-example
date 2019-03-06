import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExampleComponent } from './http-example.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HttpExampleComponent, CharacterListComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HttpExampleModule { }
