import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-plotly-example',
  templateUrl: './plotly-example.component.html',
  styleUrls: ['./plotly-example.component.css']
})
export class PlotlyExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var data = {
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 30,
        line: {
          color: "black",
          width: 0.5
        },
        label: ["A1", "A2", "B1", "B2", "C1", "C2"],
        color: ["blue", "blue", "blue", "blue", "blue", "blue"],
        ids: [0, 1, 2, 3, 4, 5, 6]
      },

      link: {
        source: [0, 1, 0, 2, 3, 3],
        target: [2, 3, 3, 4, 4, 5],
        value: [8, 4, 2, 8, 4, 2]
      }
    }

    // var data = [data]

    var layout = {
      title: "Basic Sankey",
      font: {
        size: 10
      }
    }

    let plot = Plotly.react('myDiv', [data], layout);
    console.log(plot);
  }

}
