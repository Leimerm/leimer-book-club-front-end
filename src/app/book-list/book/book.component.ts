import { Component, OnInit, Input } from '@angular/core';
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
export class BookComponent implements OnInit {
  private subs = new Subscription;
  book: Book;
  showShortDesciption = true

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getBook()
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

