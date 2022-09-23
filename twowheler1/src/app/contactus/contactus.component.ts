import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private route:Router,private loc: Location) { }

  ngOnInit(): void {
  }
  log()
  {
  this.route.navigate(["/log"])
  }
  
  back()
  {
    this.loc.back();
  }
}
