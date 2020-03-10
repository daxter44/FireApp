import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService, DeviceService } from '@/_services';
import { Device } from '@/_models';
import { Client } from '@/_models/client';

@Component({
  selector: 'ClientProp',
  templateUrl: './ClientProp.component.html'
})
export class ClientPropComponent implements OnInit, OnChanges {
  @Input()  client: Client;
  @Output() submited = new EventEmitter<Client>();
  clientForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService
) {
   
}

ngOnInit() {
  this.clientForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    user: this.formBuilder.group({      
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.minLength(6)]]
    })
});
  
}
ngOnChanges(changes: SimpleChanges) {
  if (changes.client) {    
    this.client = changes.client.currentValue;
    if(this.client != null ){
     // this.clientForm.controls.name.setValue(this.device.name)
     // this.clientForm.controls.temperature.setValue(this.device.temperature) 
    } 
  }
}
    // convenience getter for easy access to form fields
    get f() { return this.clientForm.controls; }
    onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.clientForm.invalid) {
          return;
      }
      this.loading = true;
      this.submited.emit(this.clientForm.value);   
  }
}