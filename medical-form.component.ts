import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DiagnosisValidator } from './diagnosisValidator';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss']
})
export class MedicalFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MedForm = new FormGroup({
    name: new FormControl('', Validators.pattern('[a-zA-Z]+ [a-zA-Z]+')),
    mrn: new FormControl('', [Validators.pattern('^[1-9][0-9]?$|^50$'), Validators.max(50)]),
    ssn: new FormControl('', Validators.pattern('^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$')),
    dob: new FormControl('', Validators.pattern('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$')),
    diagnosis: new FormControl('', DiagnosisValidator)
  })

  get name() {
    return this.MedForm.get('name');
  }
  get mrn() {
    return this.MedForm.get('mrn');
  }
  get ssn() {
    return this.MedForm.get('ssn');
  }
  get dob() {
    return this.MedForm.get('dob');
  }
  get diagnosis() {
    return this.MedForm.get('diagnosis');
  }

  onSubmit() {
    console.log(this.MedForm.value);
    alert("submit pressed");
    return true;
  }
}
