import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrls: ['./mat-expansion-panel.component.scss']
})
export class MatExpansionPanelComponent implements OnInit {
  step: number;

  constructor() {
    this.step = 0;
  }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
