import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-rating-basic',
  templateUrl: './rating-basic.component.html',
  styleUrls: ['./rating-basic.component.css']
})
export class RatingBasicComponent implements OnInit {
  currentRate = 0;
  list = [];
  // public fbFormGroup = this.fb.group({
  //   comment: ['', Validators.required],
  // });

  constructor() { }


  ngOnInit(): void {

  }

  myfun() {
    console.log("hello rating function" + this.currentRate);
  }

  commentHere(cmt) {
    let obj = {
      uname: "klp",
      comment: cmt
    }
    this.list.push(obj);

    // let data = this.fbFormGroup.value;
    // console.log(cmt);
  }

}



