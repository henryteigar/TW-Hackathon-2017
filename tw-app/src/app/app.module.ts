import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera/camera.component';
import { ClientComponent } from './components/client/client.component';




const appRoutes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'camera', component: CameraComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
