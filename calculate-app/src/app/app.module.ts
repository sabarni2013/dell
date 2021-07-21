import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NumberPageComponent } from './number-page/number-page.component';
import { CalculateDirective } from './calculate.directive';

const routes: Routes = [
  { path: 'numberCalculate', component: NumberPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NumberPageComponent,
    CalculateDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
