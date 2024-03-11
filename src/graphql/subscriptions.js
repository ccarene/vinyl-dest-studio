/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
      id
      name
      email
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
      id
      name
      email
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
      id
      name
      email
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateVinylRecord = /* GraphQL */ `
  subscription OnCreateVinylRecord(
    $filter: ModelSubscriptionVinylRecordFilterInput
  ) {
    onCreateVinylRecord(filter: $filter) {
      id
      name
      stock
      year
      artist
      price
      pictureS3URL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateVinylRecord = /* GraphQL */ `
  subscription OnUpdateVinylRecord(
    $filter: ModelSubscriptionVinylRecordFilterInput
  ) {
    onUpdateVinylRecord(filter: $filter) {
      id
      name
      stock
      year
      artist
      price
      pictureS3URL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteVinylRecord = /* GraphQL */ `
  subscription OnDeleteVinylRecord(
    $filter: ModelSubscriptionVinylRecordFilterInput
  ) {
    onDeleteVinylRecord(filter: $filter) {
      id
      name
      stock
      year
      artist
      price
      pictureS3URL
      createdAt
      updatedAt
      __typename
    }
  }
`;
