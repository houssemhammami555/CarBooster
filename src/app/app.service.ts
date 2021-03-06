import { API_URLS } from './config/api.url.config';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { PrincipalState } from './shared/state';

//import { PrincipalState } from '../principal.state';
//import { SAVE_PRINCIPAL } from '../save.principal.action';

//import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated: boolean = false;

  constructor(private http: HttpClient,
    private store:Store<PrincipalState>,
      private cookieService: CookieService) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);

      this.http.get(API_URLS.USER_URLS).subscribe(response => {
          if (response && response['name']) {
            console.log("helloo from appService");
            console.log(response);
              this.authenticated = true;
              this.store.dispatch({
                type:'',
                payload:response
              })
              

          } else {
              this.authenticated = false;
          }
          return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    this.authenticated = false;
    return callback && callback();
  }

}