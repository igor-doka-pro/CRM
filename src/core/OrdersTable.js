import EventEmitter from "./EventEmitter.js";

const orderTableTemplate = document.querySelector('[data-template="orderTable"]');
const orderRowTemplate = document.querySelector('[data-template="orderRow"]');

const priceFormater = Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

const dateFormater = Intl.DateTimeFormat('ru-RU', {
  hour12: false,
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

class OrdersTable extends EventEmitter {
  $orders = [];
  $root = null; // точка монтирования таблицы

  constructor(root, orders) {
    super();
    this.$root = root;
    this.$orders = orders;

    this.update();
  }

  get orders() {
    return this.$orders;
  }

  set orders(orders) {
    this.$orders = orders;
    this.update();
  }

  update() {
    this.$root.textContent = '';
    const ordersTable = orderTableTemplate.content.cloneNode(true);
    const tbody = ordersTable.querySelector('tbody');

    for (const order of this.$orders) {
      const { id, user, orderType, price, status, createdAt } = order;
      const { name, surname } = user;
      
      const orderRow = orderRowTemplate.content.cloneNode(true);
      orderRow.querySelector('[data-field="id"]').textContent = id;
      orderRow.querySelector('[data-field="name"]').textContent = `${name} ${surname}`;
      orderRow.querySelector('[data-field="orderType"]').textContent = orderType;
      orderRow.querySelector('[data-field="price"]').textContent = priceFormater.format(price);
      orderRow.querySelector(`[data-badge="${status}"]`).classList.remove('hidden');
      orderRow.querySelector('[data-field="createdAt"]').textContent = dateFormater.format(new Date(createdAt));

      orderRow.querySelector('button').addEventListener('click', () => this.emit('edit', id));

      tbody.append(orderRow);
    }

    this.$root.append(ordersTable);
  }
}

export default OrdersTable;