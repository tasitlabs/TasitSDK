import { ethers } from 'ethers';

import ProviderFactory from '@tasit/action';
import developmentConfig from './config/default';

const { utils: ethersUtils, constants: ethersConstants } = ethers;
const { WeiPerEther: WEI_PER_ETHER } = ethersConstants;
export const { bigNumberify } = ethersUtils;

// In weis
// Note: ethers uses BigNumber internally
// That accepts decimal strings (Ref: https://docs.ethers.io/ethers.js/html/api-utils.html#creating-instances)
// Scientific notation works if the number is small enough (< 1e21) to be converted to string properly
// See more: https://github.com/ethers-io/ethers.js/issues/228
const ZERO = 0;
const TOKEN_SUBDIVISIONS = WEI_PER_ETHER;
const ONE = bigNumberify(1).mul(TOKEN_SUBDIVISIONS);
const TWO = bigNumberify(2).mul(TOKEN_SUBDIVISIONS);
const TEN = bigNumberify(10).mul(TOKEN_SUBDIVISIONS);
const ONE_HUNDRED = bigNumberify(100).mul(TOKEN_SUBDIVISIONS);
const ONE_THOUSAND = bigNumberify(1000).mul(TOKEN_SUBDIVISIONS);
const BILLION = bigNumberify(`${1e9}`).mul(TOKEN_SUBDIVISIONS);

// Note: Also defined in @tasit/account test helpers
// Potential candidate for extracting to test helpers child package.
export const constants = {
  ZERO,
  ONE,
  TWO,
  TEN,
  ONE_HUNDRED,
  ONE_THOUSAND,
  BILLION,
  WEI_PER_ETHER,
  TOKEN_SUBDIVISIONS,
};

type PrivKey = string | ArrayLike<number> | ethers.utils.SigningKey | ethers.utils.HDNode.HDNode
// type Provider = ethers.providers.Provider

export const createFromPrivateKey = (privKey: PrivKey) => {
  try {
    const wallet = new ethers.Wallet(privKey);
    return wallet;
  } catch (error) {
    throw new Error(`Error creating account: ${error.message}`);
  }
};

// Note: These private keys correspond to the the seed phrase
// used for local buidler-evm development

// Note: Using these same private keys in the root of the monorepo
// for the buidler config

const privateKeys = [
  '0x02380f59eeed7a02557aeaab089606739feb0e1db34c6b08374ad31188a3892d',
  '0x2232aa52d058352511c5dd2d0ebcc0cfb6dfb5f051a9b367b7505556d2672490',
  '0x573862e2beaa8dcaf00094c7a56dcb81bcf82c83fc1bb0f9292d6cd656db45df',
  '0xcc51b0d7bb32d222416bfd885498659a9270a1790ba0fcb1771a5fd20507ffa9',
  '0x1fed0a74c3c287f5c93479ff5ba60e1a32974d49425bd6d596ecd0b0f77e0352',
  '0x9f071322c7c55e5d8b7e9778788e798384371c5ec716c60614dd7db009947e18',
  '0xa6d4b9724775bbc5541158ad69e6428af60e5f2251d0bf8fd3e8ab7efa12ee93',
  '0xe1ba62dfb842495d59579dfca29e212ceb78818af7c5869623317fc46dd1a5bf',
  '0xda1a8c477afeb99ae2c2300b22ad612ccf4c184564e332ae9a32f784bbca8d6b',
  '0x633a290bcdabb9075c5a4b3885c69ce64b4b0e6079eb929abb2ac9427c49733b',
];

// Note that a different seed phrase / private key was used to deploy
// the Rinkeby testnet contracts originally

// Note: Also defined in @tasit/account test helpers
// Potential candidate for extracting to test helpers child package.
export const accounts = privateKeys.map(createFromPrivateKey);

const mineOneBlock = async (provider: any) => {
  await provider.send('evm_increaseTime', [1]);
  await provider.send('evm_mine', []);
};

export const mineBlocks = async (provider: any, n: number) => {
  // Do nothing if provider isn't a JSON-RPC
  // (Infura uses RPC calls over HTTP as opposed to JSON-RPC directly)
  if (!provider.send) return;

  for (let i = 0; i < n; i++) {
    await mineOneBlock(provider);

    // Forcing blocktime > pollingInterval
    // Without that some undesired behavior occurs
    // E.g.: Same listener receiving tx confirmation several times
    // See more: https://github.com/ethers-io/ethers.js/issues/393
    await wait(provider.pollingInterval * 2);
  }
};

export const createSnapshot = async (provider: any) => {
  // Do nothing if provider isn't a JSON-RPC
  if (!provider.send) return 1;
  const id = await provider.send('evm_snapshot', []);
  return Number(id);
};

export const revertFromSnapshot = async (provider: any, snapshotId: number) => {
  // Do nothing if provider isn't a JSON-RPC
  if (!provider.send) return true;
  return await provider.send('evm_revert', [snapshotId]);
};

export const wait = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const expectExactEtherBalances = async (
  provider: any,
  addresses: string[],
  balances: any[]
) => {
  expect(addresses.length).toEqual(balances.length);
  let index = 0;
  for (const address of addresses) {
    const balance = await provider.getBalance(address);
    const expectedBalance = balances[index++];
    expect(balance.toString()).toEqual(expectedBalance.toString());
  }
};

export const expectMinimumEtherBalances = async (
  provider: any,
  addresses: string[],
  balances: any[]
) => {
  expect(addresses.length).toEqual(balances.length);
  let index = 0;
  for (const address of addresses) {
    const balance = await provider.getBalance(address);
    // const actual = bigNumberify(balance);
    // const expected = bigNumberify(balances[index++]);
    const actual = balance;
    const expected = balances[index++];
    expect(actual).toBeGreaterThanOrEqual(expected);
  }
};

export const expectMinimumTokenBalances = async (
  token: any,
  addresses: string[],
  balances: any[]
) => {
  expect(addresses.length).toEqual(balances.length);
  let index = 0;
  for (const address of addresses) {
    const balance = await token.balanceOf(address);
    // const actual = bigNumberify(balance);
    // const expected = bigNumberify(balances[index++]);
    const actual = balance;
    const expected = balances[index++];
    expect(actual).toBeGreaterThanOrEqual(expected);
  }
};

export const expectExactTokenBalances = async (token: any, addresses: string[], balances: any[]) => {
  expect(addresses.length).toEqual(balances.length);
  let index = 0;
  for (const address of addresses) {
    const balance = await token.balanceOf(address);
    const expectedBalance = balances[index++];
    expect(balance.toString()).toEqual(expectedBalance.toString());
  }
};

// TODO: Doing it using Account/Action in future
// See more: https://github.com/tasitlabs/tasit-sdk/issues/220
export const etherFaucet = async (
  provider: any,
  fromWallet: any,
  beneficiaryAddress: string,
  amountInWei: string
) => {
  const connectedFromWallet = fromWallet.connect(provider);
  const tx = await connectedFromWallet.sendTransaction({
    value: amountInWei,
    to: beneficiaryAddress,
  });
  await provider.waitForTransaction(tx.hash);
};

export const erc20Faucet = async (
  tokenContract: any,
  ownerAccount: string,
  toAddress: string,
  amountInWei: string
) => {
  tokenContract.setAccount(ownerAccount);
  const mintAction = tokenContract.mint(toAddress, `${amountInWei}`);
  await mintAction.send();
  await mintAction.waitForOneConfirmation();
};

const erc721Faucet = async (
  tokenContract: any,
  ownerAccount: string,
  toAddress: string,
  tokenId: string
) => {
  tokenContract.setAccount(ownerAccount);
  const mintAction = tokenContract.mint(toAddress, tokenId);
  await mintAction.send();
  await mintAction.waitForOneConfirmation();
};

export const addressesAreEqual = (address1: string, address2: string) => {
  return address1.toUpperCase() === address2.toUpperCase();
};

export const duration = {
  seconds: function(val: number) {
    return val;
  },
  minutes: function(val: number) {
    return val * this.seconds(60);
  },
  hours: function(val: number) {
    return val * this.minutes(60);
  },
  days: function(val: number) {
    return val * this.hours(24);
  },
  weeks: function(val: number) {
    return val * this.days(7);
  },
  years: function(val: number) {
    return val * this.days(365);
  },
};

export const helpers = {
  mineBlocks,
  createSnapshot,
  revertFromSnapshot,
  wait,
  expectExactEtherBalances,
  expectMinimumEtherBalances,
  expectMinimumTokenBalances,
  expectExactTokenBalances,
  etherFaucet,
  erc20Faucet,
  erc721Faucet,
  addressesAreEqual,
  constants,
  bigNumberify,
  ProviderFactory,
  accounts,
  developmentConfig,
  duration,
};

export default helpers;
