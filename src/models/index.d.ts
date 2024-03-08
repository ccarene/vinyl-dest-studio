import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerVinylRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VinylRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly stock: number;
  readonly year: number;
  readonly artist: string;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVinylRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VinylRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly stock: number;
  readonly year: number;
  readonly artist: string;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VinylRecord = LazyLoading extends LazyLoadingDisabled ? EagerVinylRecord : LazyVinylRecord

export declare const VinylRecord: (new (init: ModelInit<VinylRecord>) => VinylRecord) & {
  copyOf(source: VinylRecord, mutator: (draft: MutableModel<VinylRecord>) => MutableModel<VinylRecord> | void): VinylRecord;
}