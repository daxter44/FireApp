import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService, DeviceService } from '@/_services';
import { Device } from '@/_models';

@Component({
  selector: 'DeviceProp',
  templateUrl: './DeviceProp.component.html'
})
export class DevicePropComponent implements OnInit {
  @Input()  device: Device;
  @Output() submited = new EventEmitter<Device>();
  deviceForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService
) {

}

ngOnInit() {
  this.deviceForm = this.formBuilder.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required],
      instalationDate: ['', Validators.required]
  });
  this.fillForm();
}
  fillForm(): void {
    if (this.device != null && this.deviceForm != undefined) {
      this.deviceForm.controls.name.setValue(this.device.name);
      this.deviceForm.controls.model.setValue(this.device.model);
      this.deviceForm.controls.serialNumber.setValue(this.device.serialNumber);
      this.deviceForm.controls.instalationDate.setValue(this.device.instalationDate);
    }
  }

    // convenience getter for easy access to form fields
    get f() { return this.deviceForm.controls; }
    onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.deviceForm.invalid) {
          return;
      }
      this.loading = true;
      this.submited.emit(this.deviceForm.value);
  }
}
