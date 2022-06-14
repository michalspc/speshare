import abi from '@spacecartels/blockchain/build/contracts/Amulets.json';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

class Client {
  public contractAddr: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
  protected client: Web3;
  protected contract: Contract;

  constructor(provider?: string) {
    this.client = new Web3(provider || Web3.givenProvider);
    this.contract = new this.client.eth.Contract(
      abi.abi as AbiItem[],
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    );
  }

  getClient() {
    return this.client;
  }

  getContract() {
    return this.contract;
  }
}

const web3CLient = new Client(Web3.givenProvider);

export { web3CLient };
