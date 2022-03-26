import EventEmitter from "./EventEmitter.js";

class Paginator extends EventEmitter {
  $root = null;
  $pages = 1;
  $page = 1;

  constructor(root, pages, page) {
    super();

    this.$root = root;
    this.$pages = pages;
    this.$page = page;

    this.update();
  }

  update() {
    this.$root.textContent = '';

    const nav = document.createElement('nav');
    this.$root.append(nav);

    const ul = document.createElement('ul');
    nav.append(ul);
    ul.className = 'pagination justify-content-center';

    const backLi = document.createElement('li');
    ul.append(backLi);
    backLi.classList.add('page-item');

    const backA = document.createElement('a');
    backLi.append(backA);
    backA.textContent = 'Назад';
    backA.className = 'page-link';
    backA.href = '#';

    backA.addEventListener('click', evt => {
      evt.preventDefault();
      this.emit('move', this.$page - 1);
    });

    if (this.$page === 1) {
      backLi.classList.add('disabled');
    }

    for (let i = 1; i <= this.$pages; i++) {
      const li = document.createElement('li');
      ul.append(li);
      li.classList.add('page-item');

      const a = document.createElement('a');
      li.append(a);
      a.classList.add('page-link');
      a.href = '#';
      a.textContent = i;

      a.addEventListener('click', evt => {
        evt.preventDefault();
        this.emit('move', i);
      });

      if (i === this.$page) {
        li.classList.add('active');
      }
    }

    const forwardLi = document.createElement('li');
    ul.append(forwardLi);
    forwardLi.classList.add('page-item');

    const forwardA = document.createElement('a');
    forwardLi.append(forwardA);
    forwardA.textContent = 'Вперед';
    forwardA.className = 'page-link';
    forwardA.href = '#';

    forwardA.addEventListener('click', evt => {
      evt.preventDefault();
      this.emit('move', this.$page + 1);
    });

    if (this.$page === this.$pages) {
      forwardLi.classList.add('disabled');
    }
  }
}

export default Paginator;

{/* <nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">
  <li class="page-item disabled">
  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Назад</a>
  </li>
  <li class="page-item active"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item">
  <a class="page-link" href="#">Вперед</a>
  </li>
</ul>
</nav> */}