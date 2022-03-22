import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-decimal-pipe-form',
  templateUrl: './decimal-pipe.component.html',
  styleUrls: ['./decimal-pipe.component.scss'],
})
export class DecimalPipeFormComponent implements OnInit {
  myForm: FormGroup;
  decimalPipeLimit = '1.2-2';

  constructor(private fb: FormBuilder, private decimalPipe: DecimalPipe) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      someNumber: this.decimalPipe.transform(3.145926, this.decimalPipeLimit),
    });
  }

  /**
   * Limit number to specific number of decimal places
   * @param {FormControl} control
   */
  transformDecimal(control: FormControl) {
    control.patchValue(
      this.decimalPipe.transform(control.value, this.decimalPipeLimit)
    );
    this.myForm.updateValueAndValidity();
  }

  /**
   * Get Control from Control Name
   * @param {string} controlName
   * @returns {FormControl}
   */
  getControl(controlName: string) {
    return this.myForm.get(controlName) as FormControl;
  }
}
