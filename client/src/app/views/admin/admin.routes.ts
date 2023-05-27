import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import DashboardComponent from './dashboard/dashboard';
import dashboardResolver from './dashboard/dashboard.resolver';
import AdminComponent from './layout/admin.layout';

export default [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'DASHBORD',
        },
        resolve: {
          list: dashboardResolver,
        },
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
] as Routes;
