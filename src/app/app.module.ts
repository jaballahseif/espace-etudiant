import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { TDashComponent } from './teacher/t-dash/t-dash.component';
import { TNoteComponent } from './teacher/t-note/t-note.component';
import { TDocumentComponent } from './teacher/t-document/t-document.component';
import { TnoteComponent } from './tnote/tnote.component';
import { TdocComponent } from './tdoc/tdoc.component';
import { AstudentComponent } from './astudent/astudent.component';
import { AteacherComponent } from './ateacher/ateacher.component';
import { SnoteComponent } from './snote/snote.component';
import { SdocumentComponent } from './sdocument/sdocument.component';
import { TableSComponent } from './admin/table-s/table-s.component';
import { TableTComponent } from './admin/table-t/table-t.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HeroComponent,
    HomeComponent,
    RegisterComponent,
    RadioButtonComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    SidebarAdminComponent,
    TeamSectionComponent,
    ContactComponent,
    UserlistComponent,
    TDashComponent,
    TNoteComponent,
    TDocumentComponent,
    TnoteComponent,
    TdocComponent,
    AstudentComponent,
    AteacherComponent,
    SnoteComponent,
    SdocumentComponent,
    TableSComponent,
    TableTComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,

 
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
