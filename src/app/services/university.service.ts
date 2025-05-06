import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { from, Observable } from 'rxjs';

export interface University {
  name: string;
  country: string;
  state_province?: string | null;
  alpha_two_code: string;
  web_pages: string[];
  domains: string[];
}

export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = 'http://localhost:53651/api/Universities';

  async getUniversitiesAsync(page: number = 1, pageSize: number = 10): Promise<PaginatedResult<University>> {
    try {
      const response = await axios.get<PaginatedResult<University>>(this.apiUrl, {
        params: {
          page,
          pageSize
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching universities with pagination:', error);
      throw error;
    }
  }
}