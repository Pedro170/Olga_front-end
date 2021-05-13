import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LojaComponent } from './loja/loja.component';
import { ComprasComponent } from './compras/compras.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';


@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    ComprasComponent,
    MenuComponent,
    RodapeComponent,
    LojaComponent,
    ComprasComponent,
    ProdutosComponent,
    UsuarioEditComponent,
    
    ProdutosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
