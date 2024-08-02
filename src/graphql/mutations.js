/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStocks = /* GraphQL */ `
  mutation CreateStocks(
    $input: CreateStocksInput!
    $condition: ModelStocksConditionInput
  ) {
    createStocks(input: $input, condition: $condition) {
      id
      company
      symbol
      market_cap
      sector
      country
      StockBucket {
        id
        name
        description
        createdAt
        updatedAt
        stockBucketStocksId
        __typename
      }
      createdAt
      updatedAt
      stocksStockBucketId
      __typename
    }
  }
`;
export const updateStocks = /* GraphQL */ `
  mutation UpdateStocks(
    $input: UpdateStocksInput!
    $condition: ModelStocksConditionInput
  ) {
    updateStocks(input: $input, condition: $condition) {
      id
      company
      symbol
      market_cap
      sector
      country
      StockBucket {
        id
        name
        description
        createdAt
        updatedAt
        stockBucketStocksId
        __typename
      }
      createdAt
      updatedAt
      stocksStockBucketId
      __typename
    }
  }
`;
export const deleteStocks = /* GraphQL */ `
  mutation DeleteStocks(
    $input: DeleteStocksInput!
    $condition: ModelStocksConditionInput
  ) {
    deleteStocks(input: $input, condition: $condition) {
      id
      company
      symbol
      market_cap
      sector
      country
      StockBucket {
        id
        name
        description
        createdAt
        updatedAt
        stockBucketStocksId
        __typename
      }
      createdAt
      updatedAt
      stocksStockBucketId
      __typename
    }
  }
`;
export const createStockBucket = /* GraphQL */ `
  mutation CreateStockBucket(
    $input: CreateStockBucketInput!
    $condition: ModelStockBucketConditionInput
  ) {
    createStockBucket(input: $input, condition: $condition) {
      id
      name
      description
      Stocks {
        id
        company
        symbol
        market_cap
        sector
        country
        createdAt
        updatedAt
        stocksStockBucketId
        __typename
      }
      createdAt
      updatedAt
      stockBucketStocksId
      __typename
    }
  }
`;
export const updateStockBucket = /* GraphQL */ `
  mutation UpdateStockBucket(
    $input: UpdateStockBucketInput!
    $condition: ModelStockBucketConditionInput
  ) {
    updateStockBucket(input: $input, condition: $condition) {
      id
      name
      description
      Stocks {
        id
        company
        symbol
        market_cap
        sector
        country
        createdAt
        updatedAt
        stocksStockBucketId
        __typename
      }
      createdAt
      updatedAt
      stockBucketStocksId
      __typename
    }
  }
`;
export const deleteStockBucket = /* GraphQL */ `
  mutation DeleteStockBucket(
    $input: DeleteStockBucketInput!
    $condition: ModelStockBucketConditionInput
  ) {
    deleteStockBucket(input: $input, condition: $condition) {
      id
      name
      description
      Stocks {
        id
        company
        symbol
        market_cap
        sector
        country
        createdAt
        updatedAt
        stocksStockBucketId
        __typename
      }
      createdAt
      updatedAt
      stockBucketStocksId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      mobile
      age
      profile_pic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      mobile
      age
      profile_pic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      mobile
      age
      profile_pic
      createdAt
      updatedAt
      __typename
    }
  }
`;
