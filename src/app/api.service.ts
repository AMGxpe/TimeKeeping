import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { DayState } from './shared/calendar/calendar.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getTimeKeeping() {
    let body = {
      userId: environment.clientId,
      user: environment.username
    }
    return this.http.post<NetworkProfessional>('/api/v1/professional/search', body)
  }

  updateTime(day: DayState, year: number, month: number) {
    const theDay = new Date(year, month, day.day + 1)
    let body = {
      dia: theDay,
      entrada1: "09:00:00",
      salida1: "17:00:00",
      entrada2: "18:00:00",
      salida2: "18:00:00",
      notrabajado: false,
      comentarios: ""
    }
    return this.http.post(`/api/v1/hora/${environment.clientId}`, body)
  }
}

export interface NetworkProfessional {
  cdEmpleado: number;
  entrada1Conf: string;
  salida1Conf: string;
  entrada2Conf: string;
  salida2Conf: string;
  horas: NetworkTimeRecord[];
}

export interface NetworkTimeRecord {
  dia: Date;
  entrada1: string;
  salida1: string;
  entrada2: string;
  salida2: string;
  comentarios: string;
  cdEmpleado: number;
}
