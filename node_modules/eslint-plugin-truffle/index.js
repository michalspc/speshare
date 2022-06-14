module.exports = {
  environments: {
    get truffle() {
      return this.globals;
    },
    globals: {
      globals: {
        artifacts: 'readonly',
        contract: 'readonly',
        assert: 'readonly',
        web3: true,
      },
    },
  },
};
