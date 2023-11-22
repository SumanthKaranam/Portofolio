import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Anits',
      course: 'BTech in Electronics and Communication Engineering',
      duration: '2017-2021',
      score: '75.5%',
    },
    {
      institute: 'Sri Chaitanya junior college',
      course: 'Intermediate',
      duration: '2015-2017',
      score: '96.8%',
    },
    {
      institute: 'Keshava Reddy School',
      course: 'SSC',
      duration: '2014-2015',
      score: '90%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
