interface Connector {
  doConnect(): boolean;
}

class WifiConnector implements Connector {
  public doConnect(): boolean {
    console.log('Connecting via wifi');
    console.log('Get password');
    console.log('Lease an IP for 24 hours');
    console.log('Connected');
    return true;
  }
}

class System {
  constructor(private connector: Connector) {
    this.connector.doConnect();
  }
}

class BluetoothConnector implements Connector {
  public doConnect(): boolean {
    console.log('Connecting via Bluetooth');
    console.log('Pair with PIN');
    console.log('Connected');
    return true;
  }
}

(function main() {
  const bluetooth = new BluetoothConnector();
  const wifi = new WifiConnector();
  new System(bluetooth);
  new System(wifi);
})();
