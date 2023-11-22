import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JAVASCRIPT,TYPESCRIPT',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'AWS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'FIGMA',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'NODEjs',
      level: 'Intermidiate',
      rating: 65,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
