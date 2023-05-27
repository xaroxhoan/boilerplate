import { Routes } from '@angular/router';
import HomeComponent from './views/home/home';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "panel",
    loadChildren: () => import("./views/admin/admin.routes")
  },
];
