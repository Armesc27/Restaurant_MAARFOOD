import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReservarModule } from './reservar/reservar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ReservarService } from './reservar/reservar.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DatepickerModule } from 'ng2-datepicker';
import { DomseguroPipe } from './about/domseguro.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    DomseguroPipe,
    ReservationComponent,
    ListasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReservarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    DatepickerModule,
    ReactiveFormsModule
  ],
  providers: [ReservarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
