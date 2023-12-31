import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppBarComponent } from '@cpn/app-bar/app-bar.component';

@NgModule({
  declarations: [AppComponent, AppBarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
