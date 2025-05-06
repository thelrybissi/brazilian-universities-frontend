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
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

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
    MatPaginatorModule,
    HttpClientModule
  ],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class UniversitiesComponent implements OnInit {
  universities: University[] = [];
  search = '';
  page = 1;
  pageSize = 10;
  totalCount = 0;

  constructor(private service: UniversityService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUniversities();
  }

  async loadUniversities(): Promise<void> {
    try {
      const result = await this.service.getUniversitiesAsync(this.page, this.pageSize);
      this.universities = result.items;
      this.totalCount = result.totalCount;
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Erro ao buscar universidades:', err.message);
      } else {
        console.error('Erro ao buscar universidades:', err);
      }
    }
  }

  onSearchChange(): void {
    const term = this.search.toLowerCase();
    if (!term) {
      this.loadUniversities();
      return;
    }

    this.universities = this.universities.filter(u =>
      u.name.toLowerCase().includes(term)
    );
  }

  pageChanged(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUniversities();
  }

  viewDetail(uni: University): void {
    this.dialog.open(UniversityDetailclsComponent, {
      data: { university: uni },
      width: '500px',
    });
  }
}
