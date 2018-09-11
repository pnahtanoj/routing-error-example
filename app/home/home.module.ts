import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { Routes } from "@angular/router";
import { ItemsComponent } from "~/home/components/items/items.component";
import { reducer } from "~/home/store/home.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffects } from "~/home/store/home.effects";
import { HomeService } from "~/home/home.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // children: [
    //     {
    //         path: "",
    //         loadChildren: "./home/default/default.module#DefaultModule"
    //     }
    // ]
  }
];
@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(routes),
    StoreModule.forFeature('home', { home: reducer}),
    EffectsModule.forFeature([HomeEffects])
  ],
  declarations: [
    HomeComponent,
    ItemsComponent
  ],
  providers: [
    HomeService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
