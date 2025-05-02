import { Component, OnInit } from '@angular/core';
import { University, UniversityService } from '../../services/university.service';
import { CommonModule } from '@angular/common';
import { UniversityDetailclsComponent } from '../university-detailcls/university-detailcls.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-universities',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class UniversitiesComponent implements OnInit {
  universities: University[] = [];
  filtered: University[] = [];
  search = '';

  constructor(private service: UniversityService, private dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    try {
      this.universities = await this.service.getUniversitiesAsync();
      this.filtered = this.universities;
    } catch (error) {
      console.error('Failed to load universities:', error);
    }
  }

  onSearchChange() {
    const term = this.search.toLowerCase();
    if(!term) {
      this.filtered = this.universities;
      return;
    }

    this.filtered = this.universities.filter(u =>
      u.name.toLowerCase().includes(term)
    );
  }

  viewDetail(uni: University) {
    this.dialog.open(UniversityDetailclsComponent, {
      data: { university: uni },
      width: '500px',
    });
  }
}
