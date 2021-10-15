import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { BusyService } from './busy.service';
import type { Observable } from 'rxjs';

@Injectable()
export abstract class BaseNetworkService<T> {
    private readonly urlBase = '/api/v';
    private readonly apiVersion = 1;
    private readonly batchUrlFragment = 'batch';
    private readonly deleteBatchUrlFragment = 'deleteBatch';

    // eslint-disable-next-line @typescript-eslint/naming-convention
    private readonly jsonHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(protected httpClient: HttpClient, protected busyService: BusyService) {}

    protected abstract get controllerName(): string;

    public readonly getAll = (headers: HttpHeaders = new HttpHeaders()): Observable<T[]> =>
        this.isBusy(this.httpClient.get<T[]>(this.endpoint(), { headers }));

    public readonly get = (id: string | number, headers: HttpHeaders = new HttpHeaders()): Observable<T> =>
        this.isBusy(this.httpClient.get<T>(this.endpoint(id.toString()), { headers }));

    public readonly putBatch = (updates: T[], headers: HttpHeaders = this.jsonHeaders): Observable<T[]> =>
        this.isBusy(this.httpClient.put<T[]>(this.endpoint(this.batchUrlFragment), updates, { headers }));

    public readonly put = (id: string | number, update: T, headers: HttpHeaders = this.jsonHeaders): Observable<T> =>
        this.isBusy(this.httpClient.put<T>(this.endpoint(id.toString()), update, { headers }));

    public readonly post = (newItem: T, headers: HttpHeaders = this.jsonHeaders): Observable<T> =>
        this.isBusy(this.httpClient.post<T>(this.endpoint(), newItem, { headers }));

    public readonly postBatch = (newItems: T[], headers: HttpHeaders = this.jsonHeaders): Observable<T[]> =>
        this.isBusy(this.httpClient.post<T[]>(this.endpoint(this.batchUrlFragment), newItems, { headers }));

    public readonly delete = (id: string | number, headers = new HttpHeaders()): Observable<T> =>
        this.isBusy(this.httpClient.delete<T>(this.endpoint(id.toString()), { headers }));

    public readonly deleteBatch = (ids: string[] | number[], headers = new HttpHeaders()): Observable<T[]> =>
        this.isBusy(this.httpClient.post<T[]>(this.endpoint(this.deleteBatchUrlFragment), ids, { headers }));

    private isBusy<V>(networkObservable$: Observable<V>): Observable<V> {
        return this.busyService.attachTo(networkObservable$);
    }

    private readonly endpoint = (pathSuffix: string = ''): string =>
        `${this.urlBase}${this.apiVersion}/${this.controllerName}/${pathSuffix}`;
}
