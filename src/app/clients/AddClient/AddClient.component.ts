import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService, FirmService } from '@/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '@/_models/client';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'addClient',
  templateUrl: './AddClient.component.html'
})

export class AddClientComponent implements OnInit {  
  client: Client;
  clientId: string;
  clientForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private firmService: FirmService,    
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { 
    }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      user: this.formBuilder.group({      
        email: ['', [Validators.required, Validators.minLength(6)]]
        }),        
      address: this.formBuilder.group({      
        city: ['', [Validators.required, Validators.minLength(3)]],  
        street: ['', [Validators.required, Validators.minLength(3)]],  
        houseNumber: ['', [Validators.required, Validators.minLength(3)]],  
        zipCode: ['', [Validators.required, Validators.minLength(3)]]
        })
      });    
    }
    
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
      this.firmService.add(this.clientForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Klient dodany poprawnie', true);
              this.router.navigate(['']);
          },
          error => {
              this.alertService.error(error);
          });
  }

}
