import { IRssItem } from './Rss';
import { Action } from 'redux-actions';

export interface IMenuItem {
  url: string;
  title: string;
  id: string;
}

export interface IMenuRssPayload {
  menuItems: IMenuItem[];
  rssItems: IRssItem[];
}

export interface IAppState {
  isOpenAddFeed: boolean;
  menu: IMenuItem[];
  items: IRssItem[];
  feedError: string;
  activeFeedUrl: string;
}

export interface IAppActions {
  toggleOpenAddFeed: (toggle: boolean) => Action<boolean>;
  setActiveFeed: (url: string) => Action<string>;
  setFeedError: (msg: string) => Action<string>;
  fetchMenu: () => Promise<IMenuRssPayload>;
  addFeed: (url: string) => Promise<IMenuItem[]>;
  removeFeed: (url: string) => Promise<IMenuItem[]>;
  fetchFeed: (url: string) => Promise<IFeed>;
}