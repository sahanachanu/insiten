import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  companies = ['Company11', 'Company12', 'Company13', 'Company14', 'Company15'];
  constructor() { }

  message(event){
    console.log(event);
  }
  ngOnInit() {
  }

}
