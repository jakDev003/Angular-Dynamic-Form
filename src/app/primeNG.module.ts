import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

// PrimeNG
import { InputTextareaModule } from "primeng/inputtextarea";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ToolbarModule } from "primeng/toolbar";
import { SplitButtonModule } from "primeng/splitbutton";
import { PanelModule } from "primeng/panel";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { PaginatorModule } from "primeng/paginator";
import { ToastModule } from "primeng/toast";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    InputTextareaModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    PanelModule,
    ProgressSpinnerModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
  ],
})
export class PrimeNGModule {}
