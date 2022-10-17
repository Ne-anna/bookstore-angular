import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  BookListComponent} from '../book-list/book-list.component'


const routes: Routes = [
    { path: "", component: BookListComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class BookListsRoutingModule { }