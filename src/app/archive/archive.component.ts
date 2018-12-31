import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  companies = ['Company1', 'Company2', 'Company3'];
  constructor(private route: ActivatedRoute) { }

  companyName;
  message(event){
    console.log(event);
  }
  ngOnInit() {
    //Company's name passed through routing path is captured
    let name = this.route.snapshot.paramMap.get('name');
    
    if(name!= "name")
    //Adding Company name on top of the list or to first position of the array
    this.companies.unshift(name);
  }



}
