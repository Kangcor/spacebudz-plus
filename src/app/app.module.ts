import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailComponent } from "./components/detail/detail.component";
import { FilterComponent } from "./components/filter/filter.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ResultsComponent } from "./components/results/results.component";
import { SearchComponent } from "./pages/search/search.component";
import { BudzService } from "./services/budz.service";
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ResultsComponent,
    DetailComponent,
    LoadingComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BudzService],
  bootstrap: [AppComponent]
})
export class AppModule {}
