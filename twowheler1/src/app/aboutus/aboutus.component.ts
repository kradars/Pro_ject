import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private route:Router,private loc:Location) { }

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
