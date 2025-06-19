import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HiHuman } from './hi-human/hi-human';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hi-human', component: HiHuman }
];
