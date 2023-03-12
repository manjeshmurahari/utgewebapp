import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { BotengComponent } from './boteng/boteng.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PrayerrequestComponent } from './prayerrequest/prayerrequest.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
    // redirectTo: component:HomeComponent,
    // pathMatch: 'full'
   },
  { path: 'homepage', component:HomeComponent },
  { path: 'aboutus', component:AboutusComponent },
  { path: 'gallery', component:GalleryComponent },
  { path: 'boteng', component:BotengComponent },
  { path: 'prayerrequest', component:PrayerrequestComponent },
  { path: 'contactus', component:ContactusComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
