import { TestBed } from '@angular/core/testing';

import { PatientBulkCrudService } from './patient-bulk-crud.service';

describe('PatientBulkCrudService', () => {
    let service: PatientBulkCrudService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PatientBulkCrudService);
    });

    it('should be created', () => {
        expect.hasAssertions();
        expect(service).toBeTruthy();
    });

    it.todo('');
});
