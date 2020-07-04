import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ApiService, UserDetail, UserSummary} from '../api.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user?: UserDetail
  @Input() id?: string
  detail?: UserDetail
  pending = true
  error?: string

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    if (this.user) {
      this.detail = this.user
      this.pending = false
    }
    else if (this.id) {
      this.api.getUser(this.id).pipe(delay(200)).subscribe(
        (user: UserDetail) => {
          this.detail = user
          this.pending = false
        },
        (error: Error) => this.error = error.message
      )
    }
    else {
      throw new Error('UserDetailComponent requires either a user or id.')
    }
  }
}
