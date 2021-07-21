import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})

export class NumberPageComponent implements OnInit {
  profileForm: FormGroup;
  disableBtn = false;
  firstNumberVal = '';
  secondNumberVal = '';
  sum;
  private REST_API_SERVER = "http://localhost:8000";
  headers = new HttpHeaders()
  .set('Authorization', 'my-auth-token')
  .set('Content-Type', 'application/json');
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
    this.profileForm.valueChanges
      .subscribe((changedObj: any) => {
        this.disableBtn = this.profileForm.valid;
      });
  }

  createForm() {
    this.profileForm = this.fb.group({
      firstNumber: new FormControl(this.firstNumberVal, [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      secondNumber: new FormControl(this.secondNumberVal, [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),

    });
  }
  ngOnInit() {
  }

  get firstNumber() { return this.profileForm.get('firstNumber'); }
  get secondNumber() { return this.profileForm.get('secondNumber'); }
  onSubmit(value: any) {
    this.sum = Number(value.firstNumber)+ Number(value.secondNumber);
    this.http.post(this.REST_API_SERVER + '/saveData', {firstNumber: value.firstNumber, secondNumber: value.secondNumber}, {
      headers: this.headers
    }).subscribe((data)=>{
      console.log(data);
    });
  }
  getData() {
    
    this.http.post(this.REST_API_SERVER+'/getData', {
      headers: this.headers
    }).subscribe((data)=>{
     
        this.firstNumberVal = data[0].firstNumber;
        this.secondNumberVal = data[0].secondNumber;
        this.sum = data[0].sum;
      
    })
  }

}
