import { Component, OnInit, OnDestroy } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { AddItem } from "~/home/store/home.actions";
import { Store } from "@ngrx/store";
import { State } from "~/home/store/home.reducer";

@Component({
  selector: "Page1",
  moduleId: module.id,
  templateUrl: "./page1.component.html",
})
export class Page1Component implements OnInit, OnDestroy {

  constructor(private store: Store<State>, private router: RouterExtensions) {
    console.log('PAGE 1 --- COMPONENT CONSTRUCTOR!');
  }

  ngOnInit(): void {
    console.log('PAGE 1 --- INIT!');
  }

  ngOnDestroy() {
    console.log('PAGE 1 --- DESTROY!');
  }

  addOne() {
    this.store.dispatch(new AddItem());
    this.router.navigate(['home'], { clearHistory: true });
  }
}