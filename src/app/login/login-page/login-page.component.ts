import { Component } from '@angular/core';
interface selecttopic {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  selecttopiclist: selecttopic[] = [
    {value: '01', viewValue: 'Treva-01'},
    {value: '02', viewValue: 'Treva-02'},
    {value: '03', viewValue: 'Treva-02'},
  ];
}
