import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Observable, from, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
 
//Purpose have made orders for a logged in user secure using spring boot security, hence providing token to give acess to logged in user from frontend
 
export class AuthInterceptorService implements HttpInterceptor {
 
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAcess(request,next));
 
  }
 
  private async handleAcess(request: HttpRequest<any>,next : HttpHandler): Promise<HttpEvent<any>> {
    const endpoint = [environment.shop2goApiUrl + '/orders'];
 
    //check if url matches secured endpoints here
    if (endpoint.some(url => request.urlWithParams.includes(url))) {
 
    //if does match get access token
    const accessToken = this.oktaAuth.getAccessToken();
 
      // clone the request and add new header with access token
    //reason  for cloning is request is immutable cant change it directly, then make copy of it accrdngly and set headers to it
       request = request.clone({
       setHeaders: {
        Authorization: 'Bearer ' + accessToken
      }
    });
   }
    //continue with other chain of interceptor or else make call to rest api
    return await lastValueFrom(next.handle(request));
 
  }
 
 
}