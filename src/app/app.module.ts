import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SideNavComponent } from './side-nav/side-nav.component';
import { BookListComponent } from 'src/app/book-list/book-list.component';
import { BookComponent } from 'src/app/book-list/book/book.component';
import { AddBookComponent } from 'src/app/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { EditBookComponent } from './book-list/edit-book/edit-book.component';
import { ConfirmDeletionComponent } from './modals/confirm-deletion/confirm-deletion.component';
import { LoginModalComponent } from './modals/confirm-deletion/login-modal/login-modal.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { WriteReveiwComponent } from './book-list/write-reveiw/write-reveiw.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BookListComponent,
    BookComponent,
    AddBookComponent,
    AdvancedSearchComponent,
    ReadingListComponent,
    EditBookComponent,
    ConfirmDeletionComponent,
    LoginModalComponent,
    CreateAccountComponent,
    WriteReveiwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatExpansionModule,
    HttpClientModule,
    DragDropModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
