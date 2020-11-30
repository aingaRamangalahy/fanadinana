import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { MpiadinaComponent } from "src/app/pages/mpiadina/mpiadina.component";
import { NaotyComponent } from "src/app/pages/naoty/naoty.component";
import { ValinyComponent } from "src/app/pages/valiny/valiny.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "mpiadina", component: MpiadinaComponent },
  { path: "naoty", component: NaotyComponent },
  { path: "valiny", component: ValinyComponent },
];
