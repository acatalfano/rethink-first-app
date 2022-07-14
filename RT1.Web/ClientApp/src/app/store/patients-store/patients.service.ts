import { Injectable } from '@angular/core';

import { BaseNetworkService } from '../network-common/base-network.service';

import type { Patient } from 'model';

@Injectable()
export class PatientsService extends BaseNetworkService<Patient> {
    private readonly controllerValue: string = 'Patients';

    protected get controllerName(): string {
        return this.controllerValue;
    }
}
