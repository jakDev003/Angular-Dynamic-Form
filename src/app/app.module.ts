import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Components
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { DecimalPipeFormComponent } from "./components/decimalPipe/decimal-pipe.component";

// PrimeNG Imports
import { PrimeNGModule } from "./primeNG.module";
import { MessageService } from "primeng/api";
import { CommonModule, DecimalPipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DynamicFormComponent,
    DecimalPipeFormComponent,
    MainPageComponent,
  ],
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
  providers: [MessageService, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
