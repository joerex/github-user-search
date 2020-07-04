import {Component, Input} from '@angular/core'
import {UserSummary} from '../api.service'

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
  @Input() user: UserSummary
  detailVisible = false

  constructor() {}
}
