import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    service['storage'] = window.localStorage;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a value on the local store', () => {
    const valueToBeStored = { value: {}, name: 'test' };
    const spyOnCreate = jest.spyOn(Storage.prototype, 'setItem');
    service.set(valueToBeStored.name, valueToBeStored.value);
    expect(spyOnCreate).toBeCalledWith(
      valueToBeStored.name,
      JSON.stringify(valueToBeStored.value)
    );
  });

  it('should get a value from the local store', () => {
    const valueToBeStored = { name: 'test' };
    const spyOnGet = jest.spyOn(Storage.prototype, 'getItem');
    service.get(valueToBeStored.name);
    expect(spyOnGet).toBeCalledWith(valueToBeStored.name);
  });

  it('should remove a value from the local store', () => {
    const valueToBeStored = { value: {}, name: 'test' };
    const spyOnCreate = jest.spyOn(Storage.prototype, 'removeItem');
    service.remove(valueToBeStored.name);
    expect(spyOnCreate).toBeCalledWith(valueToBeStored.name);
  });
});
