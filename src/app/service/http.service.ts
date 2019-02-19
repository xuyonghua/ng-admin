import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  /**
   *  登录
   */
  login(userName: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.BASE_URL + '/user/login', {account: userName, password: password}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }


}
