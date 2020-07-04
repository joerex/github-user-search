import { Injectable } from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '../environments/environment'
import {HttpClient} from '@angular/common/http'

export const MAX_RESULTS = 1000

export type UserSummary = {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  score: number
}

export type UserDetail = {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: false,
  name: string | null,
  company: string | null,
  blog: string | null,
  location: string | null,
  email: string | null,
  hireable: string | null,
  bio: string | null,
  twitter_username: string | null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
}

export type SearchResult<T> = {
  total_count: number,
  incomplete_results: boolean,
  items: T[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchUsers(q: string, page: number): Observable<SearchResult<UserSummary>> {
    return this.http.get<SearchResult<UserSummary>>(environment.apiUrl + 'search/users', {
      params: { q, page: page.toString() }
    })
  }

  getUser(id: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(environment.apiUrl + 'users/' + id)
  }
}
