import { IRssItem, IFeed } from '../Interfaces';
import { IFeedMe } from './IFeedMe';
import * as request from 'request';

const FeedMe: IFeedMe = require('feedme');

function createFeedParserStream(feed: IFeed): NodeJS.WritableStream {
  const parser = new FeedMe(true);

  parser.on('title', (title: string) => {
    feed.title = title;
  });
  parser.on('item', (item: IRssItem) => {
    feed.items.push(item);
  })

  return parser;
}

export default function rss(feedUrl: string): Promise<IFeed> {
  const feed: IFeed = {
    title: '',
    items: []
  }

  return new Promise<IFeed>((resolve, reject) => {
    request.get(feedUrl)
      .on('error', (err: Error) => {
        reject(err)
      })
      .on('end', () => {
        resolve(feed)
      })
      .pipe(createFeedParserStream(feed))
  })
}