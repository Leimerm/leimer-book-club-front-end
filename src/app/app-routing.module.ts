import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';


const routes: Routes = [
  { path:  '', component: BookListComponent},
  { path:  'book-list', component: BookListComponent},
  { path:  'book/:id', component: BookComponent},
  { path:  'add-book', component: AddBookComponent},
  { path:  'advanced-search', component: AdvancedSearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
