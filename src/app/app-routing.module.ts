import { DialogComponent } from "./components/dialog/dialog.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

const routes: Routes = [
  { path: "", component: DynamicFormComponent },
  { path: "dynamic-form", component: DynamicFormComponent },
  { path: "dialog", component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
