import * as Redux from 'redux';
import { IRootState, IStore, IMenuItem } from '../Interfaces';
import actions from '../Actions/actions';

export default class Router {
  constructor(private store: Redux.Store<IRootState>) {}

  getFeedUrlById(id: string): string {
    const { state } = this.store.getState(),
      match = state.menu.find((item: IMenuItem) => item.id ===
        id);
    return match ? match.url : "";
  }
  register() {
    window.addEventListener("hashchange", () => {
      const url = this.getFeedUrlById(window.location.hash.substr(1));
      this.store.dispatch(actions.setActiveFeed(url));
      url && this.store.dispatch(actions.fetchFeed(url));
    });
  }
}