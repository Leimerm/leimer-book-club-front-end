import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeletionComponent } from 'src/app/modals/confirm-deletion/confirm-deletion.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewChecked {
  private subs = new Subscription;
  book: Book;
  showShortDesciption = true
  mobile = false
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  mediaQuery$: Subscription;
  activeMediaQuery: string;

  ngOnInit(): void {
    this.getBook()
  }
  ngAfterViewChecked(): void {
    if (window.screen.width === 425) {
      this.mobile = true;
    }
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  removeBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const confirmDialog = this.dialog.open(ConfirmDeletionComponent, {
      data: {
        title: 'Are you sure, you want to delete: ' + this.book.title + '?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.bookService.deleteBook(id).subscribe(book => this.book = book);
        this.router.navigate([`/book-list`]);
      }
    });
  }

  routeToEditBook(id: number) {
    this.router.navigate([`/edit-book/${id}`])
  }

}

