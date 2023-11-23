const { RESTDataSource } = require("apollo-datasource-rest");// RESTDataSource is imported from the apollo-datasource-rest package

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    //Set base URL to Etherscan API
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    // Gets the Ether balance for the eth_address 
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async totalSupplyOfEther() {
    // Gets the total supply of Ether
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  //Paste Code Here For New API Endpoints
  async getLatestEthereumPrice() {
    // Gets the latest Ethereum price
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }
  
  async getBlockConfirmationTime() {
    // Gets the estimated block confirmation time
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
