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

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username' : new FormControl(null,Validators.required),
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

}
