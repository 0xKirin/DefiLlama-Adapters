const {staking} = require('../helper/staking')
const { gmxExports } = require('../helper/gmx')

//BSC - Testnet
const bscVault = '';
const bscStaking = '';
const bscGMX = '';

module.exports = {
  bsc: {
    staking: staking(bscStaking, bscGMX, "bsc", bscGMX, 18),
    tvl: gmxExports({ vault: bscVault })
  },
};
