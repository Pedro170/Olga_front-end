import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LojaComponent } from './loja/loja.component';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent
=======
    LojaComponent
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
