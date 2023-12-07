import { Routes } from '@angular/router';

import { BlogsComponent } from './components/blogs/blogs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
];
