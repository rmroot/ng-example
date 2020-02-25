import { Injectable } from '@angular/core';
declare var Module: any;

@Injectable()
export class WasmService {

  toolsSuiteModule;
  constructor() {
    this.toolsSuiteModule = Module;
    console.log(this.toolsSuiteModule);
  }

  // annualCostTest(){
  //   let instance = new ToolsSuiteModule.AnnualCost(2, 4);
  //   return instance.calculate();
  // }

  // efficiencyImprovementTest(){
  //   let instance = new ToolsSuiteModule.EfficiencyImprovement(6, 2, 1600, 80, 750, 10, 1200);
  //   return instance.getNewFuelSavings();
  // }

  // o2EnrichmentTest(){
  //   let instance = new ToolsSuiteModule.O2Enrichment(21, 100, 1800, 1900, 5, 1, 900, 80, 10);
  //   return instance.getExcessAir();
  // }

  pumpShaftPowerTest(){
    let instance = new Module.PumpShaftPower(10, Module.Drive.S_BELT_DRIVE, 1400);
    return instance.calculate().driveEfficiency;
  }
}
