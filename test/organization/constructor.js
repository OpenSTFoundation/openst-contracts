// Copyright 2018 OpenST Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const { AccountProvider } = require('../test_lib/utils.js');

const Organization = artifacts.require('Organization');

contract('Organization::constructor', async () => {

  contract('Storage Tests', async (accounts) => {
    const accountProvider = new AccountProvider(accounts),
      owner = accountProvider.get();
    let organization = null;

    beforeEach(async function () {
      organization = await Organization.new({ from: owner });
    });

    it('Checks that organization owner is set correctly.', async () => {
      assert.strictEqual(await organization.owner.call(), owner);
    });

  });

});
