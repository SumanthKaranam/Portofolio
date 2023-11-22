import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Bayers Crop Science-Client Project ',
      technologies: 'AWS, Angular, Angular Material,Google charts,Git',
      description: [
        'Worked in a team to develop website that are powered by Cloud.',
        'Demonstrated continuous growth and expertise in front-end technologies, contributing to seamless user experience',
        'Followed Agile methodoologies and waterfall model for the project',
      ],
    },
    {
      title: 'Cognizant Internal Program',
      technologies: 'HTML, CSS, Angular, Node.js, MongoDB, Angular material',
      description: [
        'Worked on the rewards page ',
        'Worked as a team',
        'Got to learn about Git and Azure',
        'Learned Angular material',
      ],
    },
    {
      title: 'Restaurant Management System Webiste',
      technologies: 'HTML, CSS, Angular, Node.js, MongoDB',
      description: [
        'Developed a dynamic restaurant management website with CRUD operations.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
