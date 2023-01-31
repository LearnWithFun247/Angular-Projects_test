import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactUsForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.contactUsForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'cars':new FormControl('bmw'),
      'gender':new FormControl('MALE'),
      'comments':new FormControl(null)
    })
  }
  submitForm(){
    console.log(this.contactUsForm.value);
    
  }

}
