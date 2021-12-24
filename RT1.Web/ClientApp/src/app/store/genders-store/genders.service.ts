import { Injectable } from '@angular/core';

import { Gender } from 'src/app/model';

import { BaseNetworkService } from '../network-common/base-network.service';

@Injectable()
export class GendersService extends BaseNetworkService<Gender> {
    private readonly controllerValue: string = 'Genders';

    protected get controllerName(): string {
        return this.controllerValue;
    }
}
