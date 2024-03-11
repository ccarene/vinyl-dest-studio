/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVinylRecord = /* GraphQL */ `
  query GetVinylRecord($id: ID!) {
    getVinylRecord(id: $id) {
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
export const listVinylRecords = /* GraphQL */ `
  query ListVinylRecords(
    $filter: ModelVinylRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVinylRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
