import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockAttributesArray: any;
  BlockAttributesObject: any;
};

/** Block registered by ACF */
export type AcfBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** A Field Group managed by ACF */
export type AcfFieldGroup = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** Connection between the Infos_Fields type and the MediaItem type */
export type AcfMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'AcfMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /** TEST: URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** Content rating filter for user avatars. Determines the maximum maturity level of avatars to display, following standard content rating classifications (G, PG, R, X). */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** Block that supports Anchor field */
export type BlockWithSupportsAnchor = {
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
};

/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type Category = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Category';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /** Connection between the category type and its children categories. */
  children?: Maybe<CategoryToCategoryConnection>;
  /** Connection between the Category type and the ContentNode type */
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and its parent category. */
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Category type and the post type */
  posts?: Maybe<CategoryToPostConnection>;
  /** The Yoast SEO data of the Categories taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the Category type and the Taxonomy type */
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** A paginated collection of category Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>;
  /** A list of connected category Nodes */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryConnectionPageInfo;
};

/** Represents a connection to a category. Contains both the category Node and metadata about the relationship. */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected category Node */
  node: Category;
};

/** Pagination metadata specific to &quot;CategoryConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;CategoryConnectionEdge&quot; Nodes. */
export type CategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific Category. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the Category. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToAncestorsCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Pagination metadata specific to &quot;CategoryToAncestorsCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToAncestorsCategoryConnection Nodes. */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  edges: Array<CategoryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Pagination metadata specific to &quot;CategoryToCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToCategoryConnection Nodes. */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'CategoryToContentNodeConnection';
  /** Edges for the CategoryToContentNodeConnection connection */
  edges: Array<CategoryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;CategoryToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToContentNodeConnection Nodes. */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Category;
};

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection & PostConnection & {
  __typename?: 'CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  edges: Array<CategoryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;CategoryToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToPostConnection Nodes. */
export type CategoryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'CategoryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** The collaborateurice type */
export type Collaborateurice = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Collaborateurice';
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  collaborateuriceId?: Maybe<Scalars['Int']>;
  /** Connection between the Collaborateurice type and the ContentNode type */
  contentNodes?: Maybe<CollaborateuriceToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the Collaborateurice type and the post type */
  posts?: Maybe<CollaborateuriceToPostConnection>;
  /** The Yoast SEO data of the Collaborateurices taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the Collaborateurice type and the Taxonomy type */
  taxonomy?: Maybe<CollaborateuriceToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The collaborateurice type */
export type CollaborateuriceContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollaborateuriceToContentNodeConnectionWhereArgs>;
};


/** The collaborateurice type */
export type CollaborateuriceEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** The collaborateurice type */
export type CollaborateuriceEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** The collaborateurice type */
export type CollaborateuricePostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollaborateuriceToPostConnectionWhereArgs>;
};

/** A paginated collection of collaborateurice Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of collaborateurice Nodes */
export type CollaborateuriceConnection = {
  /** A list of edges (relational context) between RootQuery and connected collaborateurice Nodes */
  edges: Array<CollaborateuriceConnectionEdge>;
  /** A list of connected collaborateurice Nodes */
  nodes: Array<Collaborateurice>;
  /** Information about pagination in a connection. */
  pageInfo: CollaborateuriceConnectionPageInfo;
};

/** Represents a connection to a collaborateurice. Contains both the collaborateurice Node and metadata about the relationship. */
export type CollaborateuriceConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected collaborateurice Node */
  node: Collaborateurice;
};

/** Pagination metadata specific to &quot;CollaborateuriceConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;CollaborateuriceConnectionEdge&quot; Nodes. */
export type CollaborateuriceConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific Collaborateurice. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the Collaborateurice. */
export enum CollaborateuriceIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Collaborateurice type and the ContentNode type */
export type CollaborateuriceToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'CollaborateuriceToContentNodeConnection';
  /** Edges for the CollaborateuriceToContentNodeConnection connection */
  edges: Array<CollaborateuriceToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: CollaborateuriceToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CollaborateuriceToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'CollaborateuriceToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;CollaborateuriceToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of CollaborateuriceToContentNodeConnection Nodes. */
export type CollaborateuriceToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CollaborateuriceToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CollaborateuriceToContentNodeConnection connection */
export type CollaborateuriceToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCollaborateuriceEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Collaborateurice type and the post type */
export type CollaborateuriceToPostConnection = Connection & PostConnection & {
  __typename?: 'CollaborateuriceToPostConnection';
  /** Edges for the CollaborateuriceToPostConnection connection */
  edges: Array<CollaborateuriceToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: CollaborateuriceToPostConnectionPageInfo;
};

/** An edge in a connection */
export type CollaborateuriceToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'CollaborateuriceToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;CollaborateuriceToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of CollaborateuriceToPostConnection Nodes. */
export type CollaborateuriceToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'CollaborateuriceToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CollaborateuriceToPostConnection connection */
export type CollaborateuriceToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Collaborateurice type and the Taxonomy type */
export type CollaborateuriceToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'CollaborateuriceToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type Comment = DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  __typename?: 'Comment';
  /** User agent (browser or client) used to post the comment. */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment.
   * @deprecated Deprecated in favor of the `status` field
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<CommentToCommenterConnectionEdge>;
  /**
   * IP address for the author at the time of commenting.
   * @deprecated Use the ipAddress field on the edge between the comment and author
   */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. */
  date?: Maybe<Scalars['String']>;
  /** Date the comment was posted in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Karma value for the comment. */
  karma?: Maybe<Scalars['Int']>;
  /** The permalink of the comment */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the Comment type */
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<CommentToCommentConnection>;
  /** The approval status of the comment. */
  status?: Maybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type CommentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type CommentParentArgs = {
  where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter & DatabaseIdentifier & Node & {
  __typename?: 'CommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The email for the comment author. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
};


/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

/** A paginated collection of Comment Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>;
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentConnectionPageInfo;
};

/** Represents a connection to a Comment. Contains both the Comment Node and metadata about the relationship. */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Comment Node */
  node: Comment;
};

/** Pagination metadata specific to &quot;CommentConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;CommentConnectionEdge&quot; Nodes. */
export type CommentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific comment. Specifies which unique attribute is used to find a particular comment. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Moderation state for user comments. Determines whether comments are publicly visible, pending approval, or marked as spam. */
export enum CommentStatusEnum {
  /** Comments with the Approved status */
  Approve = 'APPROVE',
  /** Comments with the Unapproved status */
  Hold = 'HOLD',
  /** Comments with the Spam status */
  Spam = 'SPAM',
  /** Comments with the Trash status */
  Trash = 'TRASH'
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection & Connection & {
  __typename?: 'CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  edges: Array<CommentToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Pagination metadata specific to &quot;CommentToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of CommentToCommentConnection Nodes. */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CommentToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToCommenterConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** Email address representing the author for this particular comment */
  email?: Maybe<Scalars['String']>;
  /** IP address of the author at the time of making this comment. */
  ipAddress?: Maybe<Scalars['String']>;
  /** The display name of the comment author for this particular comment */
  name?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Commenter;
  /** The url entered for the comment author on this particular comment */
  url?: Maybe<Scalars['String']>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToParentCommentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Comment;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** A user or guest who has submitted a comment. Provides identification and contact information for the comment author. */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

/** Represents a connection to a Commenter. Contains both the Commenter Node and metadata about the relationship. */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Commenter Node */
  node: Commenter;
};

/** Sorting attributes for comment collections. Specifies which comment property determines the order of results. */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Chronological ordering by comment submission date. */
  CommentDate = 'COMMENT_DATE',
  /** Chronological ordering by comment date in UTC/GMT time. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Ordering by internal ID (typically reflects creation order). */
  CommentId = 'COMMENT_ID',
  /** Preserve custom order of IDs as specified in the query. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Ordering by parent comment relationship (threaded discussions). */
  CommentParent = 'COMMENT_PARENT',
  /** Ordering by associated content item ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Ordering by comment classification (standard comments, pingbacks, etc.). */
  CommentType = 'COMMENT_TYPE',
  /** Ordering by the user account ID associated with the comment as the comment author. */
  UserId = 'USER_ID'
}

/** A paginated relationship between objects. Supports cursor-based pagination with edges containing relationship metadata and nodes containing the related objects. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>;
  /** A list of connected nodes */
  nodes: Array<Node>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
};

/** Base interface for content objects like posts, pages, and media items. Provides common fields available across these content types. */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** True when this item is set to be hidden from search engines (Yoast &gt; Advanced), ignoring site-wide indexing settings. */
  noindex?: Maybe<Scalars['Boolean']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique ID of the preview node */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Base interface for content objects like posts, pages, and media items. Provides common fields available across these content types. */
export type ContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Base interface for content objects like posts, pages, and media items. Provides common fields available across these content types. */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** A paginated collection of ContentNode Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>;
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeConnectionPageInfo;
};

/** Represents a connection to a ContentNode. Contains both the ContentNode Node and metadata about the relationship. */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentNode Node */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;ContentNodeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;ContentNodeConnectionEdge&quot; Nodes. */
export type ContentNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving specific content. Determines which property (global ID, database ID, URI) is used to locate content objects. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentType;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;ContentNodeToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentNodeToEnqueuedScriptConnection Nodes. */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentNodeToEnqueuedScriptConnection connection */
export type ContentNodeToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;ContentNodeToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentNodeToEnqueuedStylesheetConnection Nodes. */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentNodeToEnqueuedStylesheetConnection connection */
export type ContentNodeToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A layout pattern that can help inform how content might be structured and displayed. Templates can define specialized layouts for different types of content. */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The templates that can be assigned to content. Used to filter a connection by the template its content uses. */
export enum ContentTemplateEnum {
  /** The default template, applied when no specific template is assigned. */
  DefaultTemplate = 'DEFAULT_TEMPLATE',
  /** The "Custom Template" template. */
  TemplateCustomBladeTemplate = 'TEMPLATE_CUSTOM_BLADE_TEMPLATE'
}

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post-type object. */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** A paginated collection of ContentType Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>;
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeConnectionPageInfo;
};

/** Represents a connection to a ContentType. Contains both the ContentType Node and metadata about the relationship. */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentType Node */
  node: ContentType;
};

/** Pagination metadata specific to &quot;ContentTypeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;ContentTypeConnectionEdge&quot; Nodes. */
export type ContentTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Available content entity types that can be queried or filtered. Identifies the primary content structures available in the system. */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST'
}

/** Identifier types for retrieving a specific content type definition. Determines whether to look up content types by ID or name. */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'ContentTypeToContentNodeConnection';
  /** Edges for the ContentTypeToContentNodeConnection connection */
  edges: Array<ContentTypeToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;ContentTypeToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentTypeToContentNodeConnection Nodes. */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'ContentTypeToTaxonomyConnection';
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  edges: Array<ContentTypeToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Pagination metadata specific to &quot;ContentTypeToTaxonomyConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentTypeToTaxonomyConnection Nodes. */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Collaborateurice taxonomy. */
export enum ContentTypesOfCollaborateuriceEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** A block used for editing the site */
export type CoreAccordion = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreAccordion';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAccordion Block Type */
  attributes?: Maybe<CoreAccordionAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAccordion Block Type */
export type CoreAccordionAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreAccordionAttributes';
  /** The &quot;align&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;ariaLabel&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  ariaLabel?: Maybe<Scalars['String']>;
  /** The &quot;autoclose&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  autoclose: Scalars['Boolean'];
  /** The &quot;backgroundColor&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;headingLevel&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  headingLevel: Scalars['Float'];
  /** The &quot;iconPosition&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  iconPosition: Scalars['String'];
  /** The &quot;layout&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;levelOptions&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  levelOptions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;lock&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showIcon&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  showIcon: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreAccordionAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreAccordionHeading = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreAccordionHeading';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAccordionHeading Block Type */
  attributes?: Maybe<CoreAccordionHeadingAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAccordionHeading Block Type */
export type CoreAccordionHeadingAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreAccordionHeadingAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;iconPosition&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  iconPosition: Scalars['String'];
  /** The &quot;level&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  level?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;openByDefault&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  openByDefault: Scalars['Boolean'];
  /** The &quot;showIcon&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  showIcon: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;title&quot; field on the &quot;CoreAccordionHeadingAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreAccordionItem = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreAccordionItem';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAccordionItem Block Type */
  attributes?: Maybe<CoreAccordionItemAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAccordionItem Block Type */
export type CoreAccordionItemAttributes = {
  __typename?: 'CoreAccordionItemAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;openByDefault&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  openByDefault: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreAccordionItemAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreAccordionPanel = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreAccordionPanel';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAccordionPanel Block Type */
  attributes?: Maybe<CoreAccordionPanelAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAccordionPanel Block Type */
export type CoreAccordionPanelAttributes = {
  __typename?: 'CoreAccordionPanelAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreAccordionPanelAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreArchives = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreArchives';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreArchives Block Type */
  attributes?: Maybe<CoreArchivesAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreArchives Block Type */
export type CoreArchivesAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreArchivesAttributes';
  /** The &quot;align&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayAsDropdown&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  displayAsDropdown: Scalars['Boolean'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showLabel&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  showLabel: Scalars['Boolean'];
  /** The &quot;showPostCounts&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  showPostCounts: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreArchivesAttributes&quot; block or block attributes */
  type: Scalars['String'];
};

/** A block used for editing the site */
export type CoreAudio = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreAudio';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAudio Block Type */
  attributes?: Maybe<CoreAudioAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAudio Block Type */
export type CoreAudioAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreAudioAttributes';
  /** The &quot;align&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;autoplay&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** The &quot;blob&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  blob?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;loop&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  loop?: Maybe<Scalars['Boolean']>;
  /** The &quot;metadata&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;preload&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  preload?: Maybe<Scalars['String']>;
  /** The &quot;src&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreAudioAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreAvatar = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreAvatar';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAvatar Block Type */
  attributes?: Maybe<CoreAvatarAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAvatar Block Type */
export type CoreAvatarAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreAvatarAttributes';
  /** The &quot;align&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;linkTarget&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;size&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  size: Scalars['Float'];
  /** The &quot;style&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;userId&quot; field on the &quot;CoreAvatarAttributes&quot; block or block attributes */
  userId?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreBlock = EditorBlock & {
  __typename?: 'CoreBlock';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreBlock Block Type */
  attributes?: Maybe<CoreBlockAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreBlock Block Type */
export type CoreBlockAttributes = {
  __typename?: 'CoreBlockAttributes';
  /** The &quot;content&quot; field on the &quot;CoreBlockAttributes&quot; block or block attributes */
  content: Scalars['BlockAttributesObject'];
  /** The &quot;lock&quot; field on the &quot;CoreBlockAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreBlockAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;ref&quot; field on the &quot;CoreBlockAttributes&quot; block or block attributes */
  ref?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreBreadcrumbs = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreBreadcrumbs';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreBreadcrumbs Block Type */
  attributes?: Maybe<CoreBreadcrumbsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreBreadcrumbs Block Type */
export type CoreBreadcrumbsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreBreadcrumbsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;prefersTaxonomy&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  prefersTaxonomy: Scalars['Boolean'];
  /** The &quot;separator&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  separator: Scalars['String'];
  /** The &quot;showCurrentItem&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  showCurrentItem: Scalars['Boolean'];
  /** The &quot;showHomeItem&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  showHomeItem: Scalars['Boolean'];
  /** The &quot;showOnHomePage&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  showOnHomePage: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreBreadcrumbsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreButton = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreButton';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreButton Block Type */
  attributes?: Maybe<CoreButtonAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreButton Block Type */
export type CoreButtonAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreButtonAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;linkClassName&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  linkClassName?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;rel&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;text&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  text?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;title&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  type: Scalars['String'];
  /** The &quot;url&quot; field on the &quot;CoreButtonAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreButtons = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreButtons';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreButtons Block Type */
  attributes?: Maybe<CoreButtonsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreButtons Block Type */
export type CoreButtonsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreButtonsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreButtonsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCalendar = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCalendar';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCalendar Block Type */
  attributes?: Maybe<CoreCalendarAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCalendar Block Type */
export type CoreCalendarAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCalendarAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;month&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  month?: Maybe<Scalars['Int']>;
  /** The &quot;style&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;year&quot; field on the &quot;CoreCalendarAttributes&quot; block or block attributes */
  year?: Maybe<Scalars['Int']>;
};

/** A block used for editing the site */
export type CoreCategories = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCategories';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCategories Block Type */
  attributes?: Maybe<CoreCategoriesAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCategories Block Type */
export type CoreCategoriesAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCategoriesAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayAsDropdown&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  displayAsDropdown: Scalars['Boolean'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showEmpty&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  showEmpty: Scalars['Boolean'];
  /** The &quot;showHierarchy&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  showHierarchy: Scalars['Boolean'];
  /** The &quot;showLabel&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  showLabel: Scalars['Boolean'];
  /** The &quot;showOnlyTopLevel&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  showOnlyTopLevel: Scalars['Boolean'];
  /** The &quot;showPostCounts&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  showPostCounts: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;taxonomy&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  taxonomy: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CoreCategoriesAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCode = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCode';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCode Block Type */
  attributes?: Maybe<CoreCodeAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCode Block Type */
export type CoreCodeAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCodeAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCodeAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreColumn = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreColumn';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreColumn Block Type */
  attributes?: Maybe<CoreColumnAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreColumn Block Type */
export type CoreColumnAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreColumnAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;verticalAlignment&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  verticalAlignment?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreColumnAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreColumns = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreColumns';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreColumns Block Type */
  attributes?: Maybe<CoreColumnsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreColumns Block Type */
export type CoreColumnsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreColumnsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isStackedOnMobile&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  isStackedOnMobile: Scalars['Boolean'];
  /** The &quot;layout&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;verticalAlignment&quot; field on the &quot;CoreColumnsAttributes&quot; block or block attributes */
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentAuthorName = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentAuthorName';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentAuthorName Block Type */
  attributes?: Maybe<CoreCommentAuthorNameAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentAuthorName Block Type */
export type CoreCommentAuthorNameAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentAuthorNameAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;linkTarget&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentAuthorNameAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentContent = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentContent';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentContent Block Type */
  attributes?: Maybe<CoreCommentContentAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentContent Block Type */
export type CoreCommentContentAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentContentAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentContentAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentDate = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentDate';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentDate Block Type */
  attributes?: Maybe<CoreCommentDateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentDate Block Type */
export type CoreCommentDateAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentDateAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;format&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  format?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;lock&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentDateAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentEditLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentEditLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentEditLink Block Type */
  attributes?: Maybe<CoreCommentEditLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentEditLink Block Type */
export type CoreCommentEditLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentEditLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentEditLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentReplyLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentReplyLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentReplyLink Block Type */
  attributes?: Maybe<CoreCommentReplyLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentReplyLink Block Type */
export type CoreCommentReplyLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentReplyLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentReplyLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentTemplate = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentTemplate';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentTemplate Block Type */
  attributes?: Maybe<CoreCommentTemplateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentTemplate Block Type */
export type CoreCommentTemplateAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentTemplateAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentTemplateAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreComments = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreComments';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreComments Block Type */
  attributes?: Maybe<CoreCommentsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreComments Block Type */
export type CoreCommentsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;legacy&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  legacy: Scalars['Boolean'];
  /** The &quot;lock&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CoreCommentsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentsPagination = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentsPagination';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPagination Block Type */
  attributes?: Maybe<CoreCommentsPaginationAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPagination Block Type */
export type CoreCommentsPaginationAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentsPaginationAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;paginationArrow&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  paginationArrow: Scalars['String'];
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentsPaginationAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentsPaginationNext = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentsPaginationNext';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPaginationNext Block Type */
  attributes?: Maybe<CoreCommentsPaginationNextAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPaginationNext Block Type */
export type CoreCommentsPaginationNextAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentsPaginationNextAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationNextAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentsPaginationNumbers = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentsPaginationNumbers';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPaginationNumbers Block Type */
  attributes?: Maybe<CoreCommentsPaginationNumbersAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPaginationNumbers Block Type */
export type CoreCommentsPaginationNumbersAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentsPaginationNumbersAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationNumbersAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentsPaginationPrevious = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentsPaginationPrevious';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPaginationPrevious Block Type */
  attributes?: Maybe<CoreCommentsPaginationPreviousAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPaginationPrevious Block Type */
export type CoreCommentsPaginationPreviousAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentsPaginationPreviousAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationPreviousAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentsTitle = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreCommentsTitle';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsTitle Block Type */
  attributes?: Maybe<CoreCommentsTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsTitle Block Type */
export type CoreCommentsTitleAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCommentsTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  levelOptions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showCommentsCount&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  showCommentsCount: Scalars['Boolean'];
  /** The &quot;showPostTitle&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  showPostTitle: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentsTitleAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCover = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCover';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCover Block Type */
  attributes?: Maybe<CoreCoverAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCover Block Type */
export type CoreCoverAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCoverAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;allowedVideoProviders&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  allowedVideoProviders: Scalars['BlockAttributesArray'];
  /** The &quot;alt&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  alt: Scalars['String'];
  /** The &quot;anchor&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundType&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  backgroundType: Scalars['String'];
  /** The &quot;borderColor&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;contentPosition&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  contentPosition?: Maybe<Scalars['String']>;
  /** The &quot;customGradient&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  customGradient?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayColor&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** The &quot;dimRatio&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  dimRatio: Scalars['Float'];
  /** The &quot;focalPoint&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;hasParallax&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  hasParallax: Scalars['Boolean'];
  /** The &quot;id&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isDark&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  isDark: Scalars['Boolean'];
  /** The &quot;isRepeated&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  isRepeated: Scalars['Boolean'];
  /** The &quot;isUserOverlayColor&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  isUserOverlayColor?: Maybe<Scalars['Boolean']>;
  /** The &quot;layout&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;minHeight&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  minHeight?: Maybe<Scalars['Float']>;
  /** The &quot;minHeightUnit&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** The &quot;overlayColor&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  overlayColor?: Maybe<Scalars['String']>;
  /** The &quot;poster&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  poster?: Maybe<Scalars['String']>;
  /** The &quot;sizeSlug&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  sizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
  /** The &quot;useFeaturedImage&quot; field on the &quot;CoreCoverAttributes&quot; block or block attributes */
  useFeaturedImage: Scalars['Boolean'];
};

/** A block used for editing the site */
export type CoreDetails = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreDetails';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreDetails Block Type */
  attributes?: Maybe<CoreDetailsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreDetails Block Type */
export type CoreDetailsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreDetailsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;name&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  name?: Maybe<Scalars['String']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;showContent&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  showContent: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;summary&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  summary?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreDetailsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreEmbed = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreEmbed';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreEmbed Block Type */
  attributes?: Maybe<CoreEmbedAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreEmbed Block Type */
export type CoreEmbedAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreEmbedAttributes';
  /** The &quot;align&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;allowResponsive&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  allowResponsive: Scalars['Boolean'];
  /** The &quot;anchor&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;previewable&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  previewable: Scalars['Boolean'];
  /** The &quot;providerNameSlug&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** The &quot;responsive&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  responsive: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;type&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  type?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreEmbedAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreFile = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreFile';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreFile Block Type */
  attributes?: Maybe<CoreFileAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreFile Block Type */
export type CoreFileAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreFileAttributes';
  /** The &quot;align&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;blob&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  blob?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayPreview&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  displayPreview?: Maybe<Scalars['Boolean']>;
  /** The &quot;downloadButtonText&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  downloadButtonText?: Maybe<Scalars['String']>;
  /** The &quot;fileId&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  fileId?: Maybe<Scalars['String']>;
  /** The &quot;fileName&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  fileName?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;href&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  href?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;previewHeight&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  previewHeight: Scalars['Float'];
  /** The &quot;showDownloadButton&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  showDownloadButton: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textLinkHref&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  textLinkHref?: Maybe<Scalars['String']>;
  /** The &quot;textLinkTarget&quot; field on the &quot;CoreFileAttributes&quot; block or block attributes */
  textLinkTarget?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreFootnotes = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreFootnotes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreFootnotes Block Type */
  attributes?: Maybe<CoreFootnotesAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreFootnotes Block Type */
export type CoreFootnotesAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreFootnotesAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreFootnotesAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreFreeform = EditorBlock & {
  __typename?: 'CoreFreeform';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreFreeform Block Type */
  attributes?: Maybe<CoreFreeformAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreFreeform Block Type */
export type CoreFreeformAttributes = {
  __typename?: 'CoreFreeformAttributes';
  /** The &quot;content&quot; field on the &quot;CoreFreeformAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreFreeformAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreFreeformAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreGallery = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreGallery';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreGallery Block Type */
  attributes?: Maybe<CoreGalleryAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreGallery Block Type */
export type CoreGalleryAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreGalleryAttributes';
  /** The &quot;align&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;allowResize&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  allowResize: Scalars['Boolean'];
  /** The &quot;anchor&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;aspectRatio&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  aspectRatio: Scalars['String'];
  /** The &quot;backgroundColor&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  columns?: Maybe<Scalars['Float']>;
  /** The &quot;dynamicContent&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  dynamicContent?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;fixedHeight&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  fixedHeight: Scalars['Boolean'];
  /** The &quot;gradient&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;ids&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  ids: Array<Maybe<Scalars['Float']>>;
  /** The &quot;imageCrop&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  imageCrop: Scalars['Boolean'];
  /** The &quot;images&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  images: Array<Maybe<CoreGalleryAttributesImages>>;
  /** The &quot;layout&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;linkTo&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  linkTo?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;navigationButtonType&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  navigationButtonType: Scalars['String'];
  /** The &quot;randomOrder&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  randomOrder: Scalars['Boolean'];
  /** The &quot;shortCodeTransforms&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  shortCodeTransforms: Array<Maybe<Scalars['BlockAttributesObject']>>;
  /** The &quot;sizeSlug&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  sizeSlug: Scalars['String'];
  /** The &quot;style&quot; field on the &quot;CoreGalleryAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** The &quot;CoreGalleryAttributesImages&quot; field on the &quot;CoreGalleryAttributes&quot; block attribute field */
export type CoreGalleryAttributesImages = {
  __typename?: 'CoreGalleryAttributesImages';
  /** The &quot;alt&quot; field on the &quot;CoreGalleryAttributesImages&quot; block attribute field */
  alt: Scalars['String'];
  /** The &quot;caption&quot; field on the &quot;CoreGalleryAttributesImages&quot; block attribute field */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;fullUrl&quot; field on the &quot;CoreGalleryAttributesImages&quot; block attribute field */
  fullUrl?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreGalleryAttributesImages&quot; block attribute field */
  id?: Maybe<Scalars['String']>;
  /** The &quot;link&quot; field on the &quot;CoreGalleryAttributesImages&quot; block attribute field */
  link?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreGalleryAttributesImages&quot; block attribute field */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreGroup = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreGroup';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreGroup Block Type */
  attributes?: Maybe<CoreGroupAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreGroup Block Type */
export type CoreGroupAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreGroupAttributes';
  /** The &quot;align&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;ariaLabel&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  ariaLabel?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;sectionBehavior&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionBehavior?: Maybe<Scalars['String']>;
  /** The &quot;sectionContentAlign&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionContentAlign?: Maybe<Scalars['String']>;
  /** The &quot;sectionMinHeight&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionMinHeight?: Maybe<Scalars['String']>;
  /** The &quot;sectionParallax&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionParallax?: Maybe<Scalars['Boolean']>;
  /** The &quot;sectionReveal&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionReveal?: Maybe<Scalars['String']>;
  /** The &quot;sectionRevealDirection&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionRevealDirection?: Maybe<Scalars['String']>;
  /** The &quot;sectionRevealStagger&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  sectionRevealStagger?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CoreGroupAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreHeading = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreHeading';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreHeading Block Type */
  attributes?: Maybe<CoreHeadingAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreHeading Block Type */
export type CoreHeadingAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreHeadingAttributes';
  /** The &quot;align&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  levelOptions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;lock&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreHeadingAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreHomeLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreHomeLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreHomeLink Block Type */
  attributes?: Maybe<CoreHomeLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreHomeLink Block Type */
export type CoreHomeLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreHomeLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;description&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  description?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opensInNewTab&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  opensInNewTab: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreHomeLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreHtml = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreHtml';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreHtml Block Type */
  attributes?: Maybe<CoreHtmlAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreHtml Block Type */
export type CoreHtmlAttributes = {
  __typename?: 'CoreHtmlAttributes';
  /** The &quot;content&quot; field on the &quot;CoreHtmlAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreHtmlAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreHtmlAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreIcon = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreIcon';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreIcon Block Type */
  attributes?: Maybe<CoreIconAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreIcon Block Type */
export type CoreIconAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreIconAttributes';
  /** The &quot;align&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;ariaLabel&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  ariaLabel?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;flipHorizontal&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  flipHorizontal: Scalars['Boolean'];
  /** The &quot;flipVertical&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  flipVertical: Scalars['Boolean'];
  /** The &quot;icon&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  icon?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rotation&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  rotation: Scalars['Float'];
  /** The &quot;style&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreIconAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreImage = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreImage';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreImage Block Type */
  attributes?: Maybe<CoreImageAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** Media Details of the CoreImage Block Type */
  mediaDetails?: Maybe<MediaDetails>;
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreImage Block Type */
export type CoreImageAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreImageAttributes';
  /** The &quot;align&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;alt&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  alt: Scalars['String'];
  /** The &quot;anchor&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;aspectRatio&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  aspectRatio?: Maybe<Scalars['String']>;
  /** The &quot;blob&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  blob?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;focalPoint&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;height&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  height?: Maybe<Scalars['String']>;
  /** The &quot;href&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  href?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isDecorative&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  isDecorative: Scalars['Boolean'];
  /** The &quot;lightbox&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  lightbox?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;linkClass&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  linkClass?: Maybe<Scalars['String']>;
  /** The &quot;linkDestination&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  linkDestination?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rel&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;scale&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  scale?: Maybe<Scalars['String']>;
  /** The &quot;sizeSlug&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  sizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;src&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreImageAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreLatestComments = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreLatestComments';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLatestComments Block Type */
  attributes?: Maybe<CoreLatestCommentsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLatestComments Block Type */
export type CoreLatestCommentsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreLatestCommentsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;commentsToShow&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  commentsToShow: Scalars['Float'];
  /** The &quot;displayAvatar&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  displayAvatar: Scalars['Boolean'];
  /** The &quot;displayContent&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  displayContent: Scalars['String'];
  /** The &quot;displayDate&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  displayDate: Scalars['Boolean'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreLatestCommentsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreLatestPosts = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreLatestPosts';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLatestPosts Block Type */
  attributes?: Maybe<CoreLatestPostsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The resolved posts based on block attributes. */
  resolvedPosts?: Maybe<Array<Maybe<ResolvedPost>>>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLatestPosts Block Type */
export type CoreLatestPostsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreLatestPostsAttributes';
  /** The &quot;addLinkToFeaturedImage&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  addLinkToFeaturedImage: Scalars['Boolean'];
  /** The &quot;align&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;categories&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  categories?: Maybe<Array<Maybe<Scalars['BlockAttributesObject']>>>;
  /** The &quot;className&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayAuthor&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  displayAuthor: Scalars['Boolean'];
  /** The &quot;displayFeaturedImage&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  displayFeaturedImage: Scalars['Boolean'];
  /** The &quot;displayPostContent&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  displayPostContent: Scalars['Boolean'];
  /** The &quot;displayPostContentRadio&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  displayPostContentRadio: Scalars['String'];
  /** The &quot;displayPostDate&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  displayPostDate: Scalars['Boolean'];
  /** The &quot;excerptLength&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  excerptLength: Scalars['Float'];
  /** The &quot;featuredImageAlign&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  featuredImageAlign?: Maybe<Scalars['String']>;
  /** The &quot;featuredImageSizeHeight&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  /** The &quot;featuredImageSizeSlug&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  featuredImageSizeSlug: Scalars['String'];
  /** The &quot;featuredImageSizeWidth&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;order&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  order: Scalars['String'];
  /** The &quot;orderBy&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  orderBy: Scalars['String'];
  /** The &quot;postsToShow&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  postsToShow: Scalars['Float'];
  /** The &quot;selectedAuthor&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  selectedAuthor?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreLatestPostsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreLegacyWidget = EditorBlock & {
  __typename?: 'CoreLegacyWidget';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLegacyWidget Block Type */
  attributes?: Maybe<CoreLegacyWidgetAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLegacyWidget Block Type */
export type CoreLegacyWidgetAttributes = {
  __typename?: 'CoreLegacyWidgetAttributes';
  /** The &quot;id&quot; field on the &quot;CoreLegacyWidgetAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['String']>;
  /** The &quot;idBase&quot; field on the &quot;CoreLegacyWidgetAttributes&quot; block or block attributes */
  idBase?: Maybe<Scalars['String']>;
  /** The &quot;instance&quot; field on the &quot;CoreLegacyWidgetAttributes&quot; block or block attributes */
  instance?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreLegacyWidgetAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreLegacyWidgetAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreLegacyWidgetAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreList = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreList';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreList Block Type */
  attributes?: Maybe<CoreListAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreList Block Type */
export type CoreListAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreListAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;ordered&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  ordered: Scalars['Boolean'];
  /** The &quot;placeholder&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;reversed&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  reversed?: Maybe<Scalars['Boolean']>;
  /** The &quot;start&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  start?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  type?: Maybe<Scalars['String']>;
  /** The &quot;values&quot; field on the &quot;CoreListAttributes&quot; block or block attributes */
  values: Scalars['String'];
};

/** A block used for editing the site */
export type CoreListItem = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreListItem';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreListItem Block Type */
  attributes?: Maybe<CoreListItemAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreListItem Block Type */
export type CoreListItemAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreListItemAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreListItemAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreLoginout = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreLoginout';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLoginout Block Type */
  attributes?: Maybe<CoreLoginoutAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLoginout Block Type */
export type CoreLoginoutAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreLoginoutAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayLoginAsForm&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  displayLoginAsForm: Scalars['Boolean'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;redirectToCurrent&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  redirectToCurrent: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreLoginoutAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreMath = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreMath';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMath Block Type */
  attributes?: Maybe<CoreMathAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMath Block Type */
export type CoreMathAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreMathAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;latex&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  latex?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;mathML&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  mathML?: Maybe<Scalars['String']>;
  /** The &quot;metadata&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreMathAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreMediaText = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreMediaText';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMediaText Block Type */
  attributes?: Maybe<CoreMediaTextAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMediaText Block Type */
export type CoreMediaTextAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreMediaTextAttributes';
  /** The &quot;align&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;focalPoint&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;href&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  href?: Maybe<Scalars['String']>;
  /** The &quot;imageFill&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  imageFill?: Maybe<Scalars['Boolean']>;
  /** The &quot;isStackedOnMobile&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  isStackedOnMobile: Scalars['Boolean'];
  /** The &quot;linkClass&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  linkClass?: Maybe<Scalars['String']>;
  /** The &quot;linkDestination&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  linkDestination?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;mediaAlt&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaAlt: Scalars['String'];
  /** The &quot;mediaId&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaId?: Maybe<Scalars['Float']>;
  /** The &quot;mediaLink&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaLink?: Maybe<Scalars['String']>;
  /** The &quot;mediaPosition&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaPosition: Scalars['String'];
  /** The &quot;mediaSizeSlug&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaSizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;mediaType&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaType?: Maybe<Scalars['String']>;
  /** The &quot;mediaUrl&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaUrl?: Maybe<Scalars['String']>;
  /** The &quot;mediaWidth&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  mediaWidth: Scalars['Float'];
  /** The &quot;metadata&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rel&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;useFeaturedImage&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  useFeaturedImage: Scalars['Boolean'];
  /** The &quot;verticalAlignment&quot; field on the &quot;CoreMediaTextAttributes&quot; block or block attributes */
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreMissing = EditorBlock & {
  __typename?: 'CoreMissing';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMissing Block Type */
  attributes?: Maybe<CoreMissingAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMissing Block Type */
export type CoreMissingAttributes = {
  __typename?: 'CoreMissingAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreMissingAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreMissingAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;originalContent&quot; field on the &quot;CoreMissingAttributes&quot; block or block attributes */
  originalContent?: Maybe<Scalars['String']>;
  /** The &quot;originalName&quot; field on the &quot;CoreMissingAttributes&quot; block or block attributes */
  originalName?: Maybe<Scalars['String']>;
  /** The &quot;originalUndelimitedContent&quot; field on the &quot;CoreMissingAttributes&quot; block or block attributes */
  originalUndelimitedContent?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreMore = EditorBlock & {
  __typename?: 'CoreMore';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMore Block Type */
  attributes?: Maybe<CoreMoreAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMore Block Type */
export type CoreMoreAttributes = {
  __typename?: 'CoreMoreAttributes';
  /** The &quot;customText&quot; field on the &quot;CoreMoreAttributes&quot; block or block attributes */
  customText: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreMoreAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreMoreAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;noTeaser&quot; field on the &quot;CoreMoreAttributes&quot; block or block attributes */
  noTeaser: Scalars['Boolean'];
};

/** A block used for editing the site */
export type CoreNavigation = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreNavigation';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigation Block Type */
  attributes?: Maybe<CoreNavigationAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigation Block Type */
export type CoreNavigationAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreNavigationAttributes';
  /** The &quot;align&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;ariaLabel&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  ariaLabel?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;customBackgroundColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  customBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayBackgroundColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayTextColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  customOverlayTextColor?: Maybe<Scalars['String']>;
  /** The &quot;customTextColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  customTextColor?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;hasIcon&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  hasIcon: Scalars['Boolean'];
  /** The &quot;icon&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  icon: Scalars['String'];
  /** The &quot;layout&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;maxNestingLevel&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  maxNestingLevel: Scalars['Float'];
  /** The &quot;metadata&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;overlay&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  overlay?: Maybe<Scalars['String']>;
  /** The &quot;overlayBackgroundColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;overlayMenu&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  overlayMenu: Scalars['String'];
  /** The &quot;overlayTextColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  overlayTextColor?: Maybe<Scalars['String']>;
  /** The &quot;ref&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  ref?: Maybe<Scalars['Float']>;
  /** The &quot;rgbBackgroundColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;rgbTextColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  rgbTextColor?: Maybe<Scalars['String']>;
  /** The &quot;showSubmenuIcon&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  showSubmenuIcon: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;submenuVisibility&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  submenuVisibility: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;__unstableLocation&quot; field on the &quot;CoreNavigationAttributes&quot; block or block attributes */
  unstableLocation?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNavigationLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreNavigationLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigationLink Block Type */
  attributes?: Maybe<CoreNavigationLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigationLink Block Type */
export type CoreNavigationLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreNavigationLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;description&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  description?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isTopLevelLink&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  isTopLevelLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;kind&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  kind?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opensInNewTab&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  opensInNewTab: Scalars['Boolean'];
  /** The &quot;rel&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  type?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreNavigationLinkAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNavigationOverlayClose = EditorBlock & {
  __typename?: 'CoreNavigationOverlayClose';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigationOverlayClose Block Type */
  attributes?: Maybe<CoreNavigationOverlayCloseAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigationOverlayClose Block Type */
export type CoreNavigationOverlayCloseAttributes = {
  __typename?: 'CoreNavigationOverlayCloseAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayMode&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  displayMode: Scalars['String'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;text&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  text?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreNavigationOverlayCloseAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNavigationSubmenu = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreNavigationSubmenu';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigationSubmenu Block Type */
  attributes?: Maybe<CoreNavigationSubmenuAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigationSubmenu Block Type */
export type CoreNavigationSubmenuAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreNavigationSubmenuAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;description&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  description?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isParentSubmenu&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  isParentSubmenu: Scalars['Boolean'];
  /** The &quot;isTopLevelItem&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  isTopLevelItem?: Maybe<Scalars['Boolean']>;
  /** The &quot;kind&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  kind?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opensInNewTab&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  opensInNewTab: Scalars['Boolean'];
  /** The &quot;rel&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  type?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreNavigationSubmenuAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNextpage = EditorBlock & {
  __typename?: 'CoreNextpage';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNextpage Block Type */
  attributes?: Maybe<CoreNextpageAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNextpage Block Type */
export type CoreNextpageAttributes = {
  __typename?: 'CoreNextpageAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreNextpageAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreNextpageAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CorePageList = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePageList';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePageList Block Type */
  attributes?: Maybe<CorePageListAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePageList Block Type */
export type CorePageListAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePageListAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;parentPageID&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  parentPageID: Scalars['Int'];
  /** The &quot;style&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePageListAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePageListItem = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePageListItem';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePageListItem Block Type */
  attributes?: Maybe<CorePageListItemAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePageListItem Block Type */
export type CorePageListItemAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePageListItemAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;hasChildren&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  hasChildren?: Maybe<Scalars['Boolean']>;
  /** The &quot;id&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;label&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;link&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  link?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CorePageListItemAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreParagraph = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreParagraph';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreParagraph Block Type */
  attributes?: Maybe<CoreParagraphAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreParagraph Block Type */
export type CoreParagraphAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreParagraphAttributes';
  /** The &quot;align&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;direction&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  direction?: Maybe<Scalars['String']>;
  /** The &quot;dropCap&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  dropCap: Scalars['Boolean'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreParagraphAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePattern = EditorBlock & {
  __typename?: 'CorePattern';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePattern Block Type */
  attributes?: Maybe<CorePatternAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePattern Block Type */
export type CorePatternAttributes = {
  __typename?: 'CorePatternAttributes';
  /** The &quot;className&quot; field on the &quot;CorePatternAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePatternAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePatternAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;slug&quot; field on the &quot;CorePatternAttributes&quot; block or block attributes */
  slug?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CorePatternAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CorePlaylist = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePlaylist';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePlaylist Block Type */
  attributes?: Maybe<CorePlaylistAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePlaylist Block Type */
export type CorePlaylistAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePlaylistAttributes';
  /** The &quot;align&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;order&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  order: Scalars['String'];
  /** The &quot;showArtists&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  showArtists: Scalars['Boolean'];
  /** The &quot;showImages&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  showImages: Scalars['Boolean'];
  /** The &quot;showNumbers&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  showNumbers: Scalars['Boolean'];
  /** The &quot;showPlayButtonArtwork&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  showPlayButtonArtwork: Scalars['Boolean'];
  /** The &quot;showTrackLength&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  showTrackLength: Scalars['Boolean'];
  /** The &quot;showTracklist&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  showTracklist: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  type: Scalars['String'];
  /** The &quot;waveformBackgroundColor&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  waveformBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;waveformBackgroundGradient&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  waveformBackgroundGradient?: Maybe<Scalars['String']>;
  /** The &quot;waveformColor&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  waveformColor?: Maybe<Scalars['String']>;
  /** The &quot;waveformGradient&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  waveformGradient?: Maybe<Scalars['String']>;
  /** The &quot;waveformStyle&quot; field on the &quot;CorePlaylistAttributes&quot; block or block attributes */
  waveformStyle: Scalars['String'];
};

/** A block used for editing the site */
export type CorePlaylistTrack = EditorBlock & {
  __typename?: 'CorePlaylistTrack';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePlaylistTrack Block Type */
  attributes?: Maybe<CorePlaylistTrackAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePlaylistTrack Block Type */
export type CorePlaylistTrackAttributes = {
  __typename?: 'CorePlaylistTrackAttributes';
  /** The &quot;album&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  album?: Maybe<Scalars['String']>;
  /** The &quot;artist&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  artist?: Maybe<Scalars['String']>;
  /** The &quot;blob&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  blob?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;image&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  image?: Maybe<Scalars['String']>;
  /** The &quot;imageAlt&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  imageAlt?: Maybe<Scalars['String']>;
  /** The &quot;length&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  length?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;src&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CorePlaylistTrackAttributes&quot; block or block attributes */
  type: Scalars['String'];
};

/** A block used for editing the site */
export type CorePostAuthor = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostAuthor';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostAuthor Block Type */
  attributes?: Maybe<CorePostAuthorAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostAuthor Block Type */
export type CorePostAuthorAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostAuthorAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;avatarSize&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  avatarSize: Scalars['Float'];
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;byline&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  byline?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;linkTarget&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showAvatar&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  showAvatar: Scalars['Boolean'];
  /** The &quot;showBio&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  showBio?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostAuthorAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostAuthorBiography = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostAuthorBiography';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostAuthorBiography Block Type */
  attributes?: Maybe<CorePostAuthorBiographyAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostAuthorBiography Block Type */
export type CorePostAuthorBiographyAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostAuthorBiographyAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostAuthorBiographyAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostAuthorName = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostAuthorName';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostAuthorName Block Type */
  attributes?: Maybe<CorePostAuthorNameAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostAuthorName Block Type */
export type CorePostAuthorNameAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostAuthorNameAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;linkTarget&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostAuthorNameAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostComments = EditorBlock & {
  __typename?: 'CorePostComments';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostComments Block Type */
  attributes?: Maybe<CorePostCommentsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostComments Block Type */
export type CorePostCommentsAttributes = {
  __typename?: 'CorePostCommentsAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostCommentsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostCommentsCount = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostCommentsCount';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostCommentsCount Block Type */
  attributes?: Maybe<CorePostCommentsCountAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostCommentsCount Block Type */
export type CorePostCommentsCountAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostCommentsCountAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostCommentsCountAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostCommentsForm = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostCommentsForm';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostCommentsForm Block Type */
  attributes?: Maybe<CorePostCommentsFormAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostCommentsForm Block Type */
export type CorePostCommentsFormAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostCommentsFormAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostCommentsFormAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostCommentsLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostCommentsLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostCommentsLink Block Type */
  attributes?: Maybe<CorePostCommentsLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostCommentsLink Block Type */
export type CorePostCommentsLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostCommentsLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostCommentsLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CorePostContent = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostContent';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostContent Block Type */
  attributes?: Maybe<CorePostContentAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostContent Block Type */
export type CorePostContentAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostContentAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CorePostContentAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostDate = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostDate';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostDate Block Type */
  attributes?: Maybe<CorePostDateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostDate Block Type */
export type CorePostDateAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostDateAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;datetime&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  datetime?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;format&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  format?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;lock&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostDateAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostExcerpt = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostExcerpt';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostExcerpt Block Type */
  attributes?: Maybe<CorePostExcerptAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostExcerpt Block Type */
export type CorePostExcerptAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostExcerptAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;excerptLength&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  excerptLength: Scalars['Float'];
  /** The &quot;fontFamily&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;moreText&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  moreText?: Maybe<Scalars['String']>;
  /** The &quot;showMoreOnNewLine&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  showMoreOnNewLine: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostExcerptAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostFeaturedImage = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostFeaturedImage';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostFeaturedImage Block Type */
  attributes?: Maybe<CorePostFeaturedImageAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostFeaturedImage Block Type */
export type CorePostFeaturedImageAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostFeaturedImageAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;aspectRatio&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  aspectRatio?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;customGradient&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  customGradient?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayColor&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** The &quot;dimRatio&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  dimRatio: Scalars['Float'];
  /** The &quot;gradient&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;height&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  height?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;linkTarget&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;overlayColor&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  overlayColor?: Maybe<Scalars['String']>;
  /** The &quot;rel&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  rel: Scalars['String'];
  /** The &quot;scale&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  scale: Scalars['String'];
  /** The &quot;sizeSlug&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  sizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;useFirstImageFromPost&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  useFirstImageFromPost: Scalars['Boolean'];
  /** The &quot;width&quot; field on the &quot;CorePostFeaturedImageAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostNavigationLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostNavigationLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostNavigationLink Block Type */
  attributes?: Maybe<CorePostNavigationLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostNavigationLink Block Type */
export type CorePostNavigationLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostNavigationLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;arrow&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  arrow: Scalars['String'];
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;linkLabel&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  linkLabel: Scalars['Boolean'];
  /** The &quot;lock&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showTitle&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  showTitle: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;taxonomy&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  taxonomy: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CorePostNavigationLinkAttributes&quot; block or block attributes */
  type: Scalars['String'];
};

/** A block used for editing the site */
export type CorePostTemplate = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostTemplate';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTemplate Block Type */
  attributes?: Maybe<CorePostTemplateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostTemplate Block Type */
export type CorePostTemplateAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostTemplateAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTemplateAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostTerms = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostTerms';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTerms Block Type */
  attributes?: Maybe<CorePostTermsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** Prefix to display before the post terms */
  prefix?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** Suffix to display after the post terms */
  suffix?: Maybe<Scalars['String']>;
  /** Connection between the CorePostTerms type and the Taxonomy type */
  taxonomy?: Maybe<CorePostTermsToTaxonomyConnectionEdge>;
  /** Connection between the CorePostTerms type and the TermNode type */
  terms?: Maybe<CorePostTermsToTermNodeConnection>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};


/** A block used for editing the site */
export type CorePostTermsTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Attributes of the CorePostTerms Block Type */
export type CorePostTermsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostTermsAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;prefix&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  prefix: Scalars['String'];
  /** The &quot;separator&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  separator: Scalars['String'];
  /** The &quot;style&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;suffix&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  suffix: Scalars['String'];
  /** The &quot;term&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  term?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTermsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** Connection between the CorePostTerms type and the Taxonomy type */
export type CorePostTermsToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'CorePostTermsToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** Connection between the CorePostTerms type and the TermNode type */
export type CorePostTermsToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'CorePostTermsToTermNodeConnection';
  /** Edges for the CorePostTermsToTermNodeConnection connection */
  edges: Array<CorePostTermsToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: CorePostTermsToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CorePostTermsToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'CorePostTermsToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Pagination metadata specific to &quot;CorePostTermsToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of CorePostTermsToTermNodeConnection Nodes. */
export type CorePostTermsToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'CorePostTermsToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostTimeToRead = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePostTimeToRead';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTimeToRead Block Type */
  attributes?: Maybe<CorePostTimeToReadAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostTimeToRead Block Type */
export type CorePostTimeToReadAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostTimeToReadAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;averageReadingSpeed&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  averageReadingSpeed: Scalars['Float'];
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayAsRange&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  displayAsRange: Scalars['Boolean'];
  /** The &quot;displayMode&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  displayMode: Scalars['String'];
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTimeToReadAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostTitle = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostTitle';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTitle Block Type */
  attributes?: Maybe<CorePostTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostTitle Block Type */
export type CorePostTitleAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePostTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;level&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  levelOptions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;linkTarget&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;rel&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  rel: Scalars['String'];
  /** The &quot;style&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTitleAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePreformatted = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePreformatted';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePreformatted Block Type */
  attributes?: Maybe<CorePreformattedAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePreformatted Block Type */
export type CorePreformattedAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePreformattedAttributes';
  /** The &quot;anchor&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePreformattedAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePullquote = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CorePullquote';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePullquote Block Type */
  attributes?: Maybe<CorePullquoteAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePullquote Block Type */
export type CorePullquoteAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePullquoteAttributes';
  /** The &quot;align&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;citation&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  citation?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;value&quot; field on the &quot;CorePullquoteAttributes&quot; block or block attributes */
  value?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQuery = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQuery';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQuery Block Type */
  attributes?: Maybe<CoreQueryAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The resolved posts based on query block attributes. */
  resolvedPosts?: Maybe<Array<Maybe<ResolvedPost>>>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQuery Block Type */
export type CoreQueryAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;enhancedPagination&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  enhancedPagination: Scalars['Boolean'];
  /** The &quot;layout&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;namespace&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  namespace?: Maybe<Scalars['String']>;
  /** The &quot;query&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  query: Scalars['BlockAttributesObject'];
  /** The &quot;queryId&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  queryId?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreQueryAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
};

/** A block used for editing the site */
export type CoreQueryNoResults = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryNoResults';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryNoResults Block Type */
  attributes?: Maybe<CoreQueryNoResultsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryNoResults Block Type */
export type CoreQueryNoResultsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryNoResultsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryNoResultsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQueryPagination = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPagination';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPagination Block Type */
  attributes?: Maybe<CoreQueryPaginationAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPagination Block Type */
export type CoreQueryPaginationAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryPaginationAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;paginationArrow&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  paginationArrow: Scalars['String'];
  /** The &quot;showLabel&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  showLabel: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryPaginationAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQueryPaginationNext = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPaginationNext';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPaginationNext Block Type */
  attributes?: Maybe<CoreQueryPaginationNextAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPaginationNext Block Type */
export type CoreQueryPaginationNextAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryPaginationNextAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationNextAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreQueryPaginationNumbers = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPaginationNumbers';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPaginationNumbers Block Type */
  attributes?: Maybe<CoreQueryPaginationNumbersAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPaginationNumbers Block Type */
export type CoreQueryPaginationNumbersAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryPaginationNumbersAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;midSize&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  midSize: Scalars['Float'];
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationNumbersAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreQueryPaginationPrevious = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPaginationPrevious';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPaginationPrevious Block Type */
  attributes?: Maybe<CoreQueryPaginationPreviousAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPaginationPrevious Block Type */
export type CoreQueryPaginationPreviousAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryPaginationPreviousAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationPreviousAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreQueryTitle = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreQueryTitle';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryTitle Block Type */
  attributes?: Maybe<CoreQueryTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryTitle Block Type */
export type CoreQueryTitleAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  levelOptions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showPrefix&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  showPrefix: Scalars['Boolean'];
  /** The &quot;showSearchTerm&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  showSearchTerm: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreQueryTitleAttributes&quot; block or block attributes */
  type?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQueryTotal = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreQueryTotal';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryTotal Block Type */
  attributes?: Maybe<CoreQueryTotalAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryTotal Block Type */
export type CoreQueryTotalAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQueryTotalAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayType&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  displayType: Scalars['String'];
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryTotalAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQuote = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQuote';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQuote Block Type */
  attributes?: Maybe<CoreQuoteAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQuote Block Type */
export type CoreQuoteAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQuoteAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;citation&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  citation?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;value&quot; field on the &quot;CoreQuoteAttributes&quot; block or block attributes */
  value: Scalars['String'];
};

/** A block used for editing the site */
export type CoreReadMore = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreReadMore';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreReadMore Block Type */
  attributes?: Maybe<CoreReadMoreAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreReadMore Block Type */
export type CoreReadMoreAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreReadMoreAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreReadMoreAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreRss = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreRss';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreRss Block Type */
  attributes?: Maybe<CoreRssAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreRss Block Type */
export type CoreRssAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreRssAttributes';
  /** The &quot;align&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;blockLayout&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  blockLayout: Scalars['String'];
  /** The &quot;borderColor&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  columns: Scalars['Float'];
  /** The &quot;displayAuthor&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  displayAuthor: Scalars['Boolean'];
  /** The &quot;displayDate&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  displayDate: Scalars['Boolean'];
  /** The &quot;displayExcerpt&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  displayExcerpt: Scalars['Boolean'];
  /** The &quot;excerptLength&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  excerptLength: Scalars['Float'];
  /** The &quot;feedURL&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  feedURL: Scalars['String'];
  /** The &quot;gradient&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;itemsToShow&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  itemsToShow: Scalars['Float'];
  /** The &quot;lock&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;openInNewTab&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  openInNewTab: Scalars['Boolean'];
  /** The &quot;rel&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreRssAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSearch = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSearch';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSearch Block Type */
  attributes?: Maybe<CoreSearchAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSearch Block Type */
export type CoreSearchAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSearchAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;buttonPosition&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  buttonPosition: Scalars['String'];
  /** The &quot;buttonText&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  buttonText?: Maybe<Scalars['String']>;
  /** The &quot;buttonUseIcon&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  buttonUseIcon: Scalars['Boolean'];
  /** The &quot;className&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  placeholder: Scalars['String'];
  /** The &quot;query&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  query: Scalars['BlockAttributesObject'];
  /** The &quot;showLabel&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  showLabel: Scalars['Boolean'];
  /** The &quot;style&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;textColor&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['Float']>;
  /** The &quot;widthUnit&quot; field on the &quot;CoreSearchAttributes&quot; block or block attributes */
  widthUnit?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSeparator = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSeparator';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSeparator Block Type */
  attributes?: Maybe<CoreSeparatorAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSeparator Block Type */
export type CoreSeparatorAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSeparatorAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opacity&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  opacity: Scalars['String'];
  /** The &quot;style&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreSeparatorAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
};

/** A block used for editing the site */
export type CoreShortcode = EditorBlock & {
  __typename?: 'CoreShortcode';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreShortcode Block Type */
  attributes?: Maybe<CoreShortcodeAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreShortcode Block Type */
export type CoreShortcodeAttributes = {
  __typename?: 'CoreShortcodeAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreShortcodeAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreShortcodeAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;text&quot; field on the &quot;CoreShortcodeAttributes&quot; block or block attributes */
  text?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSiteLogo = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSiteLogo';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSiteLogo Block Type */
  attributes?: Maybe<CoreSiteLogoAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSiteLogo Block Type */
export type CoreSiteLogoAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSiteLogoAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;linkTarget&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;shouldSyncIcon&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  shouldSyncIcon?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CoreSiteLogoAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreSiteTagline = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSiteTagline';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSiteTagline Block Type */
  attributes?: Maybe<CoreSiteTaglineAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSiteTagline Block Type */
export type CoreSiteTaglineAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSiteTaglineAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  levelOptions: Scalars['BlockAttributesArray'];
  /** The &quot;lock&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreSiteTaglineAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSiteTitle = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSiteTitle';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSiteTitle Block Type */
  attributes?: Maybe<CoreSiteTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSiteTitle Block Type */
export type CoreSiteTitleAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSiteTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;level&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  levelOptions: Scalars['BlockAttributesArray'];
  /** The &quot;linkTarget&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  linkTarget: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreSiteTitleAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSocialLink = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSocialLink';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSocialLink Block Type */
  attributes?: Maybe<CoreSocialLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSocialLink Block Type */
export type CoreSocialLinkAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSocialLinkAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rel&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;service&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  service?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;url&quot; field on the &quot;CoreSocialLinkAttributes&quot; block or block attributes */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSocialLinks = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreSocialLinks';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSocialLinks Block Type */
  attributes?: Maybe<CoreSocialLinksAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSocialLinks Block Type */
export type CoreSocialLinksAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSocialLinksAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;customIconBackgroundColor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  customIconBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;customIconColor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  customIconColor?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;iconBackgroundColor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  iconBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;iconBackgroundColorValue&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  iconBackgroundColorValue?: Maybe<Scalars['String']>;
  /** The &quot;iconColor&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  iconColor?: Maybe<Scalars['String']>;
  /** The &quot;iconColorValue&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  iconColorValue?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;openInNewTab&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  openInNewTab: Scalars['Boolean'];
  /** The &quot;showLabels&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  showLabels: Scalars['Boolean'];
  /** The &quot;size&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  size?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreSocialLinksAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreSpacer = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSpacer';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSpacer Block Type */
  attributes?: Maybe<CoreSpacerAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSpacer Block Type */
export type CoreSpacerAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSpacerAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;height&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  height?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CoreSpacerAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTabList = EditorBlock & {
  __typename?: 'CoreTabList';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTabList Block Type */
  attributes?: Maybe<CoreTabListAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTabList Block Type */
export type CoreTabListAttributes = {
  __typename?: 'CoreTabListAttributes';
  /** The &quot;ariaLabel&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  ariaLabel?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tabs&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  tabs: Array<Maybe<CoreTabListAttributesTabs>>;
  /** The &quot;textColor&quot; field on the &quot;CoreTabListAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** The &quot;CoreTabListAttributesTabs&quot; field on the &quot;CoreTabListAttributes&quot; block attribute field */
export type CoreTabListAttributesTabs = {
  __typename?: 'CoreTabListAttributesTabs';
  /** The &quot;label&quot; field on the &quot;CoreTabListAttributesTabs&quot; block attribute field */
  label?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTabPanel = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTabPanel';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTabPanel Block Type */
  attributes?: Maybe<CoreTabPanelAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTabPanel Block Type */
export type CoreTabPanelAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTabPanelAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  label: Scalars['String'];
  /** The &quot;layout&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTabPanelAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTabPanels = EditorBlock & {
  __typename?: 'CoreTabPanels';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTabPanels Block Type */
  attributes?: Maybe<CoreTabPanelsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTabPanels Block Type */
export type CoreTabPanelsAttributes = {
  __typename?: 'CoreTabPanelsAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTabPanelsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTable = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTable';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTable Block Type */
  attributes?: Maybe<CoreTableAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTable Block Type */
export type CoreTableAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTableAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;body&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  body: Array<Maybe<CoreTableAttributesBody>>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;foot&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  foot: Array<Maybe<CoreTableAttributesFoot>>;
  /** The &quot;gradient&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;hasFixedLayout&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  hasFixedLayout: Scalars['Boolean'];
  /** The &quot;head&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  head: Array<Maybe<CoreTableAttributesHead>>;
  /** The &quot;lock&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTableAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** The &quot;CoreTableAttributesBody&quot; field on the &quot;CoreTableAttributes&quot; block attribute field */
export type CoreTableAttributesBody = {
  __typename?: 'CoreTableAttributesBody';
  /** The &quot;cells&quot; field on the &quot;CoreTableAttributesBody&quot; block attribute field */
  cells: Array<Maybe<CoreTableAttributesBodyCells>>;
};

/** The &quot;CoreTableAttributesBodyCells&quot; field on the &quot;CoreTableAttributesBody&quot; block attribute field */
export type CoreTableAttributesBodyCells = {
  __typename?: 'CoreTableAttributesBodyCells';
  /** The &quot;align&quot; field on the &quot;CoreTableAttributesBodyCells&quot; block attribute field */
  align?: Maybe<Scalars['String']>;
  /** The &quot;colspan&quot; field on the &quot;CoreTableAttributesBodyCells&quot; block attribute field */
  colspan?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreTableAttributesBodyCells&quot; block attribute field */
  content?: Maybe<Scalars['String']>;
  /** The &quot;rowspan&quot; field on the &quot;CoreTableAttributesBodyCells&quot; block attribute field */
  rowspan?: Maybe<Scalars['String']>;
  /** The &quot;scope&quot; field on the &quot;CoreTableAttributesBodyCells&quot; block attribute field */
  scope?: Maybe<Scalars['String']>;
  /** The &quot;tag&quot; field on the &quot;CoreTableAttributesBodyCells&quot; block attribute field */
  tag: Scalars['String'];
};

/** The &quot;CoreTableAttributesFoot&quot; field on the &quot;CoreTableAttributes&quot; block attribute field */
export type CoreTableAttributesFoot = {
  __typename?: 'CoreTableAttributesFoot';
  /** The &quot;cells&quot; field on the &quot;CoreTableAttributesFoot&quot; block attribute field */
  cells: Array<Maybe<CoreTableAttributesFootCells>>;
};

/** The &quot;CoreTableAttributesFootCells&quot; field on the &quot;CoreTableAttributesFoot&quot; block attribute field */
export type CoreTableAttributesFootCells = {
  __typename?: 'CoreTableAttributesFootCells';
  /** The &quot;align&quot; field on the &quot;CoreTableAttributesFootCells&quot; block attribute field */
  align?: Maybe<Scalars['String']>;
  /** The &quot;colspan&quot; field on the &quot;CoreTableAttributesFootCells&quot; block attribute field */
  colspan?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreTableAttributesFootCells&quot; block attribute field */
  content?: Maybe<Scalars['String']>;
  /** The &quot;rowspan&quot; field on the &quot;CoreTableAttributesFootCells&quot; block attribute field */
  rowspan?: Maybe<Scalars['String']>;
  /** The &quot;scope&quot; field on the &quot;CoreTableAttributesFootCells&quot; block attribute field */
  scope?: Maybe<Scalars['String']>;
  /** The &quot;tag&quot; field on the &quot;CoreTableAttributesFootCells&quot; block attribute field */
  tag: Scalars['String'];
};

/** The &quot;CoreTableAttributesHead&quot; field on the &quot;CoreTableAttributes&quot; block attribute field */
export type CoreTableAttributesHead = {
  __typename?: 'CoreTableAttributesHead';
  /** The &quot;cells&quot; field on the &quot;CoreTableAttributesHead&quot; block attribute field */
  cells: Array<Maybe<CoreTableAttributesHeadCells>>;
};

/** The &quot;CoreTableAttributesHeadCells&quot; field on the &quot;CoreTableAttributesHead&quot; block attribute field */
export type CoreTableAttributesHeadCells = {
  __typename?: 'CoreTableAttributesHeadCells';
  /** The &quot;align&quot; field on the &quot;CoreTableAttributesHeadCells&quot; block attribute field */
  align?: Maybe<Scalars['String']>;
  /** The &quot;colspan&quot; field on the &quot;CoreTableAttributesHeadCells&quot; block attribute field */
  colspan?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreTableAttributesHeadCells&quot; block attribute field */
  content?: Maybe<Scalars['String']>;
  /** The &quot;rowspan&quot; field on the &quot;CoreTableAttributesHeadCells&quot; block attribute field */
  rowspan?: Maybe<Scalars['String']>;
  /** The &quot;scope&quot; field on the &quot;CoreTableAttributesHeadCells&quot; block attribute field */
  scope?: Maybe<Scalars['String']>;
  /** The &quot;tag&quot; field on the &quot;CoreTableAttributesHeadCells&quot; block attribute field */
  tag: Scalars['String'];
};

/** A block used for editing the site */
export type CoreTabs = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTabs';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTabs Block Type */
  attributes?: Maybe<CoreTabsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTabs Block Type */
export type CoreTabsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTabsAttributes';
  /** The &quot;activeTabIndex&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  activeTabIndex: Scalars['Float'];
  /** The &quot;align&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;editorActiveTabIndex&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  editorActiveTabIndex?: Maybe<Scalars['Float']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTabsAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTagCloud = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTagCloud';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTagCloud Block Type */
  attributes?: Maybe<CoreTagCloudAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTagCloud Block Type */
export type CoreTagCloudAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTagCloudAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;largestFontSize&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  largestFontSize: Scalars['String'];
  /** The &quot;lock&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;numberOfTags&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  numberOfTags: Scalars['Float'];
  /** The &quot;showTagCounts&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  showTagCounts: Scalars['Boolean'];
  /** The &quot;smallestFontSize&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  smallestFontSize: Scalars['String'];
  /** The &quot;style&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;taxonomy&quot; field on the &quot;CoreTagCloudAttributes&quot; block or block attributes */
  taxonomy: Scalars['String'];
};

/** A block used for editing the site */
export type CoreTemplatePart = EditorBlock & {
  __typename?: 'CoreTemplatePart';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTemplatePart Block Type */
  attributes?: Maybe<CoreTemplatePartAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTemplatePart Block Type */
export type CoreTemplatePartAttributes = {
  __typename?: 'CoreTemplatePartAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;area&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  area?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;slug&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  slug?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  tagName?: Maybe<Scalars['String']>;
  /** The &quot;theme&quot; field on the &quot;CoreTemplatePartAttributes&quot; block or block attributes */
  theme?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTermCount = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTermCount';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTermCount Block Type */
  attributes?: Maybe<CoreTermCountAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTermCount Block Type */
export type CoreTermCountAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTermCountAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;bracketType&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  bracketType: Scalars['String'];
  /** The &quot;className&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTermCountAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTermDescription = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTermDescription';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTermDescription Block Type */
  attributes?: Maybe<CoreTermDescriptionAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTermDescription Block Type */
export type CoreTermDescriptionAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTermDescriptionAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTermDescriptionAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTermName = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTermName';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTermName Block Type */
  attributes?: Maybe<CoreTermNameAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTermName Block Type */
export type CoreTermNameAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTermNameAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  isLink: Scalars['Boolean'];
  /** The &quot;level&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  level: Scalars['Float'];
  /** The &quot;levelOptions&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  levelOptions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;lock&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTermNameAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTermTemplate = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTermTemplate';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTermTemplate Block Type */
  attributes?: Maybe<CoreTermTemplateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTermTemplate Block Type */
export type CoreTermTemplateAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTermTemplateAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTermTemplateAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTermsQuery = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreTermsQuery';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTermsQuery Block Type */
  attributes?: Maybe<CoreTermsQueryAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTermsQuery Block Type */
export type CoreTermsQueryAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTermsQueryAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  tagName: Scalars['String'];
  /** The &quot;termQuery&quot; field on the &quot;CoreTermsQueryAttributes&quot; block or block attributes */
  termQuery: Scalars['BlockAttributesObject'];
};

/** A block used for editing the site */
export type CoreTextColumns = EditorBlock & {
  __typename?: 'CoreTextColumns';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTextColumns Block Type */
  attributes?: Maybe<CoreTextColumnsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTextColumns Block Type */
export type CoreTextColumnsAttributes = {
  __typename?: 'CoreTextColumnsAttributes';
  /** The &quot;className&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  columns: Scalars['Float'];
  /** The &quot;content&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  content: Array<Maybe<CoreTextColumnsAttributesContent>>;
  /** The &quot;lock&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CoreTextColumnsAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['String']>;
};

/** The &quot;CoreTextColumnsAttributesContent&quot; field on the &quot;CoreTextColumnsAttributes&quot; block attribute field */
export type CoreTextColumnsAttributesContent = {
  __typename?: 'CoreTextColumnsAttributesContent';
  /** The &quot;children&quot; field on the &quot;CoreTextColumnsAttributesContent&quot; block attribute field */
  children?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreVerse = BlockWithSupportsAnchor & EditorBlock & {
  __typename?: 'CoreVerse';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreVerse Block Type */
  attributes?: Maybe<CoreVerseAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreVerse Block Type */
export type CoreVerseAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreVerseAttributes';
  /** The &quot;anchor&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreVerseAttributes&quot; block or block attributes */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreVideo = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreVideo';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreVideo Block Type */
  attributes?: Maybe<CoreVideoAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreVideo Block Type */
export type CoreVideoAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreVideoAttributes';
  /** The &quot;align&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  align?: Maybe<Scalars['String']>;
  /** The &quot;anchor&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;autoplay&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** The &quot;blob&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  blob?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;controls&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  controls: Scalars['Boolean'];
  /** The &quot;height&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  height?: Maybe<Scalars['Float']>;
  /** The &quot;id&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;loop&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  loop?: Maybe<Scalars['Boolean']>;
  /** The &quot;metadata&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;muted&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  muted?: Maybe<Scalars['Boolean']>;
  /** The &quot;playsInline&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  playsInline?: Maybe<Scalars['Boolean']>;
  /** The &quot;poster&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  poster?: Maybe<Scalars['String']>;
  /** The &quot;preload&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  preload: Scalars['String'];
  /** The &quot;src&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tracks&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  tracks: Array<Maybe<Scalars['BlockAttributesObject']>>;
  /** The &quot;width&quot; field on the &quot;CoreVideoAttributes&quot; block or block attributes */
  width?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreWidgetGroup = EditorBlock & {
  __typename?: 'CoreWidgetGroup';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreWidgetGroup Block Type */
  attributes?: Maybe<CoreWidgetGroupAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreWidgetGroup Block Type */
export type CoreWidgetGroupAttributes = {
  __typename?: 'CoreWidgetGroupAttributes';
  /** The &quot;className&quot; field on the &quot;CoreWidgetGroupAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreWidgetGroupAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;CoreWidgetGroupAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreWidgetGroupAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreWidgetGroupAttributes&quot; block or block attributes */
  title?: Maybe<Scalars['String']>;
};

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The database ID of the category that should be set as the parent. This field cannot be used in conjunction with parentId */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the category that should be set as the parent. This field cannot be used in conjunction with parentDatabaseId */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createCollaborateurice mutation. */
export type CreateCollaborateuriceInput = {
  /** The slug that the people will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the people object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the people object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createCollaborateurice mutation. */
export type CreateCollaborateuricePayload = {
  __typename?: 'CreateCollaborateuricePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created people */
  collaborateurice?: Maybe<Collaborateurice>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Set connections between the post and collaborateurices */
  collaborateurices?: InputMaybe<PostCollaborateuricesInput>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** The template assigned to the node */
export type CustomTemplate = ContentTemplate & {
  __typename?: 'CustomTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** An object that has a unique numeric identifier in the database. Provides consistent access to the database ID across different object types. */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Hour of the day (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']>;
  /** Minute of the hour (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** Second of the minute (from 0 to 59) */
  second?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>;
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The deleted term object */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteCollaborateurice mutation. */
export type DeleteCollaborateuriceInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the collaborateurice to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCollaborateurice mutation. */
export type DeleteCollaborateuricePayload = {
  __typename?: 'DeleteCollaborateuricePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted term object */
  collaborateurice?: Maybe<Collaborateurice>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted comment object */
  comment?: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted term object */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<Post>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted term object */
  tag?: Maybe<Tag>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<User>;
};

/** The discussion setting type */
export type DiscussionSettings = Node & {
  __typename?: 'DiscussionSettings';
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the settings group. */
  id: Scalars['ID'];
};

/** Represents a connection between two objects. Contains both the related object (node) and metadata about the relationship (cursor). */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** Blocks that can be edited to create content and layouts */
export type EditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** A script or stylesheet resource that should be loaded by the client. Contains information about the resource&#039;s location, dependencies, and loading behavior. */
export type EnqueuedAsset = {
  /** The inline code to be run after the asset is loaded. */
  after?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args?: Maybe<Scalars['Boolean']>;
  /** The inline code to be run before the asset is loaded. */
  before?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional?: Maybe<Scalars['String']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedAsset>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra?: Maybe<Scalars['String']>;
  /** The loading group to which this asset belongs. */
  group?: Maybe<Scalars['Int']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedScript';
  /** The inline code to be run after the asset is loaded. */
  after?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args?: Maybe<Scalars['Boolean']>;
  /** The inline code to be run before the asset is loaded. */
  before?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional?: Maybe<Scalars['String']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra?: Maybe<Scalars['String']>;
  /** Extra data supplied to the enqueued script */
  extraData?: Maybe<Scalars['String']>;
  /** The loading group to which this asset belongs. */
  group?: Maybe<Scalars['Int']>;
  /** The location where this script should be loaded */
  groupLocation?: Maybe<ScriptLoadingGroupLocationEnum>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The global ID of the enqueued script */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The loading strategy to use on the script tag */
  strategy?: Maybe<ScriptLoadingStrategyEnum>;
  /** The version of the enqueued script */
  version?: Maybe<Scalars['String']>;
};

/** A paginated collection of EnqueuedScript Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>;
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedScriptConnectionPageInfo;
};

/** Represents a connection to a EnqueuedScript. Contains both the EnqueuedScript Node and metadata about the relationship. */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;EnqueuedScriptConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;EnqueuedScriptConnectionEdge&quot; Nodes. */
export type EnqueuedScriptConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedStylesheet';
  /** The inline code to be run after the asset is loaded. */
  after?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args?: Maybe<Scalars['Boolean']>;
  /** The inline code to be run before the asset is loaded. */
  before?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional?: Maybe<Scalars['String']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra?: Maybe<Scalars['String']>;
  /** The loading group to which this asset belongs. */
  group?: Maybe<Scalars['Int']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The global ID of the enqueued stylesheet */
  id: Scalars['ID'];
  /** Whether the enqueued style is RTL or not */
  isRtl?: Maybe<Scalars['Boolean']>;
  /** The media attribute to use for the link */
  media?: Maybe<Scalars['String']>;
  /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
  path?: Maybe<Scalars['String']>;
  /** The `rel` attribute to use for the link */
  rel?: Maybe<Scalars['String']>;
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** Optional suffix, used in combination with RTL */
  suffix?: Maybe<Scalars['String']>;
  /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
  title?: Maybe<Scalars['String']>;
  /** The version of the enqueued style */
  version?: Maybe<Scalars['String']>;
};

/** A paginated collection of EnqueuedStylesheet Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>;
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedStylesheetConnectionPageInfo;
};

/** Represents a connection to a EnqueuedStylesheet. Contains both the EnqueuedStylesheet Node and metadata about the relationship. */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;EnqueuedStylesheetConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;EnqueuedStylesheetConnectionEdge&quot; Nodes. */
export type EnqueuedStylesheetConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GeneralSettings = Node & {
  __typename?: 'GeneralSettings';
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  email?: Maybe<Scalars['String']>;
  /** The address at which visitors reach the site&#039;s front end. Can differ from the `url` field when the front end and the content management backend are served from different addresses, such as on headless or decoupled installs. */
  homeUrl?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the settings group. */
  id: Scalars['ID'];
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']>;
  /** The media item representing the site icon configured in site settings, used as the site&#039;s favicon and app icon. */
  siteIcon?: Maybe<GeneralSettingsToMediaItemConnectionEdge>;
  /** Site icon URL configured in site settings, used as the site&#039;s favicon and app icon. */
  siteIconUrl?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']>;
  /** Site title. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};


/** The general setting type */
export type GeneralSettingsSiteIconUrlArgs = {
  size?: InputMaybe<Scalars['Int']>;
};

/** Connection between the GeneralSettings type and the MediaItem type */
export type GeneralSettingsToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'GeneralSettingsToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** True when this item is set to be hidden from search engines (Yoast &gt; Advanced), ignoring site-wide indexing settings. */
  noindex?: Maybe<Scalars['Boolean']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique ID of the preview node */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; collections. Provides cursors and flags for navigating through sets of HierarchicalContentNodeToContentNodeAncestorsConnection Nodes. */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; collections. Provides cursors and flags for navigating through sets of HierarchicalContentNodeToContentNodeChildrenConnection Nodes. */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Content that can exist in a parent-child structure. Provides fields for navigating up (parent) and down (children) through the hierarchy. */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** The &quot;Infos&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Infos = AcfFieldGroup & AcfFieldGroupFields & Infos_Fields & {
  __typename?: 'Infos';
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Infos&quot; Field Group */
  author?: Maybe<Scalars['String']>;
  /** Field of the &quot;oembed&quot; Field Type added to the schema as part of the &quot;Infos&quot; Field Group */
  embed?: Maybe<Scalars['String']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** Field of the &quot;file&quot; Field Type added to the schema as part of the &quot;Infos&quot; Field Group */
  pdf?: Maybe<AcfMediaItemConnectionEdge>;
};

/** Interface representing fields of the ACF &quot;Infos&quot; Field Group */
export type Infos_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Infos&quot; Field Group */
  author?: Maybe<Scalars['String']>;
  /** Field of the &quot;oembed&quot; Field Type added to the schema as part of the &quot;Infos&quot; Field Group */
  embed?: Maybe<Scalars['String']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** Field of the &quot;file&quot; Field Type added to the schema as part of the &quot;Infos&quot; Field Group */
  pdf?: Maybe<AcfMediaItemConnectionEdge>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The path to the mediaItem relative to the uploads directory */
  filePath?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};


/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
  include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
};

/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItem = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & Node & NodeWithAuthor & NodeWithComments & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & {
  __typename?: 'MediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the MediaItem type and the Comment type */
  comments?: Maybe<MediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The filename of the mediaItem for the specified size (default size is full) */
  file?: Maybe<Scalars['String']>;
  /** The path to the original file relative to the uploads directory */
  filePath?: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  guid?: Maybe<Scalars['String']>;
  /** Whether the attachment object is password protected. */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the attachment object. */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * The unique numeric identifier for the content node.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** True when this item is set to be hidden from search engines (Yoast &gt; Advanced), ignoring site-wide indexing settings. */
  noindex?: Maybe<Scalars['Boolean']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The password for the attachment object. */
  password?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique ID of the preview node */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemCaptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaItemToCommentConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemDescriptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemFileArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemFilePathArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemFileSizeArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemSizesArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemSourceUrlArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemSrcSetArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A paginated collection of mediaItem Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>;
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemConnectionPageInfo;
};

/** Represents a connection to a mediaItem. Contains both the mediaItem Node and metadata about the relationship. */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected mediaItem Node */
  node: MediaItem;
};

/** Pagination metadata specific to &quot;MediaItemConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;MediaItemConnectionEdge&quot; Nodes. */
export type MediaItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific MediaItem. Specifies which unique attribute is used to find an exact MediaItem. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

/** Predefined image size variations. Represents the standard image dimensions available for media assets. */
export enum MediaItemSizeEnum {
  /** Large image preview suitable for detail views. (1024x1024) */
  Large = 'LARGE',
  /** Medium image preview typically suitable for listings and detail views. (300x300) */
  Medium = 'MEDIUM',
  /** Medium-to-large image preview suitable for listings and detail views. (768x0) */
  MediumLarge = 'MEDIUM_LARGE',
  /** Custom Image Size. (600x0) */
  Small = 'SMALL',
  /** Small image preview suitable for thumbnails and listings. (150x150) */
  Thumbnail = 'THUMBNAIL',
  /** Custom Image Size. (2400x0) */
  XLarge = 'X_LARGE',
  /** Custom Image Size. (1536x1536) */
  '1536X1536' = '_1536X1536',
  /** Custom Image Size. (2048x2048) */
  '2048X2048' = '_2048X2048'
}

/** Publication status for media items. Controls whether media is publicly accessible, private, or in another state. */
export enum MediaItemStatusEnum {
  /** Automatically created media that has not been finalized */
  AutoDraft = 'AUTO_DRAFT',
  /** Media that inherits its publication status from the parent content */
  Inherit = 'INHERIT',
  /** Media visible only to users with appropriate permissions */
  Private = 'PRIVATE',
  /** Media marked for deletion but still recoverable */
  Trash = 'TRASH'
}

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection & Connection & {
  __typename?: 'MediaItemToCommentConnection';
  /** Edges for the MediaItemToCommentConnection connection */
  edges: Array<MediaItemToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'MediaItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Pagination metadata specific to &quot;MediaItemToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of MediaItemToCommentConnection Nodes. */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MediaItemToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The path of the file for the referenced size (default size is full) */
  filePath?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

/** Collections of navigation links. Menus can be assigned to designated locations and used to build site navigation structures. */
export type Menu = DatabaseIdentifier & Node & {
  __typename?: 'Menu';
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique identifier of the nav menu object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId?: Maybe<Scalars['Int']>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /** Display name of the menu. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. */
  slug?: Maybe<Scalars['String']>;
};


/** Collections of navigation links. Menus can be assigned to designated locations and used to build site navigation structures. */
export type MenuMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** A paginated collection of Menu Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>;
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: MenuConnectionPageInfo;
};

/** Represents a connection to a Menu. Contains both the Menu Node and metadata about the relationship. */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Menu Node */
  node: Menu;
};

/** Pagination metadata specific to &quot;MenuConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;MenuConnectionEdge&quot; Nodes. */
export type MenuConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier & Node & {
  __typename?: 'MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the nav menu item object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path?: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** The uri of the resource the menu item links to */
  uri?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** A paginated collection of MenuItem Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>;
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemConnectionPageInfo;
};

/** Represents a connection to a MenuItem. Contains both the MenuItem Node and metadata about the relationship. */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItem Node */
  node: MenuItem;
};

/** Pagination metadata specific to &quot;MenuItemConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;MenuItemConnectionEdge&quot; Nodes. */
export type MenuItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Content that can be referenced by navigation menu items. Provides the essential fields needed to create links within navigation structures. */
export type MenuItemLinkable = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Represents a connection to a MenuItemLinkable. Contains both the MenuItemLinkable Node and metadata about the relationship. */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable;
};

/** Identifier types for retrieving a specific menu item. Determines whether to look up menu items by global ID or database ID. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Deprecated in favor of MenuItemLinkable Interface */
export type MenuItemObjectUnion = Category | Collaborateurice | Page | Post | Tag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge & MenuConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Menu;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges: Array<MenuItemToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Pagination metadata specific to &quot;MenuItemToMenuItemConnection&quot; collections. Provides cursors and flags for navigating through sets of MenuItemToMenuItemConnection Nodes. */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuItemToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge & MenuItemLinkableConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MenuItemLinkable;
};

/** Designated areas where navigation menus can be displayed. Represents the named regions in the interface where menus can be assigned. */
export enum MenuLocationEnum {
  /** Put the menu in the primary_navigation location */
  PrimaryNavigation = 'PRIMARY_NAVIGATION'
}

/** Identifier types for retrieving a specific navigation menu. Specifies which property (ID, name, location) is used to locate a particular menu. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG'
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  edges: Array<MenuToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Pagination metadata specific to &quot;MenuToMenuItemConnection&quot; collections. Provides cursors and flags for navigating through sets of MenuToMenuItemConnection Nodes. */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Media file type classification based on MIME standards. Used to identify and filter media items by their format and content type. */
export enum MimeTypeEnum {
  /** application/java mime type. */
  ApplicationJava = 'APPLICATION_JAVA',
  /** application/msword mime type. */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** application/octet-stream mime type. */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** application/onenote mime type. */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** application/oxps mime type. */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** application/pdf mime type. */
  ApplicationPdf = 'APPLICATION_PDF',
  /** application/rar mime type. */
  ApplicationRar = 'APPLICATION_RAR',
  /** application/rtf mime type. */
  ApplicationRtf = 'APPLICATION_RTF',
  /** application/ttaf+xml mime type. */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** application/vnd.apple.keynote mime type. */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** application/vnd.apple.numbers mime type. */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** application/vnd.apple.pages mime type. */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** application/vnd.ms-access mime type. */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** application/vnd.ms-excel mime type. */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint mime type. */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-project mime type. */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** application/vnd.ms-word.document.macroEnabled.12 mime type. */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** application/vnd.ms-word.template.macroEnabled.12 mime type. */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-write mime type. */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** application/vnd.ms-xpsdocument mime type. */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** application/vnd.oasis.opendocument.chart mime type. */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** application/vnd.oasis.opendocument.database mime type. */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** application/vnd.oasis.opendocument.formula mime type. */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** application/vnd.oasis.opendocument.graphics mime type. */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** application/vnd.oasis.opendocument.presentation mime type. */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** application/vnd.oasis.opendocument.spreadsheet mime type. */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** application/vnd.oasis.opendocument.text mime type. */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** application/wordperfect mime type. */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** application/x-7z-compressed mime type. */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** application/x-gzip mime type. */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** application/x-tar mime type. */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** application/zip mime type. */
  ApplicationZip = 'APPLICATION_ZIP',
  /** audio/aac mime type. */
  AudioAac = 'AUDIO_AAC',
  /** audio/flac mime type. */
  AudioFlac = 'AUDIO_FLAC',
  /** audio/midi mime type. */
  AudioMidi = 'AUDIO_MIDI',
  /** audio/mpeg mime type. */
  AudioMpeg = 'AUDIO_MPEG',
  /** audio/ogg mime type. */
  AudioOgg = 'AUDIO_OGG',
  /** audio/wav mime type. */
  AudioWav = 'AUDIO_WAV',
  /** audio/x-matroska mime type. */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** audio/x-ms-wax mime type. */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** audio/x-ms-wma mime type. */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** audio/x-realaudio mime type. */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** image/avif mime type. */
  ImageAvif = 'IMAGE_AVIF',
  /** image/bmp mime type. */
  ImageBmp = 'IMAGE_BMP',
  /** image/gif mime type. */
  ImageGif = 'IMAGE_GIF',
  /** image/heic mime type. */
  ImageHeic = 'IMAGE_HEIC',
  /** image/heic-sequence mime type. */
  ImageHeicSequence = 'IMAGE_HEIC_SEQUENCE',
  /** image/heif mime type. */
  ImageHeif = 'IMAGE_HEIF',
  /** image/heif-sequence mime type. */
  ImageHeifSequence = 'IMAGE_HEIF_SEQUENCE',
  /** image/jpeg mime type. */
  ImageJpeg = 'IMAGE_JPEG',
  /** image/png mime type. */
  ImagePng = 'IMAGE_PNG',
  /** image/tiff mime type. */
  ImageTiff = 'IMAGE_TIFF',
  /** image/webp mime type. */
  ImageWebp = 'IMAGE_WEBP',
  /** image/x-icon mime type. */
  ImageXIcon = 'IMAGE_X_ICON',
  /** text/calendar mime type. */
  TextCalendar = 'TEXT_CALENDAR',
  /** text/css mime type. */
  TextCss = 'TEXT_CSS',
  /** text/csv mime type. */
  TextCsv = 'TEXT_CSV',
  /** text/plain mime type. */
  TextPlain = 'TEXT_PLAIN',
  /** text/richtext mime type. */
  TextRichtext = 'TEXT_RICHTEXT',
  /** text/tab-separated-values mime type. */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** text/vtt mime type. */
  TextVtt = 'TEXT_VTT',
  /** video/3gpp mime type. */
  Video_3Gpp = 'VIDEO_3GPP',
  /** video/3gpp2 mime type. */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** video/avi mime type. */
  VideoAvi = 'VIDEO_AVI',
  /** video/divx mime type. */
  VideoDivx = 'VIDEO_DIVX',
  /** video/mp4 mime type. */
  VideoMp4 = 'VIDEO_MP4',
  /** video/mpeg mime type. */
  VideoMpeg = 'VIDEO_MPEG',
  /** video/ogg mime type. */
  VideoOgg = 'VIDEO_OGG',
  /** video/quicktime mime type. */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** video/webm mime type. */
  VideoWebm = 'VIDEO_WEBM',
  /** video/x-flv mime type. */
  VideoXFlv = 'VIDEO_X_FLV',
  /** video/x-matroska mime type. */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** video/x-ms-asf mime type. */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** video/x-ms-wm mime type. */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** video/x-ms-wmv mime type. */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** video/x-ms-wmx mime type. */
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** An object with a globally unique identifier. All objects that can be identified by a unique ID implement this interface. */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Content that can be attributed to a specific user. Provides fields for accessing the author&#039;s information and establishing content ownership. */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Content that can receive and display user-submitted comments. Provides fields for accessing comment counts and managing comment status. */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Content that has a main body field which can contain formatted text and media. Provides access to both raw (with appropriate permissions) and rendered versions of the content. */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};


/** Content that has a main body field which can contain formatted text and media. Provides access to both raw (with appropriate permissions) and rendered versions of the content. */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Node that has content blocks associated with it */
export type NodeWithEditorBlocks = {
  /** List of editor blocks */
  editorBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
};


/** Node that has content blocks associated with it */
export type NodeWithEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** A node which provides an excerpt field, which is a condensed summary of the main content. Excerpts can be manually created or automatically generated and are often used in content listings and search results. */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};


/** A node which provides an excerpt field, which is a condensed summary of the main content. Excerpts can be manually created or automatically generated and are often used in content listings and search results. */
export type NodeWithExcerptExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Content that can have a primary image attached. This image is typically used for thumbnails, social sharing, and prominent display in the presentation layer. */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** Content that supports ordering metadata. Includes a menu order field which can be used for custom sorting in navigation menus and other ordered collections. */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** Node that has Page content blocks associated with it */
export type NodeWithPageEditorBlocks = {
  /** List of Page editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PageEditorBlock>>>;
};


/** Node that has Page content blocks associated with it */
export type NodeWithPageEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** Node that has Post content blocks associated with it */
export type NodeWithPostEditorBlocks = {
  /** List of Post editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PostEditorBlock>>>;
};


/** Node that has Post content blocks associated with it */
export type NodeWithPostEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** Content that maintains a history of changes. Provides access to previous versions of the content and the ability to restore earlier revisions. */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Content that provides template metadata. The template can help inform how the content is might be structured, styled, and presented to the user. */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
};

/** Content with a dedicated title field. The title typically serves as the main heading and identifier for the content. */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};


/** Content with a dedicated title field. The title typically serves as the main heading and identifier for the content. */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Content that supports cross-site notifications when linked to by other sites. Includes fields for pingback status and linked URLs. */
export type NodeWithTrackbacks = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A direct one-to-one relationship between objects. Unlike plural connections, this represents a single related object rather than a collection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** Sort direction for ordered results. Determines whether items are returned in ascending or descending order. */
export enum OrderEnum {
  /** Results ordered from lowest to highest values (i.e. A-Z, oldest-newest) */
  Asc = 'ASC',
  /** Results ordered from highest to lowest values (i.e. Z-A, newest-oldest) */
  Desc = 'DESC'
}

/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type Page = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithPageEditorBlocks & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Page';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the Page type and the Comment type */
  comments?: Maybe<PageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of Page editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PageEditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  guid?: Maybe<Scalars['String']>;
  /** Whether the page object is password protected. */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the page object. */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** True when this item is set to be hidden from search engines (Yoast &gt; Advanced), ignoring site-wide indexing settings. */
  noindex?: Maybe<Scalars['Boolean']>;
  /**
   * The unique numeric identifier for the content node.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The password for the page object. */
  password?: Maybe<Scalars['String']>;
  /** Connection between the page type and the page type */
  preview?: Maybe<PageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique ID of the preview node */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Page type and the page type */
  revisions?: Maybe<PageToRevisionConnection>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageToCommentConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageToRevisionConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A paginated collection of page Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>;
  /** A list of connected page Nodes */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageConnectionPageInfo;
};

/** Represents a connection to a page. Contains both the page Node and metadata about the relationship. */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected page Node */
  node: Page;
};

/** Pagination metadata specific to &quot;PageConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PageConnectionEdge&quot; Nodes. */
export type PageConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** EditorBlock Interface for Page Block Type */
export type PageEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific Page. Specifies which unique attribute is used to find an exact Page. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Metadata for cursor-based pagination. Provides cursors for continuing pagination and boolean flags indicating if more items exist in either direction. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PageToCommentConnection';
  /** Edges for the PageToCommentConnection connection */
  edges: Array<PageToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: PageToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PageToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Pagination metadata specific to &quot;PageToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of PageToCommentConnection Nodes. */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  __typename?: 'PageToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Page;
};

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection & PageConnection & {
  __typename?: 'PageToRevisionConnection';
  /** Edges for the PageToRevisionConnection connection */
  edges: Array<PageToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Pagination metadata specific to &quot;PageToRevisionConnection&quot; collections. Provides cursors and flags for navigating through sets of PageToRevisionConnection Nodes. */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The permalink setting type */
export type PermalinkSettings = Node & {
  __typename?: 'PermalinkSettings';
  /** The prefix used in the URLs of category archive pages. */
  categoryBase?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the settings group. */
  id: Scalars['ID'];
  /** The structure used to build the URLs for content on the site. */
  structure?: Maybe<Scalars['String']>;
  /** The prefix used in the URLs of tag archive pages. */
  tagBase?: Maybe<Scalars['String']>;
};

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** Plugin path. */
  path?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
};

/** A paginated collection of Plugin Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>;
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: PluginConnectionPageInfo;
};

/** Represents a connection to a Plugin. Contains both the Plugin Node and metadata about the relationship. */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Plugin Node */
  node: Plugin;
};

/** Pagination metadata specific to &quot;PluginConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PluginConnectionEdge&quot; Nodes. */
export type PluginConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Operational status of a plugin. Indicates whether a plugin is active, inactive, or in another state that affects its functionality. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE'
}

/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type Post = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithPostEditorBlocks & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & NodeWithTrackbacks & Previewable & UniformResourceIdentifiable & WithAcfInfos & {
  __typename?: 'Post';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors?: Maybe<PostToPostConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the Post type and the category type */
  categories?: Maybe<PostToCategoryConnection>;
  /** Connection between the Post type and the collaborateurice type */
  collaborateurices?: Maybe<PostToCollaborateuriceConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the Post type and the Comment type */
  comments?: Maybe<PostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of Post editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PostEditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  guid?: Maybe<Scalars['String']>;
  /** Whether the post object is password protected. */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post object. */
  id: Scalars['ID'];
  /** Fields of the Infos ACF Field Group */
  infos?: Maybe<Infos>;
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** True when this item is set to be hidden from search engines (Yoast &gt; Advanced), ignoring site-wide indexing settings. */
  noindex?: Maybe<Scalars['Boolean']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent?: Maybe<PostToParentConnectionEdge>;
  /** The password for the post object. */
  password?: Maybe<Scalars['String']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Post type and the postFormat type */
  postFormats?: Maybe<PostToPostFormatConnection>;
  /**
   * The unique numeric identifier for the content node.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /** Connection between the post type and the post type */
  preview?: Maybe<PostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Post type and the post type */
  revisions?: Maybe<PostToRevisionConnection>;
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the Post type and the tag type */
  tags?: Maybe<PostToTagConnection>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  /** Connection between the Post type and the TermNode type */
  terms?: Maybe<PostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCategoryConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostCollaborateuricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCollaborateuriceConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCommentConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToRevisionConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTagConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Set relationships between the post to collaborateurices */
export type PostCollaborateuricesInput = {
  /** If true, this will append the collaborateurice to existing related collaborateurices. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCollaborateuricesNodeInput>>>;
};

/** List of collaborateurices to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCollaborateuricesNodeInput = {
  /** The description of the collaborateurice. This field is used to set a description of the collaborateurice if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the collaborateurice. If present, this will be used to connect to the post. If no existing collaborateurice exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the collaborateurice. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the collaborateurice. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** A paginated collection of post Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>;
  /** A list of connected post Nodes */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostConnectionPageInfo;
};

/** Represents a connection to a post. Contains both the post Node and metadata about the relationship. */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected post Node */
  node: Post;
};

/** Pagination metadata specific to &quot;PostConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PostConnectionEdge&quot; Nodes. */
export type PostConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** EditorBlock Interface for Post Block Type */
export type PostEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormat = DatabaseIdentifier & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'PostFormat';
  /** Connection between the PostFormat type and the ContentNode type */
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /** Connection between the PostFormat type and the post type */
  posts?: Maybe<PostFormatToPostConnection>;
  /** The Yoast SEO data of the Formats taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** A paginated collection of postFormat Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>;
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatConnectionPageInfo;
};

/** Represents a connection to a postFormat. Contains both the postFormat Node and metadata about the relationship. */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected postFormat Node */
  node: PostFormat;
};

/** Pagination metadata specific to &quot;PostFormatConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PostFormatConnectionEdge&quot; Nodes. */
export type PostFormatConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific PostFormat. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the PostFormat. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'PostFormatToContentNodeConnection';
  /** Edges for the PostFormatToContentNodeConnection connection */
  edges: Array<PostFormatToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;PostFormatToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of PostFormatToContentNodeConnection Nodes. */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostFormatToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection & PostConnection & {
  __typename?: 'PostFormatToPostConnection';
  /** Edges for the PostFormatToPostConnection connection */
  edges: Array<PostFormatToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostFormatToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;PostFormatToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of PostFormatToPostConnection Nodes. */
export type PostFormatToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostFormatToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** Identifier types for retrieving a specific Post. Specifies which unique attribute is used to find an exact Post. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Content field rendering options. Determines whether content fields are returned as raw data or with applied formatting and transformations. Default is RENDERED. */
export enum PostObjectFieldFormatEnum {
  /** Unprocessed content exactly as stored in the database, requires appropriate permissions. */
  Raw = 'RAW',
  /** Content with all formatting and transformations applied, ready for display. */
  Rendered = 'RENDERED'
}

/** Date field selectors for content filtering. Specifies which date attribute (creation date, modification date) should be used for date-based queries. */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Content sorting attributes for post-type objects. Identifies which content property should be used to determine result order. */
export enum PostObjectsConnectionOrderbyEnum {
  /** Ordering by content author (typically by author name). */
  Author = 'AUTHOR',
  /** Ordering by popularity based on number of comments. */
  CommentCount = 'COMMENT_COUNT',
  /** Chronological ordering by publication date. */
  Date = 'DATE',
  /** Maintain custom order of IDs exactly as specified in the query with the IN field. */
  In = 'IN',
  /** Ordering by manually defined sort position. */
  MenuOrder = 'MENU_ORDER',
  /** Chronological ordering by modified date. */
  Modified = 'MODIFIED',
  /** Maintain custom order of IDs exactly as specified in the query with the NAME_IN field. */
  NameIn = 'NAME_IN',
  /** Ordering by parent-child relationship in hierarchical content. */
  Parent = 'PARENT',
  /** Alphabetical ordering by URL-friendly name. */
  Slug = 'SLUG',
  /** Alphabetical ordering by content title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Publishing status that controls the visibility and editorial state of content. Determines whether content is published, pending review, in draft state, or private. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Automatically saved content that has not been manually saved */
  AutoDraft = 'AUTO_DRAFT',
  /** Content that is saved but not yet published or visible to the public */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Content that inherits its status from a parent object */
  Inherit = 'INHERIT',
  /** Content awaiting review before publication */
  Pending = 'PENDING',
  /** Content only visible to authorized users with appropriate permissions */
  Private = 'PRIVATE',
  /** Content that is publicly visible to all visitors */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Content marked for deletion but still recoverable */
  Trash = 'TRASH'
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  edges: Array<PostToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary category */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Pagination metadata specific to &quot;PostToCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToCategoryConnection Nodes. */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the collaborateurice type */
export type PostToCollaborateuriceConnection = CollaborateuriceConnection & Connection & {
  __typename?: 'PostToCollaborateuriceConnection';
  /** Edges for the PostToCollaborateuriceConnection connection */
  edges: Array<PostToCollaborateuriceConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Collaborateurice>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCollaborateuriceConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCollaborateuriceConnectionEdge = CollaborateuriceConnectionEdge & Edge & {
  __typename?: 'PostToCollaborateuriceConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary people */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: Collaborateurice;
};

/** Pagination metadata specific to &quot;PostToCollaborateuriceConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToCollaborateuriceConnection Nodes. */
export type PostToCollaborateuriceConnectionPageInfo = CollaborateuriceConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCollaborateuriceConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToCollaborateuriceConnection connection */
export type PostToCollaborateuriceConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PostToCommentConnection';
  /** Edges for the PostToCommentConnection connection */
  edges: Array<PostToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PostToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Pagination metadata specific to &quot;PostToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToCommentConnection Nodes. */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the post type and the post type */
export type PostToParentConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  __typename?: 'PostToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Post;
};

/** Connection between the post type and the post type */
export type PostToPostConnection = Connection & PostConnection & {
  __typename?: 'PostToPostConnection';
  /** Edges for the PostToPostConnection connection */
  edges: Array<PostToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;PostToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToPostConnection Nodes. */
export type PostToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'PostToPostFormatConnection';
  /** Edges for the PostToPostFormatConnection connection */
  edges: Array<PostToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'PostToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary post_format */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Pagination metadata specific to &quot;PostToPostFormatConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToPostFormatConnection Nodes. */
export type PostToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  __typename?: 'PostToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Post;
};

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection & PostConnection & {
  __typename?: 'PostToRevisionConnection';
  /** Edges for the PostToRevisionConnection connection */
  edges: Array<PostToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;PostToRevisionConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToRevisionConnection Nodes. */
export type PostToRevisionConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection & TagConnection & {
  __typename?: 'PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  edges: Array<PostToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTagConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The Yoast SEO Primary post_tag */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Pagination metadata specific to &quot;PostToTagConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToTagConnection Nodes. */
export type PostToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'PostToTermNodeConnection';
  /** Edges for the PostToTermNodeConnection connection */
  edges: Array<PostToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'PostToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Pagination metadata specific to &quot;PostToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToTermNodeConnection Nodes. */
export type PostToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO';
  analysis?: Maybe<SeoAnalysis>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  head?: Maybe<SeoHead>;
  language?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  objectLastModified?: Maybe<Scalars['String']>;
  objectPublishedAt?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphEnabled?: Maybe<Scalars['Boolean']>;
  opengraphFbAppId?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphLocale?: Maybe<Scalars['String']>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Float']>;
  region?: Maybe<Scalars['String']>;
  relNext?: Maybe<Scalars['String']>;
  relPrev?: Maybe<Scalars['String']>;
  robots?: Maybe<SeoRobots>;
  schema?: Maybe<SeoPostTypeSchema>;
  title?: Maybe<Scalars['String']>;
  twitterCardType?: Maybe<Scalars['String']>;
  twitterCreator?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterSite?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** Content that supports a draft preview mode. Allows viewing unpublished changes before they are made publicly available. Previewing unpublished changes requires appropriate permissions. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
};

/** The reading setting type */
export type ReadingSettings = Node & {
  __typename?: 'ReadingSettings';
  /** The globally unique identifier of the settings group. */
  id: Scalars['ID'];
  /** The ID of the page that should display the latest posts */
  pageForPosts?: Maybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  pageOnFront?: Maybe<Scalars['Int']>;
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']>;
  /** What to show on the front page */
  showOnFront?: Maybe<Scalars['String']>;
};

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Logical operators for filter conditions. Determines whether multiple filtering criteria should be combined with AND (all must match) or OR (any can match). */
export enum RelationEnum {
  /** All conditions must match (more restrictive filtering) */
  And = 'AND',
  /** Any condition can match (more inclusive filtering) */
  Or = 'OR'
}

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Password reset key */
  key?: InputMaybe<Scalars['String']>;
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']>;
  /** The new password. */
  password?: InputMaybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** A resolved post with title, date, URI, and featured image. */
export type ResolvedPost = {
  __typename?: 'ResolvedPost';
  date?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<ResolvedPostImage>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** A featured image for a resolved post. */
export type ResolvedPostImage = {
  __typename?: 'ResolvedPostImage';
  altText?: Maybe<Scalars['String']>;
  sizes?: Maybe<Array<Maybe<ResolvedPostImageSize>>>;
  sourceUrl?: Maybe<Scalars['String']>;
};

/** An image size variant. */
export type ResolvedPostImageSize = {
  __typename?: 'ResolvedPostImageSize';
  height?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The restored comment object */
  comment?: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /** The createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** The createCollaborateurice mutation */
  createCollaborateurice?: Maybe<CreateCollaborateuricePayload>;
  /** The createComment mutation */
  createComment?: Maybe<CreateCommentPayload>;
  /** The createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /** The createPage mutation */
  createPage?: Maybe<CreatePagePayload>;
  /** The createPost mutation */
  createPost?: Maybe<CreatePostPayload>;
  /** The createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /** The createTag mutation */
  createTag?: Maybe<CreateTagPayload>;
  /** The createUser mutation */
  createUser?: Maybe<CreateUserPayload>;
  /** The deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** The deleteCollaborateurice mutation */
  deleteCollaborateurice?: Maybe<DeleteCollaborateuricePayload>;
  /** The deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** The deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /** The deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>;
  /** The deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>;
  /** The deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /** The deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** The deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']>;
  /** The registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>;
  /** The resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /** The restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /** Send password reset email to user */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /** The updateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** The updateCollaborateurice mutation */
  updateCollaborateurice?: Maybe<UpdateCollaborateuricePayload>;
  /** The updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** The updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /** The updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>;
  /** The updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>;
  /** The updatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /** The updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /** The updateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>;
  /** The updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateCollaborateuriceArgs = {
  input: CreateCollaborateuriceInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCollaborateuriceArgs = {
  input: DeleteCollaborateuriceInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdateCollaborateuriceArgs = {
  input: UpdateCollaborateuriceInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>;
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<Category>;
  /** A 0bject */
  collaborateurice?: Maybe<Collaborateurice>;
  /** Connection between the RootQuery type and the collaborateurice type */
  collaborateurices?: Maybe<RootQueryToCollaborateuriceConnection>;
  /** Returns a Comment */
  comment?: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>;
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /** Debug authentication status in GraphQL context */
  debugAuth?: Maybe<Scalars['String']>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>;
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  /** An object of the page Type.  */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>;
  /** Fields of the &#039;PermalinkSettings&#039; settings group */
  permalinkSettings?: Maybe<PermalinkSettings>;
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /** A 0bject */
  postFormat?: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>;
  /** Fetch posts with pagination for any post type. */
  queryPosts?: Maybe<Array<Maybe<ResolvedPost>>>;
  /** Get total post count for pagination. */
  queryPostsCount?: Maybe<Scalars['Int']>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentNode type */
  revisions?: Maybe<RootQueryToRevisionsConnection>;
  /** Returns seo site data */
  seo?: Maybe<SeoConfig>;
  /** A 0bject */
  tag?: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme?: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>;
  /** Returns a user */
  user?: Maybe<User>;
  /** Returns a user role */
  userRole?: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  viewer?: Maybe<User>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCollaborateuriceArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CollaborateuriceIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCollaborateuricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCollaborateuriceConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CommentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  contentType?: InputMaybe<ContentTypeEnum>;
  id: Scalars['ID'];
  idType?: InputMaybe<ContentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MediaItemIdType>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  mediaItemId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PageIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  pageId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  postId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryQueryPostsArgs = {
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  perPage?: InputMaybe<Scalars['Int']>;
  postType?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryQueryPostsCountArgs = {
  postType?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToEnqueuedScriptConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToEnqueuedStylesheetConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TermNodeIdTypeEnum>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  edges: Array<RootQueryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Pagination metadata specific to &quot;RootQueryToCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToCategoryConnection Nodes. */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the collaborateurice type */
export type RootQueryToCollaborateuriceConnection = CollaborateuriceConnection & Connection & {
  __typename?: 'RootQueryToCollaborateuriceConnection';
  /** Edges for the RootQueryToCollaborateuriceConnection connection */
  edges: Array<RootQueryToCollaborateuriceConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Collaborateurice>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCollaborateuriceConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCollaborateuriceConnectionEdge = CollaborateuriceConnectionEdge & Edge & {
  __typename?: 'RootQueryToCollaborateuriceConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Collaborateurice;
};

/** Pagination metadata specific to &quot;RootQueryToCollaborateuriceConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToCollaborateuriceConnection Nodes. */
export type RootQueryToCollaborateuriceConnectionPageInfo = CollaborateuriceConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCollaborateuriceConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCollaborateuriceConnection connection */
export type RootQueryToCollaborateuriceConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection & Connection & {
  __typename?: 'RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  edges: Array<RootQueryToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Pagination metadata specific to &quot;RootQueryToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToCommentConnection Nodes. */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToContentNodeConnection';
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges: Array<RootQueryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;RootQueryToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToContentNodeConnection Nodes. */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'RootQueryToContentTypeConnection';
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges: Array<RootQueryToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Pagination metadata specific to &quot;RootQueryToContentTypeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToContentTypeConnection Nodes. */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;RootQueryToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToEnqueuedScriptConnection Nodes. */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToEnqueuedScriptConnection connection */
export type RootQueryToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;RootQueryToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToEnqueuedStylesheetConnection Nodes. */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToEnqueuedStylesheetConnection connection */
export type RootQueryToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges: Array<RootQueryToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Pagination metadata specific to &quot;RootQueryToMediaItemConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToMediaItemConnection Nodes. */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection & MenuConnection & {
  __typename?: 'RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  edges: Array<RootQueryToMenuConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge & MenuConnectionEdge & {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Menu;
};

/** Pagination metadata specific to &quot;RootQueryToMenuConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToMenuConnection Nodes. */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges: Array<RootQueryToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Pagination metadata specific to &quot;RootQueryToMenuItemConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToMenuItemConnection Nodes. */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection & PageConnection & {
  __typename?: 'RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  edges: Array<RootQueryToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPageConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Pagination metadata specific to &quot;RootQueryToPageConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPageConnection Nodes. */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection & PluginConnection & {
  __typename?: 'RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  edges: Array<RootQueryToPluginConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPluginConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge & PluginConnectionEdge & {
  __typename?: 'RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Plugin;
};

/** Pagination metadata specific to &quot;RootQueryToPluginConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPluginConnection Nodes. */
export type RootQueryToPluginConnectionPageInfo = PageInfo & PluginConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPluginConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection & PostConnection & {
  __typename?: 'RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  edges: Array<RootQueryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;RootQueryToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPostConnection Nodes. */
export type RootQueryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'RootQueryToPostFormatConnection';
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges: Array<RootQueryToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Pagination metadata specific to &quot;RootQueryToPostFormatConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPostFormatConnection Nodes. */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToRevisionsConnection';
  /** Edges for the RootQueryToRevisionsConnection connection */
  edges: Array<RootQueryToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;RootQueryToRevisionsConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToRevisionsConnection Nodes. */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection & TagConnection & {
  __typename?: 'RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  edges: Array<RootQueryToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTagConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Pagination metadata specific to &quot;RootQueryToTagConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToTagConnection Nodes. */
export type RootQueryToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'RootQueryToTaxonomyConnection';
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges: Array<RootQueryToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Pagination metadata specific to &quot;RootQueryToTaxonomyConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToTaxonomyConnection Nodes. */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'RootQueryToTermNodeConnection';
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges: Array<RootQueryToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Pagination metadata specific to &quot;RootQueryToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToTermNodeConnection Nodes. */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection & ThemeConnection & {
  __typename?: 'RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  edges: Array<RootQueryToThemeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToThemeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge & ThemeConnectionEdge & {
  __typename?: 'RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Theme;
};

/** Pagination metadata specific to &quot;RootQueryToThemeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToThemeConnection Nodes. */
export type RootQueryToThemeConnectionPageInfo = PageInfo & ThemeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToThemeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection & UserConnection & {
  __typename?: 'RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  edges: Array<RootQueryToUserConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge & UserConnectionEdge & {
  __typename?: 'RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: User;
};

/** Pagination metadata specific to &quot;RootQueryToUserConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToUserConnection Nodes. */
export type RootQueryToUserConnectionPageInfo = PageInfo & UserConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The user login. */
  login?: InputMaybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges: Array<RootQueryToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Pagination metadata specific to &quot;RootQueryToUserRoleConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToUserRoleConnection Nodes. */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Yoast SEO advanced site configuration */
export type SeoAdvanced = {
  __typename?: 'SEOAdvanced';
  contentAnalysisActive?: Maybe<Scalars['Boolean']>;
  environmentType?: Maybe<Scalars['String']>;
  hasMultipleAuthors?: Maybe<Scalars['Boolean']>;
  inclusiveLanguageAnalysisActive?: Maybe<Scalars['Boolean']>;
  indexNowEnabled?: Maybe<Scalars['Boolean']>;
  indexNowKey?: Maybe<Scalars['String']>;
  keywordAnalysisActive?: Maybe<Scalars['Boolean']>;
  siteType?: Maybe<Scalars['String']>;
  xmlSitemapEnabled?: Maybe<Scalars['Boolean']>;
};

/** The Yoast SEO analysis scores and link counts */
export type SeoAnalysis = {
  __typename?: 'SEOAnalysis';
  inclusiveLanguageScore?: Maybe<Scalars['Int']>;
  incomingLinkCount?: Maybe<Scalars['Int']>;
  keywordScore?: Maybe<Scalars['Int']>;
  linkCount?: Maybe<Scalars['Int']>;
  readabilityScore?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs';
  archivePrefix?: Maybe<Scalars['String']>;
  boldLast?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  homeText?: Maybe<Scalars['String']>;
  notFoundText?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  searchPrefix?: Maybe<Scalars['String']>;
  separator?: Maybe<Scalars['String']>;
  showBlogPage?: Maybe<Scalars['Boolean']>;
};

/** Types of cards */
export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
  __typename?: 'SEOConfig';
  advanced?: Maybe<SeoAdvanced>;
  breadcrumbs?: Maybe<SeoBreadcrumbs>;
  contentTypes?: Maybe<SeoContentTypes>;
  meta?: Maybe<SeoGlobalMeta>;
  openGraph?: Maybe<SeoOpenGraph>;
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>;
  schema?: Maybe<SeoSchema>;
  social?: Maybe<SeoSocial>;
  taxonomyArchives?: Maybe<SeoTaxonomyTypes>;
  webmaster?: Maybe<SeoWebmaster>;
};

/** The Yoast SEO search appearance content types fields */
export type SeoContentType = {
  __typename?: 'SEOContentType';
  archive?: Maybe<SeoContentTypeArchive>;
  articleType?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<SeoPageInfoSchema>;
  schemaType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO search appearance content types fields */
export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive';
  archiveLink?: Maybe<Scalars['String']>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  hasArchive?: Maybe<Scalars['Boolean']>;
  head?: Maybe<SeoHead>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsFollow?: Maybe<Scalars['String']>;
  metaRobotsIndex?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['Boolean']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  social?: Maybe<SeoSocialArchive>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
  __typename?: 'SEOContentTypes';
  mediaItem?: Maybe<SeoContentType>;
  page?: Maybe<SeoContentType>;
  post?: Maybe<SeoContentType>;
};

/** The Yoast SEO meta data */
export type SeoGlobalMeta = {
  __typename?: 'SEOGlobalMeta';
  author?: Maybe<SeoGlobalMetaAuthor>;
  config?: Maybe<SeoGlobalMetaConfig>;
  date?: Maybe<SeoGlobalMetaDate>;
  homepage?: Maybe<SeoGlobalMetaHome>;
  notFound?: Maybe<SeoGlobalMeta404>;
  search?: Maybe<SeoGlobalMetaSearch>;
};

/** The Yoast SEO meta 404 data */
export type SeoGlobalMeta404 = {
  __typename?: 'SEOGlobalMeta404';
  breadcrumb?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Author data */
export type SeoGlobalMetaAuthor = {
  __typename?: 'SEOGlobalMetaAuthor';
  description?: Maybe<Scalars['String']>;
  noindex?: Maybe<Scalars['Boolean']>;
  noindexNoPosts?: Maybe<Scalars['Boolean']>;
  social?: Maybe<SeoSocialArchive>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO meta config data */
export type SeoGlobalMetaConfig = {
  __typename?: 'SEOGlobalMetaConfig';
  separator?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Date data */
export type SeoGlobalMetaDate = {
  __typename?: 'SEOGlobalMetaDate';
  description?: Maybe<Scalars['String']>;
  noindex?: Maybe<Scalars['Boolean']>;
  social?: Maybe<SeoSocialArchive>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO homepage data */
export type SeoGlobalMetaHome = {
  __typename?: 'SEOGlobalMetaHome';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO search results data */
export type SeoGlobalMetaSearch = {
  __typename?: 'SEOGlobalMetaSearch';
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO head output as structured HTML and JSON */
export type SeoHead = {
  __typename?: 'SEOHead';
  html?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
};

/** The Open Graph data */
export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph';
  defaultImage?: Maybe<MediaItem>;
  enabled?: Maybe<Scalars['Boolean']>;
  frontPage?: Maybe<SeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<MediaItem>;
  title?: Maybe<Scalars['String']>;
};

/** The Schema for post type */
export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema';
  raw?: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** The page info SEO details */
export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo';
  schema?: Maybe<SeoPageInfoSchema>;
};

/** The Schema types */
export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema';
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
  __typename?: 'SEORedirect';
  format?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO robots directives */
export type SeoRobots = {
  __typename?: 'SEORobots';
  noarchive?: Maybe<Scalars['Boolean']>;
  nofollow?: Maybe<Scalars['String']>;
  noimageindex?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['String']>;
  nosnippet?: Maybe<Scalars['Boolean']>;
};

/** The Yoast SEO schema data */
export type SeoSchema = {
  __typename?: 'SEOSchema';
  companyLogo?: Maybe<MediaItem>;
  companyName?: Maybe<Scalars['String']>;
  companyOrPerson?: Maybe<Scalars['String']>;
  homeUrl?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaItem>;
  personLogo?: Maybe<MediaItem>;
  personName?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  wordpressSiteName?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type SeoSocial = {
  __typename?: 'SEOSocial';
  facebook?: Maybe<SeoSocialFacebook>;
  instagram?: Maybe<SeoSocialInstagram>;
  linkedIn?: Maybe<SeoSocialLinkedIn>;
  mastodon?: Maybe<SeoSocialMastodon>;
  mySpace?: Maybe<SeoSocialMySpace>;
  otherSocials?: Maybe<Array<Maybe<Scalars['String']>>>;
  pinterest?: Maybe<SeoSocialPinterest>;
  twitter?: Maybe<SeoSocialTwitter>;
  wikipedia?: Maybe<SeoSocialWikipedia>;
  youTube?: Maybe<SeoSocialYoutube>;
};

/** The Yoast SEO Premium social settings for an archive */
export type SeoSocialArchive = {
  __typename?: 'SEOSocialArchive';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<MediaItem>;
  title?: Maybe<Scalars['String']>;
};

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook';
  defaultImage?: Maybe<MediaItem>;
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialMastodon = {
  __typename?: 'SEOSocialMastodon';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest';
  metaTag?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter';
  cardType?: Maybe<SeoCardType>;
  enabled?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  url?: Maybe<Scalars['String']>;
};

/** The Schema types for Taxonomy */
export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema';
  raw?: Maybe<Scalars['String']>;
};

/** The Yoast SEO search appearance Taxonomy types fields */
export type SeoTaxonomyType = {
  __typename?: 'SEOTaxonomyType';
  archive?: Maybe<SeoTaxonomyTypeArchive>;
};

/** The Yoast SEO search appearance Taxonomy types fields */
export type SeoTaxonomyTypeArchive = {
  __typename?: 'SEOTaxonomyTypeArchive';
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  social?: Maybe<SeoSocialArchive>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast SEO archive configuration data for taxonomies */
export type SeoTaxonomyTypes = {
  __typename?: 'SEOTaxonomyTypes';
  category?: Maybe<SeoTaxonomyType>;
  collaborateurice?: Maybe<SeoTaxonomyType>;
  postFormat?: Maybe<SeoTaxonomyType>;
  tag?: Maybe<SeoTaxonomyType>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  analysis?: Maybe<SeoAnalysis>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  canonical?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  head?: Maybe<SeoHead>;
  language?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphEnabled?: Maybe<Scalars['Boolean']>;
  opengraphFbAppId?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphLocale?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  relNext?: Maybe<Scalars['String']>;
  relPrev?: Maybe<Scalars['String']>;
  robots?: Maybe<SeoRobots>;
  schema?: Maybe<SeoUserSchema>;
  social?: Maybe<SeoUserSocial>;
  title?: Maybe<Scalars['String']>;
  twitterCreator?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterSite?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** The Schema types for User */
export type SeoUserSchema = {
  __typename?: 'SEOUserSchema';
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  mastodon?: Maybe<Scalars['String']>;
  mySpace?: Maybe<Scalars['String']>;
  pinterest?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youTube?: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  baiduVerify?: Maybe<Scalars['String']>;
  googleVerify?: Maybe<Scalars['String']>;
  msVerify?: Maybe<Scalars['String']>;
  yandexVerify?: Maybe<Scalars['String']>;
};

/** Script insertion positions in the document structure. Determines whether scripts are placed in the document head or before the closing body tag. */
export enum ScriptLoadingGroupLocationEnum {
  /** Delayed loading at end of document, right before the closing `<body>` tag. (allows content to render first) */
  Footer = 'FOOTER',
  /** Early loading in document `<head>` tag. (executes before page content renders) */
  Header = 'HEADER'
}

/** Script loading optimization attributes. Controls browser behavior for script loading to improve page performance (async or defer). */
export enum ScriptLoadingStrategyEnum {
  /** Load script in parallel with page rendering, executing as soon as downloaded */
  Async = 'ASYNC',
  /** Download script in parallel but defer execution until page is fully parsed */
  Defer = 'DEFER'
}

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success?: Maybe<Scalars['Boolean']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  user?: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /** Settings of the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsHomeUrl?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  permalinkSettingsCategoryBase?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  permalinkSettingsStructure?: Maybe<Scalars['String']>;
  /** Settings of the string Settings Group */
  permalinkSettingsTagBase?: Maybe<Scalars['String']>;
  /** Settings of the integer Settings Group */
  readingSettingsPageForPosts?: Maybe<Scalars['Int']>;
  /** Settings of the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']>;
  /** Settings of the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']>;
  /** Settings of the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type Tag = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Tag';
  /** Connection between the Tag type and the ContentNode type */
  contentNodes?: Maybe<TagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the Tag type and the post type */
  posts?: Maybe<TagToPostConnection>;
  /** The Yoast SEO data of the Tags taxonomy. */
  seo?: Maybe<TaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /** Connection between the Tag type and the Taxonomy type */
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** A paginated collection of tag Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>;
  /** A list of connected tag Nodes */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: TagConnectionPageInfo;
};

/** Represents a connection to a tag. Contains both the tag Node and metadata about the relationship. */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected tag Node */
  node: Tag;
};

/** Pagination metadata specific to &quot;TagConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;TagConnectionEdge&quot; Nodes. */
export type TagConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific Tag. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the Tag. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'TagToContentNodeConnection';
  /** Edges for the TagToContentNodeConnection connection */
  edges: Array<TagToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: TagToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'TagToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;TagToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of TagToContentNodeConnection Nodes. */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TagToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection & PostConnection & {
  __typename?: 'TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  edges: Array<TagToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: TagToPostConnectionPageInfo;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;TagToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of TagToPostConnection Nodes. */
export type TagToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'TagToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'TagToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /** List of Term Nodes associated with the Taxonomy */
  connectedTerms?: Maybe<TaxonomyToTermNodeConnection>;
  /** Description of the taxonomy. */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A taxonomy object */
export type TaxonomyConnectedTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A paginated collection of Taxonomy Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>;
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyConnectionPageInfo;
};

/** Represents a connection to a Taxonomy. Contains both the Taxonomy Node and metadata about the relationship. */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Taxonomy Node */
  node: Taxonomy;
};

/** Pagination metadata specific to &quot;TaxonomyConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;TaxonomyConnectionEdge&quot; Nodes. */
export type TaxonomyConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Available classification systems for organizing content. Identifies the different taxonomy types that can be used for content categorization. */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum people */
  Collaborateurice = 'COLLABORATEURICE',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG'
}

/** Identifier types for retrieving a taxonomy definition. Determines whether to look up taxonomies by ID or name. */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO';
  analysis?: Maybe<SeoAnalysis>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  head?: Maybe<SeoHead>;
  language?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  objectLastModified?: Maybe<Scalars['String']>;
  objectPublishedAt?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphEnabled?: Maybe<Scalars['Boolean']>;
  opengraphFbAppId?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphLocale?: Maybe<Scalars['String']>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  relNext?: Maybe<Scalars['String']>;
  relPrev?: Maybe<Scalars['String']>;
  robots?: Maybe<SeoRobots>;
  schema?: Maybe<SeoTaxonomySchema>;
  title?: Maybe<Scalars['String']>;
  twitterCardType?: Maybe<Scalars['String']>;
  twitterCreator?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterSite?: Maybe<Scalars['String']>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'TaxonomyToContentTypeConnection';
  /** Edges for the TaxonomyToContentTypeConnection connection */
  edges: Array<TaxonomyToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Pagination metadata specific to &quot;TaxonomyToContentTypeConnection&quot; collections. Provides cursors and flags for navigating through sets of TaxonomyToContentTypeConnection Nodes. */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TaxonomyToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the TermNode type */
export type TaxonomyToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'TaxonomyToTermNodeConnection';
  /** Edges for the TaxonomyToTermNodeConnection connection */
  edges: Array<TaxonomyToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'TaxonomyToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Pagination metadata specific to &quot;TaxonomyToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of TaxonomyToTermNodeConnection Nodes. */
export type TaxonomyToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'TaxonomyToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Base interface for taxonomy terms such as categories and tags. Terms are used to organize and classify content. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Base interface for taxonomy terms such as categories and tags. Terms are used to organize and classify content. */
export type TermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Base interface for taxonomy terms such as categories and tags. Terms are used to organize and classify content. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** A paginated collection of TermNode Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>;
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeConnectionPageInfo;
};

/** Represents a connection to a TermNode. Contains both the TermNode Node and metadata about the relationship. */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected TermNode Node */
  node: TermNode;
};

/** Pagination metadata specific to &quot;TermNodeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;TermNodeConnectionEdge&quot; Nodes. */
export type TermNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;TermNodeToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of TermNodeToEnqueuedScriptConnection Nodes. */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TermNodeToEnqueuedScriptConnection connection */
export type TermNodeToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;TermNodeToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of TermNodeToEnqueuedStylesheetConnection Nodes. */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TermNodeToEnqueuedStylesheetConnection connection */
export type TermNodeToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Sorting attributes for taxonomy term collections. Determines which property of taxonomy terms is used for ordering results. */
export enum TermObjectsConnectionOrderbyEnum {
  /** Ordering by number of associated content items. */
  Count = 'COUNT',
  /** Alphabetical ordering by term description text. */
  Description = 'DESCRIPTION',
  /** Alphabetical ordering by term name. */
  Name = 'NAME',
  /** Alphabetical ordering by URL-friendly name. */
  Slug = 'SLUG',
  /** Ordering by assigned term grouping value. */
  TermGroup = 'TERM_GROUP',
  /** Ordering by internal identifier. */
  TermId = 'TERM_ID',
  /** Ordering by manually defined sort position. */
  TermOrder = 'TERM_ORDER'
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. */
  name?: Maybe<Scalars['String']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. */
  screenshot?: Maybe<Scalars['String']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. */
  slug?: Maybe<Scalars['String']>;
  /** A list of tags associated with the theme, typically describing its features (e.g. custom-logo, accessibility-ready, full-site-editing). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. */
  version?: Maybe<Scalars['String']>;
};

/** A paginated collection of Theme Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>;
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: ThemeConnectionPageInfo;
};

/** Represents a connection to a Theme. Contains both the Theme Node and metadata about the relationship. */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Theme Node */
  node: Theme;
};

/** Pagination metadata specific to &quot;ThemeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;ThemeConnectionEdge&quot; Nodes. */
export type ThemeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** An interface for content that can be accessed via a unique URI/URL path. Implemented by content types that have their own permalinks. */
export type UniformResourceIdentifiable = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** The database ID of the category that should be set as the parent. This field cannot be used in conjunction with parentId */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the category that should be set as the parent. This field cannot be used in conjunction with parentDatabaseId */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateCollaborateurice mutation. */
export type UpdateCollaborateuriceInput = {
  /** The slug that the people will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the people object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the collaborateurice object to update */
  id: Scalars['ID'];
  /** The name of the people object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateCollaborateurice mutation. */
export type UpdateCollaborateuricePayload = {
  __typename?: 'UpdateCollaborateuricePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created people */
  collaborateurice?: Maybe<Collaborateurice>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Set connections between the post and collaborateurices */
  collaborateurices?: InputMaybe<PostCollaborateuricesInput>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']>;
  /** Site tagline. */
  generalSettingsDescription?: InputMaybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: InputMaybe<Scalars['String']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']>;
  /** Site title. */
  generalSettingsTitle?: InputMaybe<Scalars['String']>;
  /** The ID of the page that should display the latest posts */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']>;
  /** What to show on the front page */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  allSettings?: Maybe<Settings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Update the DiscussionSettings setting. */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Update the GeneralSettings setting. */
  generalSettings?: Maybe<GeneralSettings>;
  /** Update the PermalinkSettings setting. */
  permalinkSettings?: Maybe<PermalinkSettings>;
  /** Update the ReadingSettings setting. */
  readingSettings?: Maybe<ReadingSettings>;
  /** Update the WritingSettings setting. */
  writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type User = Commenter & DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  __typename?: 'User';
  /** The admin color scheme preference for the user. Possible values include &quot;fresh&quot;, &quot;light&quot;, &quot;blue&quot;, &quot;coffee&quot;, &quot;ectoplasm&quot;, &quot;midnight&quot;, &quot;ocean&quot;, &quot;sunrise&quot;. Default is &quot;fresh&quot;. */
  adminColor?: Maybe<Scalars['String']>;
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<UserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** Connection between the User type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  /** A complete list of capabilities including capabilities inherited from a role. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. */
  firstName?: Maybe<Scalars['String']>;
  /** Whether the user has enabled keyboard shortcuts for comment moderation. Defaults to false. */
  hasCommentShortcutsEnabled?: Maybe<Scalars['Boolean']>;
  /** Whether the user has enabled the visual editor. When enabled, the WYSIWYG editor is used for content editing. Defaults to true. */
  hasRichEditingEnabled?: Maybe<Scalars['Boolean']>;
  /** Whether the user has enabled syntax highlighting when editing code within the post editor. Defaults to true. */
  hasSyntaxHighlightingEnabled?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the user object. */
  id: Scalars['ID'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Last name of the user. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Connection between the User type and the mediaItem type */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name for the user, used to reference the user in a public url. */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<UserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User and Revisions authored by the user */
  revisions?: Maybe<UserToRevisionsConnection>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<UserToUserRoleConnection>;
  /** The Yoast SEO data of a user */
  seo?: Maybe<SeoUser>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  shouldShowAdminToolbar?: Maybe<Scalars['Boolean']>;
  /** The url friendly identifier for the user. */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /**
   * The unique numeric identifier for the user.
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId?: Maybe<Scalars['Int']>;
  /** Username for the user. This is the unique identifier the user provides to log in. */
  username?: Maybe<Scalars['String']>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToCommentConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToEnqueuedScriptConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPageConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPostConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A paginated collection of User Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>;
  /** A list of connected User Nodes */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: UserConnectionPageInfo;
};

/** Represents a connection to a User. Contains both the User Node and metadata about the relationship. */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected User Node */
  node: User;
};

/** Pagination metadata specific to &quot;UserConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;UserConnectionEdge&quot; Nodes. */
export type UserConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifier types for retrieving a specific user. Determines whether to look up users by ID, email, username, or other unique properties. */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
};

/** A paginated collection of UserRole Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>;
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserRoleConnectionPageInfo;
};

/** Represents a connection to a UserRole. Contains both the UserRole Node and metadata about the relationship. */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected UserRole Node */
  node: UserRole;
};

/** Pagination metadata specific to &quot;UserRoleConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;UserRoleConnectionEdge&quot; Nodes. */
export type UserRoleConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Permission levels for user accounts. Defines the standard access levels that control what actions users can perform within the system. */
export enum UserRoleEnum {
  /** Full system access with ability to manage all aspects of the site. */
  Administrator = 'ADMINISTRATOR',
  /** Can publish and manage their own content. */
  Author = 'AUTHOR',
  /** Can write and manage their own content but cannot publish. */
  Contributor = 'CONTRIBUTOR',
  /** Content management access without administrative capabilities. */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  SeoEditor = 'SEO_EDITOR',
  /** User role with specific capabilities */
  SeoManager = 'SEO_MANAGER',
  /** Can only manage their profile and read content. */
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection & Connection & {
  __typename?: 'UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  edges: Array<UserToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: UserToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Pagination metadata specific to &quot;UserToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToCommentConnection Nodes. */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** One or more Comment Statuses to limit results by */
  statusIn?: InputMaybe<Array<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'UserToEnqueuedScriptConnection';
  /** Edges for the UserToEnqueuedScriptConnection connection */
  edges: Array<UserToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;UserToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToEnqueuedScriptConnection Nodes. */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToEnqueuedScriptConnection connection */
export type UserToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;UserToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToEnqueuedStylesheetConnection Nodes. */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToEnqueuedStylesheetConnection connection */
export type UserToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  handlesIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  edges: Array<UserToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: UserToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Pagination metadata specific to &quot;UserToMediaItemConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToMediaItemConnection Nodes. */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection & PageConnection & {
  __typename?: 'UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  edges: Array<UserToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPageConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Pagination metadata specific to &quot;UserToPageConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToPageConnection Nodes. */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection & PostConnection & {
  __typename?: 'UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  edges: Array<UserToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPostConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Pagination metadata specific to &quot;UserToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToPostConnection Nodes. */
export type UserToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'UserToRevisionsConnection';
  /** Edges for the UserToRevisionsConnection connection */
  edges: Array<UserToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: UserToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'UserToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Pagination metadata specific to &quot;UserToRevisionsConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToRevisionsConnection Nodes. */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  isSticky?: InputMaybe<Scalars['Boolean']>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  template?: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  edges: Array<UserToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Pagination metadata specific to &quot;UserToUserRoleConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToUserRoleConnection Nodes. */
export type UserToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** User attribute sorting options. Determines which property of user accounts is used for ordering user listings. */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
};

/** User properties that can be targeted in search operations. Defines which user attributes can be searched when looking for specific users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user's website. */
  Url = 'URL'
}

/** Metadata for cursor-based pagination. Provides cursors for continuing pagination and boolean flags indicating if more items exist in either direction. */
export type WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Provides access to fields of the &quot;Infos&quot; ACF Field Group via the &quot;infos&quot; field */
export type WithAcfInfos = {
  /** Fields of the Infos ACF Field Group */
  infos?: Maybe<Infos>;
};

/** The writing setting type */
export type WritingSettings = Node & {
  __typename?: 'WritingSettings';
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the settings group. */
  id: Scalars['ID'];
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

/** A block used for editing the site */
export type YoastFaqBlock = EditorBlock & {
  __typename?: 'YoastFaqBlock';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the YoastFaqBlock Block Type */
  attributes?: Maybe<YoastFaqBlockAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the YoastFaqBlock Block Type */
export type YoastFaqBlockAttributes = {
  __typename?: 'YoastFaqBlockAttributes';
  /** The &quot;additionalListCssClasses&quot; field on the &quot;YoastFaqBlockAttributes&quot; block or block attributes */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;YoastFaqBlockAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;YoastFaqBlockAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;YoastFaqBlockAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;questions&quot; field on the &quot;YoastFaqBlockAttributes&quot; block or block attributes */
  questions?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;style&quot; field on the &quot;YoastFaqBlockAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type YoastHowToBlock = EditorBlock & {
  __typename?: 'YoastHowToBlock';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the YoastHowToBlock Block Type */
  attributes?: Maybe<YoastHowToBlockAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the YoastHowToBlock Block Type */
export type YoastHowToBlockAttributes = {
  __typename?: 'YoastHowToBlockAttributes';
  /** The &quot;additionalListCssClasses&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;days&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  days?: Maybe<Scalars['String']>;
  /** The &quot;defaultDurationText&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  defaultDurationText?: Maybe<Scalars['String']>;
  /** The &quot;description&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  description?: Maybe<Scalars['String']>;
  /** The &quot;durationText&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  durationText?: Maybe<Scalars['String']>;
  /** The &quot;hasDuration&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  hasDuration?: Maybe<Scalars['Boolean']>;
  /** The &quot;hours&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  hours?: Maybe<Scalars['String']>;
  /** The &quot;jsonDescription&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  jsonDescription?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;minutes&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  minutes?: Maybe<Scalars['String']>;
  /** The &quot;steps&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  steps?: Maybe<Scalars['BlockAttributesArray']>;
  /** The &quot;style&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;unorderedList&quot; field on the &quot;YoastHowToBlockAttributes&quot; block or block attributes */
  unorderedList?: Maybe<Scalars['Boolean']>;
};

/** A block used for editing the site */
export type YoastSeoBreadcrumbs = EditorBlock & {
  __typename?: 'YoastSeoBreadcrumbs';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the YoastSeoBreadcrumbs Block Type */
  attributes?: Maybe<YoastSeoBreadcrumbsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
  /** The (GraphQL) type of the block */
  type?: Maybe<Scalars['String']>;
};

/** Attributes of the YoastSeoBreadcrumbs Block Type */
export type YoastSeoBreadcrumbsAttributes = {
  __typename?: 'YoastSeoBreadcrumbsAttributes';
  /** The &quot;className&quot; field on the &quot;YoastSeoBreadcrumbsAttributes&quot; block or block attributes */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;YoastSeoBreadcrumbsAttributes&quot; block or block attributes */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;metadata&quot; field on the &quot;YoastSeoBreadcrumbsAttributes&quot; block or block attributes */
  metadata?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;YoastSeoBreadcrumbsAttributes&quot; block or block attributes */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

export type PageQueryVariables = Exact<{
  uri: Scalars['ID'];
}>;


export type PageQuery = { __typename?: 'RootQuery', page?: { __typename?: 'Page', id: string, content?: string | null, title?: string | null, date?: string | null, uri?: string | null, seo?: { __typename?: 'PostTypeSEO', metaDesc?: string | null } | null } | null };

export type PostQueryVariables = Exact<{
  uri: Scalars['ID'];
}>;


export type PostQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', id: string, content?: string | null, title?: string | null, date?: string | null, uri?: string | null, seo?: { __typename?: 'PostTypeSEO', metaDesc?: string | null } | null, tags?: { __typename?: 'PostToTagConnection', nodes: Array<{ __typename?: 'Tag', name?: string | null, slug?: string | null }> } | null, infos?: { __typename?: 'Infos', author?: string | null, embed?: string | null, pdf?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', fileSize?: number | null, mediaItemUrl?: string | null, mediaType?: string | null, mimeType?: string | null, title?: string | null } } | null } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, slug?: string | null }> } | null } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'RootQuery', generalSettings?: { __typename?: 'GeneralSettings', title?: string | null } | null, posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', uri?: string | null, title?: string | null, date?: string | null, tags?: { __typename?: 'PostToTagConnection', nodes: Array<{ __typename?: 'Tag', name?: string | null, slug?: string | null }> } | null, collaborateurices?: { __typename?: 'PostToCollaborateuriceConnection', nodes: Array<{ __typename?: 'Collaborateurice', name?: string | null, slug?: string | null }> } | null, infos?: { __typename?: 'Infos', author?: string | null, embed?: string | null } | null }> } | null };

export type PostsByTagQueryVariables = Exact<{
  tag?: InputMaybe<Scalars['String']>;
}>;


export type PostsByTagQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', uri?: string | null, title?: string | null, date?: string | null, tags?: { __typename?: 'PostToTagConnection', edges: Array<{ __typename?: 'PostToTagConnectionEdge', node: { __typename?: 'Tag', name?: string | null, slug?: string | null } }> } | null, infos?: { __typename?: 'Infos', author?: string | null, embed?: string | null } | null } }> } | null };


export const Page = gql`
    query Page($uri: ID!) {
  page(id: $uri, idType: URI) {
    id
    content
    title
    date
    uri
    seo {
      metaDesc
    }
  }
}
    `;
export const Post = gql`
    query Post($uri: ID!) {
  post(id: $uri, idType: URI) {
    id
    content
    title
    date
    uri
    seo {
      metaDesc
    }
    tags {
      nodes {
        name
        slug
      }
    }
    infos {
      author
      embed
      pdf {
        node {
          fileSize
          mediaItemUrl
          mediaType
          mimeType
          title
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}
    `;
export const Posts = gql`
    query Posts {
  generalSettings {
    title
  }
  posts(first: 100) {
    nodes {
      uri
      title
      date
      tags {
        nodes {
          name
          slug
        }
      }
      collaborateurices {
        nodes {
          name
          slug
        }
      }
      infos {
        author
        embed
      }
    }
  }
}
    `;
export const PostsByTag = gql`
    query PostsByTag($tag: String) {
  posts(where: {tag: $tag}) {
    edges {
      node {
        uri
        title
        date
        tags {
          edges {
            node {
              name
              slug
            }
          }
        }
        infos {
          author
          embed
        }
      }
    }
  }
}
    `;