import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'female'];
  signUpForm : FormGroup
  forbiddenUsernames = ['Anna','Kostas'];

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username' : new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email' : new FormControl(null,[Validators.required, Validators.email],this.forbiddenEmails),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signUpForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signUpForm.patchValue({
      username : 'Ted'
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control :FormControl) : {[s:string] : boolean}{
    if (this.forbiddenUsernames.indexOf(control.value) != -1){
      return {'nameisForbidden' : true};
    }
    return null;
  }

  //Simulating how to validate data asyncronously
  forbiddenEmails(control :FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>(
      (resolve,reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com'){
            resolve({'emailIsForbidden' : true})
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
