import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Forms';
  genders = ['male','female'];
  @ViewChild('f',{static : true}) signUpForm : NgForm
  user = {
    username : '',
    email : '',
    secret : '',
    gender : ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({username : suggestedName});
  }

  onSubmit(form: NgForm){
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.user.gender = form.value.gender;

    form.reset();
  }
}
