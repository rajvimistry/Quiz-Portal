import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Domain } from './domain';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  domain:Domain[];
  selectedValue:Number;

  constructor() { }

  ngOnInit(): void {
    this.domain=[
      {domainId:1, domainName:"Java"},
      {domainId:2, domainName:"UI"},
      {domainId:3, domainName:"Big Data"},
      {domainId:4, domainName:"Data Science"},
      {domainId:5, domainName:".Net"}
    ];

    this.selectedValue=1;
  }



}
