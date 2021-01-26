import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  login: boolean;
  constructor(
    private userService: UserService,
    public dialModalRef: MatDialogRef<any>,
    private dialogRef: MatDialog
  ) { }

  changePosition() {
    this.dialModalRef.updatePosition({ top: '9vh', right: '2vw' });
  }

  changeSize() {
    this.dialModalRef.updateSize("400px", "");
  }

  closeLoginModal() {
    this.dialogRef.closeAll()
  }

  ngOnInit(): void {
    this.changePosition()
    this.changeSize()
    this.userService.login.subscribe(value=>{
      this.login=value
    })
  }

  onLogin() {
    this.userService.login.next(!this.login);
  }

}
