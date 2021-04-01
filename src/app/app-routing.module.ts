import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DonateComponent } from "./pages/donate/donate.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { CompareComponent } from "./pages/compare/compare.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  {
    component: AboutComponent,
    path: "about"
  },
  {
    component: ContactComponent,
    path: "contact"
  },
  {
    component: DonateComponent,
    path: "donate"
  },
  {
    component: SearchComponent,
    path: "search"
  },
  {
    component: CompareComponent,
    path: "compare/:id"
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
