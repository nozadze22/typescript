import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss', './responsive.scss']
})
export class AuthComponent {

 public labels = {
    signIn : "signIn",
    signUp: "signUp"
  };

 public tabIndex = 0;

public logInform = new FormGroup({
Email: new FormControl('', [Validators.required, Validators.email]),
password: new FormControl('', Validators.required),
});

public registerForm = new FormGroup ({
  
    FirstName: new FormControl('', [Validators.required,Validators.minLength(6)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(22)]),
    age:new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address:  new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    zipcode:new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(18),
       () => {
      this.registerForm?.get('repeatPassword')?.enable();
      return null;
    },
  ]),
    repeatPassword: new FormControl('',[
      
      Validators.required, 
      Validators.minLength(8),
      Validators.maxLength(18),
      (control) => 
      {
   if(control.value !== this.registerForm?.get('password')?.value && control?.value?.length >= 1) {
    return{matchError: true};
   }
   return null;
    },
  ]),

  

});
signUpForm: any;
public logIn() {

}

public register() {


}


 reset(index: number) {
this.logInform.reset();
this.registerForm.reset();
this.tabIndex = index;
 }


 public getLoginFormValue(control: string, parts: string) {
  return ((this.logInform.get(control)?.errors || {})[parts]|| false) && this.logInform.get(control)?.touched;
 }

 public getRegistrationFormValue(control: string, parts: string) {
  return ((this.registerForm.get(control)?.errors || {})[parts] || false) && this.registerForm.get(control)?.touched;
 }
}
