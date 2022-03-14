import SearchModal from './SearchModalComponent';
import { dispatch } from '../modules/eventFactory';
import { CUSTOM_EVENT_KEY } from '../constants/events';
class App {
  searchModal = null;

  $searchModalButton = null;

  #parentElement = null;

  constructor(parentElement) {
    this.#parentElement = parentElement;
    this.#mount();
    this.#initDOM();
    this.#initChildrenComponent();
    this.#bindEventHandler();
  }

  #mount() {
    const template = this.#generateTemplate();
    this.#parentElement.insertAdjacentHTML('beforeend', template);
  }

  #initDOM() {
    this.$searchModalButton = document.querySelector('#search-modal-button');
  }

  #initChildrenComponent() {
    this.searchModal = new SearchModal(this.#parentElement);
  }

  #bindEventHandler() {
    this.$searchModalButton.addEventListener('click', () => {
      dispatch(CUSTOM_EVENT_KEY.CLICK_SEARCH_MODAL_BUTTON);
    });
  }

  #generateTemplate() {
    return `<main id="app" class="classroom-container">
    <h1 class="classroom-container__title">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h1>
    <nav class="nav">
      <button id="search-modal-button" class="button nav__button">🔍 검색</button>
    </nav>
  </main>`;
  }
}
export default App;
