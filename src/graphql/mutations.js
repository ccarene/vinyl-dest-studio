/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createVinylRecord = /* GraphQL */ `
  mutation CreateVinylRecord(
    $input: CreateVinylRecordInput!
    $condition: ModelVinylRecordConditionInput
  ) {
    createVinylRecord(input: $input, condition: $condition) {
      id
      name
      stock
      year
      artist
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateVinylRecord = /* GraphQL */ `
  mutation UpdateVinylRecord(
    $input: UpdateVinylRecordInput!
    $condition: ModelVinylRecordConditionInput
  ) {
    updateVinylRecord(input: $input, condition: $condition) {
      id
      name
      stock
      year
      artist
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteVinylRecord = /* GraphQL */ `
  mutation DeleteVinylRecord(
    $input: DeleteVinylRecordInput!
    $condition: ModelVinylRecordConditionInput
  ) {
    deleteVinylRecord(input: $input, condition: $condition) {
      id
      name
      stock
      year
      artist
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
