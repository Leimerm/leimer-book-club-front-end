import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { WarningModalComponent } from 'src/app/modals/warning-modal/warning-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
    this.bookService.deleteBook(id).subscribe(book => this.book = book);
    this.router.navigate([`/book-list`]);
  }

  routeToEditBook(id: number) {
    this.router.navigate([`/edit-book/${id}`])
  }

  openDialog() {
    const dialogRef = this.dialog.open(WarningModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

