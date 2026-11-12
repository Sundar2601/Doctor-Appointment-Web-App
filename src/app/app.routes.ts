import type { Routes } from '@angular/router'
import { authGuard, guestGuard } from '@/services/auth.guard'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'signin', title: 'Sign in', canActivate: [guestGuard], loadComponent: () => import('./pages/signin.page').then((m) => m.SigninPage) },
  { path: 'signup', title: 'Sign up', canActivate: [guestGuard], loadComponent: () => import('./pages/signup.page').then((m) => m.SignupPage) },
  { path: 'dashboard', title: 'Dashboard', canActivate: [authGuard], loadComponent: () => import('./pages/dashboard.page').then((m) => m.DashboardPage) },
  { path: 'hospitals', title: 'Hospitals', canActivate: [authGuard], loadComponent: () => import('./pages/hospitals.page').then((m) => m.HospitalsPage) },
  { path: 'doctors', title: 'Doctors', canActivate: [authGuard], loadComponent: () => import('./pages/doctors.page').then((m) => m.DoctorsPage) },
  { path: 'book', title: 'Book an appointment', canActivate: [authGuard], loadComponent: () => import('./pages/book.page').then((m) => m.BookPage) },
  { path: 'appointments', title: 'Appointments', canActivate: [authGuard], loadComponent: () => import('./pages/appointments.page').then((m) => m.AppointmentsPage) },
  { path: '**', redirectTo: 'dashboard' },
]
