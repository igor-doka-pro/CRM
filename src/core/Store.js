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
        user: { name: "Сергей", surname: "Раков" },
        orderType: "Веревка",
        price: 3130,
        status: "process",
        createdAt: "2022-03-19T23:43:25.749Z",
      },
      {
        id: 2,
        user: { name: "Василий", surname: "Вихта" },
        orderType: "Ноутбук",
        price: 3167,
        status: "process",
        createdAt: "2022-03-20T00:26:41.118Z",
      },
      {
        id: 3,
        user: { name: "Виктор", surname: "Саван" },
        orderType: "Веревка",
        price: 3191,
        status: "process",
        createdAt: "2022-03-20T03:44:12.406Z",
      },
      {
        id: 4,
        user: { name: "Алексей", surname: "Соколов" },
        orderType: "Кресло",
        price: 1120,
        status: "process",
        createdAt: "2022-03-20T09:32:43.179Z",
      },
      {
        id: 5,
        user: { name: "Петр", surname: "Соколов" },
        orderType: "Ручка",
        price: 4992,
        status: "process",
        createdAt: "2022-03-20T14:31:32.037Z",
      },
      {
        id: 6,
        user: { name: "Сергей", surname: "Соколов" },
        orderType: "Мыло",
        price: 1698,
        status: "archived",
        createdAt: "2022-03-21T02:38:04.896Z",
      },
      {
        id: 7,
        user: { name: "Виктор", surname: "Саван" },
        orderType: "Ноутбук",
        price: 1504,
        status: "back",
        createdAt: "2022-03-21T09:10:38.438Z",
      },
      {
        id: 8,
        user: { name: "Константин", surname: "Вихта" },
        orderType: "Ручка",
        price: 2539,
        status: "back",
        createdAt: "2022-03-21T17:12:43.196Z",
      },
      {
        id: 9,
        user: { name: "Василий", surname: "Раков" },
        orderType: "Сковородка",
        price: 4441,
        status: "archived",
        createdAt: "2022-03-21T19:31:24.848Z",
      },
      {
        id: 10,
        user: { name: "Сергей", surname: "Саван" },
        orderType: "Кресло",
        price: 1430,
        status: "back",
        createdAt: "2022-03-21T20:12:31.421Z",
      },
      {
        id: 11,
        user: { name: "Сергей", surname: "Мельник" },
        orderType: "Шина",
        price: 4022,
        status: "archived",
        createdAt: "2022-03-21T23:05:34.333Z",
      },
      {
        id: 12,
        user: { name: "Сергей", surname: "Соловьев" },
        orderType: "Нож",
        price: 1533,
        status: "archived",
        createdAt: "2022-03-22T08:37:59.631Z",
      },
      {
        id: 13,
        user: { name: "Олег", surname: "Мельник" },
        orderType: "Тетрадка",
        price: 1714,
        status: "archived",
        createdAt: "2022-03-22T12:53:09.461Z",
      },
      {
        id: 14,
        user: { name: "Константин", surname: "Лепко" },
        orderType: "Нож",
        price: 1511,
        status: "archived",
        createdAt: "2022-03-22T13:22:48.975Z",
      },
      {
        id: 15,
        user: { name: "Петр", surname: "Лепко" },
        orderType: "Мыло",
        price: 1902,
        status: "back",
        createdAt: "2022-03-22T14:02:06.669Z",
      },
      {
        id: 16,
        user: { name: "Олег", surname: "Раков" },
        orderType: "Кресло",
        price: 4430,
        status: "new",
        createdAt: "2022-03-23T12:41:44.100Z",
      },
      {
        id: 17,
        user: { name: "Сергей", surname: "Лепко" },
        orderType: "Тетрадка",
        price: 3970,
        status: "archived",
        createdAt: "2022-03-23T17:21:05.367Z",
      },
      {
        id: 18,
        user: { name: "Виктор", surname: "Раков" },
        orderType: "Нож",
        price: 4145,
        status: "new",
        createdAt: "2022-03-23T21:38:36.316Z",
      },
      {
        id: 19,
        user: { name: "Алексей", surname: "Мельник" },
        orderType: "Мыло",
        price: 1505,
        status: "back",
        createdAt: "2022-03-23T21:52:56.784Z",
      },
      {
        id: 20,
        user: { name: "Олег", surname: "Соколов" },
        orderType: "Веревка",
        price: 1168,
        status: "back",
        createdAt: "2022-03-24T08:14:14.876Z",
      },
      {
        id: 21,
        user: { name: "Константин", surname: "Соколов" },
        orderType: "Тетрадка",
        price: 1158,
        status: "new",
        createdAt: "2022-03-24T14:11:38.220Z",
      },
      {
        id: 22,
        user: { name: "Виктор", surname: "Лепко" },
        orderType: "Мыло",
        price: 1299,
        status: "archived",
        createdAt: "2022-03-24T20:28:42.860Z",
      },
      {
        id: 23,
        user: { name: "Олег", surname: "Лепко" },
        orderType: "Ручка",
        price: 1216,
        status: "archived",
        createdAt: "2022-03-24T23:40:26.324Z",
      },
      {
        id: 24,
        user: { name: "Виктор", surname: "Раков" },
        orderType: "Кресло",
        price: 1504,
        status: "new",
        createdAt: "2022-03-24T23:43:07.871Z",
      },
      {
        id: 25,
        user: { name: "Петр", surname: "Мельник" },
        orderType: "Ноутбук",
        price: 1832,
        status: "new",
        createdAt: "2022-03-25T12:27:02.811Z",
      },
      {
        id: 26,
        user: { name: "Константин", surname: "Раков" },
        orderType: "Мыло",
        price: 1390,
        status: "back",
        createdAt: "2022-03-25T12:28:18.695Z",
      },
      {
        id: 27,
        user: { name: "Константин", surname: "Вихта" },
        orderType: "Шина",
        price: 2270,
        status: "archived",
        createdAt: "2022-03-25T19:31:51.065Z",
      },
      {
        id: 28,
        user: { name: "Сергей", surname: "Раков" },
        orderType: "Ноутбук",
        price: 3763,
        status: "process",
        createdAt: "2022-03-26T04:09:51.175Z",
      },
      {
        id: 29,
        user: { name: "Петр", surname: "Лепко" },
        orderType: "Ручка",
        price: 2142,
        status: "archived",
        createdAt: "2022-03-26T12:21:58.560Z",
      },
      {
        id: 30,
        user: { name: "Константин", surname: "Лепко" },
        orderType: "Тетрадка",
        price: 1398,
        status: "back",
        createdAt: "2022-03-26T16:07:48.388Z",
      },
    ]
    );
  }
}

export default Store;