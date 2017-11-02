import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router'
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { LoginComponent } from './login/login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes=[{path:'Home',component: HomeComponent},
              {path:'Settings', component: SettingsComponent},
              {path: 'DashBoard',component:DashBoardComponent}]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    SettingsComponent,
    DashBoardComponent,
    TwoButtonComponent,
    LoginComponent,
    ChatbotComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
