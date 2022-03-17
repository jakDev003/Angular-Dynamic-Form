import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Components
import { DialogComponent } from "./components/dialog/dialog.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

// PrimeNG Imports
import { PrimeNGModule } from "./primeNG.module";
import { MessageService } from "primeng/api";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, DialogComponent, DynamicFormComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNGModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
