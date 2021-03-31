import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailComponent } from "./components/detail/detail.component";
import { FilterComponent } from "./components/filter/filter.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { PillComponent } from "./components/pill/pill.component";
import { ResultsComponent } from "./components/results/results.component";
import { SearchComponent } from "./pages/search/search.component";
import { BudzService } from "./services/budz.service";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonateComponent } from './pages/donate/donate.component';
import { RarityComponent } from './components/rarity/rarity.component';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ResultsComponent,
    DetailComponent,
    LoadingComponent,
    PillComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    RarityComponent,
    TooltipDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [BudzService],
  bootstrap: [AppComponent]
})
export class AppModule {}
