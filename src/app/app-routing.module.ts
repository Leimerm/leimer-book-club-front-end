import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';
import { EditBookComponent } from './book-list/edit-book/edit-book.component';
import { ReadingListComponent } from './reading-list/reading-list.component';


const routes: Routes = [
  { path:  '', component: BookListComponent},
  { path:  'book-list', component: BookListComponent},
  { path:  'book/:id', component: BookComponent},
  { path:  'add-book', component: AddBookComponent},
  { path:  'reading-list', component: ReadingListComponent},
  { path:  'edit-book/:id', component: EditBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
