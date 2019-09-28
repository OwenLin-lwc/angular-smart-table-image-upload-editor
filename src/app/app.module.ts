import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, PagesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
