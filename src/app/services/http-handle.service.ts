import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { forkJoin, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API } from '../modules/shares/_app.config';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpHandleService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    post(data: any, service: string):Observable<any> {
        let url: string;
        url = (environment['apiUrl']) ? `${ environment['apiUrl'] }${ API[service] }` : API[service];

        const body = this.toBodyString(data);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            withCredentials: true
        };

        return this.http.post<any>(url, body, httpOptions)
            .pipe(
                timeout(15e3),
                map(res => {
                    return res;
                }),
                catchError((err) => this.handleError(err))
            );
    }

    postMulti(data: any, service: string): Observable<any[]> {
        let url: string;
        url = (environment['apiUrl']) ? `${ environment['apiUrl'] }${ API[service] }` : API[service];

        const body = [];
        const responses = [];
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            withCredentials: true
        };

        data.forEach((item: any) => {
            body.push(this.toBodyString(item));
        });

        body.forEach(item => {
            const request =
                this.http.post<any>(url, item, httpOptions)
                    .pipe(
                        timeout(15e3),
                        map(res => {
                            return res;
                        }),
                        catchError((err) => this.handleError(err))
                    );
            responses.push(request);
        });
        return forkJoin(responses);
    }

    private handleError(error: HttpErrorResponse): Observable<never> | Observable<any> {
        let errMsg = '';
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            switch (error.status) {
                case 500:
                    errMsg = 'Máy chủ đang bảo trì!';
                    break;
                case undefined:
                    errMsg = 'Vui lòng đăng nhập lại!';
                    break;
                case 0:
                    errMsg = 'Không thể kết nối, vui lòng đăng nhập lại!';
                    break;
                case 504:
                    errMsg = 'Không thể truy cập đến máy chủ, vui lòng thử lại sau ít phút!';
                    break;
                default:
                    errMsg = 'Lỗi bất thường, vui lòng thử lại sau ít phút!';
                    break;
            }
        }
        return throwError(errMsg);
    }

    private toBodyString(obj: any): string {
        let ret = [];
        for (const key of Object.keys(obj)) {
            const values = obj[key];
            if (values && values.constructor === Array) {
                const queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key + '[]', value));
                }
                ret = ret.concat(queryValues);
            } else if (values && values.constructor === Object) {
                for (const keySub of Object.keys(values)) {
                    ret.push(this.toQueryPair(key + '[' + keySub + ']', values[keySub]));
                }
            } else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    }

    private toQueryPair(key: any, value: any): string | any {
        if (typeof value === 'undefined') {
            return key;
        }
        return `${key}=${encodeURIComponent(value === null ? '' : String(value))}`;
    }
}
