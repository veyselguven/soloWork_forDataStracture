// Your task is to implement generateOrderSummary function

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const products = [
  { id: 101, name: "Product A", price: 50 },
  { id: 102, name: "Product B", price: 100 },
  { id: 103, name: "Product C", price: 75 },
];

const orders = [
  { id: 1001, userId: 1, productId: 101, quantity: 2 },
  { id: 1002, userId: 2, productId: 102, quantity: 1 },
  { id: 1003, userId: 1, productId: 103, quantity: 3 },
];

// TODO: it should generate summary for every order
// so that response will look like this:
//{
//  orderId: 1001,
//  user: { id: 1, name: 'Alice', age: 30 },
//  product: { id: 101, name: 'Product A', price: 50 },
//  total: 100 // price * quantity
//}

//  O(n^2) due to nested find operations inside the map loop
/*
const generateOrderSummary = ({ orders, products, users }) => {
//console.log("orders =>",orders)
const orderSummary = orders.map(order => {
    const user = users.find(u => u.id === order.userId);
    console.log(user) // {age:30,id:1,namee"Alice}, {age:25,id:2,name:"Bob"},
    const product = products.find(p => p.id === order.productId);
  //  console.log(product)
    const total = product.price * order.quantity;
   // console.log(total)

    return {
      orderId: order.id,
      user: { id: user.id, name: user.name, age: user.age },
      product: { id: product.id, name: product.name, price: product.price },
      total
    };
  });

  return orderSummary;
}
*/

/*
//As for the time complexity, the current implementation has a time complexity of O(n*m), where n is the length of the orders array, and m is the length of either the users or products array (whichever is larger). This is because we have nested loops (for orders and for finding users/products).

const generateOrderSummary = ({ orders, products, users }) => {
  const orderSummaries = [];

  for (const order of orders) {
    const user = users.find(u => u.id === order.userId);
    const product = products.find(p => p.id === order.productId);

    if (user && product) {
      const total = product.price * order.quantity;

      const orderSummary = {
        orderId: order.id,
        user: { id: user.id, name: user.name, age: user.age },
        product: { id: product.id, name: product.name, price: product.price },
        total: total
      };

      orderSummaries.push(orderSummary);
    }
  }

  return orderSummaries;
};

*/
// Additional (OPTIONAL) task
// what is time complexity of your solution?
// is it possible to make it in O(n) ?
// rewrite your solution to be the fastest

//  O(n + m + p) users,product and orders array loop sum which is O(n) solution

const generateOrderSummary = ({ orders, products, users }) => {
  const usersMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  console.log(usersMap);

  const productsMap = products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {});

  return orders.map((order) => ({
    orderId: order.id,
    user: usersMap[order.userId],
    product: productsMap[order.productId],
    total: productsMap[order.productId].price * order.quantity,
  }));
};

const Component = () => {
  const [body, setBody] = React.useState({});

  React.useEffect(() => {
    setBody(generateOrderSummary({ products, orders, users }));
  }, []);

  return (
    <div className="container">
      <pre>{JSON.stringify(body, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<Component />, document.querySelector("#app"));
