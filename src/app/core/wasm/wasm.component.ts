import { Component, OnInit } from '@angular/core';
import { WasmService } from './wasm.service';

@Component({
  selector: 'app-wasm',
  templateUrl: './wasm.component.html',
  styleUrls: ['./wasm.component.css']
})
export class WasmComponent implements OnInit {

  constructor(private wasmService: WasmService) { }

  ngOnInit() {
    this.wasmService.wasmReady.subscribe(val => {
      if (val == true) {
        console.log('start test');
        let test = this.wasmService.test();
        console.log(test);
      }
    })
  }

}
