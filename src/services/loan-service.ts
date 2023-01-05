type LoanClient = {
  walletClient: any;
};

export class LoanService {
  private static _instance: LoanService = new LoanService();

  private _walletClient?: any;

  constructor() {
    if (LoanService._instance) {
      throw new Error('Error: Instantiation failed: Use LoanService.getInstance() instead of new.');
    }
    LoanService._instance = this;
  }

  public static instance(): LoanService {
    return LoanService._instance;
  }

  public initClients = (clients: LoanClient) => {
    this._walletClient = clients.walletClient;
  };

  getWallets = async () => {
    if (this._walletClient) {
      const response = await this._walletClient.get('wallets', {
        params: {
          bankId: 'FNXSMYNB',
        },
      });
      return response.data;
    } else {
      throw new Error('Wallet Client is not registered');
    }
  };
}
