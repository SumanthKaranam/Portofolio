import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Front-end Developer',
      company: 'Cognizant',
      duration: 'Oct 2021 - Present',
      description: [
        'Worked in teams to develop web applications with RWD ',
        'Worked on different technologies such as (Angular,AWS)',
      ],
    },
    {
      role: 'Intern | ISRO (Remote)',
      company: 'ISRO',
      duration: 'Apr 2020 - May 2020',
      description: [
       'Summer Internship training on Remote sensing technology',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
