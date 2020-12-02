import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MpiadinaComponent } from './pages/mpiadina/mpiadina.component';
import { NaotyComponent } from './pages/naoty/naoty.component';
import { ValinyComponent } from './pages/valiny/valiny.component';
import { MpiadinaModalComponent } from './pages/mpiadina/mpiadina-modal/mpiadina-modal.component';
import { NaotyModalComponent } from './pages/naoty/naoty-modal/naoty-modal.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MpiadinaComponent,
    NaotyComponent,
    ValinyComponent,
    MpiadinaModalComponent,
    NaotyModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
