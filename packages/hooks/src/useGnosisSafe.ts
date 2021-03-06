import { useEffect, useState } from 'react';

import ContractBasedAccount from '@tasit/contract-based-account';
const { Deploy } = ContractBasedAccount;

const { create } = Deploy;

type GnosisSafeCreationData = {
  address: string;
  hasError: boolean;
  // isLoading: boolean;
};

// Note: In the case where from local state you know
// Gnosis Safe has already been created for the user,
// don't bother rendering a component which uses this hook

// const BASE_URL = "https://safe-relay.rinkeby.gnosis.io/"; // Rinkeby
const BASE_URL = 'https://safe-relay.staging.gnosisdev.com/api'; // Mainnet staging

export function useGnosisSafe(
  owners: string[],
  threshold: number,
  randomBytes: Uint8Array,
  baseURL: string = BASE_URL
): GnosisSafeCreationData {
  // eslint-disable-next-line no-console
  console.log('useGnosisSafe called');
  // For this hook, it "wants" to let the component using the hook decide
  // how to manage state (local state, redux, Apollo's internal redux, etc.)

  // let gnosisSafeCreated = false;
  // let gnosisSafeAddress = "";
  // let gnosisSafeCreationError = false;
  // const [gnosisSafeCreated, setGnosisSafeCreated] = useState(false);
  const [gnosisSafeAddress, setGnosisSafeAddress] = useState('');
  const [hasError, setHasError] = useState(false);
  // TODO: Decide whether the error should be a boolean
  // or contain the error, or if we want both
  // const [isLoading, setIsLoading] = useState(false);

  const gnosisSafeUndefined = gnosisSafeAddress === '';
  const randomBytesUsable = randomBytes.length !== 0;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect called');
    // When component mounts, if you haven't already created a Safe, create one
    // setIsLoading(true);

    async function createAsync(
      owners: string[],
      threshold: number,
      randomBytes: Uint8Array,
      baseURL: string
    ): Promise<void> {
      try {
        const address = await create(owners, threshold, randomBytes, baseURL);
        // gnosisSafeCreated = true;
        // setGnosisSafeCreated(true);
        // gnosisSafeAddress = address;
        setGnosisSafeAddress(address);
        // setIsLoading(false);
      } catch (error) {
        // gnosisSafeCreationError = true;
        setHasError(true);
      }
    }

    // TODO: Consider alternate ways to achieve this same goal
    if (gnosisSafeUndefined && randomBytesUsable) {
      // eslint-disable-next-line no-console
      console.log({
        owners,
        threshold,
        randomBytes,
        baseURL,
        gnosisSafeAddress,
        gnosisSafeUndefined,
        randomBytesUsable,
      });
      createAsync(owners, threshold, randomBytes, baseURL);
    }
  }, [
    owners,
    threshold,
    randomBytes,
    baseURL,
    gnosisSafeAddress,
    gnosisSafeUndefined,
    randomBytesUsable,
  ]); // Only deploy Gnosis Safe with new params;

  return {
    address: gnosisSafeAddress,
    hasError,
    // isLoading
  };
}
