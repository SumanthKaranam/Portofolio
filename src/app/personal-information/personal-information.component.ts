import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Karanam Chandra Sumanth'],
    ['DOB', '27/03/2000'],
    ['Work Exp', '02 Years'],
    ['Education', 'Bachelor of Technology'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Frontend Web Developer with 02 years of experience in software industry.',
    'Working as a Developer in Cognizant.',
    'Delivered all tasks within deadlines. Always eager to learn new technologies.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
