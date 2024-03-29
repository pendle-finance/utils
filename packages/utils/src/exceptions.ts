export class InvalidAddressError extends Error {
  constructor(address: string) {
    super(`${address} is not a valid address.`);
  }
}

export class InvalidChainIdError extends Error {
  constructor(chainId: number) {
    super(`Invalid Chain ID ${chainId}.`);
  }
}

export class AbsentProviderError extends Error {
  constructor() {
    super('Provider is required for reading');
  }
}
