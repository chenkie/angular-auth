import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './../app.constants';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  instructors: any;
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(`${API_URL}/instructors`)
      .subscribe(data => (this.instructors = data));
  }
}
