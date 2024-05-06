import { Injectable } from '@angular/core';
import { combineLatest, concat, isObservable, Observable, of, race, timer } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { IStatisticalRequest } from '../modules/lottery-page/statistical';
import { HttpHandleService } from './http-handle.service';

@Injectable({
    providedIn: 'root'
})
export class HttpUserService {
    private USER_SERVICE = 'USER_SERVICE';
    constructor(
        private readonly httpService: HttpHandleService,
    ) { }
    private request(data: any) {
        return this.httpService.post(data, this.USER_SERVICE);
    }
    private requestMulti(data: any) {
        return this.httpService.postMulti(data, this.USER_SERVICE);
    }
    requestWithLoading(request: Observable<any>, loaddingTime: number, timeout: number): Observable<any> {
        const http$ = request.pipe(catchError(() => of({ error: true }))); // catchError to prevent combineLatest to complete before 3s
        const loading$ = timer(loaddingTime).pipe(take(1));
        const httpWithLoading$ = combineLatest(http$, loading$).pipe(
            map(([httpRes, timer]) => {
                if (httpRes.error) {
                    throw new Error('http error');
                } else {
                    return httpRes;
                }
            }
            ));
        const timeout$ = timer(timeout).pipe(take(1), map(() => { throw new Error('timeout!!!') }));

        return concat(
            of({ type: 'start' }),
            of(1).pipe(
                switchMap(() => race(timeout$, httpWithLoading$)),
                map(res => ({ type: 'finish', value: res })),
                catchError(err => of({ type: 'error' }))
            )
        );
    }
    login(data: any): Observable<any> {
        data.flag = 'LoginBean_loginnew';
        return this.request(data);
    }
    getUserItem(data: any): Observable<any> {
        data.flag = 'GetUserItem';
        return this.request(data);
    }
    searchUserMessage(data: any): Observable<any> {
        data.flag = 'PersonMessageBean_btnSearch';
        return this.request(data);
    }
    sysGameActive(): Observable<any> {
        let data = { flag: 'SysGameBean' };
        return this.request(data);
    }
    sys3rdGameActive(data: any): Observable<any> {
        data.flag = 'SysGame3rdLoginBean';
        return this.request(data);
    }
    lotteryInit(data: any): Observable<any> {
        data.flag = data.flag + 'Bean';
        return this.request(data);
    }

    lotteryRecordBean(data: any): Observable<any> {
        data.flag = 'GameRecordBean_btnSearch';
        return this.request(data);
    }

    lotteryNextRecordBean(data: any): Observable<any> {
        data.flag = 'GameRecordBean_nextPage';
        return this.request(data);
    }

    lotteryRecordBeanInfo(data: any): Observable<any> {
        data.flag = 'BetRecordBean';
        return this.request(data);
    }

    lotteryCancelBet(data: any): Observable<any> {
        data.flag = 'GameRecordBean_cancelBet';
        return this.request(data);
    }
    lotteryWinOpenNumberList(data: any) {
        data.flag = 'YLFXBean';
        return this.request(data);
    }
    getNewRates(data: any, flagLoading?: boolean) {
        return this.request(data);
    }
    getStatisticalNumber(data: IStatisticalRequest, flagLoading: boolean) {
        data['flag'] = 'SuggestionBean';
        return this.request(data);
    }
    sysMsgBean(data: any): Observable<any> {
        data.flag = 'SysMsgBean';
        return this.request(data);
    }
    official4DBean(data: any): Observable<any> {
        data.flag = 'Official4DBean';
        return this.request(data);
    }
    updateNickName(data: any): Observable<any> {
        data.flag = 'LoginBean_changeNickName';
        return this.request(data);
    }
    updateLoginPassword(data: any): Observable<any> {
        data.flag = 'PersonPwdBean_loginPWD';
        return this.request(data);
    }
    updatePaymentPassword(data: any): Observable<any> {
        data.flag = 'PersonPwdBean_checkPWD';
        return this.request(data);
    }
    checkPhoneNumber(data: any): Observable<any> {
        data.flag = 'PersonPwdBean_phoneCheck';
        return this.request(data);
    }
    confirmPhoneNumber(data: any): Observable<any> {
        data.flag = 'PersonPwdBean_confirmNumPhone';
        return this.request(data);
    }
    readMessage(data: any): Observable<any> {
        data.flag = 'PersonMessageBean_view';
        return this.request(data);
    }
    getAccountBank(data: any): Observable<any> {
        data.flag = 'PersonBankCardBean';
        return this.request(data);
    }
    lockBank(data: any): Observable<any> {
        data.flag = 'PersonBankCardBean_lockBankcard';
        return this.request(data);
    }
    addingBankCheck(data: any): Observable<any> {
        data.flag = 'PersonBankCardBean_addBankcardCheck';
        return this.request(data);
    }
    addBank(data: any): Observable<any> {
        data.flag = 'PersonBankCardBean_addBankcard';
        return this.request(data);
    }
}
