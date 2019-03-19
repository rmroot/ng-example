import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WasmComponent } from './wasm.component';
import { WasmService } from './wasm.service';

@NgModule({
  declarations: [WasmComponent],
  imports: [
    CommonModule
  ],
  providers: [
    WasmService
  ]
})
export class WasmModule { }
