import { Component, OnInit, NgModule } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService, ClientService, UserService } from '@/_services';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { Client } from '@/_models/client';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'EditClient',
  templateUrl: './EditClient.component.html'
})

export class EditClientComponent implements OnInit {
  client: Client;
  clientId: string;
  clientForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private clientService: ClientService, 
    private userService: UserService,    
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { 
      this.clientForm = new FormGroup({  
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        user: new FormGroup({      
          email:  new FormControl('', [Validators.required, Validators.minLength(6)])
          }),
        address: new FormGroup({       
          city: new FormControl('', [Validators.required, Validators.minLength(3)]),
          street:  new FormControl('', [Validators.required, Validators.minLength(3)]),
          houseNumber:  new FormControl('', [Validators.required, Validators.minLength(3)]),
          zipCode:  new FormControl('', [Validators.required, Validators.minLength(3)]),
          })
        });
    if (this.authenticationService.currentUserValue == null) {
      this.router.navigate(['/']);
    }
    }

    ngOnInit(): void {
     
      this.getClient();
    }

    getClient(): void {
      const id  = this.route.snapshot.paramMap.get('id');
      this.clientId=id;
      this.clientService.getClient(id)
        .subscribe(client => { this.fillForm(client) });      
    }
    fillForm(prop: Client): void{
      if(prop != null ){
        this.clientForm.patchValue({
          firstName: prop.firstName, 
          lastName: prop.lastName,
          user: {
            email: prop.user.eMail
          },
          address: {
            city: prop.address.city,            
            street: prop.address.street,            
            houseNumber: prop.address.houseNumber,
            zipCode: prop.address.zipCode
          }
        });} 
    }

    get f() { return this.clientForm.controls; }

    generatePass(): void {
      this.userService.generatePassword(this.clientId).pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Hasło wygenerowano poprawnie', true);
          },
          error => {
              this.alertService.error(error);
          });;
    }

    onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.clientForm.invalid) {
        return;
      }

      this.loading = true;
      this.clientService.update(this.clientId, this.clientForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Client updated successful', true);
                  this.router.navigate(['/']);
              },
              error => {
                  this.alertService.error(error);
              });
  }

}
