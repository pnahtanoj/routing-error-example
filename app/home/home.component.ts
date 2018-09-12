import { Component, OnInit, OnDestroy } from "@angular/core";
import { State, selectItems } from "~/home/store/home.reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { FetchItems, AddItem } from "~/home/store/home.actions";
import { RouterExtensions } from "nativescript-angular/router";
import { HomeService } from "~/home/home.service";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
  items$: Observable<any[]>;

  constructor(private store: Store<State>, private router: RouterExtensions, private data: HomeService) {

    console.log('HOME COMPONENT --- CONSTRUCTOR!');
    // this.items$ = this.data.fetchItems()
    this.items$ = this.store.select(selectItems)
      .pipe(tap(_ => console.log('HOME SELECT: ', _)));

    this.store.dispatch(new FetchItems());
  }

  ngOnInit(): void {
    // console.log('HOME COMPONENT --- INIT!');
    // this.store.dispatch(new FetchItems());
  }

  ngOnDestroy() {
    console.log('HOME COMPONENT --- DESTROY!');
  }

  update(item: any) {
    console.log('HOME COMPONENT --- UPDATE: ', item);
  }

  addOne() {
    this.store.dispatch(new AddItem());
    // this.store.dispatch(new FetchItems());
  }

  page1() {
    this.router.navigate(['page1']);
  }
}