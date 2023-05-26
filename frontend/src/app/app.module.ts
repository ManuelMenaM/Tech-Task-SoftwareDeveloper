import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { VehicleListItemComponent } from './components/partials/vehicle-list-item/vehicle-list-item.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VehicleListItemComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-vywqp3l83e7lxulw.us.auth0.com',
      clientId: 'iA4PvPstJnq3zwQiJwEhautIQomy9Ctn',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
