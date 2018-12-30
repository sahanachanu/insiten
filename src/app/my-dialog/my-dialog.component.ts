import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { NewCompany } from '../new-company';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  
  companyModel = new NewCompany();
  status = ['Reasearching','Approved', 'Pending approval', 'Declined'];

  dialogResult;
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }


  

  ngOnInit() {
  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');
  }

  onCloseConfirm(){
    this.dialogRef.close(this.companyModel);
  }

 
}
