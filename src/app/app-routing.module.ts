import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, */
  {
    path: '',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  /* {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
 */  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-admin-tutor',
    loadChildren: () => import('./pages/login-admin-tutor/login-admin-tutor.module').then( m => m.LoginAdminTutorPageModule)
  },
  {
    path: 'recover-ppass',
    loadChildren: () => import('./pages/recover-ppass/recover-ppass.module').then( m => m.RecoverPPassPageModule)
  },
  {
    path: 'lista-actividades/:id',
    loadChildren: () => import('./client/lista-actividades/lista-actividades.module').then( m => m.ListaActividadesPageModule)
  },
  {
    path: 'detalle-actividad/:id',
    loadChildren: () => import('./client/detalle-actividad/detalle-actividad.module').then( m => m.DetalleActividadPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./client/comunidad/comunidad.module').then( m => m.ComunidadPageModule)
  },
  {
    path: 'form-person-data/:id',
    loadChildren: () => import('./client/form-person-data/form-person-data.module').then( m => m.FormPersonDataPageModule)
  },
  {
    path: 'formschool-data/:id',
    loadChildren: () => import('./client/formschool-data/formschool-data.module').then( m => m.FormschoolDataPageModule)
  },
  {
    path: 'form-select-activity',
    loadChildren: () => import('./client/form-select-activity/form-select-activity.module').then( m => m.FormSelectActivityPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./admin/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'lista-tutorias/:id',
    loadChildren: () => import('./admin/lista-tutorias/lista-tutorias.module').then( m => m.ListaTutoriasPageModule)
  },
  {
    path: 'detalle-tutoria/:id',
    loadChildren: () => import('./admin/detalle-tutoria/detalle-tutoria.module').then( m => m.DetalleTutoriaPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./admin/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'detalle-usuario',
    loadChildren: () => import('./admin/detalle-usuario/detalle-usuario.module').then( m => m.DetalleUsuarioPageModule)
  },
  {
    path: 'crud-tutoria',
    loadChildren: () => import('./admin/crud-tutoria/crud-tutoria.module').then( m => m.CrudTutoriaPageModule)
  },
  {
    path: 'crud-usuarios',
    loadChildren: () => import('./admin/crud-usuarios/crud-usuarios.module').then( m => m.CrudUsuariosPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./client/finish/finish.module').then( m => m.FinishPageModule)
  },
  {
    path: 'list-documentos',
    loadChildren: () => import('./admin/list-documentos/list-documentos.module').then( m => m.ListDocumentosPageModule)
  },
  {
    path: 'crear-publicacion',
    loadChildren: () => import('./instructor/crear-publicacion/crear-publicacion.module').then( m => m.CrearPublicacionPageModule)
  },
  {
    path: 'crear-publicacion/:id',
    loadChildren: () => import('./instructor/crear-publicacion/crear-publicacion.module').then( m => m.CrearPublicacionPageModule)
  },
  {
    path: 'form-posts',
    loadChildren: () => import('./instructor/form-posts/form-posts.module').then( m => m.FormPostsPageModule)
  },
  {
    path: 'ver-post',
    loadChildren: () => import('./instructor/ver-post/ver-post.module').then( m => m.VerPostPageModule)
  },
  {
    path: 'ver-publicacion/:id',
    loadChildren: () => import('./instructor/ver-publicacion/ver-publicacion.module').then( m => m.VerPublicacionPageModule)
  },
  {
    path: 'home-instructor',
    loadChildren: () => import('./instructor/home-instructor/home-instructor.module').then( m => m.HomeInstructorPageModule)
  },
  {
    path: 'form-horarios',
    loadChildren: () => import('./instructor/form-horarios/form-horarios.module').then( m => m.FormHorariosPageModule)
  },
  {
    path: 'form-horarios/:id',
    loadChildren: () => import('./instructor/form-horarios/form-horarios.module').then( m => m.FormHorariosPageModule)
  },
  {
    path: 'detalle-actividad/:id',
    loadChildren: () => import('./instructor/detalle-actividad/detalle-actividad.module').then( m => m.DetalleActividadPageModule)
  },  {
    path: 'lista-doc-instruc',
    loadChildren: () => import('./instructor/lista-doc-instruc/lista-doc-instruc.module').then( m => m.ListaDocInstrucPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
