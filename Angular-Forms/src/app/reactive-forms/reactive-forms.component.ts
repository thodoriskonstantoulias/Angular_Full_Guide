import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
      'email' : new FormControl(null,[Validators.required, Validators.email]),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
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
}
