
// Helpers
import helpers from "@tasit/test-helpers";
const {
  developmentConfig,
  ProviderFactory,
  createSnapshot,
  revertFromSnapshot,
  mineBlocks,
} = helpers;

import Action from "@tasit/action";
const { ConfigLoader } = Action;
ConfigLoader.setConfig(developmentConfig);

// Global hooks
const provider = ProviderFactory.getProvider();
let snapshotId;

beforeEach(async () => {
  snapshotId = await createSnapshot(provider);

  while (snapshotId > 1) {
    await revertFromSnapshot(provider, snapshotId--);
  }

  expect(snapshotId).toEqual(1);
});

afterEach(async () => {
  expect(snapshotId).toEqual(1);
  await revertFromSnapshot(provider, snapshotId);

  // Note: Without this the test suite is breaking.
  // It is still unclear why
  await mineBlocks(provider, 1);
});
