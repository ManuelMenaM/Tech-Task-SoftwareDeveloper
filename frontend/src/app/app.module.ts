import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { BarChartComponent } from './components/partials/bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { AddVehicleComponent } from './components/partials/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './components/partials/edit-vehicle/edit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VehicleListItemComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    BarChartComponent,
    AddVehicleComponent,
    EditVehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-vywqp3l83e7lxulw.us.auth0.com',
      clientId: 'iA4PvPstJnq3zwQiJwEhautIQomy9Ctn',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
