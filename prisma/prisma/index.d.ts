
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Experiencies
 * 
 */
export type Experiencies = $Result.DefaultSelection<Prisma.$ExperienciesPayload>
/**
 * Model ExperienciesDates
 * 
 */
export type ExperienciesDates = $Result.DefaultSelection<Prisma.$ExperienciesDatesPayload>
/**
 * Model Reservations
 * 
 */
export type Reservations = $Result.DefaultSelection<Prisma.$ReservationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experiencies`: Exposes CRUD operations for the **Experiencies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiencies
    * const experiencies = await prisma.experiencies.findMany()
    * ```
    */
  get experiencies(): Prisma.ExperienciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienciesDates`: Exposes CRUD operations for the **ExperienciesDates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienciesDates
    * const experienciesDates = await prisma.experienciesDates.findMany()
    * ```
    */
  get experienciesDates(): Prisma.ExperienciesDatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **Reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservations.findMany()
    * ```
    */
  get reservations(): Prisma.ReservationsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Users: 'Users',
    Experiencies: 'Experiencies',
    ExperienciesDates: 'ExperienciesDates',
    Reservations: 'Reservations'
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
      modelProps: "users" | "experiencies" | "experienciesDates" | "reservations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Experiencies: {
        payload: Prisma.$ExperienciesPayload<ExtArgs>
        fields: Prisma.ExperienciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>
          }
          findFirst: {
            args: Prisma.ExperienciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>
          }
          findMany: {
            args: Prisma.ExperienciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>[]
          }
          create: {
            args: Prisma.ExperienciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>
          }
          createMany: {
            args: Prisma.ExperienciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperienciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>
          }
          update: {
            args: Prisma.ExperienciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>
          }
          deleteMany: {
            args: Prisma.ExperienciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesPayload>
          }
          aggregate: {
            args: Prisma.ExperienciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperiencies>
          }
          groupBy: {
            args: Prisma.ExperienciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienciesCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienciesCountAggregateOutputType> | number
          }
        }
      }
      ExperienciesDates: {
        payload: Prisma.$ExperienciesDatesPayload<ExtArgs>
        fields: Prisma.ExperienciesDatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienciesDatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienciesDatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>
          }
          findFirst: {
            args: Prisma.ExperienciesDatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienciesDatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>
          }
          findMany: {
            args: Prisma.ExperienciesDatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>[]
          }
          create: {
            args: Prisma.ExperienciesDatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>
          }
          createMany: {
            args: Prisma.ExperienciesDatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperienciesDatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>
          }
          update: {
            args: Prisma.ExperienciesDatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>
          }
          deleteMany: {
            args: Prisma.ExperienciesDatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienciesDatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienciesDatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciesDatesPayload>
          }
          aggregate: {
            args: Prisma.ExperienciesDatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienciesDates>
          }
          groupBy: {
            args: Prisma.ExperienciesDatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienciesDatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienciesDatesCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienciesDatesCountAggregateOutputType> | number
          }
        }
      }
      Reservations: {
        payload: Prisma.$ReservationsPayload<ExtArgs>
        fields: Prisma.ReservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findFirst: {
            args: Prisma.ReservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findMany: {
            args: Prisma.ReservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          create: {
            args: Prisma.ReservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          createMany: {
            args: Prisma.ReservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          update: {
            args: Prisma.ReservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          deleteMany: {
            args: Prisma.ReservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.ReservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationsCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationsCountAggregateOutputType> | number
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
    users?: UsersOmit
    experiencies?: ExperienciesOmit
    experienciesDates?: ExperienciesDatesOmit
    reservations?: ReservationsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    reservations: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | UsersCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }


  /**
   * Count Type ExperienciesCountOutputType
   */

  export type ExperienciesCountOutputType = {
    experienciesDates: number
    reservations: number
  }

  export type ExperienciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienciesDates?: boolean | ExperienciesCountOutputTypeCountExperienciesDatesArgs
    reservations?: boolean | ExperienciesCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ExperienciesCountOutputType without action
   */
  export type ExperienciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesCountOutputType
     */
    select?: ExperienciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienciesCountOutputType without action
   */
  export type ExperienciesCountOutputTypeCountExperienciesDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienciesDatesWhereInput
  }

  /**
   * ExperienciesCountOutputType without action
   */
  export type ExperienciesCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }


  /**
   * Count Type ExperienciesDatesCountOutputType
   */

  export type ExperienciesDatesCountOutputType = {
    reservations: number
  }

  export type ExperienciesDatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ExperienciesDatesCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ExperienciesDatesCountOutputType without action
   */
  export type ExperienciesDatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDatesCountOutputType
     */
    select?: ExperienciesDatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienciesDatesCountOutputType without action
   */
  export type ExperienciesDatesCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    reservations?: boolean | Users$reservationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Users$reservationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Users$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.reservations
   */
  export type Users$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Experiencies
   */

  export type AggregateExperiencies = {
    _count: ExperienciesCountAggregateOutputType | null
    _avg: ExperienciesAvgAggregateOutputType | null
    _sum: ExperienciesSumAggregateOutputType | null
    _min: ExperienciesMinAggregateOutputType | null
    _max: ExperienciesMaxAggregateOutputType | null
  }

  export type ExperienciesAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperienciesSumAggregateOutputType = {
    id: number | null
  }

  export type ExperienciesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ExperienciesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ExperienciesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ExperienciesAvgAggregateInputType = {
    id?: true
  }

  export type ExperienciesSumAggregateInputType = {
    id?: true
  }

  export type ExperienciesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExperienciesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExperienciesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ExperienciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiencies to aggregate.
     */
    where?: ExperienciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiencies to fetch.
     */
    orderBy?: ExperienciesOrderByWithRelationInput | ExperienciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiencies
    **/
    _count?: true | ExperienciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienciesMaxAggregateInputType
  }

  export type GetExperienciesAggregateType<T extends ExperienciesAggregateArgs> = {
        [P in keyof T & keyof AggregateExperiencies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperiencies[P]>
      : GetScalarType<T[P], AggregateExperiencies[P]>
  }




  export type ExperienciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienciesWhereInput
    orderBy?: ExperienciesOrderByWithAggregationInput | ExperienciesOrderByWithAggregationInput[]
    by: ExperienciesScalarFieldEnum[] | ExperienciesScalarFieldEnum
    having?: ExperienciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienciesCountAggregateInputType | true
    _avg?: ExperienciesAvgAggregateInputType
    _sum?: ExperienciesSumAggregateInputType
    _min?: ExperienciesMinAggregateInputType
    _max?: ExperienciesMaxAggregateInputType
  }

  export type ExperienciesGroupByOutputType = {
    id: number
    name: string
    _count: ExperienciesCountAggregateOutputType | null
    _avg: ExperienciesAvgAggregateOutputType | null
    _sum: ExperienciesSumAggregateOutputType | null
    _min: ExperienciesMinAggregateOutputType | null
    _max: ExperienciesMaxAggregateOutputType | null
  }

  type GetExperienciesGroupByPayload<T extends ExperienciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienciesGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienciesGroupByOutputType[P]>
        }
      >
    >


  export type ExperienciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienciesDates?: boolean | Experiencies$experienciesDatesArgs<ExtArgs>
    reservations?: boolean | Experiencies$reservationsArgs<ExtArgs>
    _count?: boolean | ExperienciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experiencies"]>



  export type ExperienciesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ExperienciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["experiencies"]>
  export type ExperienciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienciesDates?: boolean | Experiencies$experienciesDatesArgs<ExtArgs>
    reservations?: boolean | Experiencies$reservationsArgs<ExtArgs>
    _count?: boolean | ExperienciesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExperienciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experiencies"
    objects: {
      experienciesDates: Prisma.$ExperienciesDatesPayload<ExtArgs>[]
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["experiencies"]>
    composites: {}
  }

  type ExperienciesGetPayload<S extends boolean | null | undefined | ExperienciesDefaultArgs> = $Result.GetResult<Prisma.$ExperienciesPayload, S>

  type ExperienciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienciesCountAggregateInputType | true
    }

  export interface ExperienciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experiencies'], meta: { name: 'Experiencies' } }
    /**
     * Find zero or one Experiencies that matches the filter.
     * @param {ExperienciesFindUniqueArgs} args - Arguments to find a Experiencies
     * @example
     * // Get one Experiencies
     * const experiencies = await prisma.experiencies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienciesFindUniqueArgs>(args: SelectSubset<T, ExperienciesFindUniqueArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experiencies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienciesFindUniqueOrThrowArgs} args - Arguments to find a Experiencies
     * @example
     * // Get one Experiencies
     * const experiencies = await prisma.experiencies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienciesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experiencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesFindFirstArgs} args - Arguments to find a Experiencies
     * @example
     * // Get one Experiencies
     * const experiencies = await prisma.experiencies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienciesFindFirstArgs>(args?: SelectSubset<T, ExperienciesFindFirstArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experiencies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesFindFirstOrThrowArgs} args - Arguments to find a Experiencies
     * @example
     * // Get one Experiencies
     * const experiencies = await prisma.experiencies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienciesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiencies
     * const experiencies = await prisma.experiencies.findMany()
     * 
     * // Get first 10 Experiencies
     * const experiencies = await prisma.experiencies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienciesWithIdOnly = await prisma.experiencies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienciesFindManyArgs>(args?: SelectSubset<T, ExperienciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experiencies.
     * @param {ExperienciesCreateArgs} args - Arguments to create a Experiencies.
     * @example
     * // Create one Experiencies
     * const Experiencies = await prisma.experiencies.create({
     *   data: {
     *     // ... data to create a Experiencies
     *   }
     * })
     * 
     */
    create<T extends ExperienciesCreateArgs>(args: SelectSubset<T, ExperienciesCreateArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiencies.
     * @param {ExperienciesCreateManyArgs} args - Arguments to create many Experiencies.
     * @example
     * // Create many Experiencies
     * const experiencies = await prisma.experiencies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienciesCreateManyArgs>(args?: SelectSubset<T, ExperienciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experiencies.
     * @param {ExperienciesDeleteArgs} args - Arguments to delete one Experiencies.
     * @example
     * // Delete one Experiencies
     * const Experiencies = await prisma.experiencies.delete({
     *   where: {
     *     // ... filter to delete one Experiencies
     *   }
     * })
     * 
     */
    delete<T extends ExperienciesDeleteArgs>(args: SelectSubset<T, ExperienciesDeleteArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experiencies.
     * @param {ExperienciesUpdateArgs} args - Arguments to update one Experiencies.
     * @example
     * // Update one Experiencies
     * const experiencies = await prisma.experiencies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienciesUpdateArgs>(args: SelectSubset<T, ExperienciesUpdateArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiencies.
     * @param {ExperienciesDeleteManyArgs} args - Arguments to filter Experiencies to delete.
     * @example
     * // Delete a few Experiencies
     * const { count } = await prisma.experiencies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienciesDeleteManyArgs>(args?: SelectSubset<T, ExperienciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiencies
     * const experiencies = await prisma.experiencies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienciesUpdateManyArgs>(args: SelectSubset<T, ExperienciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experiencies.
     * @param {ExperienciesUpsertArgs} args - Arguments to update or create a Experiencies.
     * @example
     * // Update or create a Experiencies
     * const experiencies = await prisma.experiencies.upsert({
     *   create: {
     *     // ... data to create a Experiencies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experiencies we want to update
     *   }
     * })
     */
    upsert<T extends ExperienciesUpsertArgs>(args: SelectSubset<T, ExperienciesUpsertArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesCountArgs} args - Arguments to filter Experiencies to count.
     * @example
     * // Count the number of Experiencies
     * const count = await prisma.experiencies.count({
     *   where: {
     *     // ... the filter for the Experiencies we want to count
     *   }
     * })
    **/
    count<T extends ExperienciesCountArgs>(
      args?: Subset<T, ExperienciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienciesAggregateArgs>(args: Subset<T, ExperienciesAggregateArgs>): Prisma.PrismaPromise<GetExperienciesAggregateType<T>>

    /**
     * Group by Experiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesGroupByArgs} args - Group by arguments.
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
      T extends ExperienciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienciesGroupByArgs['orderBy'] }
        : { orderBy?: ExperienciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experiencies model
   */
  readonly fields: ExperienciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experiencies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experienciesDates<T extends Experiencies$experienciesDatesArgs<ExtArgs> = {}>(args?: Subset<T, Experiencies$experienciesDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Experiencies$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Experiencies$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Experiencies model
   */
  interface ExperienciesFieldRefs {
    readonly id: FieldRef<"Experiencies", 'Int'>
    readonly name: FieldRef<"Experiencies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experiencies findUnique
   */
  export type ExperienciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * Filter, which Experiencies to fetch.
     */
    where: ExperienciesWhereUniqueInput
  }

  /**
   * Experiencies findUniqueOrThrow
   */
  export type ExperienciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * Filter, which Experiencies to fetch.
     */
    where: ExperienciesWhereUniqueInput
  }

  /**
   * Experiencies findFirst
   */
  export type ExperienciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * Filter, which Experiencies to fetch.
     */
    where?: ExperienciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiencies to fetch.
     */
    orderBy?: ExperienciesOrderByWithRelationInput | ExperienciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiencies.
     */
    cursor?: ExperienciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiencies.
     */
    distinct?: ExperienciesScalarFieldEnum | ExperienciesScalarFieldEnum[]
  }

  /**
   * Experiencies findFirstOrThrow
   */
  export type ExperienciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * Filter, which Experiencies to fetch.
     */
    where?: ExperienciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiencies to fetch.
     */
    orderBy?: ExperienciesOrderByWithRelationInput | ExperienciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiencies.
     */
    cursor?: ExperienciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiencies.
     */
    distinct?: ExperienciesScalarFieldEnum | ExperienciesScalarFieldEnum[]
  }

  /**
   * Experiencies findMany
   */
  export type ExperienciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * Filter, which Experiencies to fetch.
     */
    where?: ExperienciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiencies to fetch.
     */
    orderBy?: ExperienciesOrderByWithRelationInput | ExperienciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiencies.
     */
    cursor?: ExperienciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiencies.
     */
    skip?: number
    distinct?: ExperienciesScalarFieldEnum | ExperienciesScalarFieldEnum[]
  }

  /**
   * Experiencies create
   */
  export type ExperienciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Experiencies.
     */
    data: XOR<ExperienciesCreateInput, ExperienciesUncheckedCreateInput>
  }

  /**
   * Experiencies createMany
   */
  export type ExperienciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiencies.
     */
    data: ExperienciesCreateManyInput | ExperienciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experiencies update
   */
  export type ExperienciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Experiencies.
     */
    data: XOR<ExperienciesUpdateInput, ExperienciesUncheckedUpdateInput>
    /**
     * Choose, which Experiencies to update.
     */
    where: ExperienciesWhereUniqueInput
  }

  /**
   * Experiencies updateMany
   */
  export type ExperienciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiencies.
     */
    data: XOR<ExperienciesUpdateManyMutationInput, ExperienciesUncheckedUpdateManyInput>
    /**
     * Filter which Experiencies to update
     */
    where?: ExperienciesWhereInput
    /**
     * Limit how many Experiencies to update.
     */
    limit?: number
  }

  /**
   * Experiencies upsert
   */
  export type ExperienciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Experiencies to update in case it exists.
     */
    where: ExperienciesWhereUniqueInput
    /**
     * In case the Experiencies found by the `where` argument doesn't exist, create a new Experiencies with this data.
     */
    create: XOR<ExperienciesCreateInput, ExperienciesUncheckedCreateInput>
    /**
     * In case the Experiencies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienciesUpdateInput, ExperienciesUncheckedUpdateInput>
  }

  /**
   * Experiencies delete
   */
  export type ExperienciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
    /**
     * Filter which Experiencies to delete.
     */
    where: ExperienciesWhereUniqueInput
  }

  /**
   * Experiencies deleteMany
   */
  export type ExperienciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiencies to delete
     */
    where?: ExperienciesWhereInput
    /**
     * Limit how many Experiencies to delete.
     */
    limit?: number
  }

  /**
   * Experiencies.experienciesDates
   */
  export type Experiencies$experienciesDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    where?: ExperienciesDatesWhereInput
    orderBy?: ExperienciesDatesOrderByWithRelationInput | ExperienciesDatesOrderByWithRelationInput[]
    cursor?: ExperienciesDatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienciesDatesScalarFieldEnum | ExperienciesDatesScalarFieldEnum[]
  }

  /**
   * Experiencies.reservations
   */
  export type Experiencies$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Experiencies without action
   */
  export type ExperienciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiencies
     */
    select?: ExperienciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiencies
     */
    omit?: ExperienciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesInclude<ExtArgs> | null
  }


  /**
   * Model ExperienciesDates
   */

  export type AggregateExperienciesDates = {
    _count: ExperienciesDatesCountAggregateOutputType | null
    _avg: ExperienciesDatesAvgAggregateOutputType | null
    _sum: ExperienciesDatesSumAggregateOutputType | null
    _min: ExperienciesDatesMinAggregateOutputType | null
    _max: ExperienciesDatesMaxAggregateOutputType | null
  }

  export type ExperienciesDatesAvgAggregateOutputType = {
    id: number | null
    experienceId: number | null
    availables: number | null
  }

  export type ExperienciesDatesSumAggregateOutputType = {
    id: number | null
    experienceId: number | null
    availables: number | null
  }

  export type ExperienciesDatesMinAggregateOutputType = {
    id: number | null
    experienceId: number | null
    date: Date | null
    availables: number | null
  }

  export type ExperienciesDatesMaxAggregateOutputType = {
    id: number | null
    experienceId: number | null
    date: Date | null
    availables: number | null
  }

  export type ExperienciesDatesCountAggregateOutputType = {
    id: number
    experienceId: number
    date: number
    availables: number
    _all: number
  }


  export type ExperienciesDatesAvgAggregateInputType = {
    id?: true
    experienceId?: true
    availables?: true
  }

  export type ExperienciesDatesSumAggregateInputType = {
    id?: true
    experienceId?: true
    availables?: true
  }

  export type ExperienciesDatesMinAggregateInputType = {
    id?: true
    experienceId?: true
    date?: true
    availables?: true
  }

  export type ExperienciesDatesMaxAggregateInputType = {
    id?: true
    experienceId?: true
    date?: true
    availables?: true
  }

  export type ExperienciesDatesCountAggregateInputType = {
    id?: true
    experienceId?: true
    date?: true
    availables?: true
    _all?: true
  }

  export type ExperienciesDatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienciesDates to aggregate.
     */
    where?: ExperienciesDatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciesDates to fetch.
     */
    orderBy?: ExperienciesDatesOrderByWithRelationInput | ExperienciesDatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienciesDatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciesDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciesDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienciesDates
    **/
    _count?: true | ExperienciesDatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienciesDatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienciesDatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienciesDatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienciesDatesMaxAggregateInputType
  }

  export type GetExperienciesDatesAggregateType<T extends ExperienciesDatesAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienciesDates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienciesDates[P]>
      : GetScalarType<T[P], AggregateExperienciesDates[P]>
  }




  export type ExperienciesDatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienciesDatesWhereInput
    orderBy?: ExperienciesDatesOrderByWithAggregationInput | ExperienciesDatesOrderByWithAggregationInput[]
    by: ExperienciesDatesScalarFieldEnum[] | ExperienciesDatesScalarFieldEnum
    having?: ExperienciesDatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienciesDatesCountAggregateInputType | true
    _avg?: ExperienciesDatesAvgAggregateInputType
    _sum?: ExperienciesDatesSumAggregateInputType
    _min?: ExperienciesDatesMinAggregateInputType
    _max?: ExperienciesDatesMaxAggregateInputType
  }

  export type ExperienciesDatesGroupByOutputType = {
    id: number
    experienceId: number
    date: Date
    availables: number
    _count: ExperienciesDatesCountAggregateOutputType | null
    _avg: ExperienciesDatesAvgAggregateOutputType | null
    _sum: ExperienciesDatesSumAggregateOutputType | null
    _min: ExperienciesDatesMinAggregateOutputType | null
    _max: ExperienciesDatesMaxAggregateOutputType | null
  }

  type GetExperienciesDatesGroupByPayload<T extends ExperienciesDatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienciesDatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienciesDatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienciesDatesGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienciesDatesGroupByOutputType[P]>
        }
      >
    >


  export type ExperienciesDatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceId?: boolean
    date?: boolean
    availables?: boolean
    experience?: boolean | ExperienciesDefaultArgs<ExtArgs>
    reservations?: boolean | ExperienciesDates$reservationsArgs<ExtArgs>
    _count?: boolean | ExperienciesDatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienciesDates"]>



  export type ExperienciesDatesSelectScalar = {
    id?: boolean
    experienceId?: boolean
    date?: boolean
    availables?: boolean
  }

  export type ExperienciesDatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "experienceId" | "date" | "availables", ExtArgs["result"]["experienciesDates"]>
  export type ExperienciesDatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienciesDefaultArgs<ExtArgs>
    reservations?: boolean | ExperienciesDates$reservationsArgs<ExtArgs>
    _count?: boolean | ExperienciesDatesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExperienciesDatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienciesDates"
    objects: {
      experience: Prisma.$ExperienciesPayload<ExtArgs>
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      experienceId: number
      date: Date
      availables: number
    }, ExtArgs["result"]["experienciesDates"]>
    composites: {}
  }

  type ExperienciesDatesGetPayload<S extends boolean | null | undefined | ExperienciesDatesDefaultArgs> = $Result.GetResult<Prisma.$ExperienciesDatesPayload, S>

  type ExperienciesDatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienciesDatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienciesDatesCountAggregateInputType | true
    }

  export interface ExperienciesDatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienciesDates'], meta: { name: 'ExperienciesDates' } }
    /**
     * Find zero or one ExperienciesDates that matches the filter.
     * @param {ExperienciesDatesFindUniqueArgs} args - Arguments to find a ExperienciesDates
     * @example
     * // Get one ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienciesDatesFindUniqueArgs>(args: SelectSubset<T, ExperienciesDatesFindUniqueArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienciesDates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienciesDatesFindUniqueOrThrowArgs} args - Arguments to find a ExperienciesDates
     * @example
     * // Get one ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienciesDatesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienciesDatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienciesDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesFindFirstArgs} args - Arguments to find a ExperienciesDates
     * @example
     * // Get one ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienciesDatesFindFirstArgs>(args?: SelectSubset<T, ExperienciesDatesFindFirstArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienciesDates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesFindFirstOrThrowArgs} args - Arguments to find a ExperienciesDates
     * @example
     * // Get one ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienciesDatesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienciesDatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienciesDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.findMany()
     * 
     * // Get first 10 ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienciesDatesWithIdOnly = await prisma.experienciesDates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienciesDatesFindManyArgs>(args?: SelectSubset<T, ExperienciesDatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienciesDates.
     * @param {ExperienciesDatesCreateArgs} args - Arguments to create a ExperienciesDates.
     * @example
     * // Create one ExperienciesDates
     * const ExperienciesDates = await prisma.experienciesDates.create({
     *   data: {
     *     // ... data to create a ExperienciesDates
     *   }
     * })
     * 
     */
    create<T extends ExperienciesDatesCreateArgs>(args: SelectSubset<T, ExperienciesDatesCreateArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienciesDates.
     * @param {ExperienciesDatesCreateManyArgs} args - Arguments to create many ExperienciesDates.
     * @example
     * // Create many ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienciesDatesCreateManyArgs>(args?: SelectSubset<T, ExperienciesDatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExperienciesDates.
     * @param {ExperienciesDatesDeleteArgs} args - Arguments to delete one ExperienciesDates.
     * @example
     * // Delete one ExperienciesDates
     * const ExperienciesDates = await prisma.experienciesDates.delete({
     *   where: {
     *     // ... filter to delete one ExperienciesDates
     *   }
     * })
     * 
     */
    delete<T extends ExperienciesDatesDeleteArgs>(args: SelectSubset<T, ExperienciesDatesDeleteArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienciesDates.
     * @param {ExperienciesDatesUpdateArgs} args - Arguments to update one ExperienciesDates.
     * @example
     * // Update one ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienciesDatesUpdateArgs>(args: SelectSubset<T, ExperienciesDatesUpdateArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienciesDates.
     * @param {ExperienciesDatesDeleteManyArgs} args - Arguments to filter ExperienciesDates to delete.
     * @example
     * // Delete a few ExperienciesDates
     * const { count } = await prisma.experienciesDates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienciesDatesDeleteManyArgs>(args?: SelectSubset<T, ExperienciesDatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienciesDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienciesDatesUpdateManyArgs>(args: SelectSubset<T, ExperienciesDatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExperienciesDates.
     * @param {ExperienciesDatesUpsertArgs} args - Arguments to update or create a ExperienciesDates.
     * @example
     * // Update or create a ExperienciesDates
     * const experienciesDates = await prisma.experienciesDates.upsert({
     *   create: {
     *     // ... data to create a ExperienciesDates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienciesDates we want to update
     *   }
     * })
     */
    upsert<T extends ExperienciesDatesUpsertArgs>(args: SelectSubset<T, ExperienciesDatesUpsertArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienciesDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesCountArgs} args - Arguments to filter ExperienciesDates to count.
     * @example
     * // Count the number of ExperienciesDates
     * const count = await prisma.experienciesDates.count({
     *   where: {
     *     // ... the filter for the ExperienciesDates we want to count
     *   }
     * })
    **/
    count<T extends ExperienciesDatesCountArgs>(
      args?: Subset<T, ExperienciesDatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienciesDatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienciesDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienciesDatesAggregateArgs>(args: Subset<T, ExperienciesDatesAggregateArgs>): Prisma.PrismaPromise<GetExperienciesDatesAggregateType<T>>

    /**
     * Group by ExperienciesDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciesDatesGroupByArgs} args - Group by arguments.
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
      T extends ExperienciesDatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienciesDatesGroupByArgs['orderBy'] }
        : { orderBy?: ExperienciesDatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienciesDatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienciesDatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienciesDates model
   */
  readonly fields: ExperienciesDatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienciesDates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienciesDatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends ExperienciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienciesDefaultArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends ExperienciesDates$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, ExperienciesDates$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExperienciesDates model
   */
  interface ExperienciesDatesFieldRefs {
    readonly id: FieldRef<"ExperienciesDates", 'Int'>
    readonly experienceId: FieldRef<"ExperienciesDates", 'Int'>
    readonly date: FieldRef<"ExperienciesDates", 'DateTime'>
    readonly availables: FieldRef<"ExperienciesDates", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExperienciesDates findUnique
   */
  export type ExperienciesDatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciesDates to fetch.
     */
    where: ExperienciesDatesWhereUniqueInput
  }

  /**
   * ExperienciesDates findUniqueOrThrow
   */
  export type ExperienciesDatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciesDates to fetch.
     */
    where: ExperienciesDatesWhereUniqueInput
  }

  /**
   * ExperienciesDates findFirst
   */
  export type ExperienciesDatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciesDates to fetch.
     */
    where?: ExperienciesDatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciesDates to fetch.
     */
    orderBy?: ExperienciesDatesOrderByWithRelationInput | ExperienciesDatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienciesDates.
     */
    cursor?: ExperienciesDatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciesDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciesDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienciesDates.
     */
    distinct?: ExperienciesDatesScalarFieldEnum | ExperienciesDatesScalarFieldEnum[]
  }

  /**
   * ExperienciesDates findFirstOrThrow
   */
  export type ExperienciesDatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciesDates to fetch.
     */
    where?: ExperienciesDatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciesDates to fetch.
     */
    orderBy?: ExperienciesDatesOrderByWithRelationInput | ExperienciesDatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienciesDates.
     */
    cursor?: ExperienciesDatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciesDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciesDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienciesDates.
     */
    distinct?: ExperienciesDatesScalarFieldEnum | ExperienciesDatesScalarFieldEnum[]
  }

  /**
   * ExperienciesDates findMany
   */
  export type ExperienciesDatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciesDates to fetch.
     */
    where?: ExperienciesDatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciesDates to fetch.
     */
    orderBy?: ExperienciesDatesOrderByWithRelationInput | ExperienciesDatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienciesDates.
     */
    cursor?: ExperienciesDatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciesDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciesDates.
     */
    skip?: number
    distinct?: ExperienciesDatesScalarFieldEnum | ExperienciesDatesScalarFieldEnum[]
  }

  /**
   * ExperienciesDates create
   */
  export type ExperienciesDatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienciesDates.
     */
    data: XOR<ExperienciesDatesCreateInput, ExperienciesDatesUncheckedCreateInput>
  }

  /**
   * ExperienciesDates createMany
   */
  export type ExperienciesDatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienciesDates.
     */
    data: ExperienciesDatesCreateManyInput | ExperienciesDatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienciesDates update
   */
  export type ExperienciesDatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienciesDates.
     */
    data: XOR<ExperienciesDatesUpdateInput, ExperienciesDatesUncheckedUpdateInput>
    /**
     * Choose, which ExperienciesDates to update.
     */
    where: ExperienciesDatesWhereUniqueInput
  }

  /**
   * ExperienciesDates updateMany
   */
  export type ExperienciesDatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienciesDates.
     */
    data: XOR<ExperienciesDatesUpdateManyMutationInput, ExperienciesDatesUncheckedUpdateManyInput>
    /**
     * Filter which ExperienciesDates to update
     */
    where?: ExperienciesDatesWhereInput
    /**
     * Limit how many ExperienciesDates to update.
     */
    limit?: number
  }

  /**
   * ExperienciesDates upsert
   */
  export type ExperienciesDatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienciesDates to update in case it exists.
     */
    where: ExperienciesDatesWhereUniqueInput
    /**
     * In case the ExperienciesDates found by the `where` argument doesn't exist, create a new ExperienciesDates with this data.
     */
    create: XOR<ExperienciesDatesCreateInput, ExperienciesDatesUncheckedCreateInput>
    /**
     * In case the ExperienciesDates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienciesDatesUpdateInput, ExperienciesDatesUncheckedUpdateInput>
  }

  /**
   * ExperienciesDates delete
   */
  export type ExperienciesDatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
    /**
     * Filter which ExperienciesDates to delete.
     */
    where: ExperienciesDatesWhereUniqueInput
  }

  /**
   * ExperienciesDates deleteMany
   */
  export type ExperienciesDatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienciesDates to delete
     */
    where?: ExperienciesDatesWhereInput
    /**
     * Limit how many ExperienciesDates to delete.
     */
    limit?: number
  }

  /**
   * ExperienciesDates.reservations
   */
  export type ExperienciesDates$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * ExperienciesDates without action
   */
  export type ExperienciesDatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciesDates
     */
    select?: ExperienciesDatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciesDates
     */
    omit?: ExperienciesDatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciesDatesInclude<ExtArgs> | null
  }


  /**
   * Model Reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    experienceId: number | null
    experienceDateId: number | null
    userId: number | null
  }

  export type ReservationsSumAggregateOutputType = {
    id: number | null
    amount: number | null
    experienceId: number | null
    experienceDateId: number | null
    userId: number | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: number | null
    amount: number | null
    experienceId: number | null
    experienceDateId: number | null
    userId: number | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    experienceId: number | null
    experienceDateId: number | null
    userId: number | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    amount: number
    experienceId: number
    experienceDateId: number
    userId: number
    _all: number
  }


  export type ReservationsAvgAggregateInputType = {
    id?: true
    amount?: true
    experienceId?: true
    experienceDateId?: true
    userId?: true
  }

  export type ReservationsSumAggregateInputType = {
    id?: true
    amount?: true
    experienceId?: true
    experienceDateId?: true
    userId?: true
  }

  export type ReservationsMinAggregateInputType = {
    id?: true
    amount?: true
    experienceId?: true
    experienceDateId?: true
    userId?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    amount?: true
    experienceId?: true
    experienceDateId?: true
    userId?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    amount?: true
    experienceId?: true
    experienceDateId?: true
    userId?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to aggregate.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }




  export type ReservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithAggregationInput | ReservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: ReservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _avg?: ReservationsAvgAggregateInputType
    _sum?: ReservationsSumAggregateInputType
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: number
    amount: number
    experienceId: number
    experienceDateId: number
    userId: number
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends ReservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >


  export type ReservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    experienceId?: boolean
    experienceDateId?: boolean
    userId?: boolean
    experience?: boolean | ExperienciesDefaultArgs<ExtArgs>
    experienciesDate?: boolean | ExperienciesDatesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>



  export type ReservationsSelectScalar = {
    id?: boolean
    amount?: boolean
    experienceId?: boolean
    experienceDateId?: boolean
    userId?: boolean
  }

  export type ReservationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "experienceId" | "experienceDateId" | "userId", ExtArgs["result"]["reservations"]>
  export type ReservationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienciesDefaultArgs<ExtArgs>
    experienciesDate?: boolean | ExperienciesDatesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ReservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservations"
    objects: {
      experience: Prisma.$ExperienciesPayload<ExtArgs>
      experienciesDate: Prisma.$ExperienciesDatesPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      experienceId: number
      experienceDateId: number
      userId: number
    }, ExtArgs["result"]["reservations"]>
    composites: {}
  }

  type ReservationsGetPayload<S extends boolean | null | undefined | ReservationsDefaultArgs> = $Result.GetResult<Prisma.$ReservationsPayload, S>

  type ReservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationsCountAggregateInputType | true
    }

  export interface ReservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservations'], meta: { name: 'Reservations' } }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {ReservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationsFindUniqueArgs>(args: SelectSubset<T, ReservationsFindUniqueArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationsFindFirstArgs>(args?: SelectSubset<T, ReservationsFindFirstArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationsFindManyArgs>(args?: SelectSubset<T, ReservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservations.
     * @param {ReservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     * 
     */
    create<T extends ReservationsCreateArgs>(args: SelectSubset<T, ReservationsCreateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationsCreateManyArgs>(args?: SelectSubset<T, ReservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservations.
     * @param {ReservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     * 
     */
    delete<T extends ReservationsDeleteArgs>(args: SelectSubset<T, ReservationsDeleteArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservations.
     * @param {ReservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationsUpdateArgs>(args: SelectSubset<T, ReservationsUpdateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationsDeleteManyArgs>(args?: SelectSubset<T, ReservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationsUpdateManyArgs>(args: SelectSubset<T, ReservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservations.
     * @param {ReservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends ReservationsUpsertArgs>(args: SelectSubset<T, ReservationsUpsertArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationsCountArgs>(
      args?: Subset<T, ReservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationsAggregateArgs>(args: Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsGroupByArgs} args - Group by arguments.
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
      T extends ReservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationsGroupByArgs['orderBy'] }
        : { orderBy?: ReservationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservations model
   */
  readonly fields: ReservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends ExperienciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienciesDefaultArgs<ExtArgs>>): Prisma__ExperienciesClient<$Result.GetResult<Prisma.$ExperienciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experienciesDate<T extends ExperienciesDatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienciesDatesDefaultArgs<ExtArgs>>): Prisma__ExperienciesDatesClient<$Result.GetResult<Prisma.$ExperienciesDatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservations model
   */
  interface ReservationsFieldRefs {
    readonly id: FieldRef<"Reservations", 'Int'>
    readonly amount: FieldRef<"Reservations", 'Int'>
    readonly experienceId: FieldRef<"Reservations", 'Int'>
    readonly experienceDateId: FieldRef<"Reservations", 'Int'>
    readonly userId: FieldRef<"Reservations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reservations findUnique
   */
  export type ReservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findUniqueOrThrow
   */
  export type ReservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findFirst
   */
  export type ReservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findFirstOrThrow
   */
  export type ReservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findMany
   */
  export type ReservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations create
   */
  export type ReservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservations.
     */
    data: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
  }

  /**
   * Reservations createMany
   */
  export type ReservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservations update
   */
  export type ReservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservations.
     */
    data: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
    /**
     * Choose, which Reservations to update.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations updateMany
   */
  export type ReservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservations upsert
   */
  export type ReservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservations to update in case it exists.
     */
    where: ReservationsWhereUniqueInput
    /**
     * In case the Reservations found by the `where` argument doesn't exist, create a new Reservations with this data.
     */
    create: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
    /**
     * In case the Reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
  }

  /**
   * Reservations delete
   */
  export type ReservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter which Reservations to delete.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations deleteMany
   */
  export type ReservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservations without action
   */
  export type ReservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ExperienciesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ExperienciesScalarFieldEnum = (typeof ExperienciesScalarFieldEnum)[keyof typeof ExperienciesScalarFieldEnum]


  export const ExperienciesDatesScalarFieldEnum: {
    id: 'id',
    experienceId: 'experienceId',
    date: 'date',
    availables: 'availables'
  };

  export type ExperienciesDatesScalarFieldEnum = (typeof ExperienciesDatesScalarFieldEnum)[keyof typeof ExperienciesDatesScalarFieldEnum]


  export const ReservationsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    experienceId: 'experienceId',
    experienceDateId: 'experienceDateId',
    userId: 'userId'
  };

  export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const ExperienciesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ExperienciesOrderByRelevanceFieldEnum = (typeof ExperienciesOrderByRelevanceFieldEnum)[keyof typeof ExperienciesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    reservations?: ReservationsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reservations?: ReservationsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    reservations?: ReservationsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
  }

  export type ExperienciesWhereInput = {
    AND?: ExperienciesWhereInput | ExperienciesWhereInput[]
    OR?: ExperienciesWhereInput[]
    NOT?: ExperienciesWhereInput | ExperienciesWhereInput[]
    id?: IntFilter<"Experiencies"> | number
    name?: StringFilter<"Experiencies"> | string
    experienciesDates?: ExperienciesDatesListRelationFilter
    reservations?: ReservationsListRelationFilter
  }

  export type ExperienciesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    experienciesDates?: ExperienciesDatesOrderByRelationAggregateInput
    reservations?: ReservationsOrderByRelationAggregateInput
    _relevance?: ExperienciesOrderByRelevanceInput
  }

  export type ExperienciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienciesWhereInput | ExperienciesWhereInput[]
    OR?: ExperienciesWhereInput[]
    NOT?: ExperienciesWhereInput | ExperienciesWhereInput[]
    name?: StringFilter<"Experiencies"> | string
    experienciesDates?: ExperienciesDatesListRelationFilter
    reservations?: ReservationsListRelationFilter
  }, "id">

  export type ExperienciesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ExperienciesCountOrderByAggregateInput
    _avg?: ExperienciesAvgOrderByAggregateInput
    _max?: ExperienciesMaxOrderByAggregateInput
    _min?: ExperienciesMinOrderByAggregateInput
    _sum?: ExperienciesSumOrderByAggregateInput
  }

  export type ExperienciesScalarWhereWithAggregatesInput = {
    AND?: ExperienciesScalarWhereWithAggregatesInput | ExperienciesScalarWhereWithAggregatesInput[]
    OR?: ExperienciesScalarWhereWithAggregatesInput[]
    NOT?: ExperienciesScalarWhereWithAggregatesInput | ExperienciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experiencies"> | number
    name?: StringWithAggregatesFilter<"Experiencies"> | string
  }

  export type ExperienciesDatesWhereInput = {
    AND?: ExperienciesDatesWhereInput | ExperienciesDatesWhereInput[]
    OR?: ExperienciesDatesWhereInput[]
    NOT?: ExperienciesDatesWhereInput | ExperienciesDatesWhereInput[]
    id?: IntFilter<"ExperienciesDates"> | number
    experienceId?: IntFilter<"ExperienciesDates"> | number
    date?: DateTimeFilter<"ExperienciesDates"> | Date | string
    availables?: IntFilter<"ExperienciesDates"> | number
    experience?: XOR<ExperienciesScalarRelationFilter, ExperienciesWhereInput>
    reservations?: ReservationsListRelationFilter
  }

  export type ExperienciesDatesOrderByWithRelationInput = {
    id?: SortOrder
    experienceId?: SortOrder
    date?: SortOrder
    availables?: SortOrder
    experience?: ExperienciesOrderByWithRelationInput
    reservations?: ReservationsOrderByRelationAggregateInput
  }

  export type ExperienciesDatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienciesDatesWhereInput | ExperienciesDatesWhereInput[]
    OR?: ExperienciesDatesWhereInput[]
    NOT?: ExperienciesDatesWhereInput | ExperienciesDatesWhereInput[]
    experienceId?: IntFilter<"ExperienciesDates"> | number
    date?: DateTimeFilter<"ExperienciesDates"> | Date | string
    availables?: IntFilter<"ExperienciesDates"> | number
    experience?: XOR<ExperienciesScalarRelationFilter, ExperienciesWhereInput>
    reservations?: ReservationsListRelationFilter
  }, "id">

  export type ExperienciesDatesOrderByWithAggregationInput = {
    id?: SortOrder
    experienceId?: SortOrder
    date?: SortOrder
    availables?: SortOrder
    _count?: ExperienciesDatesCountOrderByAggregateInput
    _avg?: ExperienciesDatesAvgOrderByAggregateInput
    _max?: ExperienciesDatesMaxOrderByAggregateInput
    _min?: ExperienciesDatesMinOrderByAggregateInput
    _sum?: ExperienciesDatesSumOrderByAggregateInput
  }

  export type ExperienciesDatesScalarWhereWithAggregatesInput = {
    AND?: ExperienciesDatesScalarWhereWithAggregatesInput | ExperienciesDatesScalarWhereWithAggregatesInput[]
    OR?: ExperienciesDatesScalarWhereWithAggregatesInput[]
    NOT?: ExperienciesDatesScalarWhereWithAggregatesInput | ExperienciesDatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExperienciesDates"> | number
    experienceId?: IntWithAggregatesFilter<"ExperienciesDates"> | number
    date?: DateTimeWithAggregatesFilter<"ExperienciesDates"> | Date | string
    availables?: IntWithAggregatesFilter<"ExperienciesDates"> | number
  }

  export type ReservationsWhereInput = {
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    id?: IntFilter<"Reservations"> | number
    amount?: IntFilter<"Reservations"> | number
    experienceId?: IntFilter<"Reservations"> | number
    experienceDateId?: IntFilter<"Reservations"> | number
    userId?: IntFilter<"Reservations"> | number
    experience?: XOR<ExperienciesScalarRelationFilter, ExperienciesWhereInput>
    experienciesDate?: XOR<ExperienciesDatesScalarRelationFilter, ExperienciesDatesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ReservationsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
    experience?: ExperienciesOrderByWithRelationInput
    experienciesDate?: ExperienciesDatesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type ReservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    amount?: IntFilter<"Reservations"> | number
    experienceId?: IntFilter<"Reservations"> | number
    experienceDateId?: IntFilter<"Reservations"> | number
    userId?: IntFilter<"Reservations"> | number
    experience?: XOR<ExperienciesScalarRelationFilter, ExperienciesWhereInput>
    experienciesDate?: XOR<ExperienciesDatesScalarRelationFilter, ExperienciesDatesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ReservationsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
    _count?: ReservationsCountOrderByAggregateInput
    _avg?: ReservationsAvgOrderByAggregateInput
    _max?: ReservationsMaxOrderByAggregateInput
    _min?: ReservationsMinOrderByAggregateInput
    _sum?: ReservationsSumOrderByAggregateInput
  }

  export type ReservationsScalarWhereWithAggregatesInput = {
    AND?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    OR?: ReservationsScalarWhereWithAggregatesInput[]
    NOT?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservations"> | number
    amount?: IntWithAggregatesFilter<"Reservations"> | number
    experienceId?: IntWithAggregatesFilter<"Reservations"> | number
    experienceDateId?: IntWithAggregatesFilter<"Reservations"> | number
    userId?: IntWithAggregatesFilter<"Reservations"> | number
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    reservations?: ReservationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienciesCreateInput = {
    name: string
    experienciesDates?: ExperienciesDatesCreateNestedManyWithoutExperienceInput
    reservations?: ReservationsCreateNestedManyWithoutExperienceInput
  }

  export type ExperienciesUncheckedCreateInput = {
    id?: number
    name: string
    experienciesDates?: ExperienciesDatesUncheckedCreateNestedManyWithoutExperienceInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienciesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    experienciesDates?: ExperienciesDatesUpdateManyWithoutExperienceNestedInput
    reservations?: ReservationsUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienciesDates?: ExperienciesDatesUncheckedUpdateManyWithoutExperienceNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienciesCreateManyInput = {
    id?: number
    name: string
  }

  export type ExperienciesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienciesDatesCreateInput = {
    date: Date | string
    availables: number
    experience: ExperienciesCreateNestedOneWithoutExperienciesDatesInput
    reservations?: ReservationsCreateNestedManyWithoutExperienciesDateInput
  }

  export type ExperienciesDatesUncheckedCreateInput = {
    id?: number
    experienceId: number
    date: Date | string
    availables: number
    reservations?: ReservationsUncheckedCreateNestedManyWithoutExperienciesDateInput
  }

  export type ExperienciesDatesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
    experience?: ExperienciesUpdateOneRequiredWithoutExperienciesDatesNestedInput
    reservations?: ReservationsUpdateManyWithoutExperienciesDateNestedInput
  }

  export type ExperienciesDatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationsUncheckedUpdateManyWithoutExperienciesDateNestedInput
  }

  export type ExperienciesDatesCreateManyInput = {
    id?: number
    experienceId: number
    date: Date | string
    availables: number
  }

  export type ExperienciesDatesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienciesDatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsCreateInput = {
    amount: number
    experience: ExperienciesCreateNestedOneWithoutReservationsInput
    experienciesDate: ExperienciesDatesCreateNestedOneWithoutReservationsInput
    user: UsersCreateNestedOneWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateInput = {
    id?: number
    amount: number
    experienceId: number
    experienceDateId: number
    userId: number
  }

  export type ReservationsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    experience?: ExperienciesUpdateOneRequiredWithoutReservationsNestedInput
    experienciesDate?: ExperienciesDatesUpdateOneRequiredWithoutReservationsNestedInput
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    experienceDateId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsCreateManyInput = {
    id?: number
    amount: number
    experienceId: number
    experienceDateId: number
    userId: number
  }

  export type ReservationsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    experienceDateId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ReservationsListRelationFilter = {
    every?: ReservationsWhereInput
    some?: ReservationsWhereInput
    none?: ReservationsWhereInput
  }

  export type ReservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ExperienciesDatesListRelationFilter = {
    every?: ExperienciesDatesWhereInput
    some?: ExperienciesDatesWhereInput
    none?: ExperienciesDatesWhereInput
  }

  export type ExperienciesDatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienciesOrderByRelevanceInput = {
    fields: ExperienciesOrderByRelevanceFieldEnum | ExperienciesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExperienciesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExperienciesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperienciesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExperienciesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExperienciesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExperienciesScalarRelationFilter = {
    is?: ExperienciesWhereInput
    isNot?: ExperienciesWhereInput
  }

  export type ExperienciesDatesCountOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
    date?: SortOrder
    availables?: SortOrder
  }

  export type ExperienciesDatesAvgOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
    availables?: SortOrder
  }

  export type ExperienciesDatesMaxOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
    date?: SortOrder
    availables?: SortOrder
  }

  export type ExperienciesDatesMinOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
    date?: SortOrder
    availables?: SortOrder
  }

  export type ExperienciesDatesSumOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
    availables?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExperienciesDatesScalarRelationFilter = {
    is?: ExperienciesDatesWhereInput
    isNot?: ExperienciesDatesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ReservationsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    experienceId?: SortOrder
    experienceDateId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ReservationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutUserInput | ReservationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutUserInput | ReservationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutUserInput | ReservationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput> | ReservationsCreateWithoutUserInput[] | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutUserInput | ReservationsCreateOrConnectWithoutUserInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutUserInput | ReservationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutUserInput | ReservationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutUserInput | ReservationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ExperienciesDatesCreateNestedManyWithoutExperienceInput = {
    create?: XOR<ExperienciesDatesCreateWithoutExperienceInput, ExperienciesDatesUncheckedCreateWithoutExperienceInput> | ExperienciesDatesCreateWithoutExperienceInput[] | ExperienciesDatesUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienciesDatesCreateOrConnectWithoutExperienceInput | ExperienciesDatesCreateOrConnectWithoutExperienceInput[]
    createMany?: ExperienciesDatesCreateManyExperienceInputEnvelope
    connect?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
  }

  export type ReservationsCreateNestedManyWithoutExperienceInput = {
    create?: XOR<ReservationsCreateWithoutExperienceInput, ReservationsUncheckedCreateWithoutExperienceInput> | ReservationsCreateWithoutExperienceInput[] | ReservationsUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienceInput | ReservationsCreateOrConnectWithoutExperienceInput[]
    createMany?: ReservationsCreateManyExperienceInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ExperienciesDatesUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<ExperienciesDatesCreateWithoutExperienceInput, ExperienciesDatesUncheckedCreateWithoutExperienceInput> | ExperienciesDatesCreateWithoutExperienceInput[] | ExperienciesDatesUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienciesDatesCreateOrConnectWithoutExperienceInput | ExperienciesDatesCreateOrConnectWithoutExperienceInput[]
    createMany?: ExperienciesDatesCreateManyExperienceInputEnvelope
    connect?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<ReservationsCreateWithoutExperienceInput, ReservationsUncheckedCreateWithoutExperienceInput> | ReservationsCreateWithoutExperienceInput[] | ReservationsUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienceInput | ReservationsCreateOrConnectWithoutExperienceInput[]
    createMany?: ReservationsCreateManyExperienceInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ExperienciesDatesUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<ExperienciesDatesCreateWithoutExperienceInput, ExperienciesDatesUncheckedCreateWithoutExperienceInput> | ExperienciesDatesCreateWithoutExperienceInput[] | ExperienciesDatesUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienciesDatesCreateOrConnectWithoutExperienceInput | ExperienciesDatesCreateOrConnectWithoutExperienceInput[]
    upsert?: ExperienciesDatesUpsertWithWhereUniqueWithoutExperienceInput | ExperienciesDatesUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: ExperienciesDatesCreateManyExperienceInputEnvelope
    set?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    disconnect?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    delete?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    connect?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    update?: ExperienciesDatesUpdateWithWhereUniqueWithoutExperienceInput | ExperienciesDatesUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: ExperienciesDatesUpdateManyWithWhereWithoutExperienceInput | ExperienciesDatesUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: ExperienciesDatesScalarWhereInput | ExperienciesDatesScalarWhereInput[]
  }

  export type ReservationsUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<ReservationsCreateWithoutExperienceInput, ReservationsUncheckedCreateWithoutExperienceInput> | ReservationsCreateWithoutExperienceInput[] | ReservationsUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienceInput | ReservationsCreateOrConnectWithoutExperienceInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutExperienceInput | ReservationsUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: ReservationsCreateManyExperienceInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutExperienceInput | ReservationsUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutExperienceInput | ReservationsUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ExperienciesDatesUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<ExperienciesDatesCreateWithoutExperienceInput, ExperienciesDatesUncheckedCreateWithoutExperienceInput> | ExperienciesDatesCreateWithoutExperienceInput[] | ExperienciesDatesUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienciesDatesCreateOrConnectWithoutExperienceInput | ExperienciesDatesCreateOrConnectWithoutExperienceInput[]
    upsert?: ExperienciesDatesUpsertWithWhereUniqueWithoutExperienceInput | ExperienciesDatesUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: ExperienciesDatesCreateManyExperienceInputEnvelope
    set?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    disconnect?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    delete?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    connect?: ExperienciesDatesWhereUniqueInput | ExperienciesDatesWhereUniqueInput[]
    update?: ExperienciesDatesUpdateWithWhereUniqueWithoutExperienceInput | ExperienciesDatesUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: ExperienciesDatesUpdateManyWithWhereWithoutExperienceInput | ExperienciesDatesUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: ExperienciesDatesScalarWhereInput | ExperienciesDatesScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<ReservationsCreateWithoutExperienceInput, ReservationsUncheckedCreateWithoutExperienceInput> | ReservationsCreateWithoutExperienceInput[] | ReservationsUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienceInput | ReservationsCreateOrConnectWithoutExperienceInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutExperienceInput | ReservationsUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: ReservationsCreateManyExperienceInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutExperienceInput | ReservationsUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutExperienceInput | ReservationsUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ExperienciesCreateNestedOneWithoutExperienciesDatesInput = {
    create?: XOR<ExperienciesCreateWithoutExperienciesDatesInput, ExperienciesUncheckedCreateWithoutExperienciesDatesInput>
    connectOrCreate?: ExperienciesCreateOrConnectWithoutExperienciesDatesInput
    connect?: ExperienciesWhereUniqueInput
  }

  export type ReservationsCreateNestedManyWithoutExperienciesDateInput = {
    create?: XOR<ReservationsCreateWithoutExperienciesDateInput, ReservationsUncheckedCreateWithoutExperienciesDateInput> | ReservationsCreateWithoutExperienciesDateInput[] | ReservationsUncheckedCreateWithoutExperienciesDateInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienciesDateInput | ReservationsCreateOrConnectWithoutExperienciesDateInput[]
    createMany?: ReservationsCreateManyExperienciesDateInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutExperienciesDateInput = {
    create?: XOR<ReservationsCreateWithoutExperienciesDateInput, ReservationsUncheckedCreateWithoutExperienciesDateInput> | ReservationsCreateWithoutExperienciesDateInput[] | ReservationsUncheckedCreateWithoutExperienciesDateInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienciesDateInput | ReservationsCreateOrConnectWithoutExperienciesDateInput[]
    createMany?: ReservationsCreateManyExperienciesDateInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExperienciesUpdateOneRequiredWithoutExperienciesDatesNestedInput = {
    create?: XOR<ExperienciesCreateWithoutExperienciesDatesInput, ExperienciesUncheckedCreateWithoutExperienciesDatesInput>
    connectOrCreate?: ExperienciesCreateOrConnectWithoutExperienciesDatesInput
    upsert?: ExperienciesUpsertWithoutExperienciesDatesInput
    connect?: ExperienciesWhereUniqueInput
    update?: XOR<XOR<ExperienciesUpdateToOneWithWhereWithoutExperienciesDatesInput, ExperienciesUpdateWithoutExperienciesDatesInput>, ExperienciesUncheckedUpdateWithoutExperienciesDatesInput>
  }

  export type ReservationsUpdateManyWithoutExperienciesDateNestedInput = {
    create?: XOR<ReservationsCreateWithoutExperienciesDateInput, ReservationsUncheckedCreateWithoutExperienciesDateInput> | ReservationsCreateWithoutExperienciesDateInput[] | ReservationsUncheckedCreateWithoutExperienciesDateInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienciesDateInput | ReservationsCreateOrConnectWithoutExperienciesDateInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutExperienciesDateInput | ReservationsUpsertWithWhereUniqueWithoutExperienciesDateInput[]
    createMany?: ReservationsCreateManyExperienciesDateInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutExperienciesDateInput | ReservationsUpdateWithWhereUniqueWithoutExperienciesDateInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutExperienciesDateInput | ReservationsUpdateManyWithWhereWithoutExperienciesDateInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutExperienciesDateNestedInput = {
    create?: XOR<ReservationsCreateWithoutExperienciesDateInput, ReservationsUncheckedCreateWithoutExperienciesDateInput> | ReservationsCreateWithoutExperienciesDateInput[] | ReservationsUncheckedCreateWithoutExperienciesDateInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutExperienciesDateInput | ReservationsCreateOrConnectWithoutExperienciesDateInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutExperienciesDateInput | ReservationsUpsertWithWhereUniqueWithoutExperienciesDateInput[]
    createMany?: ReservationsCreateManyExperienciesDateInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutExperienciesDateInput | ReservationsUpdateWithWhereUniqueWithoutExperienciesDateInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutExperienciesDateInput | ReservationsUpdateManyWithWhereWithoutExperienciesDateInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ExperienciesCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ExperienciesCreateWithoutReservationsInput, ExperienciesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ExperienciesCreateOrConnectWithoutReservationsInput
    connect?: ExperienciesWhereUniqueInput
  }

  export type ExperienciesDatesCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ExperienciesDatesCreateWithoutReservationsInput, ExperienciesDatesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ExperienciesDatesCreateOrConnectWithoutReservationsInput
    connect?: ExperienciesDatesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReservationsInput
    connect?: UsersWhereUniqueInput
  }

  export type ExperienciesUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ExperienciesCreateWithoutReservationsInput, ExperienciesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ExperienciesCreateOrConnectWithoutReservationsInput
    upsert?: ExperienciesUpsertWithoutReservationsInput
    connect?: ExperienciesWhereUniqueInput
    update?: XOR<XOR<ExperienciesUpdateToOneWithWhereWithoutReservationsInput, ExperienciesUpdateWithoutReservationsInput>, ExperienciesUncheckedUpdateWithoutReservationsInput>
  }

  export type ExperienciesDatesUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ExperienciesDatesCreateWithoutReservationsInput, ExperienciesDatesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ExperienciesDatesCreateOrConnectWithoutReservationsInput
    upsert?: ExperienciesDatesUpsertWithoutReservationsInput
    connect?: ExperienciesDatesWhereUniqueInput
    update?: XOR<XOR<ExperienciesDatesUpdateToOneWithWhereWithoutReservationsInput, ExperienciesDatesUpdateWithoutReservationsInput>, ExperienciesDatesUncheckedUpdateWithoutReservationsInput>
  }

  export type UsersUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReservationsInput
    upsert?: UsersUpsertWithoutReservationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReservationsInput, UsersUpdateWithoutReservationsInput>, UsersUncheckedUpdateWithoutReservationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReservationsCreateWithoutUserInput = {
    amount: number
    experience: ExperienciesCreateNestedOneWithoutReservationsInput
    experienciesDate: ExperienciesDatesCreateNestedOneWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    experienceId: number
    experienceDateId: number
  }

  export type ReservationsCreateOrConnectWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput>
  }

  export type ReservationsCreateManyUserInputEnvelope = {
    data: ReservationsCreateManyUserInput | ReservationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutUserInput, ReservationsUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationsCreateWithoutUserInput, ReservationsUncheckedCreateWithoutUserInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutUserInput, ReservationsUncheckedUpdateWithoutUserInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutUserInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationsScalarWhereInput = {
    AND?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    OR?: ReservationsScalarWhereInput[]
    NOT?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    id?: IntFilter<"Reservations"> | number
    amount?: IntFilter<"Reservations"> | number
    experienceId?: IntFilter<"Reservations"> | number
    experienceDateId?: IntFilter<"Reservations"> | number
    userId?: IntFilter<"Reservations"> | number
  }

  export type ExperienciesDatesCreateWithoutExperienceInput = {
    date: Date | string
    availables: number
    reservations?: ReservationsCreateNestedManyWithoutExperienciesDateInput
  }

  export type ExperienciesDatesUncheckedCreateWithoutExperienceInput = {
    id?: number
    date: Date | string
    availables: number
    reservations?: ReservationsUncheckedCreateNestedManyWithoutExperienciesDateInput
  }

  export type ExperienciesDatesCreateOrConnectWithoutExperienceInput = {
    where: ExperienciesDatesWhereUniqueInput
    create: XOR<ExperienciesDatesCreateWithoutExperienceInput, ExperienciesDatesUncheckedCreateWithoutExperienceInput>
  }

  export type ExperienciesDatesCreateManyExperienceInputEnvelope = {
    data: ExperienciesDatesCreateManyExperienceInput | ExperienciesDatesCreateManyExperienceInput[]
    skipDuplicates?: boolean
  }

  export type ReservationsCreateWithoutExperienceInput = {
    amount: number
    experienciesDate: ExperienciesDatesCreateNestedOneWithoutReservationsInput
    user: UsersCreateNestedOneWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateWithoutExperienceInput = {
    id?: number
    amount: number
    experienceDateId: number
    userId: number
  }

  export type ReservationsCreateOrConnectWithoutExperienceInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutExperienceInput, ReservationsUncheckedCreateWithoutExperienceInput>
  }

  export type ReservationsCreateManyExperienceInputEnvelope = {
    data: ReservationsCreateManyExperienceInput | ReservationsCreateManyExperienceInput[]
    skipDuplicates?: boolean
  }

  export type ExperienciesDatesUpsertWithWhereUniqueWithoutExperienceInput = {
    where: ExperienciesDatesWhereUniqueInput
    update: XOR<ExperienciesDatesUpdateWithoutExperienceInput, ExperienciesDatesUncheckedUpdateWithoutExperienceInput>
    create: XOR<ExperienciesDatesCreateWithoutExperienceInput, ExperienciesDatesUncheckedCreateWithoutExperienceInput>
  }

  export type ExperienciesDatesUpdateWithWhereUniqueWithoutExperienceInput = {
    where: ExperienciesDatesWhereUniqueInput
    data: XOR<ExperienciesDatesUpdateWithoutExperienceInput, ExperienciesDatesUncheckedUpdateWithoutExperienceInput>
  }

  export type ExperienciesDatesUpdateManyWithWhereWithoutExperienceInput = {
    where: ExperienciesDatesScalarWhereInput
    data: XOR<ExperienciesDatesUpdateManyMutationInput, ExperienciesDatesUncheckedUpdateManyWithoutExperienceInput>
  }

  export type ExperienciesDatesScalarWhereInput = {
    AND?: ExperienciesDatesScalarWhereInput | ExperienciesDatesScalarWhereInput[]
    OR?: ExperienciesDatesScalarWhereInput[]
    NOT?: ExperienciesDatesScalarWhereInput | ExperienciesDatesScalarWhereInput[]
    id?: IntFilter<"ExperienciesDates"> | number
    experienceId?: IntFilter<"ExperienciesDates"> | number
    date?: DateTimeFilter<"ExperienciesDates"> | Date | string
    availables?: IntFilter<"ExperienciesDates"> | number
  }

  export type ReservationsUpsertWithWhereUniqueWithoutExperienceInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutExperienceInput, ReservationsUncheckedUpdateWithoutExperienceInput>
    create: XOR<ReservationsCreateWithoutExperienceInput, ReservationsUncheckedCreateWithoutExperienceInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutExperienceInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutExperienceInput, ReservationsUncheckedUpdateWithoutExperienceInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutExperienceInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutExperienceInput>
  }

  export type ExperienciesCreateWithoutExperienciesDatesInput = {
    name: string
    reservations?: ReservationsCreateNestedManyWithoutExperienceInput
  }

  export type ExperienciesUncheckedCreateWithoutExperienciesDatesInput = {
    id?: number
    name: string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienciesCreateOrConnectWithoutExperienciesDatesInput = {
    where: ExperienciesWhereUniqueInput
    create: XOR<ExperienciesCreateWithoutExperienciesDatesInput, ExperienciesUncheckedCreateWithoutExperienciesDatesInput>
  }

  export type ReservationsCreateWithoutExperienciesDateInput = {
    amount: number
    experience: ExperienciesCreateNestedOneWithoutReservationsInput
    user: UsersCreateNestedOneWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateWithoutExperienciesDateInput = {
    id?: number
    amount: number
    experienceId: number
    userId: number
  }

  export type ReservationsCreateOrConnectWithoutExperienciesDateInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutExperienciesDateInput, ReservationsUncheckedCreateWithoutExperienciesDateInput>
  }

  export type ReservationsCreateManyExperienciesDateInputEnvelope = {
    data: ReservationsCreateManyExperienciesDateInput | ReservationsCreateManyExperienciesDateInput[]
    skipDuplicates?: boolean
  }

  export type ExperienciesUpsertWithoutExperienciesDatesInput = {
    update: XOR<ExperienciesUpdateWithoutExperienciesDatesInput, ExperienciesUncheckedUpdateWithoutExperienciesDatesInput>
    create: XOR<ExperienciesCreateWithoutExperienciesDatesInput, ExperienciesUncheckedCreateWithoutExperienciesDatesInput>
    where?: ExperienciesWhereInput
  }

  export type ExperienciesUpdateToOneWithWhereWithoutExperienciesDatesInput = {
    where?: ExperienciesWhereInput
    data: XOR<ExperienciesUpdateWithoutExperienciesDatesInput, ExperienciesUncheckedUpdateWithoutExperienciesDatesInput>
  }

  export type ExperienciesUpdateWithoutExperienciesDatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationsUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienciesUncheckedUpdateWithoutExperienciesDatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationsUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ReservationsUpsertWithWhereUniqueWithoutExperienciesDateInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutExperienciesDateInput, ReservationsUncheckedUpdateWithoutExperienciesDateInput>
    create: XOR<ReservationsCreateWithoutExperienciesDateInput, ReservationsUncheckedCreateWithoutExperienciesDateInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutExperienciesDateInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutExperienciesDateInput, ReservationsUncheckedUpdateWithoutExperienciesDateInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutExperienciesDateInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutExperienciesDateInput>
  }

  export type ExperienciesCreateWithoutReservationsInput = {
    name: string
    experienciesDates?: ExperienciesDatesCreateNestedManyWithoutExperienceInput
  }

  export type ExperienciesUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    experienciesDates?: ExperienciesDatesUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienciesCreateOrConnectWithoutReservationsInput = {
    where: ExperienciesWhereUniqueInput
    create: XOR<ExperienciesCreateWithoutReservationsInput, ExperienciesUncheckedCreateWithoutReservationsInput>
  }

  export type ExperienciesDatesCreateWithoutReservationsInput = {
    date: Date | string
    availables: number
    experience: ExperienciesCreateNestedOneWithoutExperienciesDatesInput
  }

  export type ExperienciesDatesUncheckedCreateWithoutReservationsInput = {
    id?: number
    experienceId: number
    date: Date | string
    availables: number
  }

  export type ExperienciesDatesCreateOrConnectWithoutReservationsInput = {
    where: ExperienciesDatesWhereUniqueInput
    create: XOR<ExperienciesDatesCreateWithoutReservationsInput, ExperienciesDatesUncheckedCreateWithoutReservationsInput>
  }

  export type UsersCreateWithoutReservationsInput = {
    name: string
    email: string
    password: string
  }

  export type UsersUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UsersCreateOrConnectWithoutReservationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
  }

  export type ExperienciesUpsertWithoutReservationsInput = {
    update: XOR<ExperienciesUpdateWithoutReservationsInput, ExperienciesUncheckedUpdateWithoutReservationsInput>
    create: XOR<ExperienciesCreateWithoutReservationsInput, ExperienciesUncheckedCreateWithoutReservationsInput>
    where?: ExperienciesWhereInput
  }

  export type ExperienciesUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ExperienciesWhereInput
    data: XOR<ExperienciesUpdateWithoutReservationsInput, ExperienciesUncheckedUpdateWithoutReservationsInput>
  }

  export type ExperienciesUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    experienciesDates?: ExperienciesDatesUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienciesUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienciesDates?: ExperienciesDatesUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienciesDatesUpsertWithoutReservationsInput = {
    update: XOR<ExperienciesDatesUpdateWithoutReservationsInput, ExperienciesDatesUncheckedUpdateWithoutReservationsInput>
    create: XOR<ExperienciesDatesCreateWithoutReservationsInput, ExperienciesDatesUncheckedCreateWithoutReservationsInput>
    where?: ExperienciesDatesWhereInput
  }

  export type ExperienciesDatesUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ExperienciesDatesWhereInput
    data: XOR<ExperienciesDatesUpdateWithoutReservationsInput, ExperienciesDatesUncheckedUpdateWithoutReservationsInput>
  }

  export type ExperienciesDatesUpdateWithoutReservationsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
    experience?: ExperienciesUpdateOneRequiredWithoutExperienciesDatesNestedInput
  }

  export type ExperienciesDatesUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
  }

  export type UsersUpsertWithoutReservationsInput = {
    update: XOR<UsersUpdateWithoutReservationsInput, UsersUncheckedUpdateWithoutReservationsInput>
    create: XOR<UsersCreateWithoutReservationsInput, UsersUncheckedCreateWithoutReservationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReservationsInput, UsersUncheckedUpdateWithoutReservationsInput>
  }

  export type UsersUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationsCreateManyUserInput = {
    id?: number
    amount: number
    experienceId: number
    experienceDateId: number
  }

  export type ReservationsUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    experience?: ExperienciesUpdateOneRequiredWithoutReservationsNestedInput
    experienciesDate?: ExperienciesDatesUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    experienceDateId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    experienceDateId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienciesDatesCreateManyExperienceInput = {
    id?: number
    date: Date | string
    availables: number
  }

  export type ReservationsCreateManyExperienceInput = {
    id?: number
    amount: number
    experienceDateId: number
    userId: number
  }

  export type ExperienciesDatesUpdateWithoutExperienceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationsUpdateManyWithoutExperienciesDateNestedInput
  }

  export type ExperienciesDatesUncheckedUpdateWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationsUncheckedUpdateManyWithoutExperienciesDateNestedInput
  }

  export type ExperienciesDatesUncheckedUpdateManyWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    availables?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsUpdateWithoutExperienceInput = {
    amount?: IntFieldUpdateOperationsInput | number
    experienciesDate?: ExperienciesDatesUpdateOneRequiredWithoutReservationsNestedInput
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceDateId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsUncheckedUpdateManyWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceDateId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsCreateManyExperienciesDateInput = {
    id?: number
    amount: number
    experienceId: number
    userId: number
  }

  export type ReservationsUpdateWithoutExperienciesDateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    experience?: ExperienciesUpdateOneRequiredWithoutReservationsNestedInput
    user?: UsersUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutExperienciesDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationsUncheckedUpdateManyWithoutExperienciesDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    experienceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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