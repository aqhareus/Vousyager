import { NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-registration',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, ],
  templateUrl: './page-registration.component.html',
  styleUrl: './page-registration.component.css'
})
export class PageRegistrationComponent implements OnInit{
[x: string]: any;
  
  reactiveForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder)
  {
    this.reactiveForm = this.formBuilder.group({
       firstname: new FormControl(null, [Validators.required])
    })
  }

  get f(){return this.reactiveForm.controls}
  
  onSubmit(){
    this.submitted = true;
    if(this.reactiveForm.invalid){
      return;
    }
  }
  ngOnInit(): void {
    
  }
}
