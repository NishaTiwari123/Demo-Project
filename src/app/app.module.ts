import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './main/product/product.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { HeaderService } from './appServices/header.service';
import { GalleryInformationComponent } from './main/gallery/gallery-information/gallery-information.component';
import { ProductInformationComponent } from './main/product/product-information/product-information.component';
import { GalleryItems } from './appModals/gallery';

const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'galleryInformation', component: GalleryInformationComponent },
  { path: 'gallery', children: [
      { path: '', component: GalleryComponent },
      { path: 'galleryInformation', component: GalleryInformationComponent },
  ]},
  { path: 'product', children: [
    { path: '', component: ProductComponent },
    { path: 'productInformation', component: ProductInformationComponent },
]},
  // { path: 'gallery', component: GalleryComponent, children: [
  //   { path: 'galleryInformation', component: GalleryInformationComponent },
  // ]},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  // {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    GalleryInformationComponent,
    ProductInformationComponent
  ],
  providers: [HeaderService,GalleryItems],
  bootstrap: [AppComponent],
})
export class AppModule {}
