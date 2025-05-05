import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { University } from '../../services/university.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-university-detailcls',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule,  
    MatCardModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './university-detailcls.component.html',
  styleUrls: ['./university-detailcls.component.scss'],
})
export class UniversityDetailclsComponent {
  university: University;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { university: University }) {
    this.university = data.university;
  }
}
