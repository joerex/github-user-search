import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { SearchInputComponent } from './search-input/search-input.component'
import {ReactiveFormsModule} from '@angular/forms'
import {LoadingIndicatorComponent} from './loading-indicator/loading-indicator.component'
import { UserListItemComponent } from './user-list-item/user-list-item.component'
import {NgxPaginationModule, PaginatePipe} from 'ngx-pagination'
import {HttpClientModule} from '@angular/common/http'
import { ErrorComponent } from './error/error.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { PaginatedUserSearchListComponent } from './paginated-user-search-list/paginated-user-search-list.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    LoadingIndicatorComponent,
    ErrorComponent,
    UserListItemComponent,
    UserDetailComponent,
    PaginatedUserSearchListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [PaginatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
