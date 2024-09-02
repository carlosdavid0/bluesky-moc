export interface Posts {
  feed: Feed[];
  cursor: string;
}

export interface Feed {
  post: Post;
  feedContext: string;
}

export interface Post {
  uri: string;
  cid: string;
  author: Author;
  record: Record;
  embed?: Embed2;
  replyCount: number;
  repostCount: number;
  likeCount: number;
  quoteCount: number;
  indexedAt: string;
  labels: any[];
  threadgate?: Threadgate;
}

export interface Author {
  did: string;
  handle: string;
  displayName: string;
  avatar: string;
  associated?: Associated;
  labels: any[];
  createdAt: string;
}

export interface Associated {
  chat: Chat;
}

export interface Chat {
  allowIncoming: string;
}

export interface Record {
  $type: string;
  createdAt: string;
  embed?: Embed;
  langs: string[];
  text: string;
  facets?: Facet[];
}

export interface Embed {
  $type: string;
  images?: Image[];
  external?: External;
}

export interface Image {
  alt: string;
  aspectRatio: AspectRatio;
  image: Image2;
}

export interface AspectRatio {
  height: number;
  width: number;
}

export interface Image2 {
  $type: string;
  ref: Ref;
  mimeType: string;
  size: number;
}

export interface Ref {
  $link: string;
}

export interface External {
  description: string;
  thumb: Thumb;
  title: string;
  uri: string;
}

export interface Thumb {
  $type: string;
  ref: Ref2;
  mimeType: string;
  size: number;
}

export interface Ref2 {
  $link: string;
}

export interface Facet {
  features: Feature[];
  index: Index;
}

export interface Feature {
  $type: string;
  tag: string;
}

export interface Index {
  byteEnd: number;
  byteStart: number;
}

export interface Embed2 {
  $type: string;
  images?: Image3[];
  external?: External2;
}

export interface Image3 {
  thumb: string;
  fullsize: string;
  alt: string;
  aspectRatio: AspectRatio2;
}

export interface AspectRatio2 {
  height: number;
  width: number;
}

export interface External2 {
  uri: string;
  title: string;
  description: string;
  thumb: string;
}

export interface Threadgate {
  uri: string;
  cid: string;
  record: Record2;
  lists: any[];
}

export interface Record2 {
  $type: string;
  createdAt: string;
  hiddenReplies: string[];
  post: string;
}
