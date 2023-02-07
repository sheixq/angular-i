import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { map, Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { User, UsersResponse } from '../models/users.model'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkUrl}/users?page=${page}`)
      .pipe(map(el => el.items))
  }
}
