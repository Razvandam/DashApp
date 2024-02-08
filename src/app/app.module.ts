import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructureComponent } from './admin/structure/structure.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { DashboardComponent } from './admin/structure/components/dashboard/dashboard.component';
import { MessagesComponent } from './admin/structure/components/messages/messages.component';
import { AboutUsComponent } from './admin/structure/components/about-us/about-us.component';
import { ContactComponent } from './admin/structure/components/contact/contact.component';
import { SettingsComponent } from './admin/structure/components/settings/settings.component';
import { ServicesComponent } from './admin/structure/components/services/services.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    NavbarComponent,
    DashboardComponent,
    MessagesComponent,
    AboutUsComponent,
    ContactComponent,
    SettingsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
