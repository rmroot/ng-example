import { Component, OnInit } from '@angular/core';
import { WasmService } from './wasm.service';

@Component({
  selector: 'app-wasm',
  templateUrl: './wasm.component.html',
  styleUrls: ['./wasm.component.css']
})
export class WasmComponent implements OnInit {

  constructor(private wasmService: WasmService) { }

  ngOnInit() {}

  test() {
    console.log(this.wasmService.annualCostTest());
    console.log(this.wasmService.efficiencyImprovementTest());
    console.log(this.wasmService.o2EnrichmentTest());
    console.log(this.wasmService.pumpShaftPowerTest());
  }
}
