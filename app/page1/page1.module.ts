import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Page1Component } from "./page1.component";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
	{ path: "", component: Page1Component }
];

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		NativeScriptRouterModule.forChild(routes)
	],
	declarations: [
		Page1Component
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class Page1Module { }