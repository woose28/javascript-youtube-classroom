import SearchModal from './SearchModalComponent';
import SavedVideoListSection from './SavedVideoListSectionComponent';
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
    this.$nav = document.querySelector('.nav');
    this.$savedVideoListSection = document.querySelector('#saved-video-list-section');
  }

  #initChildrenComponent() {
    this.searchModal = new SearchModal(this.#parentElement);
    this.savedVideoListSection = new SavedVideoListSection(this.$savedVideoListSection);
  }

  #bindEventHandler() {
    this.$nav.addEventListener('click', (e) => {
      if (!e.target.classList.contains('button')) {
        return;
      }

      const { buttonFor } = e.target.dataset;

      if (buttonFor === 'watch-later-video') {
        // TODO: 볼 영상 필터링
      } else if (buttonFor === 'watched-video') {
        // TODO: 본 영상 필터링
      } else if (buttonFor === 'search-modal') {
        dispatch(CUSTOM_EVENT_KEY.CLICK_SEARCH_MODAL_BUTTON);
      }
    });
  }

  #generateTemplate() {
    return `<main id="app" class="classroom-container">
    <h1 class="classroom-container__title">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h1>
    <nav class="nav">
      <button class="button nav__filter-button" data-button-for="watch-later-video">👁 볼 영상</button>
      <button class="button nav__filter-button" data-button-for="watched-video">✅ 본 영상</button>
      <button id="search-modal-button" class="button nav__button" data-button-for="search-modal">🔍 검색</button>
    </nav>
    <section id="saved-video-list-section" class="saved-video-list__section"></section>
  </main>`;
  }
}
export default App;
