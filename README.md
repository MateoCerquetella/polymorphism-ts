The main reason for using interfaces is to achieve polymorphism and to provide developers with the ability to implement interface methods in their own way in the future.

In this example I will use TypeScript and I will put the repository at the end of the note

Suppose we have an interface and three classes:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6cn3ocgbfbn4n8ncc3b7.png)

This is the connector interface.

Now we are going to implement the Wifi communication.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mnzvistko2uy5cfcv22b.png)

Here we have developed our concrete class called WifiConnector which has its own implementation of type Connector.

---

Now we are creating our System which has a Connector component. This is called dependency injection.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kklf9jlkzs835v31expf.png)

---

### Let's look at this line of code ...

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t5bv3eg9ia2ccylaoitn.png)

Connector is an interface and must have the method doConnect().

Now, since Connector is an interface, the System class has much more flexibility.

We can pass any type that has implemented the Connector interface.
In the future, the developer will achieve more flexibility.

---

For example, now the developer wants to add a Bluetooth  connection module:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hi92hzcrf4uoo9zg25dc.png)

We see that WifiConnector and BluetoothConnector have their own implementation.
There is a different way to connect.

So we can pass any of them to the System class as a constructor parameter. This is called polymorphism.

The System class is now not aware of whether it is Bluetooth or Wifi. We can even add another communication module such as Infrared, Bluetooth5 and whatever, simply by implementing the Connector interface.

This is called [**Duck Typing**](https://en.wikipedia.org/wiki/Duck_typing). The connector type is now dynamic since doConnect() is just a placeholder and the developer implements it as their own.

Here is the [**repository**](https://github.com/MateoCerquetella/polymorphism-ts) in case you need it and thanks for reading!
