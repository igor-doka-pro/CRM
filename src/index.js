import Store from "./core/Store.js";
import Observable from "./core/Observable.js";
import EventEmitter from "./core/EventEmitter.js";
import OrdersTable from "./core/OrdersTable.js";
import Paginator from "./core/Paginator.js";
import Navigator from "./core/Navigator.js";

const store = new Store();
store.download();


// const ob = new Observable();

// ob.subcribe((a) => console.log('subscribe fired 1', a));
// ob.subcribe((a) => console.log('subscribe fired 2', a));

// ob.dispatch(5);

// const ee = new EventEmitter();

// ee.addEventListener('event1', (data) => console.log('event1', data));
// ee.addEventListener('event2', (data) => console.log('event2', data));

// ee.emit('event1', { name: 'Алексей' });
// ee.emit('event2', { name: 'Игорь' });

const ordersTable = new OrdersTable(
  document.querySelector('[data-mount="ordersTable"]'),
  store.orders.slice(0, 5)
);

ordersTable.on('edit', (orderId) => console.log({ orderId }));

const paginator = new Paginator(
  document.querySelector('[data-mount="pagination"]'),
  Math.ceil(store.orders.length / 5),
  1
);

paginator.on('move', nextPage => {
  // paginator.page = nextPage;
  
  // const orders = store.orders.slice((nextPage - 1) * 5, nextPage * 5);
  // ordersTable.orders = orders;

  navigator.set('page', nextPage);
});

const navigator = new Navigator(navigator => {
  const page = parseInt(navigator.get('page', 1), 10);
  paginator.page = page;

  const orders = store.orders.slice((page - 1) * 5, page * 5);
  ordersTable.orders = orders;
});

