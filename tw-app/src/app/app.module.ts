import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera/camera.component';
import { ClientComponent } from './components/client/client.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDxJ3Qs7iM24wZaO7SCmCVrkIXN_FDVLg0",
  authDomain: "tw-project-8f89e.firebaseapp.com",
  databaseURL: "https://tw-project-8f89e.firebaseio.com",
  projectId: "tw-project-8f89e",
  storageBucket: "tw-project-8f89e.appspot.com",
  messagingSenderId: "1083843472362"
};

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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }