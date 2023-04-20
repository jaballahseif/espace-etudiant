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
