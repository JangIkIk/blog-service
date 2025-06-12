
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model UserSubscribe
 * 
 */
export type UserSubscribe = $Result.DefaultSelection<Prisma.$UserSubscribePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PostTag
 * 
 */
export type PostTag = $Result.DefaultSelection<Prisma.$PostTagPayload>
/**
 * Model PostCategorie
 * 
 */
export type PostCategorie = $Result.DefaultSelection<Prisma.$PostCategoriePayload>
/**
 * Model PostComment
 * 
 */
export type PostComment = $Result.DefaultSelection<Prisma.$PostCommentPayload>
/**
 * Model PostTemp
 * 
 */
export type PostTemp = $Result.DefaultSelection<Prisma.$PostTempPayload>
/**
 * Model PostBookmark
 * 
 */
export type PostBookmark = $Result.DefaultSelection<Prisma.$PostBookmarkPayload>
/**
 * Model PostLike
 * 
 */
export type PostLike = $Result.DefaultSelection<Prisma.$PostLikePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Scope: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  FRIENDS: 'FRIENDS'
};

export type Scope = (typeof Scope)[keyof typeof Scope]

}

export type Scope = $Enums.Scope

export const Scope: typeof $Enums.Scope

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscribe`: Exposes CRUD operations for the **UserSubscribe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscribes
    * const userSubscribes = await prisma.userSubscribe.findMany()
    * ```
    */
  get userSubscribe(): Prisma.UserSubscribeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTags
    * const postTags = await prisma.postTag.findMany()
    * ```
    */
  get postTag(): Prisma.PostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postCategorie`: Exposes CRUD operations for the **PostCategorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCategories
    * const postCategories = await prisma.postCategorie.findMany()
    * ```
    */
  get postCategorie(): Prisma.PostCategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postComment`: Exposes CRUD operations for the **PostComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostComments
    * const postComments = await prisma.postComment.findMany()
    * ```
    */
  get postComment(): Prisma.PostCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTemp`: Exposes CRUD operations for the **PostTemp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTemps
    * const postTemps = await prisma.postTemp.findMany()
    * ```
    */
  get postTemp(): Prisma.PostTempDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postBookmark`: Exposes CRUD operations for the **PostBookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostBookmarks
    * const postBookmarks = await prisma.postBookmark.findMany()
    * ```
    */
  get postBookmark(): Prisma.PostBookmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLike`: Exposes CRUD operations for the **PostLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLike.findMany()
    * ```
    */
  get postLike(): Prisma.PostLikeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    UserSubscribe: 'UserSubscribe',
    Post: 'Post',
    Tag: 'Tag',
    PostTag: 'PostTag',
    PostCategorie: 'PostCategorie',
    PostComment: 'PostComment',
    PostTemp: 'PostTemp',
    PostBookmark: 'PostBookmark',
    PostLike: 'PostLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "userSubscribe" | "post" | "tag" | "postTag" | "postCategorie" | "postComment" | "postTemp" | "postBookmark" | "postLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      UserSubscribe: {
        payload: Prisma.$UserSubscribePayload<ExtArgs>
        fields: Prisma.UserSubscribeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscribeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscribeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>
          }
          findFirst: {
            args: Prisma.UserSubscribeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscribeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>
          }
          findMany: {
            args: Prisma.UserSubscribeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>[]
          }
          create: {
            args: Prisma.UserSubscribeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>
          }
          createMany: {
            args: Prisma.UserSubscribeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscribeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>[]
          }
          delete: {
            args: Prisma.UserSubscribeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>
          }
          update: {
            args: Prisma.UserSubscribeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>
          }
          deleteMany: {
            args: Prisma.UserSubscribeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscribeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscribeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>[]
          }
          upsert: {
            args: Prisma.UserSubscribeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscribePayload>
          }
          aggregate: {
            args: Prisma.UserSubscribeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscribe>
          }
          groupBy: {
            args: Prisma.UserSubscribeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscribeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscribeCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscribeCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      PostTag: {
        payload: Prisma.$PostTagPayload<ExtArgs>
        fields: Prisma.PostTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findFirst: {
            args: Prisma.PostTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findMany: {
            args: Prisma.PostTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          create: {
            args: Prisma.PostTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          createMany: {
            args: Prisma.PostTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          delete: {
            args: Prisma.PostTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          update: {
            args: Prisma.PostTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          deleteMany: {
            args: Prisma.PostTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          upsert: {
            args: Prisma.PostTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          aggregate: {
            args: Prisma.PostTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTag>
          }
          groupBy: {
            args: Prisma.PostTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTagCountArgs<ExtArgs>
            result: $Utils.Optional<PostTagCountAggregateOutputType> | number
          }
        }
      }
      PostCategorie: {
        payload: Prisma.$PostCategoriePayload<ExtArgs>
        fields: Prisma.PostCategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>
          }
          findFirst: {
            args: Prisma.PostCategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>
          }
          findMany: {
            args: Prisma.PostCategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>[]
          }
          create: {
            args: Prisma.PostCategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>
          }
          createMany: {
            args: Prisma.PostCategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>[]
          }
          delete: {
            args: Prisma.PostCategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>
          }
          update: {
            args: Prisma.PostCategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>
          }
          deleteMany: {
            args: Prisma.PostCategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>[]
          }
          upsert: {
            args: Prisma.PostCategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoriePayload>
          }
          aggregate: {
            args: Prisma.PostCategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostCategorie>
          }
          groupBy: {
            args: Prisma.PostCategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCategorieCountArgs<ExtArgs>
            result: $Utils.Optional<PostCategorieCountAggregateOutputType> | number
          }
        }
      }
      PostComment: {
        payload: Prisma.$PostCommentPayload<ExtArgs>
        fields: Prisma.PostCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          findFirst: {
            args: Prisma.PostCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          findMany: {
            args: Prisma.PostCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          create: {
            args: Prisma.PostCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          createMany: {
            args: Prisma.PostCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          delete: {
            args: Prisma.PostCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          update: {
            args: Prisma.PostCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          aggregate: {
            args: Prisma.PostCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostComment>
          }
          groupBy: {
            args: Prisma.PostCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentCountAggregateOutputType> | number
          }
        }
      }
      PostTemp: {
        payload: Prisma.$PostTempPayload<ExtArgs>
        fields: Prisma.PostTempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          findFirst: {
            args: Prisma.PostTempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          findMany: {
            args: Prisma.PostTempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>[]
          }
          create: {
            args: Prisma.PostTempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          createMany: {
            args: Prisma.PostTempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>[]
          }
          delete: {
            args: Prisma.PostTempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          update: {
            args: Prisma.PostTempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          deleteMany: {
            args: Prisma.PostTempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTempUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>[]
          }
          upsert: {
            args: Prisma.PostTempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          aggregate: {
            args: Prisma.PostTempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTemp>
          }
          groupBy: {
            args: Prisma.PostTempGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTempGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTempCountArgs<ExtArgs>
            result: $Utils.Optional<PostTempCountAggregateOutputType> | number
          }
        }
      }
      PostBookmark: {
        payload: Prisma.$PostBookmarkPayload<ExtArgs>
        fields: Prisma.PostBookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostBookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostBookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>
          }
          findFirst: {
            args: Prisma.PostBookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostBookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>
          }
          findMany: {
            args: Prisma.PostBookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>[]
          }
          create: {
            args: Prisma.PostBookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>
          }
          createMany: {
            args: Prisma.PostBookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostBookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>[]
          }
          delete: {
            args: Prisma.PostBookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>
          }
          update: {
            args: Prisma.PostBookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>
          }
          deleteMany: {
            args: Prisma.PostBookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostBookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostBookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>[]
          }
          upsert: {
            args: Prisma.PostBookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBookmarkPayload>
          }
          aggregate: {
            args: Prisma.PostBookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostBookmark>
          }
          groupBy: {
            args: Prisma.PostBookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostBookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostBookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<PostBookmarkCountAggregateOutputType> | number
          }
        }
      }
      PostLike: {
        payload: Prisma.$PostLikePayload<ExtArgs>
        fields: Prisma.PostLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findFirst: {
            args: Prisma.PostLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findMany: {
            args: Prisma.PostLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          create: {
            args: Prisma.PostLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          createMany: {
            args: Prisma.PostLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          delete: {
            args: Prisma.PostLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          update: {
            args: Prisma.PostLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          deleteMany: {
            args: Prisma.PostLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          upsert: {
            args: Prisma.PostLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          aggregate: {
            args: Prisma.PostLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLike>
          }
          groupBy: {
            args: Prisma.PostLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikeCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    userSubscribe?: UserSubscribeOmit
    post?: PostOmit
    tag?: TagOmit
    postTag?: PostTagOmit
    postCategorie?: PostCategorieOmit
    postComment?: PostCommentOmit
    postTemp?: PostTempOmit
    postBookmark?: PostBookmarkOmit
    postLike?: PostLikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
    postCategories: number
    postComments: number
    subscribing: number
    subscribers: number
    postTemps: number
    postBookmarks: number
    postLikes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    postCategories?: boolean | UserCountOutputTypeCountPostCategoriesArgs
    postComments?: boolean | UserCountOutputTypeCountPostCommentsArgs
    subscribing?: boolean | UserCountOutputTypeCountSubscribingArgs
    subscribers?: boolean | UserCountOutputTypeCountSubscribersArgs
    postTemps?: boolean | UserCountOutputTypeCountPostTempsArgs
    postBookmarks?: boolean | UserCountOutputTypeCountPostBookmarksArgs
    postLikes?: boolean | UserCountOutputTypeCountPostLikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCategorieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscribingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscribeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscribeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostTempsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTempWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostBookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postTags: number
    postComments: number
    postBookmarks: number
    postLikes: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postTags?: boolean | PostCountOutputTypeCountPostTagsArgs
    postComments?: boolean | PostCountOutputTypeCountPostCommentsArgs
    postBookmarks?: boolean | PostCountOutputTypeCountPostBookmarksArgs
    postLikes?: boolean | PostCountOutputTypeCountPostLikesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostBookmarkWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    postTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postTags?: boolean | TagCountOutputTypeCountPostTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    imageCover: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    imageCover: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    imageCover: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    imageCover?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    imageCover?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    imageCover?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    imageCover: string | null
    createdAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    imageCover?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postCategories?: boolean | User$postCategoriesArgs<ExtArgs>
    postComments?: boolean | User$postCommentsArgs<ExtArgs>
    subscribing?: boolean | User$subscribingArgs<ExtArgs>
    subscribers?: boolean | User$subscribersArgs<ExtArgs>
    postTemps?: boolean | User$postTempsArgs<ExtArgs>
    postBookmarks?: boolean | User$postBookmarksArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    imageCover?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    imageCover?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    imageCover?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "imageCover" | "createdAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postCategories?: boolean | User$postCategoriesArgs<ExtArgs>
    postComments?: boolean | User$postCommentsArgs<ExtArgs>
    subscribing?: boolean | User$subscribingArgs<ExtArgs>
    subscribers?: boolean | User$subscribersArgs<ExtArgs>
    postTemps?: boolean | User$postTempsArgs<ExtArgs>
    postBookmarks?: boolean | User$postBookmarksArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      postCategories: Prisma.$PostCategoriePayload<ExtArgs>[]
      postComments: Prisma.$PostCommentPayload<ExtArgs>[]
      subscribing: Prisma.$UserSubscribePayload<ExtArgs>[]
      subscribers: Prisma.$UserSubscribePayload<ExtArgs>[]
      postTemps: Prisma.$PostTempPayload<ExtArgs>[]
      postBookmarks: Prisma.$PostBookmarkPayload<ExtArgs>[]
      postLikes: Prisma.$PostLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      imageCover: string | null
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postCategories<T extends User$postCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$postCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postComments<T extends User$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscribing<T extends User$subscribingArgs<ExtArgs> = {}>(args?: Subset<T, User$subscribingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscribers<T extends User$subscribersArgs<ExtArgs> = {}>(args?: Subset<T, User$subscribersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postTemps<T extends User$postTempsArgs<ExtArgs> = {}>(args?: Subset<T, User$postTempsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postBookmarks<T extends User$postBookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$postBookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postLikes<T extends User$postLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$postLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly imageCover: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.postCategories
   */
  export type User$postCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    where?: PostCategorieWhereInput
    orderBy?: PostCategorieOrderByWithRelationInput | PostCategorieOrderByWithRelationInput[]
    cursor?: PostCategorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCategorieScalarFieldEnum | PostCategorieScalarFieldEnum[]
  }

  /**
   * User.postComments
   */
  export type User$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    cursor?: PostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * User.subscribing
   */
  export type User$subscribingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    where?: UserSubscribeWhereInput
    orderBy?: UserSubscribeOrderByWithRelationInput | UserSubscribeOrderByWithRelationInput[]
    cursor?: UserSubscribeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscribeScalarFieldEnum | UserSubscribeScalarFieldEnum[]
  }

  /**
   * User.subscribers
   */
  export type User$subscribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    where?: UserSubscribeWhereInput
    orderBy?: UserSubscribeOrderByWithRelationInput | UserSubscribeOrderByWithRelationInput[]
    cursor?: UserSubscribeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscribeScalarFieldEnum | UserSubscribeScalarFieldEnum[]
  }

  /**
   * User.postTemps
   */
  export type User$postTempsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    where?: PostTempWhereInput
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    cursor?: PostTempWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * User.postBookmarks
   */
  export type User$postBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    where?: PostBookmarkWhereInput
    orderBy?: PostBookmarkOrderByWithRelationInput | PostBookmarkOrderByWithRelationInput[]
    cursor?: PostBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostBookmarkScalarFieldEnum | PostBookmarkScalarFieldEnum[]
  }

  /**
   * User.postLikes
   */
  export type User$postLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    userId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    userId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    userId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    userId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    userId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    userId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    userId: string
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    userId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "userId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      userId: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    expires: Date | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    expires: Date | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    expires: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    expires?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    expires?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    expires?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    expires: Date
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    expires?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    expires?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    expires?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    expires?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "expires" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      expires: Date
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model UserSubscribe
   */

  export type AggregateUserSubscribe = {
    _count: UserSubscribeCountAggregateOutputType | null
    _avg: UserSubscribeAvgAggregateOutputType | null
    _sum: UserSubscribeSumAggregateOutputType | null
    _min: UserSubscribeMinAggregateOutputType | null
    _max: UserSubscribeMaxAggregateOutputType | null
  }

  export type UserSubscribeAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSubscribeSumAggregateOutputType = {
    id: number | null
  }

  export type UserSubscribeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    subscriberId: string | null
    subscribedToId: string | null
  }

  export type UserSubscribeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    subscriberId: string | null
    subscribedToId: string | null
  }

  export type UserSubscribeCountAggregateOutputType = {
    id: number
    createdAt: number
    subscriberId: number
    subscribedToId: number
    _all: number
  }


  export type UserSubscribeAvgAggregateInputType = {
    id?: true
  }

  export type UserSubscribeSumAggregateInputType = {
    id?: true
  }

  export type UserSubscribeMinAggregateInputType = {
    id?: true
    createdAt?: true
    subscriberId?: true
    subscribedToId?: true
  }

  export type UserSubscribeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    subscriberId?: true
    subscribedToId?: true
  }

  export type UserSubscribeCountAggregateInputType = {
    id?: true
    createdAt?: true
    subscriberId?: true
    subscribedToId?: true
    _all?: true
  }

  export type UserSubscribeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscribe to aggregate.
     */
    where?: UserSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscribes to fetch.
     */
    orderBy?: UserSubscribeOrderByWithRelationInput | UserSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscribes
    **/
    _count?: true | UserSubscribeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSubscribeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSubscribeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscribeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscribeMaxAggregateInputType
  }

  export type GetUserSubscribeAggregateType<T extends UserSubscribeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscribe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscribe[P]>
      : GetScalarType<T[P], AggregateUserSubscribe[P]>
  }




  export type UserSubscribeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscribeWhereInput
    orderBy?: UserSubscribeOrderByWithAggregationInput | UserSubscribeOrderByWithAggregationInput[]
    by: UserSubscribeScalarFieldEnum[] | UserSubscribeScalarFieldEnum
    having?: UserSubscribeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscribeCountAggregateInputType | true
    _avg?: UserSubscribeAvgAggregateInputType
    _sum?: UserSubscribeSumAggregateInputType
    _min?: UserSubscribeMinAggregateInputType
    _max?: UserSubscribeMaxAggregateInputType
  }

  export type UserSubscribeGroupByOutputType = {
    id: number
    createdAt: Date
    subscriberId: string
    subscribedToId: string
    _count: UserSubscribeCountAggregateOutputType | null
    _avg: UserSubscribeAvgAggregateOutputType | null
    _sum: UserSubscribeSumAggregateOutputType | null
    _min: UserSubscribeMinAggregateOutputType | null
    _max: UserSubscribeMaxAggregateOutputType | null
  }

  type GetUserSubscribeGroupByPayload<T extends UserSubscribeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscribeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscribeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscribeGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscribeGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscribeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    subscriberId?: boolean
    subscribedToId?: boolean
    subscriber?: boolean | UserDefaultArgs<ExtArgs>
    subscribedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscribe"]>

  export type UserSubscribeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    subscriberId?: boolean
    subscribedToId?: boolean
    subscriber?: boolean | UserDefaultArgs<ExtArgs>
    subscribedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscribe"]>

  export type UserSubscribeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    subscriberId?: boolean
    subscribedToId?: boolean
    subscriber?: boolean | UserDefaultArgs<ExtArgs>
    subscribedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscribe"]>

  export type UserSubscribeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    subscriberId?: boolean
    subscribedToId?: boolean
  }

  export type UserSubscribeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "subscriberId" | "subscribedToId", ExtArgs["result"]["userSubscribe"]>
  export type UserSubscribeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriber?: boolean | UserDefaultArgs<ExtArgs>
    subscribedTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscribeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriber?: boolean | UserDefaultArgs<ExtArgs>
    subscribedTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscribeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriber?: boolean | UserDefaultArgs<ExtArgs>
    subscribedTo?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSubscribePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscribe"
    objects: {
      subscriber: Prisma.$UserPayload<ExtArgs>
      subscribedTo: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      subscriberId: string
      subscribedToId: string
    }, ExtArgs["result"]["userSubscribe"]>
    composites: {}
  }

  type UserSubscribeGetPayload<S extends boolean | null | undefined | UserSubscribeDefaultArgs> = $Result.GetResult<Prisma.$UserSubscribePayload, S>

  type UserSubscribeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscribeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscribeCountAggregateInputType | true
    }

  export interface UserSubscribeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscribe'], meta: { name: 'UserSubscribe' } }
    /**
     * Find zero or one UserSubscribe that matches the filter.
     * @param {UserSubscribeFindUniqueArgs} args - Arguments to find a UserSubscribe
     * @example
     * // Get one UserSubscribe
     * const userSubscribe = await prisma.userSubscribe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscribeFindUniqueArgs>(args: SelectSubset<T, UserSubscribeFindUniqueArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscribe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscribeFindUniqueOrThrowArgs} args - Arguments to find a UserSubscribe
     * @example
     * // Get one UserSubscribe
     * const userSubscribe = await prisma.userSubscribe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscribeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscribeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscribe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeFindFirstArgs} args - Arguments to find a UserSubscribe
     * @example
     * // Get one UserSubscribe
     * const userSubscribe = await prisma.userSubscribe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscribeFindFirstArgs>(args?: SelectSubset<T, UserSubscribeFindFirstArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscribe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeFindFirstOrThrowArgs} args - Arguments to find a UserSubscribe
     * @example
     * // Get one UserSubscribe
     * const userSubscribe = await prisma.userSubscribe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscribeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscribeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscribes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscribes
     * const userSubscribes = await prisma.userSubscribe.findMany()
     * 
     * // Get first 10 UserSubscribes
     * const userSubscribes = await prisma.userSubscribe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscribeWithIdOnly = await prisma.userSubscribe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscribeFindManyArgs>(args?: SelectSubset<T, UserSubscribeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscribe.
     * @param {UserSubscribeCreateArgs} args - Arguments to create a UserSubscribe.
     * @example
     * // Create one UserSubscribe
     * const UserSubscribe = await prisma.userSubscribe.create({
     *   data: {
     *     // ... data to create a UserSubscribe
     *   }
     * })
     * 
     */
    create<T extends UserSubscribeCreateArgs>(args: SelectSubset<T, UserSubscribeCreateArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscribes.
     * @param {UserSubscribeCreateManyArgs} args - Arguments to create many UserSubscribes.
     * @example
     * // Create many UserSubscribes
     * const userSubscribe = await prisma.userSubscribe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscribeCreateManyArgs>(args?: SelectSubset<T, UserSubscribeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscribes and returns the data saved in the database.
     * @param {UserSubscribeCreateManyAndReturnArgs} args - Arguments to create many UserSubscribes.
     * @example
     * // Create many UserSubscribes
     * const userSubscribe = await prisma.userSubscribe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscribes and only return the `id`
     * const userSubscribeWithIdOnly = await prisma.userSubscribe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscribeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscribeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscribe.
     * @param {UserSubscribeDeleteArgs} args - Arguments to delete one UserSubscribe.
     * @example
     * // Delete one UserSubscribe
     * const UserSubscribe = await prisma.userSubscribe.delete({
     *   where: {
     *     // ... filter to delete one UserSubscribe
     *   }
     * })
     * 
     */
    delete<T extends UserSubscribeDeleteArgs>(args: SelectSubset<T, UserSubscribeDeleteArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscribe.
     * @param {UserSubscribeUpdateArgs} args - Arguments to update one UserSubscribe.
     * @example
     * // Update one UserSubscribe
     * const userSubscribe = await prisma.userSubscribe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscribeUpdateArgs>(args: SelectSubset<T, UserSubscribeUpdateArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscribes.
     * @param {UserSubscribeDeleteManyArgs} args - Arguments to filter UserSubscribes to delete.
     * @example
     * // Delete a few UserSubscribes
     * const { count } = await prisma.userSubscribe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscribeDeleteManyArgs>(args?: SelectSubset<T, UserSubscribeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscribes
     * const userSubscribe = await prisma.userSubscribe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscribeUpdateManyArgs>(args: SelectSubset<T, UserSubscribeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscribes and returns the data updated in the database.
     * @param {UserSubscribeUpdateManyAndReturnArgs} args - Arguments to update many UserSubscribes.
     * @example
     * // Update many UserSubscribes
     * const userSubscribe = await prisma.userSubscribe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscribes and only return the `id`
     * const userSubscribeWithIdOnly = await prisma.userSubscribe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSubscribeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscribeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscribe.
     * @param {UserSubscribeUpsertArgs} args - Arguments to update or create a UserSubscribe.
     * @example
     * // Update or create a UserSubscribe
     * const userSubscribe = await prisma.userSubscribe.upsert({
     *   create: {
     *     // ... data to create a UserSubscribe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscribe we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscribeUpsertArgs>(args: SelectSubset<T, UserSubscribeUpsertArgs<ExtArgs>>): Prisma__UserSubscribeClient<$Result.GetResult<Prisma.$UserSubscribePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeCountArgs} args - Arguments to filter UserSubscribes to count.
     * @example
     * // Count the number of UserSubscribes
     * const count = await prisma.userSubscribe.count({
     *   where: {
     *     // ... the filter for the UserSubscribes we want to count
     *   }
     * })
    **/
    count<T extends UserSubscribeCountArgs>(
      args?: Subset<T, UserSubscribeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscribeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSubscribeAggregateArgs>(args: Subset<T, UserSubscribeAggregateArgs>): Prisma.PrismaPromise<GetUserSubscribeAggregateType<T>>

    /**
     * Group by UserSubscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscribeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSubscribeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscribeGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscribeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSubscribeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscribeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscribe model
   */
  readonly fields: UserSubscribeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscribe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscribeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriber<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscribedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSubscribe model
   */
  interface UserSubscribeFieldRefs {
    readonly id: FieldRef<"UserSubscribe", 'Int'>
    readonly createdAt: FieldRef<"UserSubscribe", 'DateTime'>
    readonly subscriberId: FieldRef<"UserSubscribe", 'String'>
    readonly subscribedToId: FieldRef<"UserSubscribe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscribe findUnique
   */
  export type UserSubscribeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscribe to fetch.
     */
    where: UserSubscribeWhereUniqueInput
  }

  /**
   * UserSubscribe findUniqueOrThrow
   */
  export type UserSubscribeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscribe to fetch.
     */
    where: UserSubscribeWhereUniqueInput
  }

  /**
   * UserSubscribe findFirst
   */
  export type UserSubscribeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscribe to fetch.
     */
    where?: UserSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscribes to fetch.
     */
    orderBy?: UserSubscribeOrderByWithRelationInput | UserSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscribes.
     */
    cursor?: UserSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscribes.
     */
    distinct?: UserSubscribeScalarFieldEnum | UserSubscribeScalarFieldEnum[]
  }

  /**
   * UserSubscribe findFirstOrThrow
   */
  export type UserSubscribeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscribe to fetch.
     */
    where?: UserSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscribes to fetch.
     */
    orderBy?: UserSubscribeOrderByWithRelationInput | UserSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscribes.
     */
    cursor?: UserSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscribes.
     */
    distinct?: UserSubscribeScalarFieldEnum | UserSubscribeScalarFieldEnum[]
  }

  /**
   * UserSubscribe findMany
   */
  export type UserSubscribeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscribes to fetch.
     */
    where?: UserSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscribes to fetch.
     */
    orderBy?: UserSubscribeOrderByWithRelationInput | UserSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscribes.
     */
    cursor?: UserSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscribes.
     */
    skip?: number
    distinct?: UserSubscribeScalarFieldEnum | UserSubscribeScalarFieldEnum[]
  }

  /**
   * UserSubscribe create
   */
  export type UserSubscribeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscribe.
     */
    data: XOR<UserSubscribeCreateInput, UserSubscribeUncheckedCreateInput>
  }

  /**
   * UserSubscribe createMany
   */
  export type UserSubscribeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscribes.
     */
    data: UserSubscribeCreateManyInput | UserSubscribeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscribe createManyAndReturn
   */
  export type UserSubscribeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscribes.
     */
    data: UserSubscribeCreateManyInput | UserSubscribeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscribe update
   */
  export type UserSubscribeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscribe.
     */
    data: XOR<UserSubscribeUpdateInput, UserSubscribeUncheckedUpdateInput>
    /**
     * Choose, which UserSubscribe to update.
     */
    where: UserSubscribeWhereUniqueInput
  }

  /**
   * UserSubscribe updateMany
   */
  export type UserSubscribeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscribes.
     */
    data: XOR<UserSubscribeUpdateManyMutationInput, UserSubscribeUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscribes to update
     */
    where?: UserSubscribeWhereInput
    /**
     * Limit how many UserSubscribes to update.
     */
    limit?: number
  }

  /**
   * UserSubscribe updateManyAndReturn
   */
  export type UserSubscribeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscribes.
     */
    data: XOR<UserSubscribeUpdateManyMutationInput, UserSubscribeUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscribes to update
     */
    where?: UserSubscribeWhereInput
    /**
     * Limit how many UserSubscribes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscribe upsert
   */
  export type UserSubscribeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscribe to update in case it exists.
     */
    where: UserSubscribeWhereUniqueInput
    /**
     * In case the UserSubscribe found by the `where` argument doesn't exist, create a new UserSubscribe with this data.
     */
    create: XOR<UserSubscribeCreateInput, UserSubscribeUncheckedCreateInput>
    /**
     * In case the UserSubscribe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscribeUpdateInput, UserSubscribeUncheckedUpdateInput>
  }

  /**
   * UserSubscribe delete
   */
  export type UserSubscribeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
    /**
     * Filter which UserSubscribe to delete.
     */
    where: UserSubscribeWhereUniqueInput
  }

  /**
   * UserSubscribe deleteMany
   */
  export type UserSubscribeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscribes to delete
     */
    where?: UserSubscribeWhereInput
    /**
     * Limit how many UserSubscribes to delete.
     */
    limit?: number
  }

  /**
   * UserSubscribe without action
   */
  export type UserSubscribeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscribe
     */
    select?: UserSubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscribe
     */
    omit?: UserSubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscribeInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    aiContent: string | null
    thumbnailImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    scope: $Enums.Scope | null
    userId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    aiContent: string | null
    thumbnailImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    scope: $Enums.Scope | null
    userId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    aiContent: number
    thumbnailImage: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    scope: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    aiContent?: true
    thumbnailImage?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    scope?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    aiContent?: true
    thumbnailImage?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    scope?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    aiContent?: true
    thumbnailImage?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    scope?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string
    aiContent: string | null
    thumbnailImage: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    scope: $Enums.Scope
    userId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    aiContent?: boolean
    thumbnailImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    scope?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    postTags?: boolean | Post$postTagsArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    postBookmarks?: boolean | Post$postBookmarksArgs<ExtArgs>
    postLikes?: boolean | Post$postLikesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    aiContent?: boolean
    thumbnailImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    scope?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    aiContent?: boolean
    thumbnailImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    scope?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    aiContent?: boolean
    thumbnailImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    scope?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "aiContent" | "thumbnailImage" | "createdAt" | "updatedAt" | "deletedAt" | "scope" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    postTags?: boolean | Post$postTagsArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    postBookmarks?: boolean | Post$postBookmarksArgs<ExtArgs>
    postLikes?: boolean | Post$postLikesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      postTags: Prisma.$PostTagPayload<ExtArgs>[]
      postComments: Prisma.$PostCommentPayload<ExtArgs>[]
      postBookmarks: Prisma.$PostBookmarkPayload<ExtArgs>[]
      postLikes: Prisma.$PostLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      aiContent: string | null
      thumbnailImage: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      scope: $Enums.Scope
      userId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    postTags<T extends Post$postTagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$postTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postComments<T extends Post$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postBookmarks<T extends Post$postBookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Post$postBookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postLikes<T extends Post$postLikesArgs<ExtArgs> = {}>(args?: Subset<T, Post$postLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly aiContent: FieldRef<"Post", 'String'>
    readonly thumbnailImage: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly deletedAt: FieldRef<"Post", 'DateTime'>
    readonly scope: FieldRef<"Post", 'Scope'>
    readonly userId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.postTags
   */
  export type Post$postTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Post.postComments
   */
  export type Post$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    cursor?: PostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * Post.postBookmarks
   */
  export type Post$postBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    where?: PostBookmarkWhereInput
    orderBy?: PostBookmarkOrderByWithRelationInput | PostBookmarkOrderByWithRelationInput[]
    cursor?: PostBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostBookmarkScalarFieldEnum | PostBookmarkScalarFieldEnum[]
  }

  /**
   * Post.postLikes
   */
  export type Post$postLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    postTags?: boolean | Tag$postTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postTags?: boolean | Tag$postTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      postTags: Prisma.$PostTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postTags<T extends Tag$postTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.postTags
   */
  export type Tag$postTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model PostTag
   */

  export type AggregatePostTag = {
    _count: PostTagCountAggregateOutputType | null
    _avg: PostTagAvgAggregateOutputType | null
    _sum: PostTagSumAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  export type PostTagAvgAggregateOutputType = {
    tagId: number | null
    postId: number | null
  }

  export type PostTagSumAggregateOutputType = {
    tagId: number | null
    postId: number | null
  }

  export type PostTagMinAggregateOutputType = {
    tagId: number | null
    postId: number | null
    createdAt: Date | null
  }

  export type PostTagMaxAggregateOutputType = {
    tagId: number | null
    postId: number | null
    createdAt: Date | null
  }

  export type PostTagCountAggregateOutputType = {
    tagId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type PostTagAvgAggregateInputType = {
    tagId?: true
    postId?: true
  }

  export type PostTagSumAggregateInputType = {
    tagId?: true
    postId?: true
  }

  export type PostTagMinAggregateInputType = {
    tagId?: true
    postId?: true
    createdAt?: true
  }

  export type PostTagMaxAggregateInputType = {
    tagId?: true
    postId?: true
    createdAt?: true
  }

  export type PostTagCountAggregateInputType = {
    tagId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type PostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTag to aggregate.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTags
    **/
    _count?: true | PostTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagMaxAggregateInputType
  }

  export type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTag[P]>
      : GetScalarType<T[P], AggregatePostTag[P]>
  }




  export type PostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[]
    by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum
    having?: PostTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagCountAggregateInputType | true
    _avg?: PostTagAvgAggregateInputType
    _sum?: PostTagSumAggregateInputType
    _min?: PostTagMinAggregateInputType
    _max?: PostTagMaxAggregateInputType
  }

  export type PostTagGroupByOutputType = {
    tagId: number
    postId: number
    createdAt: Date
    _count: PostTagCountAggregateOutputType | null
    _avg: PostTagAvgAggregateOutputType | null
    _sum: PostTagSumAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTagGroupByOutputType[P]>
            : GetScalarType<T[P], PostTagGroupByOutputType[P]>
        }
      >
    >


  export type PostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagId?: boolean
    postId?: boolean
    createdAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagId?: boolean
    postId?: boolean
    createdAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagId?: boolean
    postId?: boolean
    createdAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectScalar = {
    tagId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type PostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tagId" | "postId" | "createdAt", ExtArgs["result"]["postTag"]>
  export type PostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTag"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tagId: number
      postId: number
      createdAt: Date
    }, ExtArgs["result"]["postTag"]>
    composites: {}
  }

  type PostTagGetPayload<S extends boolean | null | undefined | PostTagDefaultArgs> = $Result.GetResult<Prisma.$PostTagPayload, S>

  type PostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTagCountAggregateInputType | true
    }

  export interface PostTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTag'], meta: { name: 'PostTag' } }
    /**
     * Find zero or one PostTag that matches the filter.
     * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFindUniqueArgs>(args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFindFirstArgs>(args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTag.findMany()
     * 
     * // Get first 10 PostTags
     * const postTags = await prisma.postTag.findMany({ take: 10 })
     * 
     * // Only select the `tagId`
     * const postTagWithTagIdOnly = await prisma.postTag.findMany({ select: { tagId: true } })
     * 
     */
    findMany<T extends PostTagFindManyArgs>(args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTag.
     * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
     * @example
     * // Create one PostTag
     * const PostTag = await prisma.postTag.create({
     *   data: {
     *     // ... data to create a PostTag
     *   }
     * })
     * 
     */
    create<T extends PostTagCreateArgs>(args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTags.
     * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTagCreateManyArgs>(args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTags and returns the data saved in the database.
     * @param {PostTagCreateManyAndReturnArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTags and only return the `tagId`
     * const postTagWithTagIdOnly = await prisma.postTag.createManyAndReturn({
     *   select: { tagId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTag.
     * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
     * @example
     * // Delete one PostTag
     * const PostTag = await prisma.postTag.delete({
     *   where: {
     *     // ... filter to delete one PostTag
     *   }
     * })
     * 
     */
    delete<T extends PostTagDeleteArgs>(args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTag.
     * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
     * @example
     * // Update one PostTag
     * const postTag = await prisma.postTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTagUpdateArgs>(args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTags.
     * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTagDeleteManyArgs>(args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTagUpdateManyArgs>(args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags and returns the data updated in the database.
     * @param {PostTagUpdateManyAndReturnArgs} args - Arguments to update many PostTags.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTags and only return the `tagId`
     * const postTagWithTagIdOnly = await prisma.postTag.updateManyAndReturn({
     *   select: { tagId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTag.
     * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
     * @example
     * // Update or create a PostTag
     * const postTag = await prisma.postTag.upsert({
     *   create: {
     *     // ... data to create a PostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTag we want to update
     *   }
     * })
     */
    upsert<T extends PostTagUpsertArgs>(args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTag.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagCountArgs>(
      args?: Subset<T, PostTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTagAggregateArgs>(args: Subset<T, PostTagAggregateArgs>): Prisma.PrismaPromise<GetPostTagAggregateType<T>>

    /**
     * Group by PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagGroupByArgs['orderBy'] }
        : { orderBy?: PostTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTag model
   */
  readonly fields: PostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostTag model
   */
  interface PostTagFieldRefs {
    readonly tagId: FieldRef<"PostTag", 'Int'>
    readonly postId: FieldRef<"PostTag", 'Int'>
    readonly createdAt: FieldRef<"PostTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostTag findUnique
   */
  export type PostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findUniqueOrThrow
   */
  export type PostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findFirst
   */
  export type PostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findFirstOrThrow
   */
  export type PostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findMany
   */
  export type PostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag create
   */
  export type PostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTag.
     */
    data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
  }

  /**
   * PostTag createMany
   */
  export type PostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTag createManyAndReturn
   */
  export type PostTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTag update
   */
  export type PostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTag.
     */
    data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
    /**
     * Choose, which PostTag to update.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag updateMany
   */
  export type PostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
  }

  /**
   * PostTag updateManyAndReturn
   */
  export type PostTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTag upsert
   */
  export type PostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTag to update in case it exists.
     */
    where: PostTagWhereUniqueInput
    /**
     * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
     */
    create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
    /**
     * In case the PostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
  }

  /**
   * PostTag delete
   */
  export type PostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter which PostTag to delete.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag deleteMany
   */
  export type PostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number
  }

  /**
   * PostTag without action
   */
  export type PostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
  }


  /**
   * Model PostCategorie
   */

  export type AggregatePostCategorie = {
    _count: PostCategorieCountAggregateOutputType | null
    _avg: PostCategorieAvgAggregateOutputType | null
    _sum: PostCategorieSumAggregateOutputType | null
    _min: PostCategorieMinAggregateOutputType | null
    _max: PostCategorieMaxAggregateOutputType | null
  }

  export type PostCategorieAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type PostCategorieSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type PostCategorieMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sortOrder: number | null
    userId: string | null
  }

  export type PostCategorieMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sortOrder: number | null
    userId: string | null
  }

  export type PostCategorieCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    sortOrder: number
    userId: number
    _all: number
  }


  export type PostCategorieAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type PostCategorieSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type PostCategorieMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    sortOrder?: true
    userId?: true
  }

  export type PostCategorieMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    sortOrder?: true
    userId?: true
  }

  export type PostCategorieCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    sortOrder?: true
    userId?: true
    _all?: true
  }

  export type PostCategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCategorie to aggregate.
     */
    where?: PostCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategorieOrderByWithRelationInput | PostCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostCategories
    **/
    _count?: true | PostCategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCategorieMaxAggregateInputType
  }

  export type GetPostCategorieAggregateType<T extends PostCategorieAggregateArgs> = {
        [P in keyof T & keyof AggregatePostCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostCategorie[P]>
      : GetScalarType<T[P], AggregatePostCategorie[P]>
  }




  export type PostCategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCategorieWhereInput
    orderBy?: PostCategorieOrderByWithAggregationInput | PostCategorieOrderByWithAggregationInput[]
    by: PostCategorieScalarFieldEnum[] | PostCategorieScalarFieldEnum
    having?: PostCategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCategorieCountAggregateInputType | true
    _avg?: PostCategorieAvgAggregateInputType
    _sum?: PostCategorieSumAggregateInputType
    _min?: PostCategorieMinAggregateInputType
    _max?: PostCategorieMaxAggregateInputType
  }

  export type PostCategorieGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date | null
    sortOrder: number
    userId: string
    _count: PostCategorieCountAggregateOutputType | null
    _avg: PostCategorieAvgAggregateOutputType | null
    _sum: PostCategorieSumAggregateOutputType | null
    _min: PostCategorieMinAggregateOutputType | null
    _max: PostCategorieMaxAggregateOutputType | null
  }

  type GetPostCategorieGroupByPayload<T extends PostCategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCategorieGroupByOutputType[P]>
            : GetScalarType<T[P], PostCategorieGroupByOutputType[P]>
        }
      >
    >


  export type PostCategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sortOrder?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCategorie"]>

  export type PostCategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sortOrder?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCategorie"]>

  export type PostCategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sortOrder?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCategorie"]>

  export type PostCategorieSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sortOrder?: boolean
    userId?: boolean
  }

  export type PostCategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "sortOrder" | "userId", ExtArgs["result"]["postCategorie"]>
  export type PostCategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostCategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostCategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostCategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostCategorie"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date | null
      sortOrder: number
      userId: string
    }, ExtArgs["result"]["postCategorie"]>
    composites: {}
  }

  type PostCategorieGetPayload<S extends boolean | null | undefined | PostCategorieDefaultArgs> = $Result.GetResult<Prisma.$PostCategoriePayload, S>

  type PostCategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCategorieCountAggregateInputType | true
    }

  export interface PostCategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostCategorie'], meta: { name: 'PostCategorie' } }
    /**
     * Find zero or one PostCategorie that matches the filter.
     * @param {PostCategorieFindUniqueArgs} args - Arguments to find a PostCategorie
     * @example
     * // Get one PostCategorie
     * const postCategorie = await prisma.postCategorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCategorieFindUniqueArgs>(args: SelectSubset<T, PostCategorieFindUniqueArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostCategorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCategorieFindUniqueOrThrowArgs} args - Arguments to find a PostCategorie
     * @example
     * // Get one PostCategorie
     * const postCategorie = await prisma.postCategorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCategorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieFindFirstArgs} args - Arguments to find a PostCategorie
     * @example
     * // Get one PostCategorie
     * const postCategorie = await prisma.postCategorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCategorieFindFirstArgs>(args?: SelectSubset<T, PostCategorieFindFirstArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCategorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieFindFirstOrThrowArgs} args - Arguments to find a PostCategorie
     * @example
     * // Get one PostCategorie
     * const postCategorie = await prisma.postCategorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCategories
     * const postCategories = await prisma.postCategorie.findMany()
     * 
     * // Get first 10 PostCategories
     * const postCategories = await prisma.postCategorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCategorieWithIdOnly = await prisma.postCategorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostCategorieFindManyArgs>(args?: SelectSubset<T, PostCategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostCategorie.
     * @param {PostCategorieCreateArgs} args - Arguments to create a PostCategorie.
     * @example
     * // Create one PostCategorie
     * const PostCategorie = await prisma.postCategorie.create({
     *   data: {
     *     // ... data to create a PostCategorie
     *   }
     * })
     * 
     */
    create<T extends PostCategorieCreateArgs>(args: SelectSubset<T, PostCategorieCreateArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostCategories.
     * @param {PostCategorieCreateManyArgs} args - Arguments to create many PostCategories.
     * @example
     * // Create many PostCategories
     * const postCategorie = await prisma.postCategorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCategorieCreateManyArgs>(args?: SelectSubset<T, PostCategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostCategories and returns the data saved in the database.
     * @param {PostCategorieCreateManyAndReturnArgs} args - Arguments to create many PostCategories.
     * @example
     * // Create many PostCategories
     * const postCategorie = await prisma.postCategorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostCategories and only return the `id`
     * const postCategorieWithIdOnly = await prisma.postCategorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostCategorie.
     * @param {PostCategorieDeleteArgs} args - Arguments to delete one PostCategorie.
     * @example
     * // Delete one PostCategorie
     * const PostCategorie = await prisma.postCategorie.delete({
     *   where: {
     *     // ... filter to delete one PostCategorie
     *   }
     * })
     * 
     */
    delete<T extends PostCategorieDeleteArgs>(args: SelectSubset<T, PostCategorieDeleteArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostCategorie.
     * @param {PostCategorieUpdateArgs} args - Arguments to update one PostCategorie.
     * @example
     * // Update one PostCategorie
     * const postCategorie = await prisma.postCategorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCategorieUpdateArgs>(args: SelectSubset<T, PostCategorieUpdateArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostCategories.
     * @param {PostCategorieDeleteManyArgs} args - Arguments to filter PostCategories to delete.
     * @example
     * // Delete a few PostCategories
     * const { count } = await prisma.postCategorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCategorieDeleteManyArgs>(args?: SelectSubset<T, PostCategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCategories
     * const postCategorie = await prisma.postCategorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCategorieUpdateManyArgs>(args: SelectSubset<T, PostCategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCategories and returns the data updated in the database.
     * @param {PostCategorieUpdateManyAndReturnArgs} args - Arguments to update many PostCategories.
     * @example
     * // Update many PostCategories
     * const postCategorie = await prisma.postCategorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostCategories and only return the `id`
     * const postCategorieWithIdOnly = await prisma.postCategorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostCategorie.
     * @param {PostCategorieUpsertArgs} args - Arguments to update or create a PostCategorie.
     * @example
     * // Update or create a PostCategorie
     * const postCategorie = await prisma.postCategorie.upsert({
     *   create: {
     *     // ... data to create a PostCategorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCategorie we want to update
     *   }
     * })
     */
    upsert<T extends PostCategorieUpsertArgs>(args: SelectSubset<T, PostCategorieUpsertArgs<ExtArgs>>): Prisma__PostCategorieClient<$Result.GetResult<Prisma.$PostCategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieCountArgs} args - Arguments to filter PostCategories to count.
     * @example
     * // Count the number of PostCategories
     * const count = await prisma.postCategorie.count({
     *   where: {
     *     // ... the filter for the PostCategories we want to count
     *   }
     * })
    **/
    count<T extends PostCategorieCountArgs>(
      args?: Subset<T, PostCategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostCategorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCategorieAggregateArgs>(args: Subset<T, PostCategorieAggregateArgs>): Prisma.PrismaPromise<GetPostCategorieAggregateType<T>>

    /**
     * Group by PostCategorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCategorieGroupByArgs['orderBy'] }
        : { orderBy?: PostCategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostCategorie model
   */
  readonly fields: PostCategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCategorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostCategorie model
   */
  interface PostCategorieFieldRefs {
    readonly id: FieldRef<"PostCategorie", 'Int'>
    readonly name: FieldRef<"PostCategorie", 'String'>
    readonly createdAt: FieldRef<"PostCategorie", 'DateTime'>
    readonly updatedAt: FieldRef<"PostCategorie", 'DateTime'>
    readonly sortOrder: FieldRef<"PostCategorie", 'Int'>
    readonly userId: FieldRef<"PostCategorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostCategorie findUnique
   */
  export type PostCategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * Filter, which PostCategorie to fetch.
     */
    where: PostCategorieWhereUniqueInput
  }

  /**
   * PostCategorie findUniqueOrThrow
   */
  export type PostCategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * Filter, which PostCategorie to fetch.
     */
    where: PostCategorieWhereUniqueInput
  }

  /**
   * PostCategorie findFirst
   */
  export type PostCategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * Filter, which PostCategorie to fetch.
     */
    where?: PostCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategorieOrderByWithRelationInput | PostCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCategories.
     */
    cursor?: PostCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCategories.
     */
    distinct?: PostCategorieScalarFieldEnum | PostCategorieScalarFieldEnum[]
  }

  /**
   * PostCategorie findFirstOrThrow
   */
  export type PostCategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * Filter, which PostCategorie to fetch.
     */
    where?: PostCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategorieOrderByWithRelationInput | PostCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCategories.
     */
    cursor?: PostCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCategories.
     */
    distinct?: PostCategorieScalarFieldEnum | PostCategorieScalarFieldEnum[]
  }

  /**
   * PostCategorie findMany
   */
  export type PostCategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * Filter, which PostCategories to fetch.
     */
    where?: PostCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategorieOrderByWithRelationInput | PostCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostCategories.
     */
    cursor?: PostCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    distinct?: PostCategorieScalarFieldEnum | PostCategorieScalarFieldEnum[]
  }

  /**
   * PostCategorie create
   */
  export type PostCategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a PostCategorie.
     */
    data: XOR<PostCategorieCreateInput, PostCategorieUncheckedCreateInput>
  }

  /**
   * PostCategorie createMany
   */
  export type PostCategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostCategories.
     */
    data: PostCategorieCreateManyInput | PostCategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostCategorie createManyAndReturn
   */
  export type PostCategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * The data used to create many PostCategories.
     */
    data: PostCategorieCreateManyInput | PostCategorieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCategorie update
   */
  export type PostCategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a PostCategorie.
     */
    data: XOR<PostCategorieUpdateInput, PostCategorieUncheckedUpdateInput>
    /**
     * Choose, which PostCategorie to update.
     */
    where: PostCategorieWhereUniqueInput
  }

  /**
   * PostCategorie updateMany
   */
  export type PostCategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostCategories.
     */
    data: XOR<PostCategorieUpdateManyMutationInput, PostCategorieUncheckedUpdateManyInput>
    /**
     * Filter which PostCategories to update
     */
    where?: PostCategorieWhereInput
    /**
     * Limit how many PostCategories to update.
     */
    limit?: number
  }

  /**
   * PostCategorie updateManyAndReturn
   */
  export type PostCategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * The data used to update PostCategories.
     */
    data: XOR<PostCategorieUpdateManyMutationInput, PostCategorieUncheckedUpdateManyInput>
    /**
     * Filter which PostCategories to update
     */
    where?: PostCategorieWhereInput
    /**
     * Limit how many PostCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCategorie upsert
   */
  export type PostCategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the PostCategorie to update in case it exists.
     */
    where: PostCategorieWhereUniqueInput
    /**
     * In case the PostCategorie found by the `where` argument doesn't exist, create a new PostCategorie with this data.
     */
    create: XOR<PostCategorieCreateInput, PostCategorieUncheckedCreateInput>
    /**
     * In case the PostCategorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCategorieUpdateInput, PostCategorieUncheckedUpdateInput>
  }

  /**
   * PostCategorie delete
   */
  export type PostCategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
    /**
     * Filter which PostCategorie to delete.
     */
    where: PostCategorieWhereUniqueInput
  }

  /**
   * PostCategorie deleteMany
   */
  export type PostCategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCategories to delete
     */
    where?: PostCategorieWhereInput
    /**
     * Limit how many PostCategories to delete.
     */
    limit?: number
  }

  /**
   * PostCategorie without action
   */
  export type PostCategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategorie
     */
    select?: PostCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategorie
     */
    omit?: PostCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategorieInclude<ExtArgs> | null
  }


  /**
   * Model PostComment
   */

  export type AggregatePostComment = {
    _count: PostCommentCountAggregateOutputType | null
    _avg: PostCommentAvgAggregateOutputType | null
    _sum: PostCommentSumAggregateOutputType | null
    _min: PostCommentMinAggregateOutputType | null
    _max: PostCommentMaxAggregateOutputType | null
  }

  export type PostCommentAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostCommentSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostCommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type PostCommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type PostCommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    postId: number
    _all: number
  }


  export type PostCommentAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostCommentSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostCommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
  }

  export type PostCommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
  }

  export type PostCommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type PostCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComment to aggregate.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostComments
    **/
    _count?: true | PostCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentMaxAggregateInputType
  }

  export type GetPostCommentAggregateType<T extends PostCommentAggregateArgs> = {
        [P in keyof T & keyof AggregatePostComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostComment[P]>
      : GetScalarType<T[P], AggregatePostComment[P]>
  }




  export type PostCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithAggregationInput | PostCommentOrderByWithAggregationInput[]
    by: PostCommentScalarFieldEnum[] | PostCommentScalarFieldEnum
    having?: PostCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentCountAggregateInputType | true
    _avg?: PostCommentAvgAggregateInputType
    _sum?: PostCommentSumAggregateInputType
    _min?: PostCommentMinAggregateInputType
    _max?: PostCommentMaxAggregateInputType
  }

  export type PostCommentGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date | null
    userId: string
    postId: number
    _count: PostCommentCountAggregateOutputType | null
    _avg: PostCommentAvgAggregateOutputType | null
    _sum: PostCommentSumAggregateOutputType | null
    _min: PostCommentMinAggregateOutputType | null
    _max: PostCommentMaxAggregateOutputType | null
  }

  type GetPostCommentGroupByPayload<T extends PostCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type PostCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "userId" | "postId", ExtArgs["result"]["postComment"]>
  export type PostCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      updatedAt: Date | null
      userId: string
      postId: number
    }, ExtArgs["result"]["postComment"]>
    composites: {}
  }

  type PostCommentGetPayload<S extends boolean | null | undefined | PostCommentDefaultArgs> = $Result.GetResult<Prisma.$PostCommentPayload, S>

  type PostCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentCountAggregateInputType | true
    }

  export interface PostCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostComment'], meta: { name: 'PostComment' } }
    /**
     * Find zero or one PostComment that matches the filter.
     * @param {PostCommentFindUniqueArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentFindUniqueArgs>(args: SelectSubset<T, PostCommentFindUniqueArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentFindUniqueOrThrowArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindFirstArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentFindFirstArgs>(args?: SelectSubset<T, PostCommentFindFirstArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindFirstOrThrowArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostComments
     * const postComments = await prisma.postComment.findMany()
     * 
     * // Get first 10 PostComments
     * const postComments = await prisma.postComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCommentWithIdOnly = await prisma.postComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostCommentFindManyArgs>(args?: SelectSubset<T, PostCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostComment.
     * @param {PostCommentCreateArgs} args - Arguments to create a PostComment.
     * @example
     * // Create one PostComment
     * const PostComment = await prisma.postComment.create({
     *   data: {
     *     // ... data to create a PostComment
     *   }
     * })
     * 
     */
    create<T extends PostCommentCreateArgs>(args: SelectSubset<T, PostCommentCreateArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostComments.
     * @param {PostCommentCreateManyArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComment = await prisma.postComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentCreateManyArgs>(args?: SelectSubset<T, PostCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostComments and returns the data saved in the database.
     * @param {PostCommentCreateManyAndReturnArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComment = await prisma.postComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostComments and only return the `id`
     * const postCommentWithIdOnly = await prisma.postComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostComment.
     * @param {PostCommentDeleteArgs} args - Arguments to delete one PostComment.
     * @example
     * // Delete one PostComment
     * const PostComment = await prisma.postComment.delete({
     *   where: {
     *     // ... filter to delete one PostComment
     *   }
     * })
     * 
     */
    delete<T extends PostCommentDeleteArgs>(args: SelectSubset<T, PostCommentDeleteArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostComment.
     * @param {PostCommentUpdateArgs} args - Arguments to update one PostComment.
     * @example
     * // Update one PostComment
     * const postComment = await prisma.postComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentUpdateArgs>(args: SelectSubset<T, PostCommentUpdateArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostComments.
     * @param {PostCommentDeleteManyArgs} args - Arguments to filter PostComments to delete.
     * @example
     * // Delete a few PostComments
     * const { count } = await prisma.postComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentDeleteManyArgs>(args?: SelectSubset<T, PostCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostComments
     * const postComment = await prisma.postComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentUpdateManyArgs>(args: SelectSubset<T, PostCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments and returns the data updated in the database.
     * @param {PostCommentUpdateManyAndReturnArgs} args - Arguments to update many PostComments.
     * @example
     * // Update many PostComments
     * const postComment = await prisma.postComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostComments and only return the `id`
     * const postCommentWithIdOnly = await prisma.postComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostComment.
     * @param {PostCommentUpsertArgs} args - Arguments to update or create a PostComment.
     * @example
     * // Update or create a PostComment
     * const postComment = await prisma.postComment.upsert({
     *   create: {
     *     // ... data to create a PostComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostComment we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentUpsertArgs>(args: SelectSubset<T, PostCommentUpsertArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentCountArgs} args - Arguments to filter PostComments to count.
     * @example
     * // Count the number of PostComments
     * const count = await prisma.postComment.count({
     *   where: {
     *     // ... the filter for the PostComments we want to count
     *   }
     * })
    **/
    count<T extends PostCommentCountArgs>(
      args?: Subset<T, PostCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentAggregateArgs>(args: Subset<T, PostCommentAggregateArgs>): Prisma.PrismaPromise<GetPostCommentAggregateType<T>>

    /**
     * Group by PostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostComment model
   */
  readonly fields: PostCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostComment model
   */
  interface PostCommentFieldRefs {
    readonly id: FieldRef<"PostComment", 'Int'>
    readonly content: FieldRef<"PostComment", 'String'>
    readonly createdAt: FieldRef<"PostComment", 'DateTime'>
    readonly updatedAt: FieldRef<"PostComment", 'DateTime'>
    readonly userId: FieldRef<"PostComment", 'String'>
    readonly postId: FieldRef<"PostComment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostComment findUnique
   */
  export type PostCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment findUniqueOrThrow
   */
  export type PostCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment findFirst
   */
  export type PostCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * PostComment findFirstOrThrow
   */
  export type PostCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * PostComment findMany
   */
  export type PostCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * PostComment create
   */
  export type PostCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a PostComment.
     */
    data: XOR<PostCommentCreateInput, PostCommentUncheckedCreateInput>
  }

  /**
   * PostComment createMany
   */
  export type PostCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentCreateManyInput | PostCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostComment createManyAndReturn
   */
  export type PostCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentCreateManyInput | PostCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComment update
   */
  export type PostCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a PostComment.
     */
    data: XOR<PostCommentUpdateInput, PostCommentUncheckedUpdateInput>
    /**
     * Choose, which PostComment to update.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment updateMany
   */
  export type PostCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
  }

  /**
   * PostComment updateManyAndReturn
   */
  export type PostCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComment upsert
   */
  export type PostCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the PostComment to update in case it exists.
     */
    where: PostCommentWhereUniqueInput
    /**
     * In case the PostComment found by the `where` argument doesn't exist, create a new PostComment with this data.
     */
    create: XOR<PostCommentCreateInput, PostCommentUncheckedCreateInput>
    /**
     * In case the PostComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentUpdateInput, PostCommentUncheckedUpdateInput>
  }

  /**
   * PostComment delete
   */
  export type PostCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter which PostComment to delete.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment deleteMany
   */
  export type PostCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to delete
     */
    where?: PostCommentWhereInput
    /**
     * Limit how many PostComments to delete.
     */
    limit?: number
  }

  /**
   * PostComment without action
   */
  export type PostCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
  }


  /**
   * Model PostTemp
   */

  export type AggregatePostTemp = {
    _count: PostTempCountAggregateOutputType | null
    _avg: PostTempAvgAggregateOutputType | null
    _sum: PostTempSumAggregateOutputType | null
    _min: PostTempMinAggregateOutputType | null
    _max: PostTempMaxAggregateOutputType | null
  }

  export type PostTempAvgAggregateOutputType = {
    id: number | null
  }

  export type PostTempSumAggregateOutputType = {
    id: number | null
  }

  export type PostTempMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    scope: $Enums.Scope | null
    userId: string | null
  }

  export type PostTempMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    scope: $Enums.Scope | null
    userId: string | null
  }

  export type PostTempCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    scope: number
    userId: number
    _all: number
  }


  export type PostTempAvgAggregateInputType = {
    id?: true
  }

  export type PostTempSumAggregateInputType = {
    id?: true
  }

  export type PostTempMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    scope?: true
    userId?: true
  }

  export type PostTempMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    scope?: true
    userId?: true
  }

  export type PostTempCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    scope?: true
    userId?: true
    _all?: true
  }

  export type PostTempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTemp to aggregate.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTemps
    **/
    _count?: true | PostTempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTempMaxAggregateInputType
  }

  export type GetPostTempAggregateType<T extends PostTempAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTemp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTemp[P]>
      : GetScalarType<T[P], AggregatePostTemp[P]>
  }




  export type PostTempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTempWhereInput
    orderBy?: PostTempOrderByWithAggregationInput | PostTempOrderByWithAggregationInput[]
    by: PostTempScalarFieldEnum[] | PostTempScalarFieldEnum
    having?: PostTempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTempCountAggregateInputType | true
    _avg?: PostTempAvgAggregateInputType
    _sum?: PostTempSumAggregateInputType
    _min?: PostTempMinAggregateInputType
    _max?: PostTempMaxAggregateInputType
  }

  export type PostTempGroupByOutputType = {
    id: number
    title: string
    content: string
    createdAt: Date
    scope: $Enums.Scope
    userId: string
    _count: PostTempCountAggregateOutputType | null
    _avg: PostTempAvgAggregateOutputType | null
    _sum: PostTempSumAggregateOutputType | null
    _min: PostTempMinAggregateOutputType | null
    _max: PostTempMaxAggregateOutputType | null
  }

  type GetPostTempGroupByPayload<T extends PostTempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTempGroupByOutputType[P]>
            : GetScalarType<T[P], PostTempGroupByOutputType[P]>
        }
      >
    >


  export type PostTempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    scope?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTemp"]>

  export type PostTempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    scope?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTemp"]>

  export type PostTempSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    scope?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTemp"]>

  export type PostTempSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    scope?: boolean
    userId?: boolean
  }

  export type PostTempOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "scope" | "userId", ExtArgs["result"]["postTemp"]>
  export type PostTempInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostTempIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostTempIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostTempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTemp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      createdAt: Date
      scope: $Enums.Scope
      userId: string
    }, ExtArgs["result"]["postTemp"]>
    composites: {}
  }

  type PostTempGetPayload<S extends boolean | null | undefined | PostTempDefaultArgs> = $Result.GetResult<Prisma.$PostTempPayload, S>

  type PostTempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTempFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTempCountAggregateInputType | true
    }

  export interface PostTempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTemp'], meta: { name: 'PostTemp' } }
    /**
     * Find zero or one PostTemp that matches the filter.
     * @param {PostTempFindUniqueArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTempFindUniqueArgs>(args: SelectSubset<T, PostTempFindUniqueArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTemp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTempFindUniqueOrThrowArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTempFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTemp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempFindFirstArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTempFindFirstArgs>(args?: SelectSubset<T, PostTempFindFirstArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTemp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempFindFirstOrThrowArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTempFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTempFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTemps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTemps
     * const postTemps = await prisma.postTemp.findMany()
     * 
     * // Get first 10 PostTemps
     * const postTemps = await prisma.postTemp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postTempWithIdOnly = await prisma.postTemp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostTempFindManyArgs>(args?: SelectSubset<T, PostTempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTemp.
     * @param {PostTempCreateArgs} args - Arguments to create a PostTemp.
     * @example
     * // Create one PostTemp
     * const PostTemp = await prisma.postTemp.create({
     *   data: {
     *     // ... data to create a PostTemp
     *   }
     * })
     * 
     */
    create<T extends PostTempCreateArgs>(args: SelectSubset<T, PostTempCreateArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTemps.
     * @param {PostTempCreateManyArgs} args - Arguments to create many PostTemps.
     * @example
     * // Create many PostTemps
     * const postTemp = await prisma.postTemp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTempCreateManyArgs>(args?: SelectSubset<T, PostTempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTemps and returns the data saved in the database.
     * @param {PostTempCreateManyAndReturnArgs} args - Arguments to create many PostTemps.
     * @example
     * // Create many PostTemps
     * const postTemp = await prisma.postTemp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTemps and only return the `id`
     * const postTempWithIdOnly = await prisma.postTemp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTempCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTemp.
     * @param {PostTempDeleteArgs} args - Arguments to delete one PostTemp.
     * @example
     * // Delete one PostTemp
     * const PostTemp = await prisma.postTemp.delete({
     *   where: {
     *     // ... filter to delete one PostTemp
     *   }
     * })
     * 
     */
    delete<T extends PostTempDeleteArgs>(args: SelectSubset<T, PostTempDeleteArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTemp.
     * @param {PostTempUpdateArgs} args - Arguments to update one PostTemp.
     * @example
     * // Update one PostTemp
     * const postTemp = await prisma.postTemp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTempUpdateArgs>(args: SelectSubset<T, PostTempUpdateArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTemps.
     * @param {PostTempDeleteManyArgs} args - Arguments to filter PostTemps to delete.
     * @example
     * // Delete a few PostTemps
     * const { count } = await prisma.postTemp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTempDeleteManyArgs>(args?: SelectSubset<T, PostTempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTemps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTemps
     * const postTemp = await prisma.postTemp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTempUpdateManyArgs>(args: SelectSubset<T, PostTempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTemps and returns the data updated in the database.
     * @param {PostTempUpdateManyAndReturnArgs} args - Arguments to update many PostTemps.
     * @example
     * // Update many PostTemps
     * const postTemp = await prisma.postTemp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTemps and only return the `id`
     * const postTempWithIdOnly = await prisma.postTemp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostTempUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTempUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTemp.
     * @param {PostTempUpsertArgs} args - Arguments to update or create a PostTemp.
     * @example
     * // Update or create a PostTemp
     * const postTemp = await prisma.postTemp.upsert({
     *   create: {
     *     // ... data to create a PostTemp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTemp we want to update
     *   }
     * })
     */
    upsert<T extends PostTempUpsertArgs>(args: SelectSubset<T, PostTempUpsertArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTemps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempCountArgs} args - Arguments to filter PostTemps to count.
     * @example
     * // Count the number of PostTemps
     * const count = await prisma.postTemp.count({
     *   where: {
     *     // ... the filter for the PostTemps we want to count
     *   }
     * })
    **/
    count<T extends PostTempCountArgs>(
      args?: Subset<T, PostTempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTemp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTempAggregateArgs>(args: Subset<T, PostTempAggregateArgs>): Prisma.PrismaPromise<GetPostTempAggregateType<T>>

    /**
     * Group by PostTemp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTempGroupByArgs['orderBy'] }
        : { orderBy?: PostTempGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTemp model
   */
  readonly fields: PostTempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTemp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostTemp model
   */
  interface PostTempFieldRefs {
    readonly id: FieldRef<"PostTemp", 'Int'>
    readonly title: FieldRef<"PostTemp", 'String'>
    readonly content: FieldRef<"PostTemp", 'String'>
    readonly createdAt: FieldRef<"PostTemp", 'DateTime'>
    readonly scope: FieldRef<"PostTemp", 'Scope'>
    readonly userId: FieldRef<"PostTemp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostTemp findUnique
   */
  export type PostTempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp findUniqueOrThrow
   */
  export type PostTempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp findFirst
   */
  export type PostTempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTemps.
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTemps.
     */
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * PostTemp findFirstOrThrow
   */
  export type PostTempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTemps.
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTemps.
     */
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * PostTemp findMany
   */
  export type PostTempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * Filter, which PostTemps to fetch.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTemps.
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * PostTemp create
   */
  export type PostTempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTemp.
     */
    data: XOR<PostTempCreateInput, PostTempUncheckedCreateInput>
  }

  /**
   * PostTemp createMany
   */
  export type PostTempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTemps.
     */
    data: PostTempCreateManyInput | PostTempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTemp createManyAndReturn
   */
  export type PostTempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The data used to create many PostTemps.
     */
    data: PostTempCreateManyInput | PostTempCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTemp update
   */
  export type PostTempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTemp.
     */
    data: XOR<PostTempUpdateInput, PostTempUncheckedUpdateInput>
    /**
     * Choose, which PostTemp to update.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp updateMany
   */
  export type PostTempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTemps.
     */
    data: XOR<PostTempUpdateManyMutationInput, PostTempUncheckedUpdateManyInput>
    /**
     * Filter which PostTemps to update
     */
    where?: PostTempWhereInput
    /**
     * Limit how many PostTemps to update.
     */
    limit?: number
  }

  /**
   * PostTemp updateManyAndReturn
   */
  export type PostTempUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The data used to update PostTemps.
     */
    data: XOR<PostTempUpdateManyMutationInput, PostTempUncheckedUpdateManyInput>
    /**
     * Filter which PostTemps to update
     */
    where?: PostTempWhereInput
    /**
     * Limit how many PostTemps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTemp upsert
   */
  export type PostTempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTemp to update in case it exists.
     */
    where: PostTempWhereUniqueInput
    /**
     * In case the PostTemp found by the `where` argument doesn't exist, create a new PostTemp with this data.
     */
    create: XOR<PostTempCreateInput, PostTempUncheckedCreateInput>
    /**
     * In case the PostTemp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTempUpdateInput, PostTempUncheckedUpdateInput>
  }

  /**
   * PostTemp delete
   */
  export type PostTempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
    /**
     * Filter which PostTemp to delete.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp deleteMany
   */
  export type PostTempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTemps to delete
     */
    where?: PostTempWhereInput
    /**
     * Limit how many PostTemps to delete.
     */
    limit?: number
  }

  /**
   * PostTemp without action
   */
  export type PostTempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTempInclude<ExtArgs> | null
  }


  /**
   * Model PostBookmark
   */

  export type AggregatePostBookmark = {
    _count: PostBookmarkCountAggregateOutputType | null
    _avg: PostBookmarkAvgAggregateOutputType | null
    _sum: PostBookmarkSumAggregateOutputType | null
    _min: PostBookmarkMinAggregateOutputType | null
    _max: PostBookmarkMaxAggregateOutputType | null
  }

  export type PostBookmarkAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostBookmarkSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostBookmarkMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type PostBookmarkMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type PostBookmarkCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type PostBookmarkAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostBookmarkSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostBookmarkMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type PostBookmarkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type PostBookmarkCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type PostBookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostBookmark to aggregate.
     */
    where?: PostBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBookmarks to fetch.
     */
    orderBy?: PostBookmarkOrderByWithRelationInput | PostBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostBookmarks
    **/
    _count?: true | PostBookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostBookmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostBookmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostBookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostBookmarkMaxAggregateInputType
  }

  export type GetPostBookmarkAggregateType<T extends PostBookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregatePostBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostBookmark[P]>
      : GetScalarType<T[P], AggregatePostBookmark[P]>
  }




  export type PostBookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostBookmarkWhereInput
    orderBy?: PostBookmarkOrderByWithAggregationInput | PostBookmarkOrderByWithAggregationInput[]
    by: PostBookmarkScalarFieldEnum[] | PostBookmarkScalarFieldEnum
    having?: PostBookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostBookmarkCountAggregateInputType | true
    _avg?: PostBookmarkAvgAggregateInputType
    _sum?: PostBookmarkSumAggregateInputType
    _min?: PostBookmarkMinAggregateInputType
    _max?: PostBookmarkMaxAggregateInputType
  }

  export type PostBookmarkGroupByOutputType = {
    id: number
    createdAt: Date
    userId: string
    postId: number
    _count: PostBookmarkCountAggregateOutputType | null
    _avg: PostBookmarkAvgAggregateOutputType | null
    _sum: PostBookmarkSumAggregateOutputType | null
    _min: PostBookmarkMinAggregateOutputType | null
    _max: PostBookmarkMaxAggregateOutputType | null
  }

  type GetPostBookmarkGroupByPayload<T extends PostBookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostBookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostBookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostBookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], PostBookmarkGroupByOutputType[P]>
        }
      >
    >


  export type PostBookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postBookmark"]>

  export type PostBookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postBookmark"]>

  export type PostBookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postBookmark"]>

  export type PostBookmarkSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type PostBookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "postId", ExtArgs["result"]["postBookmark"]>
  export type PostBookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostBookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostBookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostBookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostBookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: string
      postId: number
    }, ExtArgs["result"]["postBookmark"]>
    composites: {}
  }

  type PostBookmarkGetPayload<S extends boolean | null | undefined | PostBookmarkDefaultArgs> = $Result.GetResult<Prisma.$PostBookmarkPayload, S>

  type PostBookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostBookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostBookmarkCountAggregateInputType | true
    }

  export interface PostBookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostBookmark'], meta: { name: 'PostBookmark' } }
    /**
     * Find zero or one PostBookmark that matches the filter.
     * @param {PostBookmarkFindUniqueArgs} args - Arguments to find a PostBookmark
     * @example
     * // Get one PostBookmark
     * const postBookmark = await prisma.postBookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostBookmarkFindUniqueArgs>(args: SelectSubset<T, PostBookmarkFindUniqueArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostBookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostBookmarkFindUniqueOrThrowArgs} args - Arguments to find a PostBookmark
     * @example
     * // Get one PostBookmark
     * const postBookmark = await prisma.postBookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostBookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, PostBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostBookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkFindFirstArgs} args - Arguments to find a PostBookmark
     * @example
     * // Get one PostBookmark
     * const postBookmark = await prisma.postBookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostBookmarkFindFirstArgs>(args?: SelectSubset<T, PostBookmarkFindFirstArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostBookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkFindFirstOrThrowArgs} args - Arguments to find a PostBookmark
     * @example
     * // Get one PostBookmark
     * const postBookmark = await prisma.postBookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostBookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, PostBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostBookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostBookmarks
     * const postBookmarks = await prisma.postBookmark.findMany()
     * 
     * // Get first 10 PostBookmarks
     * const postBookmarks = await prisma.postBookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postBookmarkWithIdOnly = await prisma.postBookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostBookmarkFindManyArgs>(args?: SelectSubset<T, PostBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostBookmark.
     * @param {PostBookmarkCreateArgs} args - Arguments to create a PostBookmark.
     * @example
     * // Create one PostBookmark
     * const PostBookmark = await prisma.postBookmark.create({
     *   data: {
     *     // ... data to create a PostBookmark
     *   }
     * })
     * 
     */
    create<T extends PostBookmarkCreateArgs>(args: SelectSubset<T, PostBookmarkCreateArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostBookmarks.
     * @param {PostBookmarkCreateManyArgs} args - Arguments to create many PostBookmarks.
     * @example
     * // Create many PostBookmarks
     * const postBookmark = await prisma.postBookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostBookmarkCreateManyArgs>(args?: SelectSubset<T, PostBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostBookmarks and returns the data saved in the database.
     * @param {PostBookmarkCreateManyAndReturnArgs} args - Arguments to create many PostBookmarks.
     * @example
     * // Create many PostBookmarks
     * const postBookmark = await prisma.postBookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostBookmarks and only return the `id`
     * const postBookmarkWithIdOnly = await prisma.postBookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostBookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, PostBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostBookmark.
     * @param {PostBookmarkDeleteArgs} args - Arguments to delete one PostBookmark.
     * @example
     * // Delete one PostBookmark
     * const PostBookmark = await prisma.postBookmark.delete({
     *   where: {
     *     // ... filter to delete one PostBookmark
     *   }
     * })
     * 
     */
    delete<T extends PostBookmarkDeleteArgs>(args: SelectSubset<T, PostBookmarkDeleteArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostBookmark.
     * @param {PostBookmarkUpdateArgs} args - Arguments to update one PostBookmark.
     * @example
     * // Update one PostBookmark
     * const postBookmark = await prisma.postBookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostBookmarkUpdateArgs>(args: SelectSubset<T, PostBookmarkUpdateArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostBookmarks.
     * @param {PostBookmarkDeleteManyArgs} args - Arguments to filter PostBookmarks to delete.
     * @example
     * // Delete a few PostBookmarks
     * const { count } = await prisma.postBookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostBookmarkDeleteManyArgs>(args?: SelectSubset<T, PostBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostBookmarks
     * const postBookmark = await prisma.postBookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostBookmarkUpdateManyArgs>(args: SelectSubset<T, PostBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostBookmarks and returns the data updated in the database.
     * @param {PostBookmarkUpdateManyAndReturnArgs} args - Arguments to update many PostBookmarks.
     * @example
     * // Update many PostBookmarks
     * const postBookmark = await prisma.postBookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostBookmarks and only return the `id`
     * const postBookmarkWithIdOnly = await prisma.postBookmark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostBookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, PostBookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostBookmark.
     * @param {PostBookmarkUpsertArgs} args - Arguments to update or create a PostBookmark.
     * @example
     * // Update or create a PostBookmark
     * const postBookmark = await prisma.postBookmark.upsert({
     *   create: {
     *     // ... data to create a PostBookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostBookmark we want to update
     *   }
     * })
     */
    upsert<T extends PostBookmarkUpsertArgs>(args: SelectSubset<T, PostBookmarkUpsertArgs<ExtArgs>>): Prisma__PostBookmarkClient<$Result.GetResult<Prisma.$PostBookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkCountArgs} args - Arguments to filter PostBookmarks to count.
     * @example
     * // Count the number of PostBookmarks
     * const count = await prisma.postBookmark.count({
     *   where: {
     *     // ... the filter for the PostBookmarks we want to count
     *   }
     * })
    **/
    count<T extends PostBookmarkCountArgs>(
      args?: Subset<T, PostBookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostBookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostBookmarkAggregateArgs>(args: Subset<T, PostBookmarkAggregateArgs>): Prisma.PrismaPromise<GetPostBookmarkAggregateType<T>>

    /**
     * Group by PostBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBookmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostBookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostBookmarkGroupByArgs['orderBy'] }
        : { orderBy?: PostBookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostBookmark model
   */
  readonly fields: PostBookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostBookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostBookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostBookmark model
   */
  interface PostBookmarkFieldRefs {
    readonly id: FieldRef<"PostBookmark", 'Int'>
    readonly createdAt: FieldRef<"PostBookmark", 'DateTime'>
    readonly userId: FieldRef<"PostBookmark", 'String'>
    readonly postId: FieldRef<"PostBookmark", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostBookmark findUnique
   */
  export type PostBookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which PostBookmark to fetch.
     */
    where: PostBookmarkWhereUniqueInput
  }

  /**
   * PostBookmark findUniqueOrThrow
   */
  export type PostBookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which PostBookmark to fetch.
     */
    where: PostBookmarkWhereUniqueInput
  }

  /**
   * PostBookmark findFirst
   */
  export type PostBookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which PostBookmark to fetch.
     */
    where?: PostBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBookmarks to fetch.
     */
    orderBy?: PostBookmarkOrderByWithRelationInput | PostBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostBookmarks.
     */
    cursor?: PostBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostBookmarks.
     */
    distinct?: PostBookmarkScalarFieldEnum | PostBookmarkScalarFieldEnum[]
  }

  /**
   * PostBookmark findFirstOrThrow
   */
  export type PostBookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which PostBookmark to fetch.
     */
    where?: PostBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBookmarks to fetch.
     */
    orderBy?: PostBookmarkOrderByWithRelationInput | PostBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostBookmarks.
     */
    cursor?: PostBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostBookmarks.
     */
    distinct?: PostBookmarkScalarFieldEnum | PostBookmarkScalarFieldEnum[]
  }

  /**
   * PostBookmark findMany
   */
  export type PostBookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which PostBookmarks to fetch.
     */
    where?: PostBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBookmarks to fetch.
     */
    orderBy?: PostBookmarkOrderByWithRelationInput | PostBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostBookmarks.
     */
    cursor?: PostBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBookmarks.
     */
    skip?: number
    distinct?: PostBookmarkScalarFieldEnum | PostBookmarkScalarFieldEnum[]
  }

  /**
   * PostBookmark create
   */
  export type PostBookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a PostBookmark.
     */
    data: XOR<PostBookmarkCreateInput, PostBookmarkUncheckedCreateInput>
  }

  /**
   * PostBookmark createMany
   */
  export type PostBookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostBookmarks.
     */
    data: PostBookmarkCreateManyInput | PostBookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostBookmark createManyAndReturn
   */
  export type PostBookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many PostBookmarks.
     */
    data: PostBookmarkCreateManyInput | PostBookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostBookmark update
   */
  export type PostBookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a PostBookmark.
     */
    data: XOR<PostBookmarkUpdateInput, PostBookmarkUncheckedUpdateInput>
    /**
     * Choose, which PostBookmark to update.
     */
    where: PostBookmarkWhereUniqueInput
  }

  /**
   * PostBookmark updateMany
   */
  export type PostBookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostBookmarks.
     */
    data: XOR<PostBookmarkUpdateManyMutationInput, PostBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which PostBookmarks to update
     */
    where?: PostBookmarkWhereInput
    /**
     * Limit how many PostBookmarks to update.
     */
    limit?: number
  }

  /**
   * PostBookmark updateManyAndReturn
   */
  export type PostBookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * The data used to update PostBookmarks.
     */
    data: XOR<PostBookmarkUpdateManyMutationInput, PostBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which PostBookmarks to update
     */
    where?: PostBookmarkWhereInput
    /**
     * Limit how many PostBookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostBookmark upsert
   */
  export type PostBookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the PostBookmark to update in case it exists.
     */
    where: PostBookmarkWhereUniqueInput
    /**
     * In case the PostBookmark found by the `where` argument doesn't exist, create a new PostBookmark with this data.
     */
    create: XOR<PostBookmarkCreateInput, PostBookmarkUncheckedCreateInput>
    /**
     * In case the PostBookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostBookmarkUpdateInput, PostBookmarkUncheckedUpdateInput>
  }

  /**
   * PostBookmark delete
   */
  export type PostBookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
    /**
     * Filter which PostBookmark to delete.
     */
    where: PostBookmarkWhereUniqueInput
  }

  /**
   * PostBookmark deleteMany
   */
  export type PostBookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostBookmarks to delete
     */
    where?: PostBookmarkWhereInput
    /**
     * Limit how many PostBookmarks to delete.
     */
    limit?: number
  }

  /**
   * PostBookmark without action
   */
  export type PostBookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBookmark
     */
    select?: PostBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostBookmark
     */
    omit?: PostBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBookmarkInclude<ExtArgs> | null
  }


  /**
   * Model PostLike
   */

  export type AggregatePostLike = {
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  export type PostLikeAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostLikeSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostLikeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type PostLikeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type PostLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type PostLikeAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostLikeSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type PostLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type PostLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type PostLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLike to aggregate.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikeMaxAggregateInputType
  }

  export type GetPostLikeAggregateType<T extends PostLikeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLike[P]>
      : GetScalarType<T[P], AggregatePostLike[P]>
  }




  export type PostLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithAggregationInput | PostLikeOrderByWithAggregationInput[]
    by: PostLikeScalarFieldEnum[] | PostLikeScalarFieldEnum
    having?: PostLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikeCountAggregateInputType | true
    _avg?: PostLikeAvgAggregateInputType
    _sum?: PostLikeSumAggregateInputType
    _min?: PostLikeMinAggregateInputType
    _max?: PostLikeMaxAggregateInputType
  }

  export type PostLikeGroupByOutputType = {
    id: number
    createdAt: Date
    userId: string
    postId: number
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  type GetPostLikeGroupByPayload<T extends PostLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
        }
      >
    >


  export type PostLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type PostLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "postId", ExtArgs["result"]["postLike"]>
  export type PostLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: string
      postId: number
    }, ExtArgs["result"]["postLike"]>
    composites: {}
  }

  type PostLikeGetPayload<S extends boolean | null | undefined | PostLikeDefaultArgs> = $Result.GetResult<Prisma.$PostLikePayload, S>

  type PostLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikeCountAggregateInputType | true
    }

  export interface PostLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLike'], meta: { name: 'PostLike' } }
    /**
     * Find zero or one PostLike that matches the filter.
     * @param {PostLikeFindUniqueArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikeFindUniqueArgs>(args: SelectSubset<T, PostLikeFindUniqueArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikeFindUniqueOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikeFindFirstArgs>(args?: SelectSubset<T, PostLikeFindFirstArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLike.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikeWithIdOnly = await prisma.postLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikeFindManyArgs>(args?: SelectSubset<T, PostLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLike.
     * @param {PostLikeCreateArgs} args - Arguments to create a PostLike.
     * @example
     * // Create one PostLike
     * const PostLike = await prisma.postLike.create({
     *   data: {
     *     // ... data to create a PostLike
     *   }
     * })
     * 
     */
    create<T extends PostLikeCreateArgs>(args: SelectSubset<T, PostLikeCreateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikeCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikeCreateManyArgs>(args?: SelectSubset<T, PostLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikeCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLike.
     * @param {PostLikeDeleteArgs} args - Arguments to delete one PostLike.
     * @example
     * // Delete one PostLike
     * const PostLike = await prisma.postLike.delete({
     *   where: {
     *     // ... filter to delete one PostLike
     *   }
     * })
     * 
     */
    delete<T extends PostLikeDeleteArgs>(args: SelectSubset<T, PostLikeDeleteArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLike.
     * @param {PostLikeUpdateArgs} args - Arguments to update one PostLike.
     * @example
     * // Update one PostLike
     * const postLike = await prisma.postLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikeUpdateArgs>(args: SelectSubset<T, PostLikeUpdateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikeDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikeDeleteManyArgs>(args?: SelectSubset<T, PostLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikeUpdateManyArgs>(args: SelectSubset<T, PostLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikeUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLike.
     * @param {PostLikeUpsertArgs} args - Arguments to update or create a PostLike.
     * @example
     * // Update or create a PostLike
     * const postLike = await prisma.postLike.upsert({
     *   create: {
     *     // ... data to create a PostLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLike we want to update
     *   }
     * })
     */
    upsert<T extends PostLikeUpsertArgs>(args: SelectSubset<T, PostLikeUpsertArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLike.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikeCountArgs>(
      args?: Subset<T, PostLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLikeAggregateArgs>(args: Subset<T, PostLikeAggregateArgs>): Prisma.PrismaPromise<GetPostLikeAggregateType<T>>

    /**
     * Group by PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikeGroupByArgs['orderBy'] }
        : { orderBy?: PostLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLike model
   */
  readonly fields: PostLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostLike model
   */
  interface PostLikeFieldRefs {
    readonly id: FieldRef<"PostLike", 'Int'>
    readonly createdAt: FieldRef<"PostLike", 'DateTime'>
    readonly userId: FieldRef<"PostLike", 'String'>
    readonly postId: FieldRef<"PostLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostLike findUnique
   */
  export type PostLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findUniqueOrThrow
   */
  export type PostLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findFirst
   */
  export type PostLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findFirstOrThrow
   */
  export type PostLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findMany
   */
  export type PostLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike create
   */
  export type PostLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLike.
     */
    data: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
  }

  /**
   * PostLike createMany
   */
  export type PostLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLike createManyAndReturn
   */
  export type PostLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike update
   */
  export type PostLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLike.
     */
    data: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
    /**
     * Choose, which PostLike to update.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike updateMany
   */
  export type PostLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLike updateManyAndReturn
   */
  export type PostLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike upsert
   */
  export type PostLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLike to update in case it exists.
     */
    where: PostLikeWhereUniqueInput
    /**
     * In case the PostLike found by the `where` argument doesn't exist, create a new PostLike with this data.
     */
    create: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
    /**
     * In case the PostLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
  }

  /**
   * PostLike delete
   */
  export type PostLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter which PostLike to delete.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike deleteMany
   */
  export type PostLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLike without action
   */
  export type PostLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    imageCover: 'imageCover',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    userId: 'userId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    expires: 'expires',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserSubscribeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    subscriberId: 'subscriberId',
    subscribedToId: 'subscribedToId'
  };

  export type UserSubscribeScalarFieldEnum = (typeof UserSubscribeScalarFieldEnum)[keyof typeof UserSubscribeScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    aiContent: 'aiContent',
    thumbnailImage: 'thumbnailImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    scope: 'scope',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PostTagScalarFieldEnum: {
    tagId: 'tagId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type PostTagScalarFieldEnum = (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum]


  export const PostCategorieScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sortOrder: 'sortOrder',
    userId: 'userId'
  };

  export type PostCategorieScalarFieldEnum = (typeof PostCategorieScalarFieldEnum)[keyof typeof PostCategorieScalarFieldEnum]


  export const PostCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type PostCommentScalarFieldEnum = (typeof PostCommentScalarFieldEnum)[keyof typeof PostCommentScalarFieldEnum]


  export const PostTempScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    scope: 'scope',
    userId: 'userId'
  };

  export type PostTempScalarFieldEnum = (typeof PostTempScalarFieldEnum)[keyof typeof PostTempScalarFieldEnum]


  export const PostBookmarkScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type PostBookmarkScalarFieldEnum = (typeof PostBookmarkScalarFieldEnum)[keyof typeof PostBookmarkScalarFieldEnum]


  export const PostLikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type PostLikeScalarFieldEnum = (typeof PostLikeScalarFieldEnum)[keyof typeof PostLikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Scope'
   */
  export type EnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope'>
    


  /**
   * Reference to a field of type 'Scope[]'
   */
  export type ListEnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    imageCover?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    postCategories?: PostCategorieListRelationFilter
    postComments?: PostCommentListRelationFilter
    subscribing?: UserSubscribeListRelationFilter
    subscribers?: UserSubscribeListRelationFilter
    postTemps?: PostTempListRelationFilter
    postBookmarks?: PostBookmarkListRelationFilter
    postLikes?: PostLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    imageCover?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    postCategories?: PostCategorieOrderByRelationAggregateInput
    postComments?: PostCommentOrderByRelationAggregateInput
    subscribing?: UserSubscribeOrderByRelationAggregateInput
    subscribers?: UserSubscribeOrderByRelationAggregateInput
    postTemps?: PostTempOrderByRelationAggregateInput
    postBookmarks?: PostBookmarkOrderByRelationAggregateInput
    postLikes?: PostLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    imageCover?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    postCategories?: PostCategorieListRelationFilter
    postComments?: PostCommentListRelationFilter
    subscribing?: UserSubscribeListRelationFilter
    subscribers?: UserSubscribeListRelationFilter
    postTemps?: PostTempListRelationFilter
    postBookmarks?: PostBookmarkListRelationFilter
    postLikes?: PostLikeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    imageCover?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageCover?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    userId?: StringWithAggregatesFilter<"Account"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expires?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserSubscribeWhereInput = {
    AND?: UserSubscribeWhereInput | UserSubscribeWhereInput[]
    OR?: UserSubscribeWhereInput[]
    NOT?: UserSubscribeWhereInput | UserSubscribeWhereInput[]
    id?: IntFilter<"UserSubscribe"> | number
    createdAt?: DateTimeFilter<"UserSubscribe"> | Date | string
    subscriberId?: StringFilter<"UserSubscribe"> | string
    subscribedToId?: StringFilter<"UserSubscribe"> | string
    subscriber?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscribedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSubscribeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
    subscriber?: UserOrderByWithRelationInput
    subscribedTo?: UserOrderByWithRelationInput
  }

  export type UserSubscribeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    subscriberId_subscribedToId?: UserSubscribeSubscriberIdSubscribedToIdCompoundUniqueInput
    AND?: UserSubscribeWhereInput | UserSubscribeWhereInput[]
    OR?: UserSubscribeWhereInput[]
    NOT?: UserSubscribeWhereInput | UserSubscribeWhereInput[]
    createdAt?: DateTimeFilter<"UserSubscribe"> | Date | string
    subscriberId?: StringFilter<"UserSubscribe"> | string
    subscribedToId?: StringFilter<"UserSubscribe"> | string
    subscriber?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscribedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "subscriberId_subscribedToId">

  export type UserSubscribeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
    _count?: UserSubscribeCountOrderByAggregateInput
    _avg?: UserSubscribeAvgOrderByAggregateInput
    _max?: UserSubscribeMaxOrderByAggregateInput
    _min?: UserSubscribeMinOrderByAggregateInput
    _sum?: UserSubscribeSumOrderByAggregateInput
  }

  export type UserSubscribeScalarWhereWithAggregatesInput = {
    AND?: UserSubscribeScalarWhereWithAggregatesInput | UserSubscribeScalarWhereWithAggregatesInput[]
    OR?: UserSubscribeScalarWhereWithAggregatesInput[]
    NOT?: UserSubscribeScalarWhereWithAggregatesInput | UserSubscribeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSubscribe"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserSubscribe"> | Date | string
    subscriberId?: StringWithAggregatesFilter<"UserSubscribe"> | string
    subscribedToId?: StringWithAggregatesFilter<"UserSubscribe"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    aiContent?: StringNullableFilter<"Post"> | string | null
    thumbnailImage?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    scope?: EnumScopeFilter<"Post"> | $Enums.Scope
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postTags?: PostTagListRelationFilter
    postComments?: PostCommentListRelationFilter
    postBookmarks?: PostBookmarkListRelationFilter
    postLikes?: PostLikeListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    aiContent?: SortOrderInput | SortOrder
    thumbnailImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    scope?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    postTags?: PostTagOrderByRelationAggregateInput
    postComments?: PostCommentOrderByRelationAggregateInput
    postBookmarks?: PostBookmarkOrderByRelationAggregateInput
    postLikes?: PostLikeOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    aiContent?: StringNullableFilter<"Post"> | string | null
    thumbnailImage?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    scope?: EnumScopeFilter<"Post"> | $Enums.Scope
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postTags?: PostTagListRelationFilter
    postComments?: PostCommentListRelationFilter
    postBookmarks?: PostBookmarkListRelationFilter
    postLikes?: PostLikeListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    aiContent?: SortOrderInput | SortOrder
    thumbnailImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    scope?: SortOrder
    userId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    aiContent?: StringNullableWithAggregatesFilter<"Post"> | string | null
    thumbnailImage?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    scope?: EnumScopeWithAggregatesFilter<"Post"> | $Enums.Scope
    userId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    postTags?: PostTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    postTags?: PostTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    postTags?: PostTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type PostTagWhereInput = {
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    tagId?: IntFilter<"PostTag"> | number
    postId?: IntFilter<"PostTag"> | number
    createdAt?: DateTimeFilter<"PostTag"> | Date | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostTagOrderByWithRelationInput = {
    tagId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    tag?: TagOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostTagWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: PostTagPostIdTagIdCompoundUniqueInput
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    tagId?: IntFilter<"PostTag"> | number
    postId?: IntFilter<"PostTag"> | number
    createdAt?: DateTimeFilter<"PostTag"> | Date | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "postId_tagId">

  export type PostTagOrderByWithAggregationInput = {
    tagId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: PostTagCountOrderByAggregateInput
    _avg?: PostTagAvgOrderByAggregateInput
    _max?: PostTagMaxOrderByAggregateInput
    _min?: PostTagMinOrderByAggregateInput
    _sum?: PostTagSumOrderByAggregateInput
  }

  export type PostTagScalarWhereWithAggregatesInput = {
    AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    OR?: PostTagScalarWhereWithAggregatesInput[]
    NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    tagId?: IntWithAggregatesFilter<"PostTag"> | number
    postId?: IntWithAggregatesFilter<"PostTag"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostTag"> | Date | string
  }

  export type PostCategorieWhereInput = {
    AND?: PostCategorieWhereInput | PostCategorieWhereInput[]
    OR?: PostCategorieWhereInput[]
    NOT?: PostCategorieWhereInput | PostCategorieWhereInput[]
    id?: IntFilter<"PostCategorie"> | number
    name?: StringFilter<"PostCategorie"> | string
    createdAt?: DateTimeFilter<"PostCategorie"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PostCategorie"> | Date | string | null
    sortOrder?: IntFilter<"PostCategorie"> | number
    userId?: StringFilter<"PostCategorie"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostCategorieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PostCategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name?: PostCategorieUserIdNameCompoundUniqueInput
    AND?: PostCategorieWhereInput | PostCategorieWhereInput[]
    OR?: PostCategorieWhereInput[]
    NOT?: PostCategorieWhereInput | PostCategorieWhereInput[]
    name?: StringFilter<"PostCategorie"> | string
    createdAt?: DateTimeFilter<"PostCategorie"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PostCategorie"> | Date | string | null
    sortOrder?: IntFilter<"PostCategorie"> | number
    userId?: StringFilter<"PostCategorie"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_name">

  export type PostCategorieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    userId?: SortOrder
    _count?: PostCategorieCountOrderByAggregateInput
    _avg?: PostCategorieAvgOrderByAggregateInput
    _max?: PostCategorieMaxOrderByAggregateInput
    _min?: PostCategorieMinOrderByAggregateInput
    _sum?: PostCategorieSumOrderByAggregateInput
  }

  export type PostCategorieScalarWhereWithAggregatesInput = {
    AND?: PostCategorieScalarWhereWithAggregatesInput | PostCategorieScalarWhereWithAggregatesInput[]
    OR?: PostCategorieScalarWhereWithAggregatesInput[]
    NOT?: PostCategorieScalarWhereWithAggregatesInput | PostCategorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostCategorie"> | number
    name?: StringWithAggregatesFilter<"PostCategorie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostCategorie"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PostCategorie"> | Date | string | null
    sortOrder?: IntWithAggregatesFilter<"PostCategorie"> | number
    userId?: StringWithAggregatesFilter<"PostCategorie"> | string
  }

  export type PostCommentWhereInput = {
    AND?: PostCommentWhereInput | PostCommentWhereInput[]
    OR?: PostCommentWhereInput[]
    NOT?: PostCommentWhereInput | PostCommentWhereInput[]
    id?: IntFilter<"PostComment"> | number
    content?: StringFilter<"PostComment"> | string
    createdAt?: DateTimeFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PostComment"> | Date | string | null
    userId?: StringFilter<"PostComment"> | string
    postId?: IntFilter<"PostComment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostCommentWhereInput | PostCommentWhereInput[]
    OR?: PostCommentWhereInput[]
    NOT?: PostCommentWhereInput | PostCommentWhereInput[]
    content?: StringFilter<"PostComment"> | string
    createdAt?: DateTimeFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PostComment"> | Date | string | null
    userId?: StringFilter<"PostComment"> | string
    postId?: IntFilter<"PostComment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: PostCommentCountOrderByAggregateInput
    _avg?: PostCommentAvgOrderByAggregateInput
    _max?: PostCommentMaxOrderByAggregateInput
    _min?: PostCommentMinOrderByAggregateInput
    _sum?: PostCommentSumOrderByAggregateInput
  }

  export type PostCommentScalarWhereWithAggregatesInput = {
    AND?: PostCommentScalarWhereWithAggregatesInput | PostCommentScalarWhereWithAggregatesInput[]
    OR?: PostCommentScalarWhereWithAggregatesInput[]
    NOT?: PostCommentScalarWhereWithAggregatesInput | PostCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostComment"> | number
    content?: StringWithAggregatesFilter<"PostComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PostComment"> | Date | string | null
    userId?: StringWithAggregatesFilter<"PostComment"> | string
    postId?: IntWithAggregatesFilter<"PostComment"> | number
  }

  export type PostTempWhereInput = {
    AND?: PostTempWhereInput | PostTempWhereInput[]
    OR?: PostTempWhereInput[]
    NOT?: PostTempWhereInput | PostTempWhereInput[]
    id?: IntFilter<"PostTemp"> | number
    title?: StringFilter<"PostTemp"> | string
    content?: StringFilter<"PostTemp"> | string
    createdAt?: DateTimeFilter<"PostTemp"> | Date | string
    scope?: EnumScopeFilter<"PostTemp"> | $Enums.Scope
    userId?: StringFilter<"PostTemp"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostTempOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PostTempWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostTempWhereInput | PostTempWhereInput[]
    OR?: PostTempWhereInput[]
    NOT?: PostTempWhereInput | PostTempWhereInput[]
    title?: StringFilter<"PostTemp"> | string
    content?: StringFilter<"PostTemp"> | string
    createdAt?: DateTimeFilter<"PostTemp"> | Date | string
    scope?: EnumScopeFilter<"PostTemp"> | $Enums.Scope
    userId?: StringFilter<"PostTemp"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostTempOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
    _count?: PostTempCountOrderByAggregateInput
    _avg?: PostTempAvgOrderByAggregateInput
    _max?: PostTempMaxOrderByAggregateInput
    _min?: PostTempMinOrderByAggregateInput
    _sum?: PostTempSumOrderByAggregateInput
  }

  export type PostTempScalarWhereWithAggregatesInput = {
    AND?: PostTempScalarWhereWithAggregatesInput | PostTempScalarWhereWithAggregatesInput[]
    OR?: PostTempScalarWhereWithAggregatesInput[]
    NOT?: PostTempScalarWhereWithAggregatesInput | PostTempScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostTemp"> | number
    title?: StringWithAggregatesFilter<"PostTemp"> | string
    content?: StringWithAggregatesFilter<"PostTemp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostTemp"> | Date | string
    scope?: EnumScopeWithAggregatesFilter<"PostTemp"> | $Enums.Scope
    userId?: StringWithAggregatesFilter<"PostTemp"> | string
  }

  export type PostBookmarkWhereInput = {
    AND?: PostBookmarkWhereInput | PostBookmarkWhereInput[]
    OR?: PostBookmarkWhereInput[]
    NOT?: PostBookmarkWhereInput | PostBookmarkWhereInput[]
    id?: IntFilter<"PostBookmark"> | number
    createdAt?: DateTimeFilter<"PostBookmark"> | Date | string
    userId?: StringFilter<"PostBookmark"> | string
    postId?: IntFilter<"PostBookmark"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostBookmarkOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: PostBookmarkUserIdPostIdCompoundUniqueInput
    AND?: PostBookmarkWhereInput | PostBookmarkWhereInput[]
    OR?: PostBookmarkWhereInput[]
    NOT?: PostBookmarkWhereInput | PostBookmarkWhereInput[]
    createdAt?: DateTimeFilter<"PostBookmark"> | Date | string
    userId?: StringFilter<"PostBookmark"> | string
    postId?: IntFilter<"PostBookmark"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type PostBookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: PostBookmarkCountOrderByAggregateInput
    _avg?: PostBookmarkAvgOrderByAggregateInput
    _max?: PostBookmarkMaxOrderByAggregateInput
    _min?: PostBookmarkMinOrderByAggregateInput
    _sum?: PostBookmarkSumOrderByAggregateInput
  }

  export type PostBookmarkScalarWhereWithAggregatesInput = {
    AND?: PostBookmarkScalarWhereWithAggregatesInput | PostBookmarkScalarWhereWithAggregatesInput[]
    OR?: PostBookmarkScalarWhereWithAggregatesInput[]
    NOT?: PostBookmarkScalarWhereWithAggregatesInput | PostBookmarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostBookmark"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostBookmark"> | Date | string
    userId?: StringWithAggregatesFilter<"PostBookmark"> | string
    postId?: IntWithAggregatesFilter<"PostBookmark"> | number
  }

  export type PostLikeWhereInput = {
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    id?: IntFilter<"PostLike"> | number
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    userId?: StringFilter<"PostLike"> | string
    postId?: IntFilter<"PostLike"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: PostLikeUserIdPostIdCompoundUniqueInput
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    userId?: StringFilter<"PostLike"> | string
    postId?: IntFilter<"PostLike"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type PostLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: PostLikeCountOrderByAggregateInput
    _avg?: PostLikeAvgOrderByAggregateInput
    _max?: PostLikeMaxOrderByAggregateInput
    _min?: PostLikeMinOrderByAggregateInput
    _sum?: PostLikeSumOrderByAggregateInput
  }

  export type PostLikeScalarWhereWithAggregatesInput = {
    AND?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    OR?: PostLikeScalarWhereWithAggregatesInput[]
    NOT?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostLike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostLike"> | Date | string
    userId?: StringWithAggregatesFilter<"PostLike"> | string
    postId?: IntWithAggregatesFilter<"PostLike"> | number
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    userId: string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    userId: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscribeCreateInput = {
    createdAt?: Date | string
    subscriber: UserCreateNestedOneWithoutSubscribingInput
    subscribedTo: UserCreateNestedOneWithoutSubscribersInput
  }

  export type UserSubscribeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    subscriberId: string
    subscribedToId: string
  }

  export type UserSubscribeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriber?: UserUpdateOneRequiredWithoutSubscribingNestedInput
    subscribedTo?: UserUpdateOneRequiredWithoutSubscribersNestedInput
  }

  export type UserSubscribeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSubscribeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    subscriberId: string
    subscribedToId: string
  }

  export type UserSubscribeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscribeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    user: UserCreateNestedOneWithoutPostsInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
    postComments?: PostCommentCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutPostInput
    postLikes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    userId: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutPostInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    userId: string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    name: string
    postTags?: PostTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateInput = {
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutPostTagsInput
    post: PostCreateNestedOneWithoutPostTagsInput
  }

  export type PostTagUncheckedCreateInput = {
    tagId: number
    postId: number
    createdAt?: Date | string
  }

  export type PostTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutPostTagsNestedInput
    post?: PostUpdateOneRequiredWithoutPostTagsNestedInput
  }

  export type PostTagUncheckedUpdateInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagCreateManyInput = {
    tagId: number
    postId: number
    createdAt?: Date | string
  }

  export type PostTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagUncheckedUpdateManyInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCategorieCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    sortOrder?: number
    user: UserCreateNestedOneWithoutPostCategoriesInput
  }

  export type PostCategorieUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    sortOrder?: number
    userId: string
  }

  export type PostCategorieUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPostCategoriesNestedInput
  }

  export type PostCategorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCategorieCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    sortOrder?: number
    userId: string
  }

  export type PostCategorieUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PostCategorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostCommentsInput
    post: PostCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
    postId: number
  }

  export type PostCommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
    postId: number
  }

  export type PostCommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTempCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    scope: $Enums.Scope
    user: UserCreateNestedOneWithoutPostTempsInput
  }

  export type PostTempUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    scope: $Enums.Scope
    userId: string
  }

  export type PostTempUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    user?: UserUpdateOneRequiredWithoutPostTempsNestedInput
  }

  export type PostTempUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTempCreateManyInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    scope: $Enums.Scope
    userId: string
  }

  export type PostTempUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PostTempUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostBookmarkCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostBookmarksInput
    post: PostCreateNestedOneWithoutPostBookmarksInput
  }

  export type PostBookmarkUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId: number
  }

  export type PostBookmarkUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostBookmarksNestedInput
    post?: PostUpdateOneRequiredWithoutPostBookmarksNestedInput
  }

  export type PostBookmarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostBookmarkCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId: number
  }

  export type PostBookmarkUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostBookmarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
    post: PostCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId: number
  }

  export type PostLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
    post?: PostUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId: number
  }

  export type PostLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostCategorieListRelationFilter = {
    every?: PostCategorieWhereInput
    some?: PostCategorieWhereInput
    none?: PostCategorieWhereInput
  }

  export type PostCommentListRelationFilter = {
    every?: PostCommentWhereInput
    some?: PostCommentWhereInput
    none?: PostCommentWhereInput
  }

  export type UserSubscribeListRelationFilter = {
    every?: UserSubscribeWhereInput
    some?: UserSubscribeWhereInput
    none?: UserSubscribeWhereInput
  }

  export type PostTempListRelationFilter = {
    every?: PostTempWhereInput
    some?: PostTempWhereInput
    none?: PostTempWhereInput
  }

  export type PostBookmarkListRelationFilter = {
    every?: PostBookmarkWhereInput
    some?: PostBookmarkWhereInput
    none?: PostBookmarkWhereInput
  }

  export type PostLikeListRelationFilter = {
    every?: PostLikeWhereInput
    some?: PostLikeWhereInput
    none?: PostLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCategorieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSubscribeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostTempOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostBookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    imageCover?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    imageCover?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    imageCover?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    userId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    userId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    userId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserSubscribeSubscriberIdSubscribedToIdCompoundUniqueInput = {
    subscriberId: string
    subscribedToId: string
  }

  export type UserSubscribeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
  }

  export type UserSubscribeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSubscribeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
  }

  export type UserSubscribeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    subscriberId?: SortOrder
    subscribedToId?: SortOrder
  }

  export type UserSubscribeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeFilter<$PrismaModel> | $Enums.Scope
  }

  export type PostTagListRelationFilter = {
    every?: PostTagWhereInput
    some?: PostTagWhereInput
    none?: PostTagWhereInput
  }

  export type PostTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    aiContent?: SortOrder
    thumbnailImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    aiContent?: SortOrder
    thumbnailImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    aiContent?: SortOrder
    thumbnailImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeWithAggregatesFilter<$PrismaModel> | $Enums.Scope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScopeFilter<$PrismaModel>
    _max?: NestedEnumScopeFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostTagPostIdTagIdCompoundUniqueInput = {
    postId: number
    tagId: number
  }

  export type PostTagCountOrderByAggregateInput = {
    tagId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTagAvgOrderByAggregateInput = {
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostTagMaxOrderByAggregateInput = {
    tagId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTagMinOrderByAggregateInput = {
    tagId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTagSumOrderByAggregateInput = {
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostCategorieUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type PostCategorieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sortOrder?: SortOrder
    userId?: SortOrder
  }

  export type PostCategorieAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type PostCategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sortOrder?: SortOrder
    userId?: SortOrder
  }

  export type PostCategorieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sortOrder?: SortOrder
    userId?: SortOrder
  }

  export type PostCategorieSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type PostCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostCommentSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostTempCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
  }

  export type PostTempAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostTempMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
  }

  export type PostTempMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    scope?: SortOrder
    userId?: SortOrder
  }

  export type PostTempSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostBookmarkUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: number
  }

  export type PostBookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostBookmarkAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostBookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostBookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostBookmarkSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: number
  }

  export type PostLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCategorieCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCategorieCreateWithoutUserInput, PostCategorieUncheckedCreateWithoutUserInput> | PostCategorieCreateWithoutUserInput[] | PostCategorieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCategorieCreateOrConnectWithoutUserInput | PostCategorieCreateOrConnectWithoutUserInput[]
    createMany?: PostCategorieCreateManyUserInputEnvelope
    connect?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
  }

  export type PostCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type UserSubscribeCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscriberInput, UserSubscribeUncheckedCreateWithoutSubscriberInput> | UserSubscribeCreateWithoutSubscriberInput[] | UserSubscribeUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscriberInput | UserSubscribeCreateOrConnectWithoutSubscriberInput[]
    createMany?: UserSubscribeCreateManySubscriberInputEnvelope
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
  }

  export type UserSubscribeCreateNestedManyWithoutSubscribedToInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscribedToInput, UserSubscribeUncheckedCreateWithoutSubscribedToInput> | UserSubscribeCreateWithoutSubscribedToInput[] | UserSubscribeUncheckedCreateWithoutSubscribedToInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscribedToInput | UserSubscribeCreateOrConnectWithoutSubscribedToInput[]
    createMany?: UserSubscribeCreateManySubscribedToInputEnvelope
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
  }

  export type PostTempCreateNestedManyWithoutUserInput = {
    create?: XOR<PostTempCreateWithoutUserInput, PostTempUncheckedCreateWithoutUserInput> | PostTempCreateWithoutUserInput[] | PostTempUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTempCreateOrConnectWithoutUserInput | PostTempCreateOrConnectWithoutUserInput[]
    createMany?: PostTempCreateManyUserInputEnvelope
    connect?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
  }

  export type PostBookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<PostBookmarkCreateWithoutUserInput, PostBookmarkUncheckedCreateWithoutUserInput> | PostBookmarkCreateWithoutUserInput[] | PostBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutUserInput | PostBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: PostBookmarkCreateManyUserInputEnvelope
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCategorieUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCategorieCreateWithoutUserInput, PostCategorieUncheckedCreateWithoutUserInput> | PostCategorieCreateWithoutUserInput[] | PostCategorieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCategorieCreateOrConnectWithoutUserInput | PostCategorieCreateOrConnectWithoutUserInput[]
    createMany?: PostCategorieCreateManyUserInputEnvelope
    connect?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
  }

  export type PostCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscriberInput, UserSubscribeUncheckedCreateWithoutSubscriberInput> | UserSubscribeCreateWithoutSubscriberInput[] | UserSubscribeUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscriberInput | UserSubscribeCreateOrConnectWithoutSubscriberInput[]
    createMany?: UserSubscribeCreateManySubscriberInputEnvelope
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
  }

  export type UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscribedToInput, UserSubscribeUncheckedCreateWithoutSubscribedToInput> | UserSubscribeCreateWithoutSubscribedToInput[] | UserSubscribeUncheckedCreateWithoutSubscribedToInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscribedToInput | UserSubscribeCreateOrConnectWithoutSubscribedToInput[]
    createMany?: UserSubscribeCreateManySubscribedToInputEnvelope
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
  }

  export type PostTempUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostTempCreateWithoutUserInput, PostTempUncheckedCreateWithoutUserInput> | PostTempCreateWithoutUserInput[] | PostTempUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTempCreateOrConnectWithoutUserInput | PostTempCreateOrConnectWithoutUserInput[]
    createMany?: PostTempCreateManyUserInputEnvelope
    connect?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
  }

  export type PostBookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostBookmarkCreateWithoutUserInput, PostBookmarkUncheckedCreateWithoutUserInput> | PostBookmarkCreateWithoutUserInput[] | PostBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutUserInput | PostBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: PostBookmarkCreateManyUserInputEnvelope
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCategorieUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCategorieCreateWithoutUserInput, PostCategorieUncheckedCreateWithoutUserInput> | PostCategorieCreateWithoutUserInput[] | PostCategorieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCategorieCreateOrConnectWithoutUserInput | PostCategorieCreateOrConnectWithoutUserInput[]
    upsert?: PostCategorieUpsertWithWhereUniqueWithoutUserInput | PostCategorieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCategorieCreateManyUserInputEnvelope
    set?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    disconnect?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    delete?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    connect?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    update?: PostCategorieUpdateWithWhereUniqueWithoutUserInput | PostCategorieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCategorieUpdateManyWithWhereWithoutUserInput | PostCategorieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCategorieScalarWhereInput | PostCategorieScalarWhereInput[]
  }

  export type PostCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutUserInput | PostCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutUserInput | PostCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutUserInput | PostCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type UserSubscribeUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscriberInput, UserSubscribeUncheckedCreateWithoutSubscriberInput> | UserSubscribeCreateWithoutSubscriberInput[] | UserSubscribeUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscriberInput | UserSubscribeCreateOrConnectWithoutSubscriberInput[]
    upsert?: UserSubscribeUpsertWithWhereUniqueWithoutSubscriberInput | UserSubscribeUpsertWithWhereUniqueWithoutSubscriberInput[]
    createMany?: UserSubscribeCreateManySubscriberInputEnvelope
    set?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    disconnect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    delete?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    update?: UserSubscribeUpdateWithWhereUniqueWithoutSubscriberInput | UserSubscribeUpdateWithWhereUniqueWithoutSubscriberInput[]
    updateMany?: UserSubscribeUpdateManyWithWhereWithoutSubscriberInput | UserSubscribeUpdateManyWithWhereWithoutSubscriberInput[]
    deleteMany?: UserSubscribeScalarWhereInput | UserSubscribeScalarWhereInput[]
  }

  export type UserSubscribeUpdateManyWithoutSubscribedToNestedInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscribedToInput, UserSubscribeUncheckedCreateWithoutSubscribedToInput> | UserSubscribeCreateWithoutSubscribedToInput[] | UserSubscribeUncheckedCreateWithoutSubscribedToInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscribedToInput | UserSubscribeCreateOrConnectWithoutSubscribedToInput[]
    upsert?: UserSubscribeUpsertWithWhereUniqueWithoutSubscribedToInput | UserSubscribeUpsertWithWhereUniqueWithoutSubscribedToInput[]
    createMany?: UserSubscribeCreateManySubscribedToInputEnvelope
    set?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    disconnect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    delete?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    update?: UserSubscribeUpdateWithWhereUniqueWithoutSubscribedToInput | UserSubscribeUpdateWithWhereUniqueWithoutSubscribedToInput[]
    updateMany?: UserSubscribeUpdateManyWithWhereWithoutSubscribedToInput | UserSubscribeUpdateManyWithWhereWithoutSubscribedToInput[]
    deleteMany?: UserSubscribeScalarWhereInput | UserSubscribeScalarWhereInput[]
  }

  export type PostTempUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostTempCreateWithoutUserInput, PostTempUncheckedCreateWithoutUserInput> | PostTempCreateWithoutUserInput[] | PostTempUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTempCreateOrConnectWithoutUserInput | PostTempCreateOrConnectWithoutUserInput[]
    upsert?: PostTempUpsertWithWhereUniqueWithoutUserInput | PostTempUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostTempCreateManyUserInputEnvelope
    set?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    disconnect?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    delete?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    connect?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    update?: PostTempUpdateWithWhereUniqueWithoutUserInput | PostTempUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostTempUpdateManyWithWhereWithoutUserInput | PostTempUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostTempScalarWhereInput | PostTempScalarWhereInput[]
  }

  export type PostBookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostBookmarkCreateWithoutUserInput, PostBookmarkUncheckedCreateWithoutUserInput> | PostBookmarkCreateWithoutUserInput[] | PostBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutUserInput | PostBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: PostBookmarkUpsertWithWhereUniqueWithoutUserInput | PostBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostBookmarkCreateManyUserInputEnvelope
    set?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    disconnect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    delete?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    update?: PostBookmarkUpdateWithWhereUniqueWithoutUserInput | PostBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostBookmarkUpdateManyWithWhereWithoutUserInput | PostBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostBookmarkScalarWhereInput | PostBookmarkScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCategorieUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCategorieCreateWithoutUserInput, PostCategorieUncheckedCreateWithoutUserInput> | PostCategorieCreateWithoutUserInput[] | PostCategorieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCategorieCreateOrConnectWithoutUserInput | PostCategorieCreateOrConnectWithoutUserInput[]
    upsert?: PostCategorieUpsertWithWhereUniqueWithoutUserInput | PostCategorieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCategorieCreateManyUserInputEnvelope
    set?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    disconnect?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    delete?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    connect?: PostCategorieWhereUniqueInput | PostCategorieWhereUniqueInput[]
    update?: PostCategorieUpdateWithWhereUniqueWithoutUserInput | PostCategorieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCategorieUpdateManyWithWhereWithoutUserInput | PostCategorieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCategorieScalarWhereInput | PostCategorieScalarWhereInput[]
  }

  export type PostCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutUserInput | PostCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutUserInput | PostCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutUserInput | PostCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscriberInput, UserSubscribeUncheckedCreateWithoutSubscriberInput> | UserSubscribeCreateWithoutSubscriberInput[] | UserSubscribeUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscriberInput | UserSubscribeCreateOrConnectWithoutSubscriberInput[]
    upsert?: UserSubscribeUpsertWithWhereUniqueWithoutSubscriberInput | UserSubscribeUpsertWithWhereUniqueWithoutSubscriberInput[]
    createMany?: UserSubscribeCreateManySubscriberInputEnvelope
    set?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    disconnect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    delete?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    update?: UserSubscribeUpdateWithWhereUniqueWithoutSubscriberInput | UserSubscribeUpdateWithWhereUniqueWithoutSubscriberInput[]
    updateMany?: UserSubscribeUpdateManyWithWhereWithoutSubscriberInput | UserSubscribeUpdateManyWithWhereWithoutSubscriberInput[]
    deleteMany?: UserSubscribeScalarWhereInput | UserSubscribeScalarWhereInput[]
  }

  export type UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput = {
    create?: XOR<UserSubscribeCreateWithoutSubscribedToInput, UserSubscribeUncheckedCreateWithoutSubscribedToInput> | UserSubscribeCreateWithoutSubscribedToInput[] | UserSubscribeUncheckedCreateWithoutSubscribedToInput[]
    connectOrCreate?: UserSubscribeCreateOrConnectWithoutSubscribedToInput | UserSubscribeCreateOrConnectWithoutSubscribedToInput[]
    upsert?: UserSubscribeUpsertWithWhereUniqueWithoutSubscribedToInput | UserSubscribeUpsertWithWhereUniqueWithoutSubscribedToInput[]
    createMany?: UserSubscribeCreateManySubscribedToInputEnvelope
    set?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    disconnect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    delete?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    connect?: UserSubscribeWhereUniqueInput | UserSubscribeWhereUniqueInput[]
    update?: UserSubscribeUpdateWithWhereUniqueWithoutSubscribedToInput | UserSubscribeUpdateWithWhereUniqueWithoutSubscribedToInput[]
    updateMany?: UserSubscribeUpdateManyWithWhereWithoutSubscribedToInput | UserSubscribeUpdateManyWithWhereWithoutSubscribedToInput[]
    deleteMany?: UserSubscribeScalarWhereInput | UserSubscribeScalarWhereInput[]
  }

  export type PostTempUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostTempCreateWithoutUserInput, PostTempUncheckedCreateWithoutUserInput> | PostTempCreateWithoutUserInput[] | PostTempUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTempCreateOrConnectWithoutUserInput | PostTempCreateOrConnectWithoutUserInput[]
    upsert?: PostTempUpsertWithWhereUniqueWithoutUserInput | PostTempUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostTempCreateManyUserInputEnvelope
    set?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    disconnect?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    delete?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    connect?: PostTempWhereUniqueInput | PostTempWhereUniqueInput[]
    update?: PostTempUpdateWithWhereUniqueWithoutUserInput | PostTempUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostTempUpdateManyWithWhereWithoutUserInput | PostTempUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostTempScalarWhereInput | PostTempScalarWhereInput[]
  }

  export type PostBookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostBookmarkCreateWithoutUserInput, PostBookmarkUncheckedCreateWithoutUserInput> | PostBookmarkCreateWithoutUserInput[] | PostBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutUserInput | PostBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: PostBookmarkUpsertWithWhereUniqueWithoutUserInput | PostBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostBookmarkCreateManyUserInputEnvelope
    set?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    disconnect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    delete?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    update?: PostBookmarkUpdateWithWhereUniqueWithoutUserInput | PostBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostBookmarkUpdateManyWithWhereWithoutUserInput | PostBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostBookmarkScalarWhereInput | PostBookmarkScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutSubscribingInput = {
    create?: XOR<UserCreateWithoutSubscribingInput, UserUncheckedCreateWithoutSubscribingInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscribersInput = {
    create?: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscribingNestedInput = {
    create?: XOR<UserCreateWithoutSubscribingInput, UserUncheckedCreateWithoutSubscribingInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribingInput
    upsert?: UserUpsertWithoutSubscribingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscribingInput, UserUpdateWithoutSubscribingInput>, UserUncheckedUpdateWithoutSubscribingInput>
  }

  export type UserUpdateOneRequiredWithoutSubscribersNestedInput = {
    create?: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribersInput
    upsert?: UserUpsertWithoutSubscribersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscribersInput, UserUpdateWithoutSubscribersInput>, UserUncheckedUpdateWithoutSubscribersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostTagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type PostBookmarkCreateNestedManyWithoutPostInput = {
    create?: XOR<PostBookmarkCreateWithoutPostInput, PostBookmarkUncheckedCreateWithoutPostInput> | PostBookmarkCreateWithoutPostInput[] | PostBookmarkUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutPostInput | PostBookmarkCreateOrConnectWithoutPostInput[]
    createMany?: PostBookmarkCreateManyPostInputEnvelope
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type PostBookmarkUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostBookmarkCreateWithoutPostInput, PostBookmarkUncheckedCreateWithoutPostInput> | PostBookmarkCreateWithoutPostInput[] | PostBookmarkUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutPostInput | PostBookmarkCreateOrConnectWithoutPostInput[]
    createMany?: PostBookmarkCreateManyPostInputEnvelope
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type EnumScopeFieldUpdateOperationsInput = {
    set?: $Enums.Scope
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type PostTagUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostCommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput | PostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutPostInput | PostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput | PostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostBookmarkUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostBookmarkCreateWithoutPostInput, PostBookmarkUncheckedCreateWithoutPostInput> | PostBookmarkCreateWithoutPostInput[] | PostBookmarkUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutPostInput | PostBookmarkCreateOrConnectWithoutPostInput[]
    upsert?: PostBookmarkUpsertWithWhereUniqueWithoutPostInput | PostBookmarkUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostBookmarkCreateManyPostInputEnvelope
    set?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    disconnect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    delete?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    update?: PostBookmarkUpdateWithWhereUniqueWithoutPostInput | PostBookmarkUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostBookmarkUpdateManyWithWhereWithoutPostInput | PostBookmarkUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostBookmarkScalarWhereInput | PostBookmarkScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostCommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput | PostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutPostInput | PostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput | PostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostBookmarkUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostBookmarkCreateWithoutPostInput, PostBookmarkUncheckedCreateWithoutPostInput> | PostBookmarkCreateWithoutPostInput[] | PostBookmarkUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostBookmarkCreateOrConnectWithoutPostInput | PostBookmarkCreateOrConnectWithoutPostInput[]
    upsert?: PostBookmarkUpsertWithWhereUniqueWithoutPostInput | PostBookmarkUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostBookmarkCreateManyPostInputEnvelope
    set?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    disconnect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    delete?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    connect?: PostBookmarkWhereUniqueInput | PostBookmarkWhereUniqueInput[]
    update?: PostBookmarkUpdateWithWhereUniqueWithoutPostInput | PostBookmarkUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostBookmarkUpdateManyWithWhereWithoutPostInput | PostBookmarkUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostBookmarkScalarWhereInput | PostBookmarkScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type TagCreateNestedOneWithoutPostTagsInput = {
    create?: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostTagsInput
    connect?: TagWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPostTagsInput = {
    create?: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutPostTagsNestedInput = {
    create?: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostTagsInput
    upsert?: TagUpsertWithoutPostTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPostTagsInput, TagUpdateWithoutPostTagsInput>, TagUncheckedUpdateWithoutPostTagsInput>
  }

  export type PostUpdateOneRequiredWithoutPostTagsNestedInput = {
    create?: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostTagsInput
    upsert?: PostUpsertWithoutPostTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostTagsInput, PostUpdateWithoutPostTagsInput>, PostUncheckedUpdateWithoutPostTagsInput>
  }

  export type UserCreateNestedOneWithoutPostCategoriesInput = {
    create?: XOR<UserCreateWithoutPostCategoriesInput, UserUncheckedCreateWithoutPostCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutPostCategoriesInput, UserUncheckedCreateWithoutPostCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCategoriesInput
    upsert?: UserUpsertWithoutPostCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostCategoriesInput, UserUpdateWithoutPostCategoriesInput>, UserUncheckedUpdateWithoutPostCategoriesInput>
  }

  export type UserCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    upsert?: UserUpsertWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostCommentsInput, UserUpdateWithoutPostCommentsInput>, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    upsert?: PostUpsertWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostCommentsInput, PostUpdateWithoutPostCommentsInput>, PostUncheckedUpdateWithoutPostCommentsInput>
  }

  export type UserCreateNestedOneWithoutPostTempsInput = {
    create?: XOR<UserCreateWithoutPostTempsInput, UserUncheckedCreateWithoutPostTempsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostTempsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostTempsNestedInput = {
    create?: XOR<UserCreateWithoutPostTempsInput, UserUncheckedCreateWithoutPostTempsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostTempsInput
    upsert?: UserUpsertWithoutPostTempsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostTempsInput, UserUpdateWithoutPostTempsInput>, UserUncheckedUpdateWithoutPostTempsInput>
  }

  export type UserCreateNestedOneWithoutPostBookmarksInput = {
    create?: XOR<UserCreateWithoutPostBookmarksInput, UserUncheckedCreateWithoutPostBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPostBookmarksInput = {
    create?: XOR<PostCreateWithoutPostBookmarksInput, PostUncheckedCreateWithoutPostBookmarksInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostBookmarksInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutPostBookmarksInput, UserUncheckedCreateWithoutPostBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostBookmarksInput
    upsert?: UserUpsertWithoutPostBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostBookmarksInput, UserUpdateWithoutPostBookmarksInput>, UserUncheckedUpdateWithoutPostBookmarksInput>
  }

  export type PostUpdateOneRequiredWithoutPostBookmarksNestedInput = {
    create?: XOR<PostCreateWithoutPostBookmarksInput, PostUncheckedCreateWithoutPostBookmarksInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostBookmarksInput
    upsert?: PostUpsertWithoutPostBookmarksInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostBookmarksInput, PostUpdateWithoutPostBookmarksInput>, PostUncheckedUpdateWithoutPostBookmarksInput>
  }

  export type UserCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostLikesInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    upsert?: UserUpsertWithoutPostLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostLikesInput, UserUpdateWithoutPostLikesInput>, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostLikesInput
    upsert?: PostUpsertWithoutPostLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostLikesInput, PostUpdateWithoutPostLikesInput>, PostUncheckedUpdateWithoutPostLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeFilter<$PrismaModel> | $Enums.Scope
  }

  export type NestedEnumScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeWithAggregatesFilter<$PrismaModel> | $Enums.Scope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScopeFilter<$PrismaModel>
    _max?: NestedEnumScopeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    postTags?: PostTagCreateNestedManyWithoutPostInput
    postComments?: PostCommentCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutPostInput
    postLikes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutPostInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCategorieCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    sortOrder?: number
  }

  export type PostCategorieUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    sortOrder?: number
  }

  export type PostCategorieCreateOrConnectWithoutUserInput = {
    where: PostCategorieWhereUniqueInput
    create: XOR<PostCategorieCreateWithoutUserInput, PostCategorieUncheckedCreateWithoutUserInput>
  }

  export type PostCategorieCreateManyUserInputEnvelope = {
    data: PostCategorieCreateManyUserInput | PostCategorieCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    post: PostCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    postId: number
  }

  export type PostCommentCreateOrConnectWithoutUserInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput>
  }

  export type PostCommentCreateManyUserInputEnvelope = {
    data: PostCommentCreateManyUserInput | PostCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscribeCreateWithoutSubscriberInput = {
    createdAt?: Date | string
    subscribedTo: UserCreateNestedOneWithoutSubscribersInput
  }

  export type UserSubscribeUncheckedCreateWithoutSubscriberInput = {
    id?: number
    createdAt?: Date | string
    subscribedToId: string
  }

  export type UserSubscribeCreateOrConnectWithoutSubscriberInput = {
    where: UserSubscribeWhereUniqueInput
    create: XOR<UserSubscribeCreateWithoutSubscriberInput, UserSubscribeUncheckedCreateWithoutSubscriberInput>
  }

  export type UserSubscribeCreateManySubscriberInputEnvelope = {
    data: UserSubscribeCreateManySubscriberInput | UserSubscribeCreateManySubscriberInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscribeCreateWithoutSubscribedToInput = {
    createdAt?: Date | string
    subscriber: UserCreateNestedOneWithoutSubscribingInput
  }

  export type UserSubscribeUncheckedCreateWithoutSubscribedToInput = {
    id?: number
    createdAt?: Date | string
    subscriberId: string
  }

  export type UserSubscribeCreateOrConnectWithoutSubscribedToInput = {
    where: UserSubscribeWhereUniqueInput
    create: XOR<UserSubscribeCreateWithoutSubscribedToInput, UserSubscribeUncheckedCreateWithoutSubscribedToInput>
  }

  export type UserSubscribeCreateManySubscribedToInputEnvelope = {
    data: UserSubscribeCreateManySubscribedToInput | UserSubscribeCreateManySubscribedToInput[]
    skipDuplicates?: boolean
  }

  export type PostTempCreateWithoutUserInput = {
    title: string
    content: string
    createdAt?: Date | string
    scope: $Enums.Scope
  }

  export type PostTempUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    scope: $Enums.Scope
  }

  export type PostTempCreateOrConnectWithoutUserInput = {
    where: PostTempWhereUniqueInput
    create: XOR<PostTempCreateWithoutUserInput, PostTempUncheckedCreateWithoutUserInput>
  }

  export type PostTempCreateManyUserInputEnvelope = {
    data: PostTempCreateManyUserInput | PostTempCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostBookmarkCreateWithoutUserInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostBookmarksInput
  }

  export type PostBookmarkUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type PostBookmarkCreateOrConnectWithoutUserInput = {
    where: PostBookmarkWhereUniqueInput
    create: XOR<PostBookmarkCreateWithoutUserInput, PostBookmarkUncheckedCreateWithoutUserInput>
  }

  export type PostBookmarkCreateManyUserInputEnvelope = {
    data: PostBookmarkCreateManyUserInput | PostBookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type PostLikeCreateOrConnectWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeCreateManyUserInputEnvelope = {
    data: PostLikeCreateManyUserInput | PostLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    aiContent?: StringNullableFilter<"Post"> | string | null
    thumbnailImage?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    scope?: EnumScopeFilter<"Post"> | $Enums.Scope
    userId?: StringFilter<"Post"> | string
  }

  export type PostCategorieUpsertWithWhereUniqueWithoutUserInput = {
    where: PostCategorieWhereUniqueInput
    update: XOR<PostCategorieUpdateWithoutUserInput, PostCategorieUncheckedUpdateWithoutUserInput>
    create: XOR<PostCategorieCreateWithoutUserInput, PostCategorieUncheckedCreateWithoutUserInput>
  }

  export type PostCategorieUpdateWithWhereUniqueWithoutUserInput = {
    where: PostCategorieWhereUniqueInput
    data: XOR<PostCategorieUpdateWithoutUserInput, PostCategorieUncheckedUpdateWithoutUserInput>
  }

  export type PostCategorieUpdateManyWithWhereWithoutUserInput = {
    where: PostCategorieScalarWhereInput
    data: XOR<PostCategorieUpdateManyMutationInput, PostCategorieUncheckedUpdateManyWithoutUserInput>
  }

  export type PostCategorieScalarWhereInput = {
    AND?: PostCategorieScalarWhereInput | PostCategorieScalarWhereInput[]
    OR?: PostCategorieScalarWhereInput[]
    NOT?: PostCategorieScalarWhereInput | PostCategorieScalarWhereInput[]
    id?: IntFilter<"PostCategorie"> | number
    name?: StringFilter<"PostCategorie"> | string
    createdAt?: DateTimeFilter<"PostCategorie"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PostCategorie"> | Date | string | null
    sortOrder?: IntFilter<"PostCategorie"> | number
    userId?: StringFilter<"PostCategorie"> | string
  }

  export type PostCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: PostCommentWhereUniqueInput
    update: XOR<PostCommentUpdateWithoutUserInput, PostCommentUncheckedUpdateWithoutUserInput>
    create: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput>
  }

  export type PostCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: PostCommentWhereUniqueInput
    data: XOR<PostCommentUpdateWithoutUserInput, PostCommentUncheckedUpdateWithoutUserInput>
  }

  export type PostCommentUpdateManyWithWhereWithoutUserInput = {
    where: PostCommentScalarWhereInput
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type PostCommentScalarWhereInput = {
    AND?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
    OR?: PostCommentScalarWhereInput[]
    NOT?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
    id?: IntFilter<"PostComment"> | number
    content?: StringFilter<"PostComment"> | string
    createdAt?: DateTimeFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PostComment"> | Date | string | null
    userId?: StringFilter<"PostComment"> | string
    postId?: IntFilter<"PostComment"> | number
  }

  export type UserSubscribeUpsertWithWhereUniqueWithoutSubscriberInput = {
    where: UserSubscribeWhereUniqueInput
    update: XOR<UserSubscribeUpdateWithoutSubscriberInput, UserSubscribeUncheckedUpdateWithoutSubscriberInput>
    create: XOR<UserSubscribeCreateWithoutSubscriberInput, UserSubscribeUncheckedCreateWithoutSubscriberInput>
  }

  export type UserSubscribeUpdateWithWhereUniqueWithoutSubscriberInput = {
    where: UserSubscribeWhereUniqueInput
    data: XOR<UserSubscribeUpdateWithoutSubscriberInput, UserSubscribeUncheckedUpdateWithoutSubscriberInput>
  }

  export type UserSubscribeUpdateManyWithWhereWithoutSubscriberInput = {
    where: UserSubscribeScalarWhereInput
    data: XOR<UserSubscribeUpdateManyMutationInput, UserSubscribeUncheckedUpdateManyWithoutSubscriberInput>
  }

  export type UserSubscribeScalarWhereInput = {
    AND?: UserSubscribeScalarWhereInput | UserSubscribeScalarWhereInput[]
    OR?: UserSubscribeScalarWhereInput[]
    NOT?: UserSubscribeScalarWhereInput | UserSubscribeScalarWhereInput[]
    id?: IntFilter<"UserSubscribe"> | number
    createdAt?: DateTimeFilter<"UserSubscribe"> | Date | string
    subscriberId?: StringFilter<"UserSubscribe"> | string
    subscribedToId?: StringFilter<"UserSubscribe"> | string
  }

  export type UserSubscribeUpsertWithWhereUniqueWithoutSubscribedToInput = {
    where: UserSubscribeWhereUniqueInput
    update: XOR<UserSubscribeUpdateWithoutSubscribedToInput, UserSubscribeUncheckedUpdateWithoutSubscribedToInput>
    create: XOR<UserSubscribeCreateWithoutSubscribedToInput, UserSubscribeUncheckedCreateWithoutSubscribedToInput>
  }

  export type UserSubscribeUpdateWithWhereUniqueWithoutSubscribedToInput = {
    where: UserSubscribeWhereUniqueInput
    data: XOR<UserSubscribeUpdateWithoutSubscribedToInput, UserSubscribeUncheckedUpdateWithoutSubscribedToInput>
  }

  export type UserSubscribeUpdateManyWithWhereWithoutSubscribedToInput = {
    where: UserSubscribeScalarWhereInput
    data: XOR<UserSubscribeUpdateManyMutationInput, UserSubscribeUncheckedUpdateManyWithoutSubscribedToInput>
  }

  export type PostTempUpsertWithWhereUniqueWithoutUserInput = {
    where: PostTempWhereUniqueInput
    update: XOR<PostTempUpdateWithoutUserInput, PostTempUncheckedUpdateWithoutUserInput>
    create: XOR<PostTempCreateWithoutUserInput, PostTempUncheckedCreateWithoutUserInput>
  }

  export type PostTempUpdateWithWhereUniqueWithoutUserInput = {
    where: PostTempWhereUniqueInput
    data: XOR<PostTempUpdateWithoutUserInput, PostTempUncheckedUpdateWithoutUserInput>
  }

  export type PostTempUpdateManyWithWhereWithoutUserInput = {
    where: PostTempScalarWhereInput
    data: XOR<PostTempUpdateManyMutationInput, PostTempUncheckedUpdateManyWithoutUserInput>
  }

  export type PostTempScalarWhereInput = {
    AND?: PostTempScalarWhereInput | PostTempScalarWhereInput[]
    OR?: PostTempScalarWhereInput[]
    NOT?: PostTempScalarWhereInput | PostTempScalarWhereInput[]
    id?: IntFilter<"PostTemp"> | number
    title?: StringFilter<"PostTemp"> | string
    content?: StringFilter<"PostTemp"> | string
    createdAt?: DateTimeFilter<"PostTemp"> | Date | string
    scope?: EnumScopeFilter<"PostTemp"> | $Enums.Scope
    userId?: StringFilter<"PostTemp"> | string
  }

  export type PostBookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: PostBookmarkWhereUniqueInput
    update: XOR<PostBookmarkUpdateWithoutUserInput, PostBookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<PostBookmarkCreateWithoutUserInput, PostBookmarkUncheckedCreateWithoutUserInput>
  }

  export type PostBookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: PostBookmarkWhereUniqueInput
    data: XOR<PostBookmarkUpdateWithoutUserInput, PostBookmarkUncheckedUpdateWithoutUserInput>
  }

  export type PostBookmarkUpdateManyWithWhereWithoutUserInput = {
    where: PostBookmarkScalarWhereInput
    data: XOR<PostBookmarkUpdateManyMutationInput, PostBookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type PostBookmarkScalarWhereInput = {
    AND?: PostBookmarkScalarWhereInput | PostBookmarkScalarWhereInput[]
    OR?: PostBookmarkScalarWhereInput[]
    NOT?: PostBookmarkScalarWhereInput | PostBookmarkScalarWhereInput[]
    id?: IntFilter<"PostBookmark"> | number
    createdAt?: DateTimeFilter<"PostBookmark"> | Date | string
    userId?: StringFilter<"PostBookmark"> | string
    postId?: IntFilter<"PostBookmark"> | number
  }

  export type PostLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutUserInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikeScalarWhereInput = {
    AND?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    OR?: PostLikeScalarWhereInput[]
    NOT?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    id?: IntFilter<"PostLike"> | number
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    userId?: StringFilter<"PostLike"> | string
    postId?: IntFilter<"PostLike"> | number
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscribingInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscribingInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscribingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscribingInput, UserUncheckedCreateWithoutSubscribingInput>
  }

  export type UserCreateWithoutSubscribersInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscribersInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscribersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
  }

  export type UserUpsertWithoutSubscribingInput = {
    update: XOR<UserUpdateWithoutSubscribingInput, UserUncheckedUpdateWithoutSubscribingInput>
    create: XOR<UserCreateWithoutSubscribingInput, UserUncheckedCreateWithoutSubscribingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscribingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscribingInput, UserUncheckedUpdateWithoutSubscribingInput>
  }

  export type UserUpdateWithoutSubscribingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscribingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSubscribersInput = {
    update: XOR<UserUpdateWithoutSubscribersInput, UserUncheckedUpdateWithoutSubscribersInput>
    create: XOR<UserCreateWithoutSubscribersInput, UserUncheckedCreateWithoutSubscribersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscribersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscribersInput, UserUncheckedUpdateWithoutSubscribersInput>
  }

  export type UserUpdateWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type PostTagCreateWithoutPostInput = {
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutPostTagsInput
  }

  export type PostTagUncheckedCreateWithoutPostInput = {
    tagId: number
    createdAt?: Date | string
  }

  export type PostTagCreateOrConnectWithoutPostInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagCreateManyPostInputEnvelope = {
    data: PostTagCreateManyPostInput | PostTagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentCreateWithoutPostInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentUncheckedCreateWithoutPostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
  }

  export type PostCommentCreateOrConnectWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput>
  }

  export type PostCommentCreateManyPostInputEnvelope = {
    data: PostCommentCreateManyPostInput | PostCommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostBookmarkCreateWithoutPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostBookmarksInput
  }

  export type PostBookmarkUncheckedCreateWithoutPostInput = {
    id?: number
    createdAt?: Date | string
    userId: string
  }

  export type PostBookmarkCreateOrConnectWithoutPostInput = {
    where: PostBookmarkWhereUniqueInput
    create: XOR<PostBookmarkCreateWithoutPostInput, PostBookmarkUncheckedCreateWithoutPostInput>
  }

  export type PostBookmarkCreateManyPostInputEnvelope = {
    data: PostBookmarkCreateManyPostInput | PostBookmarkCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateWithoutPostInput = {
    id?: number
    createdAt?: Date | string
    userId: string
  }

  export type PostLikeCreateOrConnectWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeCreateManyPostInputEnvelope = {
    data: PostLikeCreateManyPostInput | PostLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
  }

  export type PostTagUpdateManyWithWhereWithoutPostInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostInput>
  }

  export type PostTagScalarWhereInput = {
    AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    OR?: PostTagScalarWhereInput[]
    NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    tagId?: IntFilter<"PostTag"> | number
    postId?: IntFilter<"PostTag"> | number
    createdAt?: DateTimeFilter<"PostTag"> | Date | string
  }

  export type PostCommentUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    update: XOR<PostCommentUpdateWithoutPostInput, PostCommentUncheckedUpdateWithoutPostInput>
    create: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput>
  }

  export type PostCommentUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    data: XOR<PostCommentUpdateWithoutPostInput, PostCommentUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentUpdateManyWithWhereWithoutPostInput = {
    where: PostCommentScalarWhereInput
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostBookmarkUpsertWithWhereUniqueWithoutPostInput = {
    where: PostBookmarkWhereUniqueInput
    update: XOR<PostBookmarkUpdateWithoutPostInput, PostBookmarkUncheckedUpdateWithoutPostInput>
    create: XOR<PostBookmarkCreateWithoutPostInput, PostBookmarkUncheckedCreateWithoutPostInput>
  }

  export type PostBookmarkUpdateWithWhereUniqueWithoutPostInput = {
    where: PostBookmarkWhereUniqueInput
    data: XOR<PostBookmarkUpdateWithoutPostInput, PostBookmarkUncheckedUpdateWithoutPostInput>
  }

  export type PostBookmarkUpdateManyWithWhereWithoutPostInput = {
    where: PostBookmarkScalarWhereInput
    data: XOR<PostBookmarkUpdateManyMutationInput, PostBookmarkUncheckedUpdateManyWithoutPostInput>
  }

  export type PostLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutPostInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type PostTagCreateWithoutTagInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutPostTagsInput
  }

  export type PostTagUncheckedCreateWithoutTagInput = {
    postId: number
    createdAt?: Date | string
  }

  export type PostTagCreateOrConnectWithoutTagInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagCreateManyTagInputEnvelope = {
    data: PostTagCreateManyTagInput | PostTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
  }

  export type PostTagUpdateManyWithWhereWithoutTagInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TagCreateWithoutPostTagsInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutPostTagsInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutPostTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
  }

  export type PostCreateWithoutPostTagsInput = {
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    user: UserCreateNestedOneWithoutPostsInput
    postComments?: PostCommentCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutPostInput
    postLikes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostTagsInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    userId: string
    postComments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutPostInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
  }

  export type TagUpsertWithoutPostTagsInput = {
    update: XOR<TagUpdateWithoutPostTagsInput, TagUncheckedUpdateWithoutPostTagsInput>
    create: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPostTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPostTagsInput, TagUncheckedUpdateWithoutPostTagsInput>
  }

  export type TagUpdateWithoutPostTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutPostTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithoutPostTagsInput = {
    update: XOR<PostUpdateWithoutPostTagsInput, PostUncheckedUpdateWithoutPostTagsInput>
    create: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostTagsInput, PostUncheckedUpdateWithoutPostTagsInput>
  }

  export type PostUpdateWithoutPostTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postComments?: PostCommentUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
    postComments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutPostCategoriesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostCategoriesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostCategoriesInput, UserUncheckedCreateWithoutPostCategoriesInput>
  }

  export type UserUpsertWithoutPostCategoriesInput = {
    update: XOR<UserUpdateWithoutPostCategoriesInput, UserUncheckedUpdateWithoutPostCategoriesInput>
    create: XOR<UserCreateWithoutPostCategoriesInput, UserUncheckedCreateWithoutPostCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostCategoriesInput, UserUncheckedUpdateWithoutPostCategoriesInput>
  }

  export type UserUpdateWithoutPostCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostCommentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCreateWithoutPostCommentsInput = {
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    user: UserCreateNestedOneWithoutPostsInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutPostInput
    postLikes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostCommentsInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    userId: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutPostInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
  }

  export type UserUpsertWithoutPostCommentsInput = {
    update: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type UserUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutPostCommentsInput = {
    update: XOR<PostUpdateWithoutPostCommentsInput, PostUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostCommentsInput, PostUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostUpdateWithoutPostCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutPostTempsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostTempsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostTempsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostTempsInput, UserUncheckedCreateWithoutPostTempsInput>
  }

  export type UserUpsertWithoutPostTempsInput = {
    update: XOR<UserUpdateWithoutPostTempsInput, UserUncheckedUpdateWithoutPostTempsInput>
    create: XOR<UserCreateWithoutPostTempsInput, UserUncheckedCreateWithoutPostTempsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostTempsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostTempsInput, UserUncheckedUpdateWithoutPostTempsInput>
  }

  export type UserUpdateWithoutPostTempsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostTempsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostBookmarksInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostBookmarksInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostBookmarksInput, UserUncheckedCreateWithoutPostBookmarksInput>
  }

  export type PostCreateWithoutPostBookmarksInput = {
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    user: UserCreateNestedOneWithoutPostsInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
    postComments?: PostCommentCreateNestedManyWithoutPostInput
    postLikes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostBookmarksInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    userId: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostBookmarksInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostBookmarksInput, PostUncheckedCreateWithoutPostBookmarksInput>
  }

  export type UserUpsertWithoutPostBookmarksInput = {
    update: XOR<UserUpdateWithoutPostBookmarksInput, UserUncheckedUpdateWithoutPostBookmarksInput>
    create: XOR<UserCreateWithoutPostBookmarksInput, UserUncheckedCreateWithoutPostBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostBookmarksInput, UserUncheckedUpdateWithoutPostBookmarksInput>
  }

  export type UserUpdateWithoutPostBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutPostBookmarksInput = {
    update: XOR<PostUpdateWithoutPostBookmarksInput, PostUncheckedUpdateWithoutPostBookmarksInput>
    create: XOR<PostCreateWithoutPostBookmarksInput, PostUncheckedCreateWithoutPostBookmarksInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostBookmarksInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostBookmarksInput, PostUncheckedUpdateWithoutPostBookmarksInput>
  }

  export type PostUpdateWithoutPostBookmarksInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutPostLikesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostLikesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    imageCover?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postCategories?: PostCategorieUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    subscribing?: UserSubscribeUncheckedCreateNestedManyWithoutSubscriberInput
    subscribers?: UserSubscribeUncheckedCreateNestedManyWithoutSubscribedToInput
    postTemps?: PostTempUncheckedCreateNestedManyWithoutUserInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
  }

  export type PostCreateWithoutPostLikesInput = {
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    user: UserCreateNestedOneWithoutPostsInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
    postComments?: PostCommentCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostLikesInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
    userId: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
    postBookmarks?: PostBookmarkUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
  }

  export type UserUpsertWithoutPostLikesInput = {
    update: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type UserUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageCover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postCategories?: PostCategorieUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    subscribing?: UserSubscribeUncheckedUpdateManyWithoutSubscriberNestedInput
    subscribers?: UserSubscribeUncheckedUpdateManyWithoutSubscribedToNestedInput
    postTemps?: PostTempUncheckedUpdateManyWithoutUserNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutPostLikesInput = {
    update: XOR<PostUpdateWithoutPostLikesInput, PostUncheckedUpdateWithoutPostLikesInput>
    create: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostLikesInput, PostUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostUpdateWithoutPostLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    userId?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutPostNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    content: string
    aiContent?: string | null
    thumbnailImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    scope: $Enums.Scope
  }

  export type PostCategorieCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    sortOrder?: number
  }

  export type PostCommentCreateManyUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    postId: number
  }

  export type UserSubscribeCreateManySubscriberInput = {
    id?: number
    createdAt?: Date | string
    subscribedToId: string
  }

  export type UserSubscribeCreateManySubscribedToInput = {
    id?: number
    createdAt?: Date | string
    subscriberId: string
  }

  export type PostTempCreateManyUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    scope: $Enums.Scope
  }

  export type PostBookmarkCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type PostLikeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    postTags?: PostTagUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
    postBookmarks?: PostBookmarkUncheckedUpdateManyWithoutPostNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    aiContent?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PostCategorieUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PostCategorieUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PostCategorieUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSubscribeUpdateWithoutSubscriberInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribedTo?: UserUpdateOneRequiredWithoutSubscribersNestedInput
  }

  export type UserSubscribeUncheckedUpdateWithoutSubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSubscribeUncheckedUpdateManyWithoutSubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribedToId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSubscribeUpdateWithoutSubscribedToInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriber?: UserUpdateOneRequiredWithoutSubscribingNestedInput
  }

  export type UserSubscribeUncheckedUpdateWithoutSubscribedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSubscribeUncheckedUpdateManyWithoutSubscribedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriberId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTempUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PostTempUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PostTempUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PostBookmarkUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostBookmarksNestedInput
  }

  export type PostBookmarkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostBookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTagCreateManyPostInput = {
    tagId: number
    createdAt?: Date | string
  }

  export type PostCommentCreateManyPostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
  }

  export type PostBookmarkCreateManyPostInput = {
    id?: number
    createdAt?: Date | string
    userId: string
  }

  export type PostLikeCreateManyPostInput = {
    id?: number
    createdAt?: Date | string
    userId: string
  }

  export type PostTagUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutPostTagsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutPostInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagUncheckedUpdateManyWithoutPostInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostBookmarkUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostBookmarksNestedInput
  }

  export type PostBookmarkUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostBookmarkUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostLikeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostLikeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateManyTagInput = {
    postId: number
    createdAt?: Date | string
  }

  export type PostTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostTagsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutTagInput = {
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagUncheckedUpdateManyWithoutTagInput = {
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}