import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environment/environment'

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

enum ResultCodes {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  me() {
    return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
