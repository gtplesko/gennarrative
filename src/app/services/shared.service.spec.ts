import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('SERVICE: Should be created', () => {
    expect(service).toBeTruthy();
  });
  it('LOADING: Initialize properly', () => {
    service.setLoadState({load1: true, load2: true});
    expect(service.getLoadState().loaded).toBeFalse();
    expect(service.getLoadState().loaded).toBeFalse();
    expect(service.getLoadState().data).toBeDefined();
  });
  it('LOADING: Overwrite values properly', () => {
    service.setLoadState({load1: true, load2: true});
    service.setLoadState({load2: false});
    expect(service.getLoadState().data.load1).toBeDefined();
    expect(service.getLoadState().data.load1).toBeTrue();
    expect(service.getLoadState().data.load2).toBeDefined();
    expect(service.getLoadState().data.load2).toBeFalse();
    expect(service.getLoadState().loaded).toBeFalse();
  });
  it('LOADING: Add new property and modify record', () => {
    service.setLoadState({load1: true, load2: true});
    service.setLoadState({load1: false, load2: false, load3: true});
    expect(service.getLoadState().data.load1).toBeDefined();
    expect(service.getLoadState().data.load1).toBeFalse();
    expect(service.getLoadState().data.load2).toBeDefined();
    expect(service.getLoadState().data.load2).toBeFalse();
    expect(service.getLoadState().data.load3).toBeDefined();
    expect(service.getLoadState().data.load3).toBeTrue();
    expect(service.getLoadState().loaded).toBeFalse();
  });
  it('LOADING: Loading finished properly.', () => {
    service.setLoadState({load1: true, load2: true});
    expect(service.getLoadState().loaded).toBeFalse();
    service.setLoadState({load1: false, load2: false});
    expect(service.getLoadState().loaded).toBeTrue();
  });
  it('LOADING: Switch between loading state multiple times.', () => {
    service.setLoadState({load1: true, load2: true});
    service.setLoadState({load1: false, load2: false});
    service.setLoadState({load3: true});
    expect(service.getLoadState().loaded).toBeFalse();
    service.setLoadState({load3: false});
    expect(service.getLoadState().loaded).toBeTrue();
  });
});
