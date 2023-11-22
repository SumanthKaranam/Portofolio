import { Component, OnInit } from '@angular/core';
import { Certification } from '../models/models';

@Component({
  selector: 'certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [
    {
      title: 'AWS Cloud Practitioner- Oct 2023 ',
      time: 'Oct, 2023',
    },
    {
      title: 'Microsoft Power Platform(PL-900)',
      time: 'Sep, 2022',
    },
    {
      title: 'Microsoft Azure Fundamentals(AZ-900)',
      time: 'July, ',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
