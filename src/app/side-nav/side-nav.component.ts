import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core'
import {MediaMatcher} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { LoginModalComponent } from '../modals/confirm-deletion/login-modal/login-modal.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  addBook = false;
  bookList = true;
  bookInfo = false;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginModalComponent);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
