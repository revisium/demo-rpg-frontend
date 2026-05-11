// @ts-ignore
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: number | string; output: number | string; }
  JSON: { input: unknown; output: unknown; }
};

export type Demo_Rpg_CmsBlog_Authors = {
  avatar: Demo_Rpg_CmsBlog_AuthorsAvatar;
  bio: Demo_Rpg_CmsBlog_AuthorsBio;
  name: Demo_Rpg_CmsBlog_AuthorsName;
  slug: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsAvatar = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsBio = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsConnection = {
  edges: Array<Demo_Rpg_CmsBlog_AuthorsEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsBlog_AuthorsNode;
};

export type Demo_Rpg_CmsBlog_AuthorsFlat = {
  avatar: Demo_Rpg_CmsBlog_AuthorsFlatAvatar;
  bio: Demo_Rpg_CmsBlog_AuthorsFlatBio;
  name: Demo_Rpg_CmsBlog_AuthorsFlatName;
  slug: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsFlatAvatar = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsFlatBio = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsFlatConnection = {
  edges: Array<Demo_Rpg_CmsBlog_AuthorsFlatEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsBlog_AuthorsFlat;
};

export type Demo_Rpg_CmsBlog_AuthorsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_CmsBlog_Authors;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_AuthorsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_CmsBlog_AuthorsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_CmsBlog_AuthorsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_CmsBlog_AuthorsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  data?: InputMaybe<Demo_Rpg_CmsJsonFilter>;
  id?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_CmsBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
};

export type Demo_Rpg_CmsBlog_Posts = {
  author_id: Demo_Rpg_CmsBlog_AuthorsNode;
  body: Demo_Rpg_CmsBlog_PostsBody;
  excerpt: Demo_Rpg_CmsBlog_PostsExcerpt;
  hero_image: Demo_Rpg_CmsBlog_PostsHero_Image;
  published_at: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Demo_Rpg_CmsBlog_PostsTitle;
};

export type Demo_Rpg_CmsBlog_PostsBody = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsConnection = {
  edges: Array<Demo_Rpg_CmsBlog_PostsEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsBlog_PostsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsBlog_PostsNode;
};

export type Demo_Rpg_CmsBlog_PostsExcerpt = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsFlat = {
  author_id: Demo_Rpg_CmsBlog_AuthorsFlat;
  body: Demo_Rpg_CmsBlog_PostsFlatBody;
  excerpt: Demo_Rpg_CmsBlog_PostsFlatExcerpt;
  hero_image: Demo_Rpg_CmsBlog_PostsFlatHero_Image;
  published_at: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Demo_Rpg_CmsBlog_PostsFlatTitle;
};

export type Demo_Rpg_CmsBlog_PostsFlatBody = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsFlatConnection = {
  edges: Array<Demo_Rpg_CmsBlog_PostsFlatEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsBlog_PostsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsBlog_PostsFlat;
};

export type Demo_Rpg_CmsBlog_PostsFlatExcerpt = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsFlatHero_Image = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsBlog_PostsFlatTitle = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsHero_Image = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsBlog_PostsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_CmsBlog_Posts;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsTitle = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsBlog_PostsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_CmsBlog_PostsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_CmsBlog_PostsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_CmsBlog_PostsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  data?: InputMaybe<Demo_Rpg_CmsJsonFilter>;
  id?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_CmsBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
};

export type Demo_Rpg_CmsBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Demo_Rpg_CmsDateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Demo_Rpg_CmsFilterJsonMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Demo_Rpg_CmsFilterStringMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Demo_Rpg_CmsGetBlog_AuthorsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_CmsGetBlog_AuthorsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_CmsBlog_AuthorsesWhereInput>;
};

export enum Demo_Rpg_CmsGetBlog_AuthorsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_CmsGetBlog_AuthorsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_CmsOrderFieldAggregation>;
  direction: Demo_Rpg_CmsSortOrder;
  field: Demo_Rpg_CmsGetBlog_AuthorsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_CmsOrderFieldType>;
};

export type Demo_Rpg_CmsGetBlog_PostsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_CmsGetBlog_PostsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_CmsBlog_PostsesWhereInput>;
};

export enum Demo_Rpg_CmsGetBlog_PostsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_CmsGetBlog_PostsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_CmsOrderFieldAggregation>;
  direction: Demo_Rpg_CmsSortOrder;
  field: Demo_Rpg_CmsGetBlog_PostsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_CmsOrderFieldType>;
};

export type Demo_Rpg_CmsGetLanding_FeaturesesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_CmsGetLanding_FeaturesesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_CmsLanding_FeaturesesWhereInput>;
};

export enum Demo_Rpg_CmsGetLanding_FeaturesesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_CmsGetLanding_FeaturesesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_CmsOrderFieldAggregation>;
  direction: Demo_Rpg_CmsSortOrder;
  field: Demo_Rpg_CmsGetLanding_FeaturesesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_CmsOrderFieldType>;
};

export type Demo_Rpg_CmsGetLanding_HerosInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_CmsGetLanding_HerosOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_CmsLanding_HerosWhereInput>;
};

export enum Demo_Rpg_CmsGetLanding_HerosOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_CmsGetLanding_HerosOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_CmsOrderFieldAggregation>;
  direction: Demo_Rpg_CmsSortOrder;
  field: Demo_Rpg_CmsGetLanding_HerosOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_CmsOrderFieldType>;
};

export type Demo_Rpg_CmsGetLanding_TestimonialsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_CmsGetLanding_TestimonialsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_CmsLanding_TestimonialsesWhereInput>;
};

export enum Demo_Rpg_CmsGetLanding_TestimonialsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_CmsGetLanding_TestimonialsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_CmsOrderFieldAggregation>;
  direction: Demo_Rpg_CmsSortOrder;
  field: Demo_Rpg_CmsGetLanding_TestimonialsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_CmsOrderFieldType>;
};

export type Demo_Rpg_CmsJsonFilter = {
  array_contains?: InputMaybe<Array<Scalars['JSON']['input']>>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  mode?: InputMaybe<Demo_Rpg_CmsFilterJsonMode>;
  path?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchLanguage?: InputMaybe<Demo_Rpg_CmsSearchLanguage>;
  searchType?: InputMaybe<Demo_Rpg_CmsSearchType>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Demo_Rpg_CmsLanding_Features = {
  body: Demo_Rpg_CmsLanding_FeaturesBody;
  icon: Demo_Rpg_CmsLanding_FeaturesIcon;
  order: Scalars['Float']['output'];
  title: Demo_Rpg_CmsLanding_FeaturesTitle;
};

export type Demo_Rpg_CmsLanding_FeaturesBody = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesConnection = {
  edges: Array<Demo_Rpg_CmsLanding_FeaturesEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsLanding_FeaturesNode;
};

export type Demo_Rpg_CmsLanding_FeaturesFlat = {
  body: Demo_Rpg_CmsLanding_FeaturesFlatBody;
  icon: Demo_Rpg_CmsLanding_FeaturesFlatIcon;
  order: Scalars['Float']['output'];
  title: Demo_Rpg_CmsLanding_FeaturesFlatTitle;
};

export type Demo_Rpg_CmsLanding_FeaturesFlatBody = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesFlatConnection = {
  edges: Array<Demo_Rpg_CmsLanding_FeaturesFlatEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsLanding_FeaturesFlat;
};

export type Demo_Rpg_CmsLanding_FeaturesFlatIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesFlatTitle = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_CmsLanding_Features;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesTitle = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_FeaturesesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_CmsLanding_FeaturesesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_CmsLanding_FeaturesesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_CmsLanding_FeaturesesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  data?: InputMaybe<Demo_Rpg_CmsJsonFilter>;
  id?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_CmsBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
};

export type Demo_Rpg_CmsLanding_Hero = {
  bg_image: Demo_Rpg_CmsLanding_HeroBg_Image;
  cta_label: Demo_Rpg_CmsLanding_HeroCta_Label;
  cta_url: Scalars['String']['output'];
  headline: Demo_Rpg_CmsLanding_HeroHeadline;
  subheadline: Demo_Rpg_CmsLanding_HeroSubheadline;
};

export type Demo_Rpg_CmsLanding_HeroBg_Image = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsLanding_HeroConnection = {
  edges: Array<Demo_Rpg_CmsLanding_HeroEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsLanding_HeroCta_Label = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HeroEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsLanding_HeroNode;
};

export type Demo_Rpg_CmsLanding_HeroFlat = {
  bg_image: Demo_Rpg_CmsLanding_HeroFlatBg_Image;
  cta_label: Demo_Rpg_CmsLanding_HeroFlatCta_Label;
  cta_url: Scalars['String']['output'];
  headline: Demo_Rpg_CmsLanding_HeroFlatHeadline;
  subheadline: Demo_Rpg_CmsLanding_HeroFlatSubheadline;
};

export type Demo_Rpg_CmsLanding_HeroFlatBg_Image = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsLanding_HeroFlatConnection = {
  edges: Array<Demo_Rpg_CmsLanding_HeroFlatEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsLanding_HeroFlatCta_Label = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HeroFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsLanding_HeroFlat;
};

export type Demo_Rpg_CmsLanding_HeroFlatHeadline = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HeroFlatSubheadline = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HeroHeadline = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HeroNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_CmsLanding_Hero;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HeroSubheadline = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_HerosWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_CmsLanding_HerosWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_CmsLanding_HerosWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_CmsLanding_HerosWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  data?: InputMaybe<Demo_Rpg_CmsJsonFilter>;
  id?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_CmsBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
};

export type Demo_Rpg_CmsLanding_Testimonials = {
  author_name: Scalars['String']['output'];
  author_role: Demo_Rpg_CmsLanding_TestimonialsAuthor_Role;
  avatar: Demo_Rpg_CmsLanding_TestimonialsAvatar;
  quote: Demo_Rpg_CmsLanding_TestimonialsQuote;
};

export type Demo_Rpg_CmsLanding_TestimonialsAuthor_Role = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsAvatar = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsConnection = {
  edges: Array<Demo_Rpg_CmsLanding_TestimonialsEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsLanding_TestimonialsNode;
};

export type Demo_Rpg_CmsLanding_TestimonialsFlat = {
  author_name: Scalars['String']['output'];
  author_role: Demo_Rpg_CmsLanding_TestimonialsFlatAuthor_Role;
  avatar: Demo_Rpg_CmsLanding_TestimonialsFlatAvatar;
  quote: Demo_Rpg_CmsLanding_TestimonialsFlatQuote;
};

export type Demo_Rpg_CmsLanding_TestimonialsFlatAuthor_Role = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsFlatAvatar = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsFlatConnection = {
  edges: Array<Demo_Rpg_CmsLanding_TestimonialsFlatEdge>;
  pageInfo: Demo_Rpg_CmsPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_CmsLanding_TestimonialsFlat;
};

export type Demo_Rpg_CmsLanding_TestimonialsFlatQuote = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_CmsLanding_Testimonials;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsQuote = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_CmsLanding_TestimonialsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_CmsLanding_TestimonialsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_CmsLanding_TestimonialsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_CmsLanding_TestimonialsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  data?: InputMaybe<Demo_Rpg_CmsJsonFilter>;
  id?: InputMaybe<Demo_Rpg_CmsStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_CmsBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_CmsDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_CmsStringFilter>;
};

export enum Demo_Rpg_CmsOrderFieldAggregation {
  Avg = 'avg',
  First = 'first',
  Last = 'last',
  Max = 'max',
  Min = 'min'
}

export enum Demo_Rpg_CmsOrderFieldType {
  Boolean = 'boolean',
  Float = 'float',
  Int = 'int',
  Text = 'text',
  Timestamp = 'timestamp'
}

export type Demo_Rpg_CmsPageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum Demo_Rpg_CmsSearchLanguage {
  Arabic = 'arabic',
  Armenian = 'armenian',
  Basque = 'basque',
  Catalan = 'catalan',
  Danish = 'danish',
  Dutch = 'dutch',
  English = 'english',
  Finnish = 'finnish',
  French = 'french',
  German = 'german',
  Greek = 'greek',
  Hindi = 'hindi',
  Hungarian = 'hungarian',
  Indonesian = 'indonesian',
  Irish = 'irish',
  Italian = 'italian',
  Lithuanian = 'lithuanian',
  Nepali = 'nepali',
  Norwegian = 'norwegian',
  Portuguese = 'portuguese',
  Romanian = 'romanian',
  Russian = 'russian',
  Serbian = 'serbian',
  Simple = 'simple',
  Spanish = 'spanish',
  Swedish = 'swedish',
  Tamil = 'tamil',
  Turkish = 'turkish',
  Yiddish = 'yiddish'
}

export enum Demo_Rpg_CmsSearchType {
  Phrase = 'phrase',
  Plain = 'plain',
  Prefix = 'prefix',
  Tsquery = 'tsquery'
}

export enum Demo_Rpg_CmsSortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Demo_Rpg_CmsStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Demo_Rpg_CmsFilterStringMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Demo_Rpg_DataAbilities = {
  base_damage: Scalars['Float']['output'];
  cooldown: Scalars['Float']['output'];
  damage_scaling: Scalars['Float']['output'];
  description: Demo_Rpg_DataAbilitiesDescription;
  effects: Array<Demo_Rpg_DataAbilitiesEffectsItems>;
  icon: Demo_Rpg_DataAbilitiesIcon;
  kind: Scalars['String']['output'];
  level_required: Scalars['Float']['output'];
  name: Demo_Rpg_DataAbilitiesName;
  school: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesConnection = {
  edges: Array<Demo_Rpg_DataAbilitiesEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataAbilitiesDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataAbilitiesNode;
};

export type Demo_Rpg_DataAbilitiesEffectsItems = {
  chance: Scalars['Float']['output'];
  duration: Scalars['Float']['output'];
  effect_id: Demo_Rpg_DataEffectsNode;
};

export type Demo_Rpg_DataAbilitiesFlat = {
  base_damage: Scalars['Float']['output'];
  cooldown: Scalars['Float']['output'];
  damage_scaling: Scalars['Float']['output'];
  description: Demo_Rpg_DataAbilitiesFlatDescription;
  effects: Array<Demo_Rpg_DataAbilitiesFlatEffectsItems>;
  icon: Demo_Rpg_DataAbilitiesFlatIcon;
  kind: Scalars['String']['output'];
  level_required: Scalars['Float']['output'];
  name: Demo_Rpg_DataAbilitiesFlatName;
  school: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesFlatConnection = {
  edges: Array<Demo_Rpg_DataAbilitiesFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataAbilitiesFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataAbilitiesFlat;
};

export type Demo_Rpg_DataAbilitiesFlatEffectsItems = {
  chance: Scalars['Float']['output'];
  duration: Scalars['Float']['output'];
  effect_id: Demo_Rpg_DataEffectsFlat;
};

export type Demo_Rpg_DataAbilitiesFlatIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataAbilitiesFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataAbilitiesName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataAbilities;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataAbilitiesesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataAbilitiesesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataAbilitiesesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataAbilitiesesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Demo_Rpg_DataClasses = {
  base_hp: Scalars['Float']['output'];
  description: Demo_Rpg_DataClassesDescription;
  hp_per_level: Scalars['Float']['output'];
  mp_per_level: Scalars['Float']['output'];
  name: Demo_Rpg_DataClassesName;
  primary_stat: Scalars['String']['output'];
  starting_ability_ids: Array<Demo_Rpg_DataAbilitiesNode>;
};

export type Demo_Rpg_DataClassesConnection = {
  edges: Array<Demo_Rpg_DataClassesEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataClassesDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataClassesEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataClassesNode;
};

export type Demo_Rpg_DataClassesFlat = {
  base_hp: Scalars['Float']['output'];
  description: Demo_Rpg_DataClassesFlatDescription;
  hp_per_level: Scalars['Float']['output'];
  mp_per_level: Scalars['Float']['output'];
  name: Demo_Rpg_DataClassesFlatName;
  primary_stat: Scalars['String']['output'];
  starting_ability_ids: Array<Demo_Rpg_DataAbilitiesFlat>;
};

export type Demo_Rpg_DataClassesFlatConnection = {
  edges: Array<Demo_Rpg_DataClassesFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataClassesFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataClassesFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataClassesFlat;
};

export type Demo_Rpg_DataClassesFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataClassesName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataClassesNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataClasses;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataClassesesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataClassesesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataClassesesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataClassesesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataDateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Demo_Rpg_DataDialogs = {
  line_count: Scalars['Float']['output'];
  lines: Array<Demo_Rpg_DataDialogsLinesItems>;
  npc_id: Demo_Rpg_DataNpcsNode;
  slug: Scalars['String']['output'];
};

export type Demo_Rpg_DataDialogsConnection = {
  edges: Array<Demo_Rpg_DataDialogsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataDialogsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataDialogsNode;
};

export type Demo_Rpg_DataDialogsFlat = {
  line_count: Scalars['Float']['output'];
  lines: Array<Demo_Rpg_DataDialogsFlatLinesItems>;
  npc_id: Demo_Rpg_DataNpcsFlat;
  slug: Scalars['String']['output'];
};

export type Demo_Rpg_DataDialogsFlatConnection = {
  edges: Array<Demo_Rpg_DataDialogsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataDialogsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataDialogsFlat;
};

export type Demo_Rpg_DataDialogsFlatLinesItems = {
  emotion: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  text: Demo_Rpg_DataDialogsFlatLinesItemsText;
};

export type Demo_Rpg_DataDialogsFlatLinesItemsText = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataDialogsLinesItems = {
  emotion: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  text: Demo_Rpg_DataDialogsLinesItemsText;
};

export type Demo_Rpg_DataDialogsLinesItemsText = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataDialogsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataDialogs;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataDialogsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataDialogsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataDialogsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataDialogsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataEffects = {
  code: Scalars['String']['output'];
  default_duration: Scalars['Float']['output'];
  description: Demo_Rpg_DataEffectsDescription;
  kind: Scalars['String']['output'];
  name: Demo_Rpg_DataEffectsName;
};

export type Demo_Rpg_DataEffectsConnection = {
  edges: Array<Demo_Rpg_DataEffectsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataEffectsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataEffectsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataEffectsNode;
};

export type Demo_Rpg_DataEffectsFlat = {
  code: Scalars['String']['output'];
  default_duration: Scalars['Float']['output'];
  description: Demo_Rpg_DataEffectsFlatDescription;
  kind: Scalars['String']['output'];
  name: Demo_Rpg_DataEffectsFlatName;
};

export type Demo_Rpg_DataEffectsFlatConnection = {
  edges: Array<Demo_Rpg_DataEffectsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataEffectsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataEffectsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataEffectsFlat;
};

export type Demo_Rpg_DataEffectsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataEffectsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataEffectsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataEffects;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataEffectsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataEffectsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataEffectsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataEffectsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataFactions = {
  alignment: Scalars['String']['output'];
  crest: Demo_Rpg_DataFactionsCrest;
  description: Demo_Rpg_DataFactionsDescription;
  name: Demo_Rpg_DataFactionsName;
};

export type Demo_Rpg_DataFactionsConnection = {
  edges: Array<Demo_Rpg_DataFactionsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataFactionsCrest = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataFactionsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataFactionsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataFactionsNode;
};

export type Demo_Rpg_DataFactionsFlat = {
  alignment: Scalars['String']['output'];
  crest: Demo_Rpg_DataFactionsFlatCrest;
  description: Demo_Rpg_DataFactionsFlatDescription;
  name: Demo_Rpg_DataFactionsFlatName;
};

export type Demo_Rpg_DataFactionsFlatConnection = {
  edges: Array<Demo_Rpg_DataFactionsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataFactionsFlatCrest = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataFactionsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataFactionsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataFactionsFlat;
};

export type Demo_Rpg_DataFactionsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataFactionsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataFactionsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataFactions;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataFactionsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataFactionsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataFactionsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataFactionsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export enum Demo_Rpg_DataFilterJsonMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Demo_Rpg_DataFilterStringMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Demo_Rpg_DataGetAbilitiesesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetAbilitiesesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataAbilitiesesWhereInput>;
};

export enum Demo_Rpg_DataGetAbilitiesesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetAbilitiesesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetAbilitiesesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetClassesesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetClassesesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataClassesesWhereInput>;
};

export enum Demo_Rpg_DataGetClassesesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetClassesesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetClassesesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetDialogsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetDialogsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataDialogsesWhereInput>;
};

export enum Demo_Rpg_DataGetDialogsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetDialogsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetDialogsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetEffectsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetEffectsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataEffectsesWhereInput>;
};

export enum Demo_Rpg_DataGetEffectsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetEffectsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetEffectsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetFactionsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetFactionsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataFactionsesWhereInput>;
};

export enum Demo_Rpg_DataGetFactionsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetFactionsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetFactionsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetHeroesesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetHeroesesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataHeroesesWhereInput>;
};

export enum Demo_Rpg_DataGetHeroesesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetHeroesesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetHeroesesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetItem_TypesesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetItem_TypesesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataItem_TypesesWhereInput>;
};

export enum Demo_Rpg_DataGetItem_TypesesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetItem_TypesesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetItem_TypesesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetItemsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetItemsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataItemsesWhereInput>;
};

export enum Demo_Rpg_DataGetItemsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetItemsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetItemsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetLocationsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetLocationsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataLocationsesWhereInput>;
};

export enum Demo_Rpg_DataGetLocationsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetLocationsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetLocationsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetMonstersesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetMonstersesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataMonstersesWhereInput>;
};

export enum Demo_Rpg_DataGetMonstersesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetMonstersesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetMonstersesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetNpcsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetNpcsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataNpcsesWhereInput>;
};

export enum Demo_Rpg_DataGetNpcsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetNpcsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetNpcsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetPartiesesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetPartiesesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataPartiesesWhereInput>;
};

export enum Demo_Rpg_DataGetPartiesesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetPartiesesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetPartiesesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetQuestsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetQuestsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataQuestsesWhereInput>;
};

export enum Demo_Rpg_DataGetQuestsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetQuestsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetQuestsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetRegionsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetRegionsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataRegionsesWhereInput>;
};

export enum Demo_Rpg_DataGetRegionsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetRegionsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetRegionsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataGetStatsesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Demo_Rpg_DataGetStatsesOrderByInput>>;
  where?: InputMaybe<Demo_Rpg_DataStatsesWhereInput>;
};

export enum Demo_Rpg_DataGetStatsesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type Demo_Rpg_DataGetStatsesOrderByInput = {
  aggregation?: InputMaybe<Demo_Rpg_DataOrderFieldAggregation>;
  direction: Demo_Rpg_DataSortOrder;
  field: Demo_Rpg_DataGetStatsesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Demo_Rpg_DataOrderFieldType>;
};

export type Demo_Rpg_DataHeroes = {
  ability_ids: Array<Demo_Rpg_DataAbilitiesNode>;
  class_id: Demo_Rpg_DataClassesNode;
  constitution: Scalars['Float']['output'];
  display_name_en: Scalars['String']['output'];
  epithet: Demo_Rpg_DataHeroesEpithet;
  equipment: Array<Demo_Rpg_DataHeroesEquipmentItems>;
  equipped_count: Scalars['Float']['output'];
  gold: Scalars['Float']['output'];
  inventory_item_ids: Array<Demo_Rpg_DataItemsNode>;
  is_veteran: Scalars['Boolean']['output'];
  level: Scalars['Float']['output'];
  name: Demo_Rpg_DataHeroesName;
  portrait: Demo_Rpg_DataHeroesPortrait;
  total_equipment_modifier: Scalars['Float']['output'];
};

export type Demo_Rpg_DataHeroesConnection = {
  edges: Array<Demo_Rpg_DataHeroesEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataHeroesEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataHeroesNode;
};

export type Demo_Rpg_DataHeroesEpithet = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesEquipmentItems = {
  item_id: Demo_Rpg_DataItemsNode;
  modifier: Scalars['Float']['output'];
  slot: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesFlat = {
  ability_ids: Array<Demo_Rpg_DataAbilitiesFlat>;
  class_id: Demo_Rpg_DataClassesFlat;
  constitution: Scalars['Float']['output'];
  display_name_en: Scalars['String']['output'];
  epithet: Demo_Rpg_DataHeroesFlatEpithet;
  equipment: Array<Demo_Rpg_DataHeroesFlatEquipmentItems>;
  equipped_count: Scalars['Float']['output'];
  gold: Scalars['Float']['output'];
  inventory_item_ids: Array<Demo_Rpg_DataItemsFlat>;
  is_veteran: Scalars['Boolean']['output'];
  level: Scalars['Float']['output'];
  name: Demo_Rpg_DataHeroesFlatName;
  portrait: Demo_Rpg_DataHeroesFlatPortrait;
  total_equipment_modifier: Scalars['Float']['output'];
};

export type Demo_Rpg_DataHeroesFlatConnection = {
  edges: Array<Demo_Rpg_DataHeroesFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataHeroesFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataHeroesFlat;
};

export type Demo_Rpg_DataHeroesFlatEpithet = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesFlatEquipmentItems = {
  item_id: Demo_Rpg_DataItemsFlat;
  modifier: Scalars['Float']['output'];
  slot: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesFlatPortrait = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataHeroesName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataHeroes;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataHeroesPortrait = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataHeroesesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataHeroesesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataHeroesesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataHeroesesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataItem_Types = {
  code: Scalars['String']['output'];
  description: Demo_Rpg_DataItem_TypesDescription;
  name: Demo_Rpg_DataItem_TypesName;
};

export type Demo_Rpg_DataItem_TypesConnection = {
  edges: Array<Demo_Rpg_DataItem_TypesEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataItem_TypesDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItem_TypesEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataItem_TypesNode;
};

export type Demo_Rpg_DataItem_TypesFlat = {
  code: Scalars['String']['output'];
  description: Demo_Rpg_DataItem_TypesFlatDescription;
  name: Demo_Rpg_DataItem_TypesFlatName;
};

export type Demo_Rpg_DataItem_TypesFlatConnection = {
  edges: Array<Demo_Rpg_DataItem_TypesFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataItem_TypesFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItem_TypesFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataItem_TypesFlat;
};

export type Demo_Rpg_DataItem_TypesFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItem_TypesName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItem_TypesNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataItem_Types;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataItem_TypesesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataItem_TypesesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataItem_TypesesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataItem_TypesesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataItems = {
  base_value: Scalars['Float']['output'];
  description: Demo_Rpg_DataItemsDescription;
  icon: Demo_Rpg_DataItemsIcon;
  market_value: Scalars['Float']['output'];
  modifiers: Array<Demo_Rpg_DataItemsModifiersItems>;
  name: Demo_Rpg_DataItemsName;
  rarity: Scalars['String']['output'];
  rarity_multiplier: Scalars['Float']['output'];
  rarity_tag: Scalars['String']['output'];
  type_id: Demo_Rpg_DataItem_TypesNode;
  weight: Scalars['Float']['output'];
};

export type Demo_Rpg_DataItemsConnection = {
  edges: Array<Demo_Rpg_DataItemsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataItemsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItemsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataItemsNode;
};

export type Demo_Rpg_DataItemsFlat = {
  base_value: Scalars['Float']['output'];
  description: Demo_Rpg_DataItemsFlatDescription;
  icon: Demo_Rpg_DataItemsFlatIcon;
  market_value: Scalars['Float']['output'];
  modifiers: Array<Demo_Rpg_DataItemsFlatModifiersItems>;
  name: Demo_Rpg_DataItemsFlatName;
  rarity: Scalars['String']['output'];
  rarity_multiplier: Scalars['Float']['output'];
  rarity_tag: Scalars['String']['output'];
  type_id: Demo_Rpg_DataItem_TypesFlat;
  weight: Scalars['Float']['output'];
};

export type Demo_Rpg_DataItemsFlatConnection = {
  edges: Array<Demo_Rpg_DataItemsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataItemsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItemsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataItemsFlat;
};

export type Demo_Rpg_DataItemsFlatIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataItemsFlatModifiersItems = {
  stat_id: Demo_Rpg_DataStatsFlat;
  value: Scalars['Float']['output'];
};

export type Demo_Rpg_DataItemsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataItemsModifiersItems = {
  stat_id: Demo_Rpg_DataStatsNode;
  value: Scalars['Float']['output'];
};

export type Demo_Rpg_DataItemsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataItemsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataItems;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataItemsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataItemsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataItemsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataItemsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataJsonFilter = {
  array_contains?: InputMaybe<Array<Scalars['JSON']['input']>>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  mode?: InputMaybe<Demo_Rpg_DataFilterJsonMode>;
  path?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchLanguage?: InputMaybe<Demo_Rpg_DataSearchLanguage>;
  searchType?: InputMaybe<Demo_Rpg_DataSearchType>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Demo_Rpg_DataLocations = {
  coordinates: Demo_Rpg_DataLocationsCoordinates;
  description: Demo_Rpg_DataLocationsDescription;
  kind: Scalars['String']['output'];
  map: Demo_Rpg_DataLocationsMap;
  name: Demo_Rpg_DataLocationsName;
  region_id: Demo_Rpg_DataRegionsNode;
};

export type Demo_Rpg_DataLocationsConnection = {
  edges: Array<Demo_Rpg_DataLocationsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataLocationsCoordinates = {
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type Demo_Rpg_DataLocationsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataLocationsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataLocationsNode;
};

export type Demo_Rpg_DataLocationsFlat = {
  coordinates: Demo_Rpg_DataLocationsFlatCoordinates;
  description: Demo_Rpg_DataLocationsFlatDescription;
  kind: Scalars['String']['output'];
  map: Demo_Rpg_DataLocationsFlatMap;
  name: Demo_Rpg_DataLocationsFlatName;
  region_id: Demo_Rpg_DataRegionsFlat;
};

export type Demo_Rpg_DataLocationsFlatConnection = {
  edges: Array<Demo_Rpg_DataLocationsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataLocationsFlatCoordinates = {
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type Demo_Rpg_DataLocationsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataLocationsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataLocationsFlat;
};

export type Demo_Rpg_DataLocationsFlatMap = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataLocationsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataLocationsMap = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataLocationsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataLocationsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataLocations;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataLocationsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataLocationsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataLocationsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataLocationsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataMonsters = {
  ability_ids: Array<Demo_Rpg_DataAbilitiesNode>;
  avg_drop_chance: Scalars['Float']['output'];
  base_damage: Scalars['Float']['output'];
  description: Demo_Rpg_DataMonstersDescription;
  drop_count: Scalars['Float']['output'];
  drops: Array<Demo_Rpg_DataMonstersDropsItems>;
  faction_id: Demo_Rpg_DataFactionsNode;
  hp: Scalars['Float']['output'];
  image: Demo_Rpg_DataMonstersImage;
  kind: Scalars['String']['output'];
  level: Scalars['Float']['output'];
  name: Demo_Rpg_DataMonstersName;
};

export type Demo_Rpg_DataMonstersConnection = {
  edges: Array<Demo_Rpg_DataMonstersEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataMonstersDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataMonstersDropsItems = {
  chance: Scalars['Float']['output'];
  item_id: Demo_Rpg_DataItemsNode;
  quantity_max: Scalars['Float']['output'];
  quantity_min: Scalars['Float']['output'];
};

export type Demo_Rpg_DataMonstersEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataMonstersNode;
};

export type Demo_Rpg_DataMonstersFlat = {
  ability_ids: Array<Demo_Rpg_DataAbilitiesFlat>;
  avg_drop_chance: Scalars['Float']['output'];
  base_damage: Scalars['Float']['output'];
  description: Demo_Rpg_DataMonstersFlatDescription;
  drop_count: Scalars['Float']['output'];
  drops: Array<Demo_Rpg_DataMonstersFlatDropsItems>;
  faction_id: Demo_Rpg_DataFactionsFlat;
  hp: Scalars['Float']['output'];
  image: Demo_Rpg_DataMonstersFlatImage;
  kind: Scalars['String']['output'];
  level: Scalars['Float']['output'];
  name: Demo_Rpg_DataMonstersFlatName;
};

export type Demo_Rpg_DataMonstersFlatConnection = {
  edges: Array<Demo_Rpg_DataMonstersFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataMonstersFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataMonstersFlatDropsItems = {
  chance: Scalars['Float']['output'];
  item_id: Demo_Rpg_DataItemsFlat;
  quantity_max: Scalars['Float']['output'];
  quantity_min: Scalars['Float']['output'];
};

export type Demo_Rpg_DataMonstersFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataMonstersFlat;
};

export type Demo_Rpg_DataMonstersFlatImage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataMonstersFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataMonstersImage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataMonstersName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataMonstersNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataMonsters;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataMonstersesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataMonstersesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataMonstersesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataMonstersesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataNpcs = {
  description: Demo_Rpg_DataNpcsDescription;
  display_label_en: Scalars['String']['output'];
  faction_id: Demo_Rpg_DataFactionsNode;
  inventory_item_ids: Array<Demo_Rpg_DataItemsNode>;
  location_id: Demo_Rpg_DataLocationsNode;
  name: Demo_Rpg_DataNpcsName;
  portrait: Demo_Rpg_DataNpcsPortrait;
  role: Scalars['String']['output'];
  title: Demo_Rpg_DataNpcsTitle;
};

export type Demo_Rpg_DataNpcsConnection = {
  edges: Array<Demo_Rpg_DataNpcsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataNpcsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataNpcsNode;
};

export type Demo_Rpg_DataNpcsFlat = {
  description: Demo_Rpg_DataNpcsFlatDescription;
  display_label_en: Scalars['String']['output'];
  faction_id: Demo_Rpg_DataFactionsFlat;
  inventory_item_ids: Array<Demo_Rpg_DataItemsFlat>;
  location_id: Demo_Rpg_DataLocationsFlat;
  name: Demo_Rpg_DataNpcsFlatName;
  portrait: Demo_Rpg_DataNpcsFlatPortrait;
  role: Scalars['String']['output'];
  title: Demo_Rpg_DataNpcsFlatTitle;
};

export type Demo_Rpg_DataNpcsFlatConnection = {
  edges: Array<Demo_Rpg_DataNpcsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataNpcsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataNpcsFlat;
};

export type Demo_Rpg_DataNpcsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsFlatPortrait = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataNpcsFlatTitle = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataNpcs;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsPortrait = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataNpcsTitle = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataNpcsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataNpcsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataNpcsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataNpcsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export enum Demo_Rpg_DataOrderFieldAggregation {
  Avg = 'avg',
  First = 'first',
  Last = 'last',
  Max = 'max',
  Min = 'min'
}

export enum Demo_Rpg_DataOrderFieldType {
  Boolean = 'boolean',
  Float = 'float',
  Int = 'int',
  Text = 'text',
  Timestamp = 'timestamp'
}

export type Demo_Rpg_DataPageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Demo_Rpg_DataParties = {
  formation: Scalars['String']['output'];
  hero_ids: Array<Demo_Rpg_DataHeroesNode>;
  is_full: Scalars['Boolean']['output'];
  member_count: Scalars['Float']['output'];
  motto: Demo_Rpg_DataPartiesMotto;
  name: Demo_Rpg_DataPartiesName;
};

export type Demo_Rpg_DataPartiesConnection = {
  edges: Array<Demo_Rpg_DataPartiesEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataPartiesEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataPartiesNode;
};

export type Demo_Rpg_DataPartiesFlat = {
  formation: Scalars['String']['output'];
  hero_ids: Array<Demo_Rpg_DataHeroesFlat>;
  is_full: Scalars['Boolean']['output'];
  member_count: Scalars['Float']['output'];
  motto: Demo_Rpg_DataPartiesFlatMotto;
  name: Demo_Rpg_DataPartiesFlatName;
};

export type Demo_Rpg_DataPartiesFlatConnection = {
  edges: Array<Demo_Rpg_DataPartiesFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataPartiesFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataPartiesFlat;
};

export type Demo_Rpg_DataPartiesFlatMotto = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataPartiesFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataPartiesMotto = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataPartiesName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataPartiesNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataParties;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataPartiesesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataPartiesesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataPartiesesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataPartiesesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataQuests = {
  description: Demo_Rpg_DataQuestsDescription;
  giver_npc_id: Demo_Rpg_DataNpcsNode;
  is_repeatable: Scalars['Boolean']['output'];
  kind: Scalars['String']['output'];
  level_required: Scalars['Float']['output'];
  map: Demo_Rpg_DataQuestsMap;
  name: Demo_Rpg_DataQuestsName;
  step_count: Scalars['Float']['output'];
  steps: Array<Demo_Rpg_DataQuestsStepsItems>;
  total_loot_xp: Scalars['Float']['output'];
  total_xp: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsConnection = {
  edges: Array<Demo_Rpg_DataQuestsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataQuestsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataQuestsNode;
};

export type Demo_Rpg_DataQuestsFlat = {
  description: Demo_Rpg_DataQuestsFlatDescription;
  giver_npc_id: Demo_Rpg_DataNpcsFlat;
  is_repeatable: Scalars['Boolean']['output'];
  kind: Scalars['String']['output'];
  level_required: Scalars['Float']['output'];
  map: Demo_Rpg_DataQuestsFlatMap;
  name: Demo_Rpg_DataQuestsFlatName;
  step_count: Scalars['Float']['output'];
  steps: Array<Demo_Rpg_DataQuestsFlatStepsItems>;
  total_loot_xp: Scalars['Float']['output'];
  total_xp: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsFlatConnection = {
  edges: Array<Demo_Rpg_DataQuestsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataQuestsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataQuestsFlat;
};

export type Demo_Rpg_DataQuestsFlatMap = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsFlatStepsItems = {
  description: Demo_Rpg_DataQuestsFlatStepsItemsDescription;
  location_id: Demo_Rpg_DataLocationsFlat;
  npc_id: Demo_Rpg_DataNpcsFlat;
  rewards: Array<Demo_Rpg_DataQuestsFlatStepsItemsRewardsItems>;
  step_number: Scalars['Float']['output'];
  xp: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsFlatStepsItemsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsFlatStepsItemsRewardsItems = {
  bonus_xp: Scalars['Float']['output'];
  item_id: Demo_Rpg_DataItemsFlat;
  quantity: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsMap = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataQuests;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsStepsItems = {
  description: Demo_Rpg_DataQuestsStepsItemsDescription;
  location_id: Demo_Rpg_DataLocationsNode;
  npc_id: Demo_Rpg_DataNpcsNode;
  rewards: Array<Demo_Rpg_DataQuestsStepsItemsRewardsItems>;
  step_number: Scalars['Float']['output'];
  xp: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsStepsItemsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataQuestsStepsItemsRewardsItems = {
  bonus_xp: Scalars['Float']['output'];
  item_id: Demo_Rpg_DataItemsNode;
  quantity: Scalars['Float']['output'];
};

export type Demo_Rpg_DataQuestsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataQuestsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataQuestsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataQuestsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataRegions = {
  climate: Scalars['String']['output'];
  description: Demo_Rpg_DataRegionsDescription;
  name: Demo_Rpg_DataRegionsName;
};

export type Demo_Rpg_DataRegionsConnection = {
  edges: Array<Demo_Rpg_DataRegionsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataRegionsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataRegionsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataRegionsNode;
};

export type Demo_Rpg_DataRegionsFlat = {
  climate: Scalars['String']['output'];
  description: Demo_Rpg_DataRegionsFlatDescription;
  name: Demo_Rpg_DataRegionsFlatName;
};

export type Demo_Rpg_DataRegionsFlatConnection = {
  edges: Array<Demo_Rpg_DataRegionsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataRegionsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataRegionsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataRegionsFlat;
};

export type Demo_Rpg_DataRegionsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataRegionsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataRegionsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataRegions;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataRegionsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataRegionsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataRegionsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataRegionsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export enum Demo_Rpg_DataSearchLanguage {
  Arabic = 'arabic',
  Armenian = 'armenian',
  Basque = 'basque',
  Catalan = 'catalan',
  Danish = 'danish',
  Dutch = 'dutch',
  English = 'english',
  Finnish = 'finnish',
  French = 'french',
  German = 'german',
  Greek = 'greek',
  Hindi = 'hindi',
  Hungarian = 'hungarian',
  Indonesian = 'indonesian',
  Irish = 'irish',
  Italian = 'italian',
  Lithuanian = 'lithuanian',
  Nepali = 'nepali',
  Norwegian = 'norwegian',
  Portuguese = 'portuguese',
  Romanian = 'romanian',
  Russian = 'russian',
  Serbian = 'serbian',
  Simple = 'simple',
  Spanish = 'spanish',
  Swedish = 'swedish',
  Tamil = 'tamil',
  Turkish = 'turkish',
  Yiddish = 'yiddish'
}

export enum Demo_Rpg_DataSearchType {
  Phrase = 'phrase',
  Plain = 'plain',
  Prefix = 'prefix',
  Tsquery = 'tsquery'
}

export enum Demo_Rpg_DataSortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Demo_Rpg_DataStats = {
  abbreviation: Scalars['String']['output'];
  code: Scalars['String']['output'];
  description: Demo_Rpg_DataStatsDescription;
  name: Demo_Rpg_DataStatsName;
};

export type Demo_Rpg_DataStatsConnection = {
  edges: Array<Demo_Rpg_DataStatsEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataStatsDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataStatsEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataStatsNode;
};

export type Demo_Rpg_DataStatsFlat = {
  abbreviation: Scalars['String']['output'];
  code: Scalars['String']['output'];
  description: Demo_Rpg_DataStatsFlatDescription;
  name: Demo_Rpg_DataStatsFlatName;
};

export type Demo_Rpg_DataStatsFlatConnection = {
  edges: Array<Demo_Rpg_DataStatsFlatEdge>;
  pageInfo: Demo_Rpg_DataPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Demo_Rpg_DataStatsFlatDescription = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataStatsFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Demo_Rpg_DataStatsFlat;
};

export type Demo_Rpg_DataStatsFlatName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataStatsName = {
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
  zh: Scalars['String']['output'];
};

export type Demo_Rpg_DataStatsNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Demo_Rpg_DataStats;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type Demo_Rpg_DataStatsesWhereInput = {
  AND?: InputMaybe<Array<Demo_Rpg_DataStatsesWhereInput>>;
  NOT?: InputMaybe<Array<Demo_Rpg_DataStatsesWhereInput>>;
  OR?: InputMaybe<Array<Demo_Rpg_DataStatsesWhereInput>>;
  createdAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  createdId?: InputMaybe<Demo_Rpg_DataStringFilter>;
  data?: InputMaybe<Demo_Rpg_DataJsonFilter>;
  id?: InputMaybe<Demo_Rpg_DataStringFilter>;
  publishedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  readonly?: InputMaybe<Demo_Rpg_DataBoolFilter>;
  updatedAt?: InputMaybe<Demo_Rpg_DataDateTimeFilter>;
  versionId?: InputMaybe<Demo_Rpg_DataStringFilter>;
};

export type Demo_Rpg_DataStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Demo_Rpg_DataFilterStringMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type IdModel = {
  id: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponseModel = {
  expiresIn: Scalars['Int']['output'];
  tokenType: Scalars['String']['output'];
};

export type Mutation = {
  login: LoginResponseModel;
  logout: Scalars['Boolean']['output'];
  refreshToken: LoginResponseModel;
  signUp: IdModel;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};

export type Query = {
  abilities: Demo_Rpg_DataAbilitiesNode;
  abilitiesFlat: Demo_Rpg_DataAbilitiesFlat;
  abilitieses: Demo_Rpg_DataAbilitiesConnection;
  abilitiesesFlat: Demo_Rpg_DataAbilitiesFlatConnection;
  blog_authors: Demo_Rpg_CmsBlog_AuthorsNode;
  blog_authorsFlat: Demo_Rpg_CmsBlog_AuthorsFlat;
  blog_authorses: Demo_Rpg_CmsBlog_AuthorsConnection;
  blog_authorsesFlat: Demo_Rpg_CmsBlog_AuthorsFlatConnection;
  blog_posts: Demo_Rpg_CmsBlog_PostsNode;
  blog_postsFlat: Demo_Rpg_CmsBlog_PostsFlat;
  blog_postses: Demo_Rpg_CmsBlog_PostsConnection;
  blog_postsesFlat: Demo_Rpg_CmsBlog_PostsFlatConnection;
  classes: Demo_Rpg_DataClassesNode;
  classesFlat: Demo_Rpg_DataClassesFlat;
  classeses: Demo_Rpg_DataClassesConnection;
  classesesFlat: Demo_Rpg_DataClassesFlatConnection;
  dialogs: Demo_Rpg_DataDialogsNode;
  dialogsFlat: Demo_Rpg_DataDialogsFlat;
  dialogses: Demo_Rpg_DataDialogsConnection;
  dialogsesFlat: Demo_Rpg_DataDialogsFlatConnection;
  effects: Demo_Rpg_DataEffectsNode;
  effectsFlat: Demo_Rpg_DataEffectsFlat;
  effectses: Demo_Rpg_DataEffectsConnection;
  effectsesFlat: Demo_Rpg_DataEffectsFlatConnection;
  factions: Demo_Rpg_DataFactionsNode;
  factionsFlat: Demo_Rpg_DataFactionsFlat;
  factionses: Demo_Rpg_DataFactionsConnection;
  factionsesFlat: Demo_Rpg_DataFactionsFlatConnection;
  heroes: Demo_Rpg_DataHeroesNode;
  heroesFlat: Demo_Rpg_DataHeroesFlat;
  heroeses: Demo_Rpg_DataHeroesConnection;
  heroesesFlat: Demo_Rpg_DataHeroesFlatConnection;
  item_types: Demo_Rpg_DataItem_TypesNode;
  item_typesFlat: Demo_Rpg_DataItem_TypesFlat;
  item_typeses: Demo_Rpg_DataItem_TypesConnection;
  item_typesesFlat: Demo_Rpg_DataItem_TypesFlatConnection;
  items: Demo_Rpg_DataItemsNode;
  itemsFlat: Demo_Rpg_DataItemsFlat;
  itemses: Demo_Rpg_DataItemsConnection;
  itemsesFlat: Demo_Rpg_DataItemsFlatConnection;
  landing_features: Demo_Rpg_CmsLanding_FeaturesNode;
  landing_featuresFlat: Demo_Rpg_CmsLanding_FeaturesFlat;
  landing_featureses: Demo_Rpg_CmsLanding_FeaturesConnection;
  landing_featuresesFlat: Demo_Rpg_CmsLanding_FeaturesFlatConnection;
  landing_hero: Demo_Rpg_CmsLanding_HeroNode;
  landing_heroFlat: Demo_Rpg_CmsLanding_HeroFlat;
  landing_heros: Demo_Rpg_CmsLanding_HeroConnection;
  landing_herosFlat: Demo_Rpg_CmsLanding_HeroFlatConnection;
  landing_testimonials: Demo_Rpg_CmsLanding_TestimonialsNode;
  landing_testimonialsFlat: Demo_Rpg_CmsLanding_TestimonialsFlat;
  landing_testimonialses: Demo_Rpg_CmsLanding_TestimonialsConnection;
  landing_testimonialsesFlat: Demo_Rpg_CmsLanding_TestimonialsFlatConnection;
  locations: Demo_Rpg_DataLocationsNode;
  locationsFlat: Demo_Rpg_DataLocationsFlat;
  locationses: Demo_Rpg_DataLocationsConnection;
  locationsesFlat: Demo_Rpg_DataLocationsFlatConnection;
  me: UserModel;
  monsters: Demo_Rpg_DataMonstersNode;
  monstersFlat: Demo_Rpg_DataMonstersFlat;
  monsterses: Demo_Rpg_DataMonstersConnection;
  monstersesFlat: Demo_Rpg_DataMonstersFlatConnection;
  npcs: Demo_Rpg_DataNpcsNode;
  npcsFlat: Demo_Rpg_DataNpcsFlat;
  npcses: Demo_Rpg_DataNpcsConnection;
  npcsesFlat: Demo_Rpg_DataNpcsFlatConnection;
  parties: Demo_Rpg_DataPartiesNode;
  partiesFlat: Demo_Rpg_DataPartiesFlat;
  partieses: Demo_Rpg_DataPartiesConnection;
  partiesesFlat: Demo_Rpg_DataPartiesFlatConnection;
  quests: Demo_Rpg_DataQuestsNode;
  questsFlat: Demo_Rpg_DataQuestsFlat;
  questses: Demo_Rpg_DataQuestsConnection;
  questsesFlat: Demo_Rpg_DataQuestsFlatConnection;
  regions: Demo_Rpg_DataRegionsNode;
  regionsFlat: Demo_Rpg_DataRegionsFlat;
  regionses: Demo_Rpg_DataRegionsConnection;
  regionsesFlat: Demo_Rpg_DataRegionsFlatConnection;
  stats: Demo_Rpg_DataStatsNode;
  statsFlat: Demo_Rpg_DataStatsFlat;
  statses: Demo_Rpg_DataStatsConnection;
  statsesFlat: Demo_Rpg_DataStatsFlatConnection;
};


export type QueryAbilitiesArgs = {
  id: Scalars['String']['input'];
};


export type QueryAbilitiesFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryAbilitiesesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetAbilitiesesInput>;
};


export type QueryAbilitiesesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetAbilitiesesInput>;
};


export type QueryBlog_AuthorsArgs = {
  id: Scalars['String']['input'];
};


export type QueryBlog_AuthorsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryBlog_AuthorsesArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetBlog_AuthorsesInput>;
};


export type QueryBlog_AuthorsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetBlog_AuthorsesInput>;
};


export type QueryBlog_PostsArgs = {
  id: Scalars['String']['input'];
};


export type QueryBlog_PostsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryBlog_PostsesArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetBlog_PostsesInput>;
};


export type QueryBlog_PostsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetBlog_PostsesInput>;
};


export type QueryClassesArgs = {
  id: Scalars['String']['input'];
};


export type QueryClassesFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryClassesesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetClassesesInput>;
};


export type QueryClassesesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetClassesesInput>;
};


export type QueryDialogsArgs = {
  id: Scalars['String']['input'];
};


export type QueryDialogsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryDialogsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetDialogsesInput>;
};


export type QueryDialogsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetDialogsesInput>;
};


export type QueryEffectsArgs = {
  id: Scalars['String']['input'];
};


export type QueryEffectsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryEffectsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetEffectsesInput>;
};


export type QueryEffectsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetEffectsesInput>;
};


export type QueryFactionsArgs = {
  id: Scalars['String']['input'];
};


export type QueryFactionsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryFactionsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetFactionsesInput>;
};


export type QueryFactionsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetFactionsesInput>;
};


export type QueryHeroesArgs = {
  id: Scalars['String']['input'];
};


export type QueryHeroesFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryHeroesesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetHeroesesInput>;
};


export type QueryHeroesesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetHeroesesInput>;
};


export type QueryItem_TypesArgs = {
  id: Scalars['String']['input'];
};


export type QueryItem_TypesFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryItem_TypesesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetItem_TypesesInput>;
};


export type QueryItem_TypesesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetItem_TypesesInput>;
};


export type QueryItemsArgs = {
  id: Scalars['String']['input'];
};


export type QueryItemsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryItemsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetItemsesInput>;
};


export type QueryItemsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetItemsesInput>;
};


export type QueryLanding_FeaturesArgs = {
  id: Scalars['String']['input'];
};


export type QueryLanding_FeaturesFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryLanding_FeaturesesArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetLanding_FeaturesesInput>;
};


export type QueryLanding_FeaturesesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetLanding_FeaturesesInput>;
};


export type QueryLanding_HeroArgs = {
  id: Scalars['String']['input'];
};


export type QueryLanding_HeroFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryLanding_HerosArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetLanding_HerosInput>;
};


export type QueryLanding_HerosFlatArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetLanding_HerosInput>;
};


export type QueryLanding_TestimonialsArgs = {
  id: Scalars['String']['input'];
};


export type QueryLanding_TestimonialsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryLanding_TestimonialsesArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetLanding_TestimonialsesInput>;
};


export type QueryLanding_TestimonialsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_CmsGetLanding_TestimonialsesInput>;
};


export type QueryLocationsArgs = {
  id: Scalars['String']['input'];
};


export type QueryLocationsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryLocationsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetLocationsesInput>;
};


export type QueryLocationsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetLocationsesInput>;
};


export type QueryMonstersArgs = {
  id: Scalars['String']['input'];
};


export type QueryMonstersFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryMonstersesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetMonstersesInput>;
};


export type QueryMonstersesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetMonstersesInput>;
};


export type QueryNpcsArgs = {
  id: Scalars['String']['input'];
};


export type QueryNpcsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryNpcsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetNpcsesInput>;
};


export type QueryNpcsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetNpcsesInput>;
};


export type QueryPartiesArgs = {
  id: Scalars['String']['input'];
};


export type QueryPartiesFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryPartiesesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetPartiesesInput>;
};


export type QueryPartiesesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetPartiesesInput>;
};


export type QueryQuestsArgs = {
  id: Scalars['String']['input'];
};


export type QueryQuestsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryQuestsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetQuestsesInput>;
};


export type QueryQuestsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetQuestsesInput>;
};


export type QueryRegionsArgs = {
  id: Scalars['String']['input'];
};


export type QueryRegionsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryRegionsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetRegionsesInput>;
};


export type QueryRegionsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetRegionsesInput>;
};


export type QueryStatsArgs = {
  id: Scalars['String']['input'];
};


export type QueryStatsFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryStatsesArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetStatsesInput>;
};


export type QueryStatsesFlatArgs = {
  data?: InputMaybe<Demo_Rpg_DataGetStatsesInput>;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserModel = {
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  roleId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type RegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegionsQuery = { regionses: { totalCount: number, edges: Array<{ node: { id: string, versionId: string, createdId: string, createdAt: number | string, publishedAt: number | string, data: { climate: string, name: { en: string }, description: { en: string } } } }> } };


export const RegionsDocument = gql`
    query Regions {
  regionses {
    edges {
      node {
        id
        versionId
        createdId
        createdAt
        publishedAt
        data {
          climate
          name {
            en
          }
          description {
            en
          }
        }
      }
    }
    totalCount
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Regions(variables?: RegionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RegionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegionsQuery>({ document: RegionsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Regions', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;