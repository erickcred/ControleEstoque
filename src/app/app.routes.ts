import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('./Pages/Cliente/cliente.routes').then(r => r.ClienteRoutes)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./Pages/Fornecedor/fornecedor.routes').then(r => r.FornecedorRoutes)
  },
  { path: '', redirectTo: 'fornecedores', pathMatch: 'full' }
];
