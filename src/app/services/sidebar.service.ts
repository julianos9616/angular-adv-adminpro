import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      title: 'Dashboard!!',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main',  url: '/dashboard' },
        {titulo: 'ProgressBar',  url: '/dashboard/progress' },
        {titulo: 'Graficas',  url: '/dashboard/grafica1' },
      ]
    }
  ];

  constructor() { }
}
