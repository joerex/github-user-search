import { Component, OnInit } from '@angular/core';
import {ApiService, MAX_RESULTS, SearchResult, UserSummary} from '../api.service';
import {PaginatePipe} from 'ngx-pagination';

@Component({
  selector: 'app-paginated-user-search-list',
  templateUrl: './paginated-user-search-list.component.html',
  styleUrls: ['./paginated-user-search-list.component.scss']
})
export class PaginatedUserSearchListComponent {
  searchTerm: string
  searchResult?: SearchResult<UserSummary>
  currentPage = 1
  pageSize = 30
  pending = false
  error?: string

  constructor(private api: ApiService, private paginate: PaginatePipe) {}

  search(q: string, page: number = 1): void {
    if (this.searchTerm !== q) {
      this.searchResult = undefined
    }
    this.error = undefined
    this.currentPage = page
    this.searchTerm = q
    this.pending = true

    this.api.searchUsers(q, page).subscribe(
      (result: SearchResult<UserSummary>) => {
        this.searchResult = result
        this.paginate.transform(this.searchResult.items, {
          itemsPerPage: this.pageSize,
          currentPage: this.currentPage,
          totalItems: Math.min(result.total_count, MAX_RESULTS)
        })
        this.pending = false
      },
      (error: Error) => {
        this.error = error.message
        this.pending = false
      }
    )
  }
}
