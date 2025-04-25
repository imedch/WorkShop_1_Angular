import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
const routes: Routes = [
  { path: '', redirectTo: '/residences', pathMatch: 'full' }, // Default route
  { path: 'residences', component: ResidencesComponentComponent } // Route for ResidencesComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Add RouterModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
