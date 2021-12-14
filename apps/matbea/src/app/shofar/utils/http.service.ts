import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, tap, map } from 'rxjs/operators';
import { config } from './host-config';
import { environment } from 'apps/matbea/src/environments/environment';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  params: HttpParams;
  headers = this.getAuthOpetions();


  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getRequest(url: string, params?: HttpParams): Observable<any> {
    let computeUrl = config.getEnvironmentHost() + url;
    if (url.startsWith('http://') || url.startsWith('https://') ){
      computeUrl = url;
    }
    console.log('+++++++++++++++sending get request to url: ' + computeUrl + ' in envar' + environment.host)

    if (params) {
      this.params = params;
    }

    return this.http.get(computeUrl, {
      headers: this.headers,
      observe: 'response',
      params: this.params,
      responseType: 'json',

    }).pipe(
      map((response) => {
        return response.body;
      }),
      catchError(this.handleError<any>(`get to ${computeUrl} in HttpServise error `, []))
    )
  }

  postRequest(url: string, body: any, params?: HttpParams): Observable<any> {
    let computeUrl = config.getEnvironmentHost() + url;
    console.log('+++++++++++++++sending post request to url: ' + computeUrl + ' in envar' + environment.host)


    return this.http.post(computeUrl, body, {
      headers: this.headers,
      observe: 'response',
      params: params,
      responseType: 'json',

    }).pipe(
      catchError(this.handleError<any>(`post to ${computeUrl} in HttpServise error`, []))
    )
  }

  putRequest(url: string, body: any, params?: HttpParams): Observable<any> {
    let computeUrl = config.getEnvironmentHost() + url;
    console.log('puting request to url: ' + url + ' with body: ' + JSON.stringify(body) + ' in envar' + environment.host)
    console.log('+++++++++++++++sending put request to url: ' + computeUrl)
      this.params = params?this.params:undefined;

    return this.http.put(computeUrl, body, {
      // headers: this.headers,
      // observe: 'response',
      // params: this.params,
      responseType: 'json',

    }).pipe(
      catchError(this.handleError<any>(`put to ${computeUrl} in HttpServise error`, []))
    )
  }

  deleteRequest(url: string, params?: HttpParams): Observable<any> {
    let computeUrl = config.getEnvironmentHost() + url;
    console.log('deleting request to url: ' + url)
    return this.http.delete(computeUrl, {
      headers: this.headers,
      observe: 'response',
      params: this.params,
      responseType: 'json',

    }).pipe(
      catchError(this.handleError<any>(`delete to ${computeUrl} in HttpServise error`, []))
    )
  }


  getAuthOpetions(): HttpHeaders {

    let headers = new HttpHeaders();
    // const token = localStorage.getItem(environment.TOKEN_HEADER);
    // console.log('appending http header : Ch-Auth - ' + token);
    // headers.append("", token);
    headers.append('Content-Type','application/json');
    return headers;

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
  private log(message: string) {
    this.messageService.add(`HttpService: ${message}`);
  }
}
