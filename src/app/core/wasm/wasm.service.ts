import { Injectable } from '@angular/core';

import * as Module from '../../../assets/wasm/someTest';
//import '!!file-loader?name=wasm/fibonacci.wasm!../../../../wasm/fibonacci.wasm';
import { BehaviorSubject } from 'rxjs';
var importObject = { imports: { i: arg => console.log(arg) } };


@Injectable()
export class WasmService {

  wasmReady: BehaviorSubject<boolean>;
  module;
  constructor() {
    //WebAssembly.instantiate()
    this.wasmReady = new BehaviorSubject<boolean>(false);
    this.instantiateWasm('/assets/wasm/someTest.wasm');
  }

  test() {
    debugger
    return this.module.head_tool_calculate(
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10
    );
  }

  public fibonacci(input: number): number {
    return this.module._fibonacci(input)
  }


  private async instantiateWasm(url: string) {
//     const response = await fetch('fibonacci.wasm');
//     const module = await WebAssembly.compileStreaming(response);
//     const instance = await WebAssembly.instantiate(module);
// debugger


    //fetch the wasm file
    debugger
    const wasmFile = await fetch(url);
    debugger
    // convert it into a binary array
    const buffer = await wasmFile.arrayBuffer();
    debugger
    const binary = new Uint8Array(buffer);
    debugger
    // create module arguments 
    // including the wasm-file
    const moduleArgs = {
      wasmBinary: binary,
      onRuntimeInitialized: () => {
        this.wasmReady.next(true);
      }
    };

    // instantiate the module
    debugger
    this.module = Module(moduleArgs);
    console.log('initialized');
    debugger
  }
}
