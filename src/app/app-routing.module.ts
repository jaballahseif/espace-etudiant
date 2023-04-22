import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { TDashComponent } from './teacher/t-dash/t-dash.component';
import { TNoteComponent } from './teacher/t-note/t-note.component';
import { TDocumentComponent } from './teacher/t-document/t-document.component';
import { TableTComponent } from './admin/table-t/table-t.component';
import { TableSComponent } from './admin/table-s/table-s.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    children: [{ path: 'userlist', component: UserlistComponent },
    
  ]
  },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard], data: { roles: ['etudiant'] } },
  {
    path: 'teacher',
    component: TeacherComponent,
    canActivate: [AuthGuard],
    data: { roles: ['enseignant'] },
    children: [
      { path: 't-dash', component: TDashComponent },
      { path: 't-note', component: TNoteComponent },
      { path: 't-document', component: TDocumentComponent },
   
    ]
  }
,  
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
