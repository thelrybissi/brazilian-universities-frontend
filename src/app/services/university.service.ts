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

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = 'https://brazilian-universities-backend-production.up.railway.app/api/Universities';

  async getUniversitiesAsync(): Promise<University[]> {
    try {
      const response = await axios.get<University[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching universities:', error);
      throw error;
    }
  }
}