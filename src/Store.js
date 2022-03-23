const APPLICATION_KEY = '__crm_app__';

class Store {
  $orders = [];

  get orders() {
    return JSON.parse(JSON.stringify(this.$orders));
  }

  upload() {
    const json = JSON.stringify(this.$orders);
    localStorage.setItem(APPLICATION_KEY, json);
  }

  download() {
    this.$orders.splice(0);

    const json = localStorage.getItem(APPLICATION_KEY);

    if (json) {
      const nextOrders = JSON.parse(json);
      this.$orders.push(...nextOrders);
    } else {
      this.reinit();
    }
  }

  reinit() {
    this.$orders.push(...[
      {
        id: 1,
        user: { name: "Константин", surname: "Соловьев" },
        orderType: "Сковородка",
        price: 1352,
        status: "process",
        createdAt: "2022-03-16T19:29:23.695Z",
      },
      {
        id: 2,
        user: { name: "Василий", surname: "Лепко" },
        orderType: "Шина",
        price: 3477,
        status: "process",
        createdAt: "2022-03-18T16:21:37.915Z",
      },
      {
        id: 3,
        user: { name: "Виктор", surname: "Лепко" },
        orderType: "Мыло",
        price: 1808,
        status: "process",
        createdAt: "2022-03-19T10:23:14.821Z",
      },
      {
        id: 4,
        user: { name: "Алексей", surname: "Соловьев" },
        orderType: "Мыло",
        price: 4305,
        status: "back",
        createdAt: "2022-03-19T14:39:56.349Z",
      },
      {
        id: 5,
        user: { name: "Виктор", surname: "Соколов" },
        orderType: "Веревка",
        price: 4033,
        status: "new",
        createdAt: "2022-03-19T21:34:24.352Z",
      },
      {
        id: 6,
        user: { name: "Константин", surname: "Лепко" },
        orderType: "Ручка",
        price: 1987,
        status: "back",
        createdAt: "2022-03-20T18:12:24.353Z",
      },
      {
        id: 7,
        user: { name: "Виктор", surname: "Мельник" },
        orderType: "Мыло",
        price: 4299,
        status: "archived",
        createdAt: "2022-03-21T13:33:26.412Z",
      },
      {
        id: 8,
        user: { name: "Виктор", surname: "Соловьев" },
        orderType: "Мыло",
        price: 2055,
        status: "back",
        createdAt: "2022-03-22T05:24:29.680Z",
      },
      {
        id: 9,
        user: { name: "Константин", surname: "Соколов" },
        orderType: "Ручка",
        price: 2793,
        status: "back",
        createdAt: "2022-03-22T09:26:46.032Z",
      },
      {
        id: 10,
        user: { name: "Алексей", surname: "Раков" },
        orderType: "Кресло",
        price: 2075,
        status: "process",
        createdAt: "2022-03-23T01:30:38.812Z",
      },
    ]
    );
  }
}

export default Store;