import { Component, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit,OnChanges {
contactUsForm!:FormGroup
cars=['BMW','FORD','MERCEDES','AUDI']
notAllowedNames=['Name','UserName','username','name','userName','Username']
  constructor() { }

  ngOnInit(): void {
    this.contactUsForm=new FormGroup({
      'userDetails':new FormGroup({
        'name':new FormControl('',[Validators.required,this.invalidNames.bind(this)]),
        'email':new FormControl('',[Validators.required,Validators.email]),  
      }),
      'cars':new FormControl('BMW',Validators.required),
      'gender':new FormControl('MALE',Validators.required),
      'comments':new FormControl('',Validators.required),
      'tnc1':new FormControl('',[Validators.required]),
      'tnc2':new FormControl('',[Validators.required])
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  submitForm(){
    console.log(this.contactUsForm);
    
  }
  invalidNames(controls:FormControl){
    if(this.notAllowedNames.indexOf(controls.value)!==-1){
      return {errorMsg:true}
    }
    return null
  }

}
