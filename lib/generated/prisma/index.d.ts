
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Legajo
 * 
 */
export type Legajo = $Result.DefaultSelection<Prisma.$LegajoPayload>
/**
 * Model Victima
 * 
 */
export type Victima = $Result.DefaultSelection<Prisma.$VictimaPayload>
/**
 * Model Dispositivo
 * 
 */
export type Dispositivo = $Result.DefaultSelection<Prisma.$DispositivoPayload>
/**
 * Model Oficio
 * 
 */
export type Oficio = $Result.DefaultSelection<Prisma.$OficioPayload>
/**
 * Model Respuesta
 * 
 */
export type Respuesta = $Result.DefaultSelection<Prisma.$RespuestaPayload>
/**
 * Model Fiscal
 * 
 */
export type Fiscal = $Result.DefaultSelection<Prisma.$FiscalPayload>
/**
 * Model Configuracion
 * 
 */
export type Configuracion = $Result.DefaultSelection<Prisma.$ConfiguracionPayload>
/**
 * Model RegistroTelefonia
 * 
 */
export type RegistroTelefonia = $Result.DefaultSelection<Prisma.$RegistroTelefoniaPayload>
/**
 * Model RegistroEstafa
 * 
 */
export type RegistroEstafa = $Result.DefaultSelection<Prisma.$RegistroEstafaPayload>
/**
 * Model ComentarioLegajo
 * 
 */
export type ComentarioLegajo = $Result.DefaultSelection<Prisma.$ComentarioLegajoPayload>
/**
 * Model ArchivoLegajo
 * 
 */
export type ArchivoLegajo = $Result.DefaultSelection<Prisma.$ArchivoLegajoPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model RedConexiones
 * 
 */
export type RedConexiones = $Result.DefaultSelection<Prisma.$RedConexionesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.legajo`: Exposes CRUD operations for the **Legajo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legajos
    * const legajos = await prisma.legajo.findMany()
    * ```
    */
  get legajo(): Prisma.LegajoDelegate<ExtArgs>;

  /**
   * `prisma.victima`: Exposes CRUD operations for the **Victima** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Victimas
    * const victimas = await prisma.victima.findMany()
    * ```
    */
  get victima(): Prisma.VictimaDelegate<ExtArgs>;

  /**
   * `prisma.dispositivo`: Exposes CRUD operations for the **Dispositivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivos
    * const dispositivos = await prisma.dispositivo.findMany()
    * ```
    */
  get dispositivo(): Prisma.DispositivoDelegate<ExtArgs>;

  /**
   * `prisma.oficio`: Exposes CRUD operations for the **Oficio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Oficios
    * const oficios = await prisma.oficio.findMany()
    * ```
    */
  get oficio(): Prisma.OficioDelegate<ExtArgs>;

  /**
   * `prisma.respuesta`: Exposes CRUD operations for the **Respuesta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respuestas
    * const respuestas = await prisma.respuesta.findMany()
    * ```
    */
  get respuesta(): Prisma.RespuestaDelegate<ExtArgs>;

  /**
   * `prisma.fiscal`: Exposes CRUD operations for the **Fiscal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fiscals
    * const fiscals = await prisma.fiscal.findMany()
    * ```
    */
  get fiscal(): Prisma.FiscalDelegate<ExtArgs>;

  /**
   * `prisma.configuracion`: Exposes CRUD operations for the **Configuracion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracions
    * const configuracions = await prisma.configuracion.findMany()
    * ```
    */
  get configuracion(): Prisma.ConfiguracionDelegate<ExtArgs>;

  /**
   * `prisma.registroTelefonia`: Exposes CRUD operations for the **RegistroTelefonia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroTelefonias
    * const registroTelefonias = await prisma.registroTelefonia.findMany()
    * ```
    */
  get registroTelefonia(): Prisma.RegistroTelefoniaDelegate<ExtArgs>;

  /**
   * `prisma.registroEstafa`: Exposes CRUD operations for the **RegistroEstafa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroEstafas
    * const registroEstafas = await prisma.registroEstafa.findMany()
    * ```
    */
  get registroEstafa(): Prisma.RegistroEstafaDelegate<ExtArgs>;

  /**
   * `prisma.comentarioLegajo`: Exposes CRUD operations for the **ComentarioLegajo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComentarioLegajos
    * const comentarioLegajos = await prisma.comentarioLegajo.findMany()
    * ```
    */
  get comentarioLegajo(): Prisma.ComentarioLegajoDelegate<ExtArgs>;

  /**
   * `prisma.archivoLegajo`: Exposes CRUD operations for the **ArchivoLegajo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArchivoLegajos
    * const archivoLegajos = await prisma.archivoLegajo.findMany()
    * ```
    */
  get archivoLegajo(): Prisma.ArchivoLegajoDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.redConexiones`: Exposes CRUD operations for the **RedConexiones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedConexiones
    * const redConexiones = await prisma.redConexiones.findMany()
    * ```
    */
  get redConexiones(): Prisma.RedConexionesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Session: 'Session',
    Legajo: 'Legajo',
    Victima: 'Victima',
    Dispositivo: 'Dispositivo',
    Oficio: 'Oficio',
    Respuesta: 'Respuesta',
    Fiscal: 'Fiscal',
    Configuracion: 'Configuracion',
    RegistroTelefonia: 'RegistroTelefonia',
    RegistroEstafa: 'RegistroEstafa',
    ComentarioLegajo: 'ComentarioLegajo',
    ArchivoLegajo: 'ArchivoLegajo',
    AuditLog: 'AuditLog',
    RedConexiones: 'RedConexiones'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "session" | "legajo" | "victima" | "dispositivo" | "oficio" | "respuesta" | "fiscal" | "configuracion" | "registroTelefonia" | "registroEstafa" | "comentarioLegajo" | "archivoLegajo" | "auditLog" | "redConexiones"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
      Legajo: {
        payload: Prisma.$LegajoPayload<ExtArgs>
        fields: Prisma.LegajoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegajoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegajoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>
          }
          findFirst: {
            args: Prisma.LegajoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegajoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>
          }
          findMany: {
            args: Prisma.LegajoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>[]
          }
          create: {
            args: Prisma.LegajoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>
          }
          createMany: {
            args: Prisma.LegajoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegajoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>[]
          }
          delete: {
            args: Prisma.LegajoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>
          }
          update: {
            args: Prisma.LegajoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>
          }
          deleteMany: {
            args: Prisma.LegajoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegajoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LegajoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegajoPayload>
          }
          aggregate: {
            args: Prisma.LegajoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegajo>
          }
          groupBy: {
            args: Prisma.LegajoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegajoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegajoCountArgs<ExtArgs>
            result: $Utils.Optional<LegajoCountAggregateOutputType> | number
          }
        }
      }
      Victima: {
        payload: Prisma.$VictimaPayload<ExtArgs>
        fields: Prisma.VictimaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VictimaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VictimaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>
          }
          findFirst: {
            args: Prisma.VictimaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VictimaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>
          }
          findMany: {
            args: Prisma.VictimaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>[]
          }
          create: {
            args: Prisma.VictimaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>
          }
          createMany: {
            args: Prisma.VictimaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VictimaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>[]
          }
          delete: {
            args: Prisma.VictimaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>
          }
          update: {
            args: Prisma.VictimaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>
          }
          deleteMany: {
            args: Prisma.VictimaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VictimaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VictimaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VictimaPayload>
          }
          aggregate: {
            args: Prisma.VictimaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVictima>
          }
          groupBy: {
            args: Prisma.VictimaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VictimaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VictimaCountArgs<ExtArgs>
            result: $Utils.Optional<VictimaCountAggregateOutputType> | number
          }
        }
      }
      Dispositivo: {
        payload: Prisma.$DispositivoPayload<ExtArgs>
        fields: Prisma.DispositivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispositivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispositivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findFirst: {
            args: Prisma.DispositivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispositivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findMany: {
            args: Prisma.DispositivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          create: {
            args: Prisma.DispositivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          createMany: {
            args: Prisma.DispositivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispositivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          delete: {
            args: Prisma.DispositivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          update: {
            args: Prisma.DispositivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          deleteMany: {
            args: Prisma.DispositivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispositivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DispositivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          aggregate: {
            args: Prisma.DispositivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo>
          }
          groupBy: {
            args: Prisma.DispositivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispositivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispositivoCountArgs<ExtArgs>
            result: $Utils.Optional<DispositivoCountAggregateOutputType> | number
          }
        }
      }
      Oficio: {
        payload: Prisma.$OficioPayload<ExtArgs>
        fields: Prisma.OficioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OficioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OficioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>
          }
          findFirst: {
            args: Prisma.OficioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OficioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>
          }
          findMany: {
            args: Prisma.OficioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>[]
          }
          create: {
            args: Prisma.OficioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>
          }
          createMany: {
            args: Prisma.OficioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OficioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>[]
          }
          delete: {
            args: Prisma.OficioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>
          }
          update: {
            args: Prisma.OficioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>
          }
          deleteMany: {
            args: Prisma.OficioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OficioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OficioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OficioPayload>
          }
          aggregate: {
            args: Prisma.OficioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOficio>
          }
          groupBy: {
            args: Prisma.OficioGroupByArgs<ExtArgs>
            result: $Utils.Optional<OficioGroupByOutputType>[]
          }
          count: {
            args: Prisma.OficioCountArgs<ExtArgs>
            result: $Utils.Optional<OficioCountAggregateOutputType> | number
          }
        }
      }
      Respuesta: {
        payload: Prisma.$RespuestaPayload<ExtArgs>
        fields: Prisma.RespuestaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespuestaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespuestaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          findFirst: {
            args: Prisma.RespuestaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespuestaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          findMany: {
            args: Prisma.RespuestaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>[]
          }
          create: {
            args: Prisma.RespuestaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          createMany: {
            args: Prisma.RespuestaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RespuestaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>[]
          }
          delete: {
            args: Prisma.RespuestaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          update: {
            args: Prisma.RespuestaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          deleteMany: {
            args: Prisma.RespuestaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespuestaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RespuestaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          aggregate: {
            args: Prisma.RespuestaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespuesta>
          }
          groupBy: {
            args: Prisma.RespuestaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespuestaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespuestaCountArgs<ExtArgs>
            result: $Utils.Optional<RespuestaCountAggregateOutputType> | number
          }
        }
      }
      Fiscal: {
        payload: Prisma.$FiscalPayload<ExtArgs>
        fields: Prisma.FiscalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiscalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiscalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          findFirst: {
            args: Prisma.FiscalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiscalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          findMany: {
            args: Prisma.FiscalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>[]
          }
          create: {
            args: Prisma.FiscalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          createMany: {
            args: Prisma.FiscalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FiscalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>[]
          }
          delete: {
            args: Prisma.FiscalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          update: {
            args: Prisma.FiscalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          deleteMany: {
            args: Prisma.FiscalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiscalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FiscalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          aggregate: {
            args: Prisma.FiscalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiscal>
          }
          groupBy: {
            args: Prisma.FiscalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiscalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiscalCountArgs<ExtArgs>
            result: $Utils.Optional<FiscalCountAggregateOutputType> | number
          }
        }
      }
      Configuracion: {
        payload: Prisma.$ConfiguracionPayload<ExtArgs>
        fields: Prisma.ConfiguracionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          findMany: {
            args: Prisma.ConfiguracionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[]
          }
          create: {
            args: Prisma.ConfiguracionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          createMany: {
            args: Prisma.ConfiguracionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          update: {
            args: Prisma.ConfiguracionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfiguracionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracion>
          }
          groupBy: {
            args: Prisma.ConfiguracionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracionCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionCountAggregateOutputType> | number
          }
        }
      }
      RegistroTelefonia: {
        payload: Prisma.$RegistroTelefoniaPayload<ExtArgs>
        fields: Prisma.RegistroTelefoniaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroTelefoniaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroTelefoniaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>
          }
          findFirst: {
            args: Prisma.RegistroTelefoniaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroTelefoniaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>
          }
          findMany: {
            args: Prisma.RegistroTelefoniaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>[]
          }
          create: {
            args: Prisma.RegistroTelefoniaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>
          }
          createMany: {
            args: Prisma.RegistroTelefoniaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroTelefoniaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>[]
          }
          delete: {
            args: Prisma.RegistroTelefoniaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>
          }
          update: {
            args: Prisma.RegistroTelefoniaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>
          }
          deleteMany: {
            args: Prisma.RegistroTelefoniaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroTelefoniaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistroTelefoniaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTelefoniaPayload>
          }
          aggregate: {
            args: Prisma.RegistroTelefoniaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroTelefonia>
          }
          groupBy: {
            args: Prisma.RegistroTelefoniaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroTelefoniaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroTelefoniaCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroTelefoniaCountAggregateOutputType> | number
          }
        }
      }
      RegistroEstafa: {
        payload: Prisma.$RegistroEstafaPayload<ExtArgs>
        fields: Prisma.RegistroEstafaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroEstafaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroEstafaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>
          }
          findFirst: {
            args: Prisma.RegistroEstafaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroEstafaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>
          }
          findMany: {
            args: Prisma.RegistroEstafaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>[]
          }
          create: {
            args: Prisma.RegistroEstafaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>
          }
          createMany: {
            args: Prisma.RegistroEstafaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroEstafaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>[]
          }
          delete: {
            args: Prisma.RegistroEstafaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>
          }
          update: {
            args: Prisma.RegistroEstafaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>
          }
          deleteMany: {
            args: Prisma.RegistroEstafaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroEstafaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistroEstafaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEstafaPayload>
          }
          aggregate: {
            args: Prisma.RegistroEstafaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroEstafa>
          }
          groupBy: {
            args: Prisma.RegistroEstafaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroEstafaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroEstafaCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroEstafaCountAggregateOutputType> | number
          }
        }
      }
      ComentarioLegajo: {
        payload: Prisma.$ComentarioLegajoPayload<ExtArgs>
        fields: Prisma.ComentarioLegajoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioLegajoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioLegajoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>
          }
          findFirst: {
            args: Prisma.ComentarioLegajoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioLegajoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>
          }
          findMany: {
            args: Prisma.ComentarioLegajoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>[]
          }
          create: {
            args: Prisma.ComentarioLegajoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>
          }
          createMany: {
            args: Prisma.ComentarioLegajoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioLegajoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>[]
          }
          delete: {
            args: Prisma.ComentarioLegajoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>
          }
          update: {
            args: Prisma.ComentarioLegajoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioLegajoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioLegajoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioLegajoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioLegajoPayload>
          }
          aggregate: {
            args: Prisma.ComentarioLegajoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentarioLegajo>
          }
          groupBy: {
            args: Prisma.ComentarioLegajoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioLegajoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioLegajoCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioLegajoCountAggregateOutputType> | number
          }
        }
      }
      ArchivoLegajo: {
        payload: Prisma.$ArchivoLegajoPayload<ExtArgs>
        fields: Prisma.ArchivoLegajoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchivoLegajoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchivoLegajoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>
          }
          findFirst: {
            args: Prisma.ArchivoLegajoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchivoLegajoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>
          }
          findMany: {
            args: Prisma.ArchivoLegajoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>[]
          }
          create: {
            args: Prisma.ArchivoLegajoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>
          }
          createMany: {
            args: Prisma.ArchivoLegajoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchivoLegajoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>[]
          }
          delete: {
            args: Prisma.ArchivoLegajoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>
          }
          update: {
            args: Prisma.ArchivoLegajoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>
          }
          deleteMany: {
            args: Prisma.ArchivoLegajoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchivoLegajoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArchivoLegajoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoLegajoPayload>
          }
          aggregate: {
            args: Prisma.ArchivoLegajoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivoLegajo>
          }
          groupBy: {
            args: Prisma.ArchivoLegajoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivoLegajoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchivoLegajoCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivoLegajoCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      RedConexiones: {
        payload: Prisma.$RedConexionesPayload<ExtArgs>
        fields: Prisma.RedConexionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedConexionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedConexionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>
          }
          findFirst: {
            args: Prisma.RedConexionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedConexionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>
          }
          findMany: {
            args: Prisma.RedConexionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>[]
          }
          create: {
            args: Prisma.RedConexionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>
          }
          createMany: {
            args: Prisma.RedConexionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedConexionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>[]
          }
          delete: {
            args: Prisma.RedConexionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>
          }
          update: {
            args: Prisma.RedConexionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>
          }
          deleteMany: {
            args: Prisma.RedConexionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedConexionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RedConexionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedConexionesPayload>
          }
          aggregate: {
            args: Prisma.RedConexionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedConexiones>
          }
          groupBy: {
            args: Prisma.RedConexionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedConexionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedConexionesCountArgs<ExtArgs>
            result: $Utils.Optional<RedConexionesCountAggregateOutputType> | number
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    legajos: number
    fiscales: number
    comentarios: number
    sesiones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajos?: boolean | UsuarioCountOutputTypeCountLegajosArgs
    fiscales?: boolean | UsuarioCountOutputTypeCountFiscalesArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    sesiones?: boolean | UsuarioCountOutputTypeCountSesionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLegajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegajoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFiscalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioLegajoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type LegajoCountOutputType
   */

  export type LegajoCountOutputType = {
    victimas: number
    dispositivos: number
    oficios: number
    archivos: number
    comentarios: number
    conexiones: number
  }

  export type LegajoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    victimas?: boolean | LegajoCountOutputTypeCountVictimasArgs
    dispositivos?: boolean | LegajoCountOutputTypeCountDispositivosArgs
    oficios?: boolean | LegajoCountOutputTypeCountOficiosArgs
    archivos?: boolean | LegajoCountOutputTypeCountArchivosArgs
    comentarios?: boolean | LegajoCountOutputTypeCountComentariosArgs
    conexiones?: boolean | LegajoCountOutputTypeCountConexionesArgs
  }

  // Custom InputTypes
  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegajoCountOutputType
     */
    select?: LegajoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeCountVictimasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VictimaWhereInput
  }

  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeCountDispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
  }

  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeCountOficiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OficioWhereInput
  }

  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoLegajoWhereInput
  }

  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioLegajoWhereInput
  }

  /**
   * LegajoCountOutputType without action
   */
  export type LegajoCountOutputTypeCountConexionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedConexionesWhereInput
  }


  /**
   * Count Type OficioCountOutputType
   */

  export type OficioCountOutputType = {
    respuestas: number
  }

  export type OficioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | OficioCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes
  /**
   * OficioCountOutputType without action
   */
  export type OficioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OficioCountOutputType
     */
    select?: OficioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OficioCountOutputType without action
   */
  export type OficioCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    usuario: string | null
    password: string | null
    rol: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    usuario: string | null
    password: string | null
    rol: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    usuario: number
    password: number
    rol: number
    activo: number
    createdAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    password?: true
    rol?: true
    activo?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    password?: true
    rol?: true
    activo?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    password?: true
    rol?: true
    activo?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    usuario: string
    password: string
    rol: string
    activo: boolean
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    activo?: boolean
    createdAt?: boolean
    legajos?: boolean | Usuario$legajosArgs<ExtArgs>
    fiscales?: boolean | Usuario$fiscalesArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    activo?: boolean
    createdAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajos?: boolean | Usuario$legajosArgs<ExtArgs>
    fiscales?: boolean | Usuario$fiscalesArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      legajos: Prisma.$LegajoPayload<ExtArgs>[]
      fiscales: Prisma.$FiscalPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioLegajoPayload<ExtArgs>[]
      sesiones: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      usuario: string
      password: string
      rol: string
      activo: boolean
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajos<T extends Usuario$legajosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$legajosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findMany"> | Null>
    fiscales<T extends Usuario$fiscalesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$fiscalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findMany"> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findMany"> | Null>
    sesiones<T extends Usuario$sesionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sesionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly usuario: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.legajos
   */
  export type Usuario$legajosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    where?: LegajoWhereInput
    orderBy?: LegajoOrderByWithRelationInput | LegajoOrderByWithRelationInput[]
    cursor?: LegajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegajoScalarFieldEnum | LegajoScalarFieldEnum[]
  }

  /**
   * Usuario.fiscales
   */
  export type Usuario$fiscalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    where?: FiscalWhereInput
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    cursor?: FiscalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    where?: ComentarioLegajoWhereInput
    orderBy?: ComentarioLegajoOrderByWithRelationInput | ComentarioLegajoOrderByWithRelationInput[]
    cursor?: ComentarioLegajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioLegajoScalarFieldEnum | ComentarioLegajoScalarFieldEnum[]
  }

  /**
   * Usuario.sesiones
   */
  export type Usuario$sesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
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
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
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
    userId: string
    expires: Date
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
    userId?: boolean
    expires?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

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
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Legajo
   */

  export type AggregateLegajo = {
    _count: LegajoCountAggregateOutputType | null
    _min: LegajoMinAggregateOutputType | null
    _max: LegajoMaxAggregateOutputType | null
  }

  export type LegajoMinAggregateOutputType = {
    id: string | null
    numero: string | null
    caratula: string | null
    cuij: string | null
    delito: string | null
    fechaHecho: Date | null
    estado: string | null
    observaciones: string | null
    fiscal: string | null
    emailRespuesta: string | null
    visto: boolean | null
    origenTipo: string | null
    origenId: string | null
    asignadoA: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: string | null
  }

  export type LegajoMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    caratula: string | null
    cuij: string | null
    delito: string | null
    fechaHecho: Date | null
    estado: string | null
    observaciones: string | null
    fiscal: string | null
    emailRespuesta: string | null
    visto: boolean | null
    origenTipo: string | null
    origenId: string | null
    asignadoA: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: string | null
  }

  export type LegajoCountAggregateOutputType = {
    id: number
    numero: number
    caratula: number
    cuij: number
    delito: number
    fechaHecho: number
    estado: number
    observaciones: number
    fiscal: number
    emailRespuesta: number
    visto: number
    origenTipo: number
    origenId: number
    asignadoA: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    _all: number
  }


  export type LegajoMinAggregateInputType = {
    id?: true
    numero?: true
    caratula?: true
    cuij?: true
    delito?: true
    fechaHecho?: true
    estado?: true
    observaciones?: true
    fiscal?: true
    emailRespuesta?: true
    visto?: true
    origenTipo?: true
    origenId?: true
    asignadoA?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type LegajoMaxAggregateInputType = {
    id?: true
    numero?: true
    caratula?: true
    cuij?: true
    delito?: true
    fechaHecho?: true
    estado?: true
    observaciones?: true
    fiscal?: true
    emailRespuesta?: true
    visto?: true
    origenTipo?: true
    origenId?: true
    asignadoA?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type LegajoCountAggregateInputType = {
    id?: true
    numero?: true
    caratula?: true
    cuij?: true
    delito?: true
    fechaHecho?: true
    estado?: true
    observaciones?: true
    fiscal?: true
    emailRespuesta?: true
    visto?: true
    origenTipo?: true
    origenId?: true
    asignadoA?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    _all?: true
  }

  export type LegajoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legajo to aggregate.
     */
    where?: LegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legajos to fetch.
     */
    orderBy?: LegajoOrderByWithRelationInput | LegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legajos
    **/
    _count?: true | LegajoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegajoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegajoMaxAggregateInputType
  }

  export type GetLegajoAggregateType<T extends LegajoAggregateArgs> = {
        [P in keyof T & keyof AggregateLegajo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegajo[P]>
      : GetScalarType<T[P], AggregateLegajo[P]>
  }




  export type LegajoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegajoWhereInput
    orderBy?: LegajoOrderByWithAggregationInput | LegajoOrderByWithAggregationInput[]
    by: LegajoScalarFieldEnum[] | LegajoScalarFieldEnum
    having?: LegajoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegajoCountAggregateInputType | true
    _min?: LegajoMinAggregateInputType
    _max?: LegajoMaxAggregateInputType
  }

  export type LegajoGroupByOutputType = {
    id: string
    numero: string
    caratula: string
    cuij: string | null
    delito: string
    fechaHecho: Date
    estado: string
    observaciones: string | null
    fiscal: string | null
    emailRespuesta: string | null
    visto: boolean
    origenTipo: string | null
    origenId: string | null
    asignadoA: string | null
    createdAt: Date
    updatedAt: Date
    usuarioId: string
    _count: LegajoCountAggregateOutputType | null
    _min: LegajoMinAggregateOutputType | null
    _max: LegajoMaxAggregateOutputType | null
  }

  type GetLegajoGroupByPayload<T extends LegajoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegajoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegajoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegajoGroupByOutputType[P]>
            : GetScalarType<T[P], LegajoGroupByOutputType[P]>
        }
      >
    >


  export type LegajoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    caratula?: boolean
    cuij?: boolean
    delito?: boolean
    fechaHecho?: boolean
    estado?: boolean
    observaciones?: boolean
    fiscal?: boolean
    emailRespuesta?: boolean
    visto?: boolean
    origenTipo?: boolean
    origenId?: boolean
    asignadoA?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    victimas?: boolean | Legajo$victimasArgs<ExtArgs>
    dispositivos?: boolean | Legajo$dispositivosArgs<ExtArgs>
    oficios?: boolean | Legajo$oficiosArgs<ExtArgs>
    archivos?: boolean | Legajo$archivosArgs<ExtArgs>
    comentarios?: boolean | Legajo$comentariosArgs<ExtArgs>
    conexiones?: boolean | Legajo$conexionesArgs<ExtArgs>
    _count?: boolean | LegajoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legajo"]>

  export type LegajoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    caratula?: boolean
    cuij?: boolean
    delito?: boolean
    fechaHecho?: boolean
    estado?: boolean
    observaciones?: boolean
    fiscal?: boolean
    emailRespuesta?: boolean
    visto?: boolean
    origenTipo?: boolean
    origenId?: boolean
    asignadoA?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legajo"]>

  export type LegajoSelectScalar = {
    id?: boolean
    numero?: boolean
    caratula?: boolean
    cuij?: boolean
    delito?: boolean
    fechaHecho?: boolean
    estado?: boolean
    observaciones?: boolean
    fiscal?: boolean
    emailRespuesta?: boolean
    visto?: boolean
    origenTipo?: boolean
    origenId?: boolean
    asignadoA?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
  }

  export type LegajoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    victimas?: boolean | Legajo$victimasArgs<ExtArgs>
    dispositivos?: boolean | Legajo$dispositivosArgs<ExtArgs>
    oficios?: boolean | Legajo$oficiosArgs<ExtArgs>
    archivos?: boolean | Legajo$archivosArgs<ExtArgs>
    comentarios?: boolean | Legajo$comentariosArgs<ExtArgs>
    conexiones?: boolean | Legajo$conexionesArgs<ExtArgs>
    _count?: boolean | LegajoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LegajoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $LegajoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Legajo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      victimas: Prisma.$VictimaPayload<ExtArgs>[]
      dispositivos: Prisma.$DispositivoPayload<ExtArgs>[]
      oficios: Prisma.$OficioPayload<ExtArgs>[]
      archivos: Prisma.$ArchivoLegajoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioLegajoPayload<ExtArgs>[]
      conexiones: Prisma.$RedConexionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      caratula: string
      cuij: string | null
      delito: string
      fechaHecho: Date
      estado: string
      observaciones: string | null
      fiscal: string | null
      emailRespuesta: string | null
      visto: boolean
      origenTipo: string | null
      origenId: string | null
      asignadoA: string | null
      createdAt: Date
      updatedAt: Date
      usuarioId: string
    }, ExtArgs["result"]["legajo"]>
    composites: {}
  }

  type LegajoGetPayload<S extends boolean | null | undefined | LegajoDefaultArgs> = $Result.GetResult<Prisma.$LegajoPayload, S>

  type LegajoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegajoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegajoCountAggregateInputType | true
    }

  export interface LegajoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Legajo'], meta: { name: 'Legajo' } }
    /**
     * Find zero or one Legajo that matches the filter.
     * @param {LegajoFindUniqueArgs} args - Arguments to find a Legajo
     * @example
     * // Get one Legajo
     * const legajo = await prisma.legajo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegajoFindUniqueArgs>(args: SelectSubset<T, LegajoFindUniqueArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Legajo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LegajoFindUniqueOrThrowArgs} args - Arguments to find a Legajo
     * @example
     * // Get one Legajo
     * const legajo = await prisma.legajo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegajoFindUniqueOrThrowArgs>(args: SelectSubset<T, LegajoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Legajo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoFindFirstArgs} args - Arguments to find a Legajo
     * @example
     * // Get one Legajo
     * const legajo = await prisma.legajo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegajoFindFirstArgs>(args?: SelectSubset<T, LegajoFindFirstArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Legajo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoFindFirstOrThrowArgs} args - Arguments to find a Legajo
     * @example
     * // Get one Legajo
     * const legajo = await prisma.legajo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegajoFindFirstOrThrowArgs>(args?: SelectSubset<T, LegajoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Legajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legajos
     * const legajos = await prisma.legajo.findMany()
     * 
     * // Get first 10 Legajos
     * const legajos = await prisma.legajo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legajoWithIdOnly = await prisma.legajo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegajoFindManyArgs>(args?: SelectSubset<T, LegajoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Legajo.
     * @param {LegajoCreateArgs} args - Arguments to create a Legajo.
     * @example
     * // Create one Legajo
     * const Legajo = await prisma.legajo.create({
     *   data: {
     *     // ... data to create a Legajo
     *   }
     * })
     * 
     */
    create<T extends LegajoCreateArgs>(args: SelectSubset<T, LegajoCreateArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Legajos.
     * @param {LegajoCreateManyArgs} args - Arguments to create many Legajos.
     * @example
     * // Create many Legajos
     * const legajo = await prisma.legajo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegajoCreateManyArgs>(args?: SelectSubset<T, LegajoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Legajos and returns the data saved in the database.
     * @param {LegajoCreateManyAndReturnArgs} args - Arguments to create many Legajos.
     * @example
     * // Create many Legajos
     * const legajo = await prisma.legajo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Legajos and only return the `id`
     * const legajoWithIdOnly = await prisma.legajo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegajoCreateManyAndReturnArgs>(args?: SelectSubset<T, LegajoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Legajo.
     * @param {LegajoDeleteArgs} args - Arguments to delete one Legajo.
     * @example
     * // Delete one Legajo
     * const Legajo = await prisma.legajo.delete({
     *   where: {
     *     // ... filter to delete one Legajo
     *   }
     * })
     * 
     */
    delete<T extends LegajoDeleteArgs>(args: SelectSubset<T, LegajoDeleteArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Legajo.
     * @param {LegajoUpdateArgs} args - Arguments to update one Legajo.
     * @example
     * // Update one Legajo
     * const legajo = await prisma.legajo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegajoUpdateArgs>(args: SelectSubset<T, LegajoUpdateArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Legajos.
     * @param {LegajoDeleteManyArgs} args - Arguments to filter Legajos to delete.
     * @example
     * // Delete a few Legajos
     * const { count } = await prisma.legajo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegajoDeleteManyArgs>(args?: SelectSubset<T, LegajoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legajos
     * const legajo = await prisma.legajo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegajoUpdateManyArgs>(args: SelectSubset<T, LegajoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Legajo.
     * @param {LegajoUpsertArgs} args - Arguments to update or create a Legajo.
     * @example
     * // Update or create a Legajo
     * const legajo = await prisma.legajo.upsert({
     *   create: {
     *     // ... data to create a Legajo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legajo we want to update
     *   }
     * })
     */
    upsert<T extends LegajoUpsertArgs>(args: SelectSubset<T, LegajoUpsertArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Legajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoCountArgs} args - Arguments to filter Legajos to count.
     * @example
     * // Count the number of Legajos
     * const count = await prisma.legajo.count({
     *   where: {
     *     // ... the filter for the Legajos we want to count
     *   }
     * })
    **/
    count<T extends LegajoCountArgs>(
      args?: Subset<T, LegajoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegajoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegajoAggregateArgs>(args: Subset<T, LegajoAggregateArgs>): Prisma.PrismaPromise<GetLegajoAggregateType<T>>

    /**
     * Group by Legajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegajoGroupByArgs} args - Group by arguments.
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
      T extends LegajoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegajoGroupByArgs['orderBy'] }
        : { orderBy?: LegajoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegajoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegajoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Legajo model
   */
  readonly fields: LegajoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Legajo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegajoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    victimas<T extends Legajo$victimasArgs<ExtArgs> = {}>(args?: Subset<T, Legajo$victimasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "findMany"> | Null>
    dispositivos<T extends Legajo$dispositivosArgs<ExtArgs> = {}>(args?: Subset<T, Legajo$dispositivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany"> | Null>
    oficios<T extends Legajo$oficiosArgs<ExtArgs> = {}>(args?: Subset<T, Legajo$oficiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findMany"> | Null>
    archivos<T extends Legajo$archivosArgs<ExtArgs> = {}>(args?: Subset<T, Legajo$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "findMany"> | Null>
    comentarios<T extends Legajo$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Legajo$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findMany"> | Null>
    conexiones<T extends Legajo$conexionesArgs<ExtArgs> = {}>(args?: Subset<T, Legajo$conexionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Legajo model
   */ 
  interface LegajoFieldRefs {
    readonly id: FieldRef<"Legajo", 'String'>
    readonly numero: FieldRef<"Legajo", 'String'>
    readonly caratula: FieldRef<"Legajo", 'String'>
    readonly cuij: FieldRef<"Legajo", 'String'>
    readonly delito: FieldRef<"Legajo", 'String'>
    readonly fechaHecho: FieldRef<"Legajo", 'DateTime'>
    readonly estado: FieldRef<"Legajo", 'String'>
    readonly observaciones: FieldRef<"Legajo", 'String'>
    readonly fiscal: FieldRef<"Legajo", 'String'>
    readonly emailRespuesta: FieldRef<"Legajo", 'String'>
    readonly visto: FieldRef<"Legajo", 'Boolean'>
    readonly origenTipo: FieldRef<"Legajo", 'String'>
    readonly origenId: FieldRef<"Legajo", 'String'>
    readonly asignadoA: FieldRef<"Legajo", 'String'>
    readonly createdAt: FieldRef<"Legajo", 'DateTime'>
    readonly updatedAt: FieldRef<"Legajo", 'DateTime'>
    readonly usuarioId: FieldRef<"Legajo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Legajo findUnique
   */
  export type LegajoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * Filter, which Legajo to fetch.
     */
    where: LegajoWhereUniqueInput
  }

  /**
   * Legajo findUniqueOrThrow
   */
  export type LegajoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * Filter, which Legajo to fetch.
     */
    where: LegajoWhereUniqueInput
  }

  /**
   * Legajo findFirst
   */
  export type LegajoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * Filter, which Legajo to fetch.
     */
    where?: LegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legajos to fetch.
     */
    orderBy?: LegajoOrderByWithRelationInput | LegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legajos.
     */
    cursor?: LegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legajos.
     */
    distinct?: LegajoScalarFieldEnum | LegajoScalarFieldEnum[]
  }

  /**
   * Legajo findFirstOrThrow
   */
  export type LegajoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * Filter, which Legajo to fetch.
     */
    where?: LegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legajos to fetch.
     */
    orderBy?: LegajoOrderByWithRelationInput | LegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legajos.
     */
    cursor?: LegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legajos.
     */
    distinct?: LegajoScalarFieldEnum | LegajoScalarFieldEnum[]
  }

  /**
   * Legajo findMany
   */
  export type LegajoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * Filter, which Legajos to fetch.
     */
    where?: LegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legajos to fetch.
     */
    orderBy?: LegajoOrderByWithRelationInput | LegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legajos.
     */
    cursor?: LegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legajos.
     */
    skip?: number
    distinct?: LegajoScalarFieldEnum | LegajoScalarFieldEnum[]
  }

  /**
   * Legajo create
   */
  export type LegajoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * The data needed to create a Legajo.
     */
    data: XOR<LegajoCreateInput, LegajoUncheckedCreateInput>
  }

  /**
   * Legajo createMany
   */
  export type LegajoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Legajos.
     */
    data: LegajoCreateManyInput | LegajoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Legajo createManyAndReturn
   */
  export type LegajoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Legajos.
     */
    data: LegajoCreateManyInput | LegajoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Legajo update
   */
  export type LegajoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * The data needed to update a Legajo.
     */
    data: XOR<LegajoUpdateInput, LegajoUncheckedUpdateInput>
    /**
     * Choose, which Legajo to update.
     */
    where: LegajoWhereUniqueInput
  }

  /**
   * Legajo updateMany
   */
  export type LegajoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Legajos.
     */
    data: XOR<LegajoUpdateManyMutationInput, LegajoUncheckedUpdateManyInput>
    /**
     * Filter which Legajos to update
     */
    where?: LegajoWhereInput
  }

  /**
   * Legajo upsert
   */
  export type LegajoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * The filter to search for the Legajo to update in case it exists.
     */
    where: LegajoWhereUniqueInput
    /**
     * In case the Legajo found by the `where` argument doesn't exist, create a new Legajo with this data.
     */
    create: XOR<LegajoCreateInput, LegajoUncheckedCreateInput>
    /**
     * In case the Legajo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegajoUpdateInput, LegajoUncheckedUpdateInput>
  }

  /**
   * Legajo delete
   */
  export type LegajoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
    /**
     * Filter which Legajo to delete.
     */
    where: LegajoWhereUniqueInput
  }

  /**
   * Legajo deleteMany
   */
  export type LegajoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legajos to delete
     */
    where?: LegajoWhereInput
  }

  /**
   * Legajo.victimas
   */
  export type Legajo$victimasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    where?: VictimaWhereInput
    orderBy?: VictimaOrderByWithRelationInput | VictimaOrderByWithRelationInput[]
    cursor?: VictimaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VictimaScalarFieldEnum | VictimaScalarFieldEnum[]
  }

  /**
   * Legajo.dispositivos
   */
  export type Legajo$dispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    cursor?: DispositivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Legajo.oficios
   */
  export type Legajo$oficiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    where?: OficioWhereInput
    orderBy?: OficioOrderByWithRelationInput | OficioOrderByWithRelationInput[]
    cursor?: OficioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OficioScalarFieldEnum | OficioScalarFieldEnum[]
  }

  /**
   * Legajo.archivos
   */
  export type Legajo$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    where?: ArchivoLegajoWhereInput
    orderBy?: ArchivoLegajoOrderByWithRelationInput | ArchivoLegajoOrderByWithRelationInput[]
    cursor?: ArchivoLegajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivoLegajoScalarFieldEnum | ArchivoLegajoScalarFieldEnum[]
  }

  /**
   * Legajo.comentarios
   */
  export type Legajo$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    where?: ComentarioLegajoWhereInput
    orderBy?: ComentarioLegajoOrderByWithRelationInput | ComentarioLegajoOrderByWithRelationInput[]
    cursor?: ComentarioLegajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioLegajoScalarFieldEnum | ComentarioLegajoScalarFieldEnum[]
  }

  /**
   * Legajo.conexiones
   */
  export type Legajo$conexionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    where?: RedConexionesWhereInput
    orderBy?: RedConexionesOrderByWithRelationInput | RedConexionesOrderByWithRelationInput[]
    cursor?: RedConexionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedConexionesScalarFieldEnum | RedConexionesScalarFieldEnum[]
  }

  /**
   * Legajo without action
   */
  export type LegajoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legajo
     */
    select?: LegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegajoInclude<ExtArgs> | null
  }


  /**
   * Model Victima
   */

  export type AggregateVictima = {
    _count: VictimaCountAggregateOutputType | null
    _min: VictimaMinAggregateOutputType | null
    _max: VictimaMaxAggregateOutputType | null
  }

  export type VictimaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    dni: string | null
    telefono: string | null
    email: string | null
    legajoId: string | null
  }

  export type VictimaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    dni: string | null
    telefono: string | null
    email: string | null
    legajoId: string | null
  }

  export type VictimaCountAggregateOutputType = {
    id: number
    nombre: number
    dni: number
    telefono: number
    email: number
    legajoId: number
    _all: number
  }


  export type VictimaMinAggregateInputType = {
    id?: true
    nombre?: true
    dni?: true
    telefono?: true
    email?: true
    legajoId?: true
  }

  export type VictimaMaxAggregateInputType = {
    id?: true
    nombre?: true
    dni?: true
    telefono?: true
    email?: true
    legajoId?: true
  }

  export type VictimaCountAggregateInputType = {
    id?: true
    nombre?: true
    dni?: true
    telefono?: true
    email?: true
    legajoId?: true
    _all?: true
  }

  export type VictimaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Victima to aggregate.
     */
    where?: VictimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victimas to fetch.
     */
    orderBy?: VictimaOrderByWithRelationInput | VictimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VictimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victimas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Victimas
    **/
    _count?: true | VictimaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VictimaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VictimaMaxAggregateInputType
  }

  export type GetVictimaAggregateType<T extends VictimaAggregateArgs> = {
        [P in keyof T & keyof AggregateVictima]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVictima[P]>
      : GetScalarType<T[P], AggregateVictima[P]>
  }




  export type VictimaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VictimaWhereInput
    orderBy?: VictimaOrderByWithAggregationInput | VictimaOrderByWithAggregationInput[]
    by: VictimaScalarFieldEnum[] | VictimaScalarFieldEnum
    having?: VictimaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VictimaCountAggregateInputType | true
    _min?: VictimaMinAggregateInputType
    _max?: VictimaMaxAggregateInputType
  }

  export type VictimaGroupByOutputType = {
    id: string
    nombre: string
    dni: string | null
    telefono: string | null
    email: string | null
    legajoId: string
    _count: VictimaCountAggregateOutputType | null
    _min: VictimaMinAggregateOutputType | null
    _max: VictimaMaxAggregateOutputType | null
  }

  type GetVictimaGroupByPayload<T extends VictimaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VictimaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VictimaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VictimaGroupByOutputType[P]>
            : GetScalarType<T[P], VictimaGroupByOutputType[P]>
        }
      >
    >


  export type VictimaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    legajoId?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["victima"]>

  export type VictimaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    legajoId?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["victima"]>

  export type VictimaSelectScalar = {
    id?: boolean
    nombre?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    legajoId?: boolean
  }

  export type VictimaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }
  export type VictimaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }

  export type $VictimaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Victima"
    objects: {
      legajo: Prisma.$LegajoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      dni: string | null
      telefono: string | null
      email: string | null
      legajoId: string
    }, ExtArgs["result"]["victima"]>
    composites: {}
  }

  type VictimaGetPayload<S extends boolean | null | undefined | VictimaDefaultArgs> = $Result.GetResult<Prisma.$VictimaPayload, S>

  type VictimaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VictimaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VictimaCountAggregateInputType | true
    }

  export interface VictimaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Victima'], meta: { name: 'Victima' } }
    /**
     * Find zero or one Victima that matches the filter.
     * @param {VictimaFindUniqueArgs} args - Arguments to find a Victima
     * @example
     * // Get one Victima
     * const victima = await prisma.victima.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VictimaFindUniqueArgs>(args: SelectSubset<T, VictimaFindUniqueArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Victima that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VictimaFindUniqueOrThrowArgs} args - Arguments to find a Victima
     * @example
     * // Get one Victima
     * const victima = await prisma.victima.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VictimaFindUniqueOrThrowArgs>(args: SelectSubset<T, VictimaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Victima that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaFindFirstArgs} args - Arguments to find a Victima
     * @example
     * // Get one Victima
     * const victima = await prisma.victima.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VictimaFindFirstArgs>(args?: SelectSubset<T, VictimaFindFirstArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Victima that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaFindFirstOrThrowArgs} args - Arguments to find a Victima
     * @example
     * // Get one Victima
     * const victima = await prisma.victima.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VictimaFindFirstOrThrowArgs>(args?: SelectSubset<T, VictimaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Victimas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Victimas
     * const victimas = await prisma.victima.findMany()
     * 
     * // Get first 10 Victimas
     * const victimas = await prisma.victima.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const victimaWithIdOnly = await prisma.victima.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VictimaFindManyArgs>(args?: SelectSubset<T, VictimaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Victima.
     * @param {VictimaCreateArgs} args - Arguments to create a Victima.
     * @example
     * // Create one Victima
     * const Victima = await prisma.victima.create({
     *   data: {
     *     // ... data to create a Victima
     *   }
     * })
     * 
     */
    create<T extends VictimaCreateArgs>(args: SelectSubset<T, VictimaCreateArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Victimas.
     * @param {VictimaCreateManyArgs} args - Arguments to create many Victimas.
     * @example
     * // Create many Victimas
     * const victima = await prisma.victima.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VictimaCreateManyArgs>(args?: SelectSubset<T, VictimaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Victimas and returns the data saved in the database.
     * @param {VictimaCreateManyAndReturnArgs} args - Arguments to create many Victimas.
     * @example
     * // Create many Victimas
     * const victima = await prisma.victima.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Victimas and only return the `id`
     * const victimaWithIdOnly = await prisma.victima.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VictimaCreateManyAndReturnArgs>(args?: SelectSubset<T, VictimaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Victima.
     * @param {VictimaDeleteArgs} args - Arguments to delete one Victima.
     * @example
     * // Delete one Victima
     * const Victima = await prisma.victima.delete({
     *   where: {
     *     // ... filter to delete one Victima
     *   }
     * })
     * 
     */
    delete<T extends VictimaDeleteArgs>(args: SelectSubset<T, VictimaDeleteArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Victima.
     * @param {VictimaUpdateArgs} args - Arguments to update one Victima.
     * @example
     * // Update one Victima
     * const victima = await prisma.victima.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VictimaUpdateArgs>(args: SelectSubset<T, VictimaUpdateArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Victimas.
     * @param {VictimaDeleteManyArgs} args - Arguments to filter Victimas to delete.
     * @example
     * // Delete a few Victimas
     * const { count } = await prisma.victima.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VictimaDeleteManyArgs>(args?: SelectSubset<T, VictimaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Victimas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Victimas
     * const victima = await prisma.victima.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VictimaUpdateManyArgs>(args: SelectSubset<T, VictimaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Victima.
     * @param {VictimaUpsertArgs} args - Arguments to update or create a Victima.
     * @example
     * // Update or create a Victima
     * const victima = await prisma.victima.upsert({
     *   create: {
     *     // ... data to create a Victima
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Victima we want to update
     *   }
     * })
     */
    upsert<T extends VictimaUpsertArgs>(args: SelectSubset<T, VictimaUpsertArgs<ExtArgs>>): Prisma__VictimaClient<$Result.GetResult<Prisma.$VictimaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Victimas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaCountArgs} args - Arguments to filter Victimas to count.
     * @example
     * // Count the number of Victimas
     * const count = await prisma.victima.count({
     *   where: {
     *     // ... the filter for the Victimas we want to count
     *   }
     * })
    **/
    count<T extends VictimaCountArgs>(
      args?: Subset<T, VictimaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VictimaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Victima.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VictimaAggregateArgs>(args: Subset<T, VictimaAggregateArgs>): Prisma.PrismaPromise<GetVictimaAggregateType<T>>

    /**
     * Group by Victima.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictimaGroupByArgs} args - Group by arguments.
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
      T extends VictimaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VictimaGroupByArgs['orderBy'] }
        : { orderBy?: VictimaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VictimaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVictimaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Victima model
   */
  readonly fields: VictimaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Victima.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VictimaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajo<T extends LegajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegajoDefaultArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Victima model
   */ 
  interface VictimaFieldRefs {
    readonly id: FieldRef<"Victima", 'String'>
    readonly nombre: FieldRef<"Victima", 'String'>
    readonly dni: FieldRef<"Victima", 'String'>
    readonly telefono: FieldRef<"Victima", 'String'>
    readonly email: FieldRef<"Victima", 'String'>
    readonly legajoId: FieldRef<"Victima", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Victima findUnique
   */
  export type VictimaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * Filter, which Victima to fetch.
     */
    where: VictimaWhereUniqueInput
  }

  /**
   * Victima findUniqueOrThrow
   */
  export type VictimaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * Filter, which Victima to fetch.
     */
    where: VictimaWhereUniqueInput
  }

  /**
   * Victima findFirst
   */
  export type VictimaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * Filter, which Victima to fetch.
     */
    where?: VictimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victimas to fetch.
     */
    orderBy?: VictimaOrderByWithRelationInput | VictimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Victimas.
     */
    cursor?: VictimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victimas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Victimas.
     */
    distinct?: VictimaScalarFieldEnum | VictimaScalarFieldEnum[]
  }

  /**
   * Victima findFirstOrThrow
   */
  export type VictimaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * Filter, which Victima to fetch.
     */
    where?: VictimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victimas to fetch.
     */
    orderBy?: VictimaOrderByWithRelationInput | VictimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Victimas.
     */
    cursor?: VictimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victimas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Victimas.
     */
    distinct?: VictimaScalarFieldEnum | VictimaScalarFieldEnum[]
  }

  /**
   * Victima findMany
   */
  export type VictimaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * Filter, which Victimas to fetch.
     */
    where?: VictimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victimas to fetch.
     */
    orderBy?: VictimaOrderByWithRelationInput | VictimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Victimas.
     */
    cursor?: VictimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victimas.
     */
    skip?: number
    distinct?: VictimaScalarFieldEnum | VictimaScalarFieldEnum[]
  }

  /**
   * Victima create
   */
  export type VictimaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * The data needed to create a Victima.
     */
    data: XOR<VictimaCreateInput, VictimaUncheckedCreateInput>
  }

  /**
   * Victima createMany
   */
  export type VictimaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Victimas.
     */
    data: VictimaCreateManyInput | VictimaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Victima createManyAndReturn
   */
  export type VictimaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Victimas.
     */
    data: VictimaCreateManyInput | VictimaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Victima update
   */
  export type VictimaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * The data needed to update a Victima.
     */
    data: XOR<VictimaUpdateInput, VictimaUncheckedUpdateInput>
    /**
     * Choose, which Victima to update.
     */
    where: VictimaWhereUniqueInput
  }

  /**
   * Victima updateMany
   */
  export type VictimaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Victimas.
     */
    data: XOR<VictimaUpdateManyMutationInput, VictimaUncheckedUpdateManyInput>
    /**
     * Filter which Victimas to update
     */
    where?: VictimaWhereInput
  }

  /**
   * Victima upsert
   */
  export type VictimaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * The filter to search for the Victima to update in case it exists.
     */
    where: VictimaWhereUniqueInput
    /**
     * In case the Victima found by the `where` argument doesn't exist, create a new Victima with this data.
     */
    create: XOR<VictimaCreateInput, VictimaUncheckedCreateInput>
    /**
     * In case the Victima was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VictimaUpdateInput, VictimaUncheckedUpdateInput>
  }

  /**
   * Victima delete
   */
  export type VictimaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
    /**
     * Filter which Victima to delete.
     */
    where: VictimaWhereUniqueInput
  }

  /**
   * Victima deleteMany
   */
  export type VictimaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Victimas to delete
     */
    where?: VictimaWhereInput
  }

  /**
   * Victima without action
   */
  export type VictimaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victima
     */
    select?: VictimaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VictimaInclude<ExtArgs> | null
  }


  /**
   * Model Dispositivo
   */

  export type AggregateDispositivo = {
    _count: DispositivoCountAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  export type DispositivoMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    marca: string | null
    modelo: string | null
    imei: string | null
    color: string | null
    numeroLinea: string | null
    legajoId: string | null
  }

  export type DispositivoMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    marca: string | null
    modelo: string | null
    imei: string | null
    color: string | null
    numeroLinea: string | null
    legajoId: string | null
  }

  export type DispositivoCountAggregateOutputType = {
    id: number
    tipo: number
    marca: number
    modelo: number
    imei: number
    color: number
    numeroLinea: number
    legajoId: number
    _all: number
  }


  export type DispositivoMinAggregateInputType = {
    id?: true
    tipo?: true
    marca?: true
    modelo?: true
    imei?: true
    color?: true
    numeroLinea?: true
    legajoId?: true
  }

  export type DispositivoMaxAggregateInputType = {
    id?: true
    tipo?: true
    marca?: true
    modelo?: true
    imei?: true
    color?: true
    numeroLinea?: true
    legajoId?: true
  }

  export type DispositivoCountAggregateInputType = {
    id?: true
    tipo?: true
    marca?: true
    modelo?: true
    imei?: true
    color?: true
    numeroLinea?: true
    legajoId?: true
    _all?: true
  }

  export type DispositivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo to aggregate.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivos
    **/
    _count?: true | DispositivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispositivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispositivoMaxAggregateInputType
  }

  export type GetDispositivoAggregateType<T extends DispositivoAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo[P]>
      : GetScalarType<T[P], AggregateDispositivo[P]>
  }




  export type DispositivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithAggregationInput | DispositivoOrderByWithAggregationInput[]
    by: DispositivoScalarFieldEnum[] | DispositivoScalarFieldEnum
    having?: DispositivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispositivoCountAggregateInputType | true
    _min?: DispositivoMinAggregateInputType
    _max?: DispositivoMaxAggregateInputType
  }

  export type DispositivoGroupByOutputType = {
    id: string
    tipo: string
    marca: string | null
    modelo: string | null
    imei: string | null
    color: string | null
    numeroLinea: string | null
    legajoId: string
    _count: DispositivoCountAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  type GetDispositivoGroupByPayload<T extends DispositivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispositivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispositivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
            : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
        }
      >
    >


  export type DispositivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    imei?: boolean
    color?: boolean
    numeroLinea?: boolean
    legajoId?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    imei?: boolean
    color?: boolean
    numeroLinea?: boolean
    legajoId?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectScalar = {
    id?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    imei?: boolean
    color?: boolean
    numeroLinea?: boolean
    legajoId?: boolean
  }

  export type DispositivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }
  export type DispositivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }

  export type $DispositivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo"
    objects: {
      legajo: Prisma.$LegajoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      marca: string | null
      modelo: string | null
      imei: string | null
      color: string | null
      numeroLinea: string | null
      legajoId: string
    }, ExtArgs["result"]["dispositivo"]>
    composites: {}
  }

  type DispositivoGetPayload<S extends boolean | null | undefined | DispositivoDefaultArgs> = $Result.GetResult<Prisma.$DispositivoPayload, S>

  type DispositivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DispositivoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DispositivoCountAggregateInputType | true
    }

  export interface DispositivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo'], meta: { name: 'Dispositivo' } }
    /**
     * Find zero or one Dispositivo that matches the filter.
     * @param {DispositivoFindUniqueArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispositivoFindUniqueArgs>(args: SelectSubset<T, DispositivoFindUniqueArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dispositivo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DispositivoFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispositivoFindUniqueOrThrowArgs>(args: SelectSubset<T, DispositivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dispositivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispositivoFindFirstArgs>(args?: SelectSubset<T, DispositivoFindFirstArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dispositivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispositivoFindFirstOrThrowArgs>(args?: SelectSubset<T, DispositivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany()
     * 
     * // Get first 10 Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispositivoFindManyArgs>(args?: SelectSubset<T, DispositivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dispositivo.
     * @param {DispositivoCreateArgs} args - Arguments to create a Dispositivo.
     * @example
     * // Create one Dispositivo
     * const Dispositivo = await prisma.dispositivo.create({
     *   data: {
     *     // ... data to create a Dispositivo
     *   }
     * })
     * 
     */
    create<T extends DispositivoCreateArgs>(args: SelectSubset<T, DispositivoCreateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dispositivos.
     * @param {DispositivoCreateManyArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispositivoCreateManyArgs>(args?: SelectSubset<T, DispositivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispositivos and returns the data saved in the database.
     * @param {DispositivoCreateManyAndReturnArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispositivos and only return the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispositivoCreateManyAndReturnArgs>(args?: SelectSubset<T, DispositivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dispositivo.
     * @param {DispositivoDeleteArgs} args - Arguments to delete one Dispositivo.
     * @example
     * // Delete one Dispositivo
     * const Dispositivo = await prisma.dispositivo.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo
     *   }
     * })
     * 
     */
    delete<T extends DispositivoDeleteArgs>(args: SelectSubset<T, DispositivoDeleteArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dispositivo.
     * @param {DispositivoUpdateArgs} args - Arguments to update one Dispositivo.
     * @example
     * // Update one Dispositivo
     * const dispositivo = await prisma.dispositivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispositivoUpdateArgs>(args: SelectSubset<T, DispositivoUpdateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dispositivos.
     * @param {DispositivoDeleteManyArgs} args - Arguments to filter Dispositivos to delete.
     * @example
     * // Delete a few Dispositivos
     * const { count } = await prisma.dispositivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispositivoDeleteManyArgs>(args?: SelectSubset<T, DispositivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispositivoUpdateManyArgs>(args: SelectSubset<T, DispositivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispositivo.
     * @param {DispositivoUpsertArgs} args - Arguments to update or create a Dispositivo.
     * @example
     * // Update or create a Dispositivo
     * const dispositivo = await prisma.dispositivo.upsert({
     *   create: {
     *     // ... data to create a Dispositivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo we want to update
     *   }
     * })
     */
    upsert<T extends DispositivoUpsertArgs>(args: SelectSubset<T, DispositivoUpsertArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoCountArgs} args - Arguments to filter Dispositivos to count.
     * @example
     * // Count the number of Dispositivos
     * const count = await prisma.dispositivo.count({
     *   where: {
     *     // ... the filter for the Dispositivos we want to count
     *   }
     * })
    **/
    count<T extends DispositivoCountArgs>(
      args?: Subset<T, DispositivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispositivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispositivoAggregateArgs>(args: Subset<T, DispositivoAggregateArgs>): Prisma.PrismaPromise<GetDispositivoAggregateType<T>>

    /**
     * Group by Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoGroupByArgs} args - Group by arguments.
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
      T extends DispositivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispositivoGroupByArgs['orderBy'] }
        : { orderBy?: DispositivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispositivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo model
   */
  readonly fields: DispositivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispositivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajo<T extends LegajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegajoDefaultArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Dispositivo model
   */ 
  interface DispositivoFieldRefs {
    readonly id: FieldRef<"Dispositivo", 'String'>
    readonly tipo: FieldRef<"Dispositivo", 'String'>
    readonly marca: FieldRef<"Dispositivo", 'String'>
    readonly modelo: FieldRef<"Dispositivo", 'String'>
    readonly imei: FieldRef<"Dispositivo", 'String'>
    readonly color: FieldRef<"Dispositivo", 'String'>
    readonly numeroLinea: FieldRef<"Dispositivo", 'String'>
    readonly legajoId: FieldRef<"Dispositivo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo findUnique
   */
  export type DispositivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findUniqueOrThrow
   */
  export type DispositivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findFirst
   */
  export type DispositivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findFirstOrThrow
   */
  export type DispositivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findMany
   */
  export type DispositivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivos to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo create
   */
  export type DispositivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo.
     */
    data: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
  }

  /**
   * Dispositivo createMany
   */
  export type DispositivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo createManyAndReturn
   */
  export type DispositivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispositivo update
   */
  export type DispositivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo.
     */
    data: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo to update.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo updateMany
   */
  export type DispositivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
  }

  /**
   * Dispositivo upsert
   */
  export type DispositivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo to update in case it exists.
     */
    where: DispositivoWhereUniqueInput
    /**
     * In case the Dispositivo found by the `where` argument doesn't exist, create a new Dispositivo with this data.
     */
    create: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
    /**
     * In case the Dispositivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
  }

  /**
   * Dispositivo delete
   */
  export type DispositivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter which Dispositivo to delete.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo deleteMany
   */
  export type DispositivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivos to delete
     */
    where?: DispositivoWhereInput
  }

  /**
   * Dispositivo without action
   */
  export type DispositivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
  }


  /**
   * Model Oficio
   */

  export type AggregateOficio = {
    _count: OficioCountAggregateOutputType | null
    _min: OficioMinAggregateOutputType | null
    _max: OficioMaxAggregateOutputType | null
  }

  export type OficioMinAggregateOutputType = {
    id: string | null
    numero: string | null
    operadora: string | null
    tipo: string | null
    fechaEnvio: Date | null
    fechaRespuesta: Date | null
    estado: string | null
    urgencia: string | null
    observaciones: string | null
    columnas: string | null
    tipoConsulta: string | null
    numeroLinea: string | null
    imeiSeleccionado: string | null
    createdAt: Date | null
    legajoId: string | null
  }

  export type OficioMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    operadora: string | null
    tipo: string | null
    fechaEnvio: Date | null
    fechaRespuesta: Date | null
    estado: string | null
    urgencia: string | null
    observaciones: string | null
    columnas: string | null
    tipoConsulta: string | null
    numeroLinea: string | null
    imeiSeleccionado: string | null
    createdAt: Date | null
    legajoId: string | null
  }

  export type OficioCountAggregateOutputType = {
    id: number
    numero: number
    operadora: number
    tipo: number
    fechaEnvio: number
    fechaRespuesta: number
    estado: number
    urgencia: number
    observaciones: number
    columnas: number
    tipoConsulta: number
    numeroLinea: number
    imeiSeleccionado: number
    createdAt: number
    legajoId: number
    _all: number
  }


  export type OficioMinAggregateInputType = {
    id?: true
    numero?: true
    operadora?: true
    tipo?: true
    fechaEnvio?: true
    fechaRespuesta?: true
    estado?: true
    urgencia?: true
    observaciones?: true
    columnas?: true
    tipoConsulta?: true
    numeroLinea?: true
    imeiSeleccionado?: true
    createdAt?: true
    legajoId?: true
  }

  export type OficioMaxAggregateInputType = {
    id?: true
    numero?: true
    operadora?: true
    tipo?: true
    fechaEnvio?: true
    fechaRespuesta?: true
    estado?: true
    urgencia?: true
    observaciones?: true
    columnas?: true
    tipoConsulta?: true
    numeroLinea?: true
    imeiSeleccionado?: true
    createdAt?: true
    legajoId?: true
  }

  export type OficioCountAggregateInputType = {
    id?: true
    numero?: true
    operadora?: true
    tipo?: true
    fechaEnvio?: true
    fechaRespuesta?: true
    estado?: true
    urgencia?: true
    observaciones?: true
    columnas?: true
    tipoConsulta?: true
    numeroLinea?: true
    imeiSeleccionado?: true
    createdAt?: true
    legajoId?: true
    _all?: true
  }

  export type OficioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oficio to aggregate.
     */
    where?: OficioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oficios to fetch.
     */
    orderBy?: OficioOrderByWithRelationInput | OficioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OficioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Oficios
    **/
    _count?: true | OficioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OficioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OficioMaxAggregateInputType
  }

  export type GetOficioAggregateType<T extends OficioAggregateArgs> = {
        [P in keyof T & keyof AggregateOficio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOficio[P]>
      : GetScalarType<T[P], AggregateOficio[P]>
  }




  export type OficioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OficioWhereInput
    orderBy?: OficioOrderByWithAggregationInput | OficioOrderByWithAggregationInput[]
    by: OficioScalarFieldEnum[] | OficioScalarFieldEnum
    having?: OficioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OficioCountAggregateInputType | true
    _min?: OficioMinAggregateInputType
    _max?: OficioMaxAggregateInputType
  }

  export type OficioGroupByOutputType = {
    id: string
    numero: string | null
    operadora: string
    tipo: string
    fechaEnvio: Date | null
    fechaRespuesta: Date | null
    estado: string
    urgencia: string
    observaciones: string | null
    columnas: string | null
    tipoConsulta: string | null
    numeroLinea: string | null
    imeiSeleccionado: string | null
    createdAt: Date
    legajoId: string
    _count: OficioCountAggregateOutputType | null
    _min: OficioMinAggregateOutputType | null
    _max: OficioMaxAggregateOutputType | null
  }

  type GetOficioGroupByPayload<T extends OficioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OficioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OficioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OficioGroupByOutputType[P]>
            : GetScalarType<T[P], OficioGroupByOutputType[P]>
        }
      >
    >


  export type OficioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    operadora?: boolean
    tipo?: boolean
    fechaEnvio?: boolean
    fechaRespuesta?: boolean
    estado?: boolean
    urgencia?: boolean
    observaciones?: boolean
    columnas?: boolean
    tipoConsulta?: boolean
    numeroLinea?: boolean
    imeiSeleccionado?: boolean
    createdAt?: boolean
    legajoId?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
    respuestas?: boolean | Oficio$respuestasArgs<ExtArgs>
    _count?: boolean | OficioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oficio"]>

  export type OficioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    operadora?: boolean
    tipo?: boolean
    fechaEnvio?: boolean
    fechaRespuesta?: boolean
    estado?: boolean
    urgencia?: boolean
    observaciones?: boolean
    columnas?: boolean
    tipoConsulta?: boolean
    numeroLinea?: boolean
    imeiSeleccionado?: boolean
    createdAt?: boolean
    legajoId?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oficio"]>

  export type OficioSelectScalar = {
    id?: boolean
    numero?: boolean
    operadora?: boolean
    tipo?: boolean
    fechaEnvio?: boolean
    fechaRespuesta?: boolean
    estado?: boolean
    urgencia?: boolean
    observaciones?: boolean
    columnas?: boolean
    tipoConsulta?: boolean
    numeroLinea?: boolean
    imeiSeleccionado?: boolean
    createdAt?: boolean
    legajoId?: boolean
  }

  export type OficioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
    respuestas?: boolean | Oficio$respuestasArgs<ExtArgs>
    _count?: boolean | OficioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OficioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }

  export type $OficioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Oficio"
    objects: {
      legajo: Prisma.$LegajoPayload<ExtArgs>
      respuestas: Prisma.$RespuestaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string | null
      operadora: string
      tipo: string
      fechaEnvio: Date | null
      fechaRespuesta: Date | null
      estado: string
      urgencia: string
      observaciones: string | null
      columnas: string | null
      tipoConsulta: string | null
      numeroLinea: string | null
      imeiSeleccionado: string | null
      createdAt: Date
      legajoId: string
    }, ExtArgs["result"]["oficio"]>
    composites: {}
  }

  type OficioGetPayload<S extends boolean | null | undefined | OficioDefaultArgs> = $Result.GetResult<Prisma.$OficioPayload, S>

  type OficioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OficioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OficioCountAggregateInputType | true
    }

  export interface OficioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Oficio'], meta: { name: 'Oficio' } }
    /**
     * Find zero or one Oficio that matches the filter.
     * @param {OficioFindUniqueArgs} args - Arguments to find a Oficio
     * @example
     * // Get one Oficio
     * const oficio = await prisma.oficio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OficioFindUniqueArgs>(args: SelectSubset<T, OficioFindUniqueArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Oficio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OficioFindUniqueOrThrowArgs} args - Arguments to find a Oficio
     * @example
     * // Get one Oficio
     * const oficio = await prisma.oficio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OficioFindUniqueOrThrowArgs>(args: SelectSubset<T, OficioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Oficio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioFindFirstArgs} args - Arguments to find a Oficio
     * @example
     * // Get one Oficio
     * const oficio = await prisma.oficio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OficioFindFirstArgs>(args?: SelectSubset<T, OficioFindFirstArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Oficio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioFindFirstOrThrowArgs} args - Arguments to find a Oficio
     * @example
     * // Get one Oficio
     * const oficio = await prisma.oficio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OficioFindFirstOrThrowArgs>(args?: SelectSubset<T, OficioFindFirstOrThrowArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Oficios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Oficios
     * const oficios = await prisma.oficio.findMany()
     * 
     * // Get first 10 Oficios
     * const oficios = await prisma.oficio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oficioWithIdOnly = await prisma.oficio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OficioFindManyArgs>(args?: SelectSubset<T, OficioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Oficio.
     * @param {OficioCreateArgs} args - Arguments to create a Oficio.
     * @example
     * // Create one Oficio
     * const Oficio = await prisma.oficio.create({
     *   data: {
     *     // ... data to create a Oficio
     *   }
     * })
     * 
     */
    create<T extends OficioCreateArgs>(args: SelectSubset<T, OficioCreateArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Oficios.
     * @param {OficioCreateManyArgs} args - Arguments to create many Oficios.
     * @example
     * // Create many Oficios
     * const oficio = await prisma.oficio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OficioCreateManyArgs>(args?: SelectSubset<T, OficioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Oficios and returns the data saved in the database.
     * @param {OficioCreateManyAndReturnArgs} args - Arguments to create many Oficios.
     * @example
     * // Create many Oficios
     * const oficio = await prisma.oficio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Oficios and only return the `id`
     * const oficioWithIdOnly = await prisma.oficio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OficioCreateManyAndReturnArgs>(args?: SelectSubset<T, OficioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Oficio.
     * @param {OficioDeleteArgs} args - Arguments to delete one Oficio.
     * @example
     * // Delete one Oficio
     * const Oficio = await prisma.oficio.delete({
     *   where: {
     *     // ... filter to delete one Oficio
     *   }
     * })
     * 
     */
    delete<T extends OficioDeleteArgs>(args: SelectSubset<T, OficioDeleteArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Oficio.
     * @param {OficioUpdateArgs} args - Arguments to update one Oficio.
     * @example
     * // Update one Oficio
     * const oficio = await prisma.oficio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OficioUpdateArgs>(args: SelectSubset<T, OficioUpdateArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Oficios.
     * @param {OficioDeleteManyArgs} args - Arguments to filter Oficios to delete.
     * @example
     * // Delete a few Oficios
     * const { count } = await prisma.oficio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OficioDeleteManyArgs>(args?: SelectSubset<T, OficioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Oficios
     * const oficio = await prisma.oficio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OficioUpdateManyArgs>(args: SelectSubset<T, OficioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Oficio.
     * @param {OficioUpsertArgs} args - Arguments to update or create a Oficio.
     * @example
     * // Update or create a Oficio
     * const oficio = await prisma.oficio.upsert({
     *   create: {
     *     // ... data to create a Oficio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oficio we want to update
     *   }
     * })
     */
    upsert<T extends OficioUpsertArgs>(args: SelectSubset<T, OficioUpsertArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Oficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioCountArgs} args - Arguments to filter Oficios to count.
     * @example
     * // Count the number of Oficios
     * const count = await prisma.oficio.count({
     *   where: {
     *     // ... the filter for the Oficios we want to count
     *   }
     * })
    **/
    count<T extends OficioCountArgs>(
      args?: Subset<T, OficioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OficioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oficio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OficioAggregateArgs>(args: Subset<T, OficioAggregateArgs>): Prisma.PrismaPromise<GetOficioAggregateType<T>>

    /**
     * Group by Oficio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OficioGroupByArgs} args - Group by arguments.
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
      T extends OficioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OficioGroupByArgs['orderBy'] }
        : { orderBy?: OficioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OficioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOficioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Oficio model
   */
  readonly fields: OficioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Oficio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OficioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajo<T extends LegajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegajoDefaultArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    respuestas<T extends Oficio$respuestasArgs<ExtArgs> = {}>(args?: Subset<T, Oficio$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Oficio model
   */ 
  interface OficioFieldRefs {
    readonly id: FieldRef<"Oficio", 'String'>
    readonly numero: FieldRef<"Oficio", 'String'>
    readonly operadora: FieldRef<"Oficio", 'String'>
    readonly tipo: FieldRef<"Oficio", 'String'>
    readonly fechaEnvio: FieldRef<"Oficio", 'DateTime'>
    readonly fechaRespuesta: FieldRef<"Oficio", 'DateTime'>
    readonly estado: FieldRef<"Oficio", 'String'>
    readonly urgencia: FieldRef<"Oficio", 'String'>
    readonly observaciones: FieldRef<"Oficio", 'String'>
    readonly columnas: FieldRef<"Oficio", 'String'>
    readonly tipoConsulta: FieldRef<"Oficio", 'String'>
    readonly numeroLinea: FieldRef<"Oficio", 'String'>
    readonly imeiSeleccionado: FieldRef<"Oficio", 'String'>
    readonly createdAt: FieldRef<"Oficio", 'DateTime'>
    readonly legajoId: FieldRef<"Oficio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Oficio findUnique
   */
  export type OficioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * Filter, which Oficio to fetch.
     */
    where: OficioWhereUniqueInput
  }

  /**
   * Oficio findUniqueOrThrow
   */
  export type OficioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * Filter, which Oficio to fetch.
     */
    where: OficioWhereUniqueInput
  }

  /**
   * Oficio findFirst
   */
  export type OficioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * Filter, which Oficio to fetch.
     */
    where?: OficioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oficios to fetch.
     */
    orderBy?: OficioOrderByWithRelationInput | OficioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oficios.
     */
    cursor?: OficioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oficios.
     */
    distinct?: OficioScalarFieldEnum | OficioScalarFieldEnum[]
  }

  /**
   * Oficio findFirstOrThrow
   */
  export type OficioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * Filter, which Oficio to fetch.
     */
    where?: OficioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oficios to fetch.
     */
    orderBy?: OficioOrderByWithRelationInput | OficioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oficios.
     */
    cursor?: OficioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oficios.
     */
    distinct?: OficioScalarFieldEnum | OficioScalarFieldEnum[]
  }

  /**
   * Oficio findMany
   */
  export type OficioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * Filter, which Oficios to fetch.
     */
    where?: OficioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oficios to fetch.
     */
    orderBy?: OficioOrderByWithRelationInput | OficioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Oficios.
     */
    cursor?: OficioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oficios.
     */
    skip?: number
    distinct?: OficioScalarFieldEnum | OficioScalarFieldEnum[]
  }

  /**
   * Oficio create
   */
  export type OficioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * The data needed to create a Oficio.
     */
    data: XOR<OficioCreateInput, OficioUncheckedCreateInput>
  }

  /**
   * Oficio createMany
   */
  export type OficioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Oficios.
     */
    data: OficioCreateManyInput | OficioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Oficio createManyAndReturn
   */
  export type OficioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Oficios.
     */
    data: OficioCreateManyInput | OficioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Oficio update
   */
  export type OficioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * The data needed to update a Oficio.
     */
    data: XOR<OficioUpdateInput, OficioUncheckedUpdateInput>
    /**
     * Choose, which Oficio to update.
     */
    where: OficioWhereUniqueInput
  }

  /**
   * Oficio updateMany
   */
  export type OficioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Oficios.
     */
    data: XOR<OficioUpdateManyMutationInput, OficioUncheckedUpdateManyInput>
    /**
     * Filter which Oficios to update
     */
    where?: OficioWhereInput
  }

  /**
   * Oficio upsert
   */
  export type OficioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * The filter to search for the Oficio to update in case it exists.
     */
    where: OficioWhereUniqueInput
    /**
     * In case the Oficio found by the `where` argument doesn't exist, create a new Oficio with this data.
     */
    create: XOR<OficioCreateInput, OficioUncheckedCreateInput>
    /**
     * In case the Oficio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OficioUpdateInput, OficioUncheckedUpdateInput>
  }

  /**
   * Oficio delete
   */
  export type OficioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
    /**
     * Filter which Oficio to delete.
     */
    where: OficioWhereUniqueInput
  }

  /**
   * Oficio deleteMany
   */
  export type OficioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oficios to delete
     */
    where?: OficioWhereInput
  }

  /**
   * Oficio.respuestas
   */
  export type Oficio$respuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    where?: RespuestaWhereInput
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    cursor?: RespuestaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Oficio without action
   */
  export type OficioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oficio
     */
    select?: OficioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OficioInclude<ExtArgs> | null
  }


  /**
   * Model Respuesta
   */

  export type AggregateRespuesta = {
    _count: RespuestaCountAggregateOutputType | null
    _min: RespuestaMinAggregateOutputType | null
    _max: RespuestaMaxAggregateOutputType | null
  }

  export type RespuestaMinAggregateOutputType = {
    id: string | null
    oficioId: string | null
    datos: string | null
    createdAt: Date | null
  }

  export type RespuestaMaxAggregateOutputType = {
    id: string | null
    oficioId: string | null
    datos: string | null
    createdAt: Date | null
  }

  export type RespuestaCountAggregateOutputType = {
    id: number
    oficioId: number
    datos: number
    createdAt: number
    _all: number
  }


  export type RespuestaMinAggregateInputType = {
    id?: true
    oficioId?: true
    datos?: true
    createdAt?: true
  }

  export type RespuestaMaxAggregateInputType = {
    id?: true
    oficioId?: true
    datos?: true
    createdAt?: true
  }

  export type RespuestaCountAggregateInputType = {
    id?: true
    oficioId?: true
    datos?: true
    createdAt?: true
    _all?: true
  }

  export type RespuestaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respuesta to aggregate.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respuestas
    **/
    _count?: true | RespuestaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespuestaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespuestaMaxAggregateInputType
  }

  export type GetRespuestaAggregateType<T extends RespuestaAggregateArgs> = {
        [P in keyof T & keyof AggregateRespuesta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespuesta[P]>
      : GetScalarType<T[P], AggregateRespuesta[P]>
  }




  export type RespuestaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaWhereInput
    orderBy?: RespuestaOrderByWithAggregationInput | RespuestaOrderByWithAggregationInput[]
    by: RespuestaScalarFieldEnum[] | RespuestaScalarFieldEnum
    having?: RespuestaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespuestaCountAggregateInputType | true
    _min?: RespuestaMinAggregateInputType
    _max?: RespuestaMaxAggregateInputType
  }

  export type RespuestaGroupByOutputType = {
    id: string
    oficioId: string
    datos: string
    createdAt: Date
    _count: RespuestaCountAggregateOutputType | null
    _min: RespuestaMinAggregateOutputType | null
    _max: RespuestaMaxAggregateOutputType | null
  }

  type GetRespuestaGroupByPayload<T extends RespuestaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespuestaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespuestaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespuestaGroupByOutputType[P]>
            : GetScalarType<T[P], RespuestaGroupByOutputType[P]>
        }
      >
    >


  export type RespuestaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oficioId?: boolean
    datos?: boolean
    createdAt?: boolean
    oficio?: boolean | OficioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuesta"]>

  export type RespuestaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oficioId?: boolean
    datos?: boolean
    createdAt?: boolean
    oficio?: boolean | OficioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuesta"]>

  export type RespuestaSelectScalar = {
    id?: boolean
    oficioId?: boolean
    datos?: boolean
    createdAt?: boolean
  }

  export type RespuestaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oficio?: boolean | OficioDefaultArgs<ExtArgs>
  }
  export type RespuestaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oficio?: boolean | OficioDefaultArgs<ExtArgs>
  }

  export type $RespuestaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Respuesta"
    objects: {
      oficio: Prisma.$OficioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      oficioId: string
      datos: string
      createdAt: Date
    }, ExtArgs["result"]["respuesta"]>
    composites: {}
  }

  type RespuestaGetPayload<S extends boolean | null | undefined | RespuestaDefaultArgs> = $Result.GetResult<Prisma.$RespuestaPayload, S>

  type RespuestaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RespuestaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RespuestaCountAggregateInputType | true
    }

  export interface RespuestaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Respuesta'], meta: { name: 'Respuesta' } }
    /**
     * Find zero or one Respuesta that matches the filter.
     * @param {RespuestaFindUniqueArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespuestaFindUniqueArgs>(args: SelectSubset<T, RespuestaFindUniqueArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Respuesta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RespuestaFindUniqueOrThrowArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespuestaFindUniqueOrThrowArgs>(args: SelectSubset<T, RespuestaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Respuesta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaFindFirstArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespuestaFindFirstArgs>(args?: SelectSubset<T, RespuestaFindFirstArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Respuesta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaFindFirstOrThrowArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespuestaFindFirstOrThrowArgs>(args?: SelectSubset<T, RespuestaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Respuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respuestas
     * const respuestas = await prisma.respuesta.findMany()
     * 
     * // Get first 10 Respuestas
     * const respuestas = await prisma.respuesta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respuestaWithIdOnly = await prisma.respuesta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespuestaFindManyArgs>(args?: SelectSubset<T, RespuestaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Respuesta.
     * @param {RespuestaCreateArgs} args - Arguments to create a Respuesta.
     * @example
     * // Create one Respuesta
     * const Respuesta = await prisma.respuesta.create({
     *   data: {
     *     // ... data to create a Respuesta
     *   }
     * })
     * 
     */
    create<T extends RespuestaCreateArgs>(args: SelectSubset<T, RespuestaCreateArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Respuestas.
     * @param {RespuestaCreateManyArgs} args - Arguments to create many Respuestas.
     * @example
     * // Create many Respuestas
     * const respuesta = await prisma.respuesta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespuestaCreateManyArgs>(args?: SelectSubset<T, RespuestaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Respuestas and returns the data saved in the database.
     * @param {RespuestaCreateManyAndReturnArgs} args - Arguments to create many Respuestas.
     * @example
     * // Create many Respuestas
     * const respuesta = await prisma.respuesta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Respuestas and only return the `id`
     * const respuestaWithIdOnly = await prisma.respuesta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RespuestaCreateManyAndReturnArgs>(args?: SelectSubset<T, RespuestaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Respuesta.
     * @param {RespuestaDeleteArgs} args - Arguments to delete one Respuesta.
     * @example
     * // Delete one Respuesta
     * const Respuesta = await prisma.respuesta.delete({
     *   where: {
     *     // ... filter to delete one Respuesta
     *   }
     * })
     * 
     */
    delete<T extends RespuestaDeleteArgs>(args: SelectSubset<T, RespuestaDeleteArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Respuesta.
     * @param {RespuestaUpdateArgs} args - Arguments to update one Respuesta.
     * @example
     * // Update one Respuesta
     * const respuesta = await prisma.respuesta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespuestaUpdateArgs>(args: SelectSubset<T, RespuestaUpdateArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Respuestas.
     * @param {RespuestaDeleteManyArgs} args - Arguments to filter Respuestas to delete.
     * @example
     * // Delete a few Respuestas
     * const { count } = await prisma.respuesta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespuestaDeleteManyArgs>(args?: SelectSubset<T, RespuestaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respuestas
     * const respuesta = await prisma.respuesta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespuestaUpdateManyArgs>(args: SelectSubset<T, RespuestaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Respuesta.
     * @param {RespuestaUpsertArgs} args - Arguments to update or create a Respuesta.
     * @example
     * // Update or create a Respuesta
     * const respuesta = await prisma.respuesta.upsert({
     *   create: {
     *     // ... data to create a Respuesta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Respuesta we want to update
     *   }
     * })
     */
    upsert<T extends RespuestaUpsertArgs>(args: SelectSubset<T, RespuestaUpsertArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaCountArgs} args - Arguments to filter Respuestas to count.
     * @example
     * // Count the number of Respuestas
     * const count = await prisma.respuesta.count({
     *   where: {
     *     // ... the filter for the Respuestas we want to count
     *   }
     * })
    **/
    count<T extends RespuestaCountArgs>(
      args?: Subset<T, RespuestaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespuestaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Respuesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespuestaAggregateArgs>(args: Subset<T, RespuestaAggregateArgs>): Prisma.PrismaPromise<GetRespuestaAggregateType<T>>

    /**
     * Group by Respuesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaGroupByArgs} args - Group by arguments.
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
      T extends RespuestaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespuestaGroupByArgs['orderBy'] }
        : { orderBy?: RespuestaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespuestaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespuestaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Respuesta model
   */
  readonly fields: RespuestaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Respuesta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespuestaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oficio<T extends OficioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OficioDefaultArgs<ExtArgs>>): Prisma__OficioClient<$Result.GetResult<Prisma.$OficioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Respuesta model
   */ 
  interface RespuestaFieldRefs {
    readonly id: FieldRef<"Respuesta", 'String'>
    readonly oficioId: FieldRef<"Respuesta", 'String'>
    readonly datos: FieldRef<"Respuesta", 'String'>
    readonly createdAt: FieldRef<"Respuesta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Respuesta findUnique
   */
  export type RespuestaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta findUniqueOrThrow
   */
  export type RespuestaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta findFirst
   */
  export type RespuestaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respuestas.
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respuestas.
     */
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Respuesta findFirstOrThrow
   */
  export type RespuestaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respuestas.
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respuestas.
     */
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Respuesta findMany
   */
  export type RespuestaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respuestas.
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Respuesta create
   */
  export type RespuestaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * The data needed to create a Respuesta.
     */
    data: XOR<RespuestaCreateInput, RespuestaUncheckedCreateInput>
  }

  /**
   * Respuesta createMany
   */
  export type RespuestaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respuestas.
     */
    data: RespuestaCreateManyInput | RespuestaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Respuesta createManyAndReturn
   */
  export type RespuestaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Respuestas.
     */
    data: RespuestaCreateManyInput | RespuestaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Respuesta update
   */
  export type RespuestaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * The data needed to update a Respuesta.
     */
    data: XOR<RespuestaUpdateInput, RespuestaUncheckedUpdateInput>
    /**
     * Choose, which Respuesta to update.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta updateMany
   */
  export type RespuestaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respuestas.
     */
    data: XOR<RespuestaUpdateManyMutationInput, RespuestaUncheckedUpdateManyInput>
    /**
     * Filter which Respuestas to update
     */
    where?: RespuestaWhereInput
  }

  /**
   * Respuesta upsert
   */
  export type RespuestaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * The filter to search for the Respuesta to update in case it exists.
     */
    where: RespuestaWhereUniqueInput
    /**
     * In case the Respuesta found by the `where` argument doesn't exist, create a new Respuesta with this data.
     */
    create: XOR<RespuestaCreateInput, RespuestaUncheckedCreateInput>
    /**
     * In case the Respuesta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespuestaUpdateInput, RespuestaUncheckedUpdateInput>
  }

  /**
   * Respuesta delete
   */
  export type RespuestaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter which Respuesta to delete.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta deleteMany
   */
  export type RespuestaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respuestas to delete
     */
    where?: RespuestaWhereInput
  }

  /**
   * Respuesta without action
   */
  export type RespuestaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
  }


  /**
   * Model Fiscal
   */

  export type AggregateFiscal = {
    _count: FiscalCountAggregateOutputType | null
    _min: FiscalMinAggregateOutputType | null
    _max: FiscalMaxAggregateOutputType | null
  }

  export type FiscalMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    cargo: string | null
    fiscalia: string | null
    secretario: string | null
    dniSecretario: string | null
    dni: string | null
    email: string | null
    emailSecretario: string | null
    direccion: string | null
    telefono: string | null
    telefonoMovil: string | null
    activo: boolean | null
    createdAt: Date | null
    usuarioId: string | null
  }

  export type FiscalMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    cargo: string | null
    fiscalia: string | null
    secretario: string | null
    dniSecretario: string | null
    dni: string | null
    email: string | null
    emailSecretario: string | null
    direccion: string | null
    telefono: string | null
    telefonoMovil: string | null
    activo: boolean | null
    createdAt: Date | null
    usuarioId: string | null
  }

  export type FiscalCountAggregateOutputType = {
    id: number
    nombre: number
    cargo: number
    fiscalia: number
    secretario: number
    dniSecretario: number
    dni: number
    email: number
    emailSecretario: number
    direccion: number
    telefono: number
    telefonoMovil: number
    activo: number
    createdAt: number
    usuarioId: number
    _all: number
  }


  export type FiscalMinAggregateInputType = {
    id?: true
    nombre?: true
    cargo?: true
    fiscalia?: true
    secretario?: true
    dniSecretario?: true
    dni?: true
    email?: true
    emailSecretario?: true
    direccion?: true
    telefono?: true
    telefonoMovil?: true
    activo?: true
    createdAt?: true
    usuarioId?: true
  }

  export type FiscalMaxAggregateInputType = {
    id?: true
    nombre?: true
    cargo?: true
    fiscalia?: true
    secretario?: true
    dniSecretario?: true
    dni?: true
    email?: true
    emailSecretario?: true
    direccion?: true
    telefono?: true
    telefonoMovil?: true
    activo?: true
    createdAt?: true
    usuarioId?: true
  }

  export type FiscalCountAggregateInputType = {
    id?: true
    nombre?: true
    cargo?: true
    fiscalia?: true
    secretario?: true
    dniSecretario?: true
    dni?: true
    email?: true
    emailSecretario?: true
    direccion?: true
    telefono?: true
    telefonoMovil?: true
    activo?: true
    createdAt?: true
    usuarioId?: true
    _all?: true
  }

  export type FiscalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fiscal to aggregate.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fiscals
    **/
    _count?: true | FiscalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiscalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiscalMaxAggregateInputType
  }

  export type GetFiscalAggregateType<T extends FiscalAggregateArgs> = {
        [P in keyof T & keyof AggregateFiscal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiscal[P]>
      : GetScalarType<T[P], AggregateFiscal[P]>
  }




  export type FiscalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalWhereInput
    orderBy?: FiscalOrderByWithAggregationInput | FiscalOrderByWithAggregationInput[]
    by: FiscalScalarFieldEnum[] | FiscalScalarFieldEnum
    having?: FiscalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiscalCountAggregateInputType | true
    _min?: FiscalMinAggregateInputType
    _max?: FiscalMaxAggregateInputType
  }

  export type FiscalGroupByOutputType = {
    id: string
    nombre: string
    cargo: string | null
    fiscalia: string | null
    secretario: string | null
    dniSecretario: string | null
    dni: string | null
    email: string | null
    emailSecretario: string | null
    direccion: string | null
    telefono: string | null
    telefonoMovil: string | null
    activo: boolean
    createdAt: Date
    usuarioId: string
    _count: FiscalCountAggregateOutputType | null
    _min: FiscalMinAggregateOutputType | null
    _max: FiscalMaxAggregateOutputType | null
  }

  type GetFiscalGroupByPayload<T extends FiscalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiscalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiscalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiscalGroupByOutputType[P]>
            : GetScalarType<T[P], FiscalGroupByOutputType[P]>
        }
      >
    >


  export type FiscalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cargo?: boolean
    fiscalia?: boolean
    secretario?: boolean
    dniSecretario?: boolean
    dni?: boolean
    email?: boolean
    emailSecretario?: boolean
    direccion?: boolean
    telefono?: boolean
    telefonoMovil?: boolean
    activo?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscal"]>

  export type FiscalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cargo?: boolean
    fiscalia?: boolean
    secretario?: boolean
    dniSecretario?: boolean
    dni?: boolean
    email?: boolean
    emailSecretario?: boolean
    direccion?: boolean
    telefono?: boolean
    telefonoMovil?: boolean
    activo?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscal"]>

  export type FiscalSelectScalar = {
    id?: boolean
    nombre?: boolean
    cargo?: boolean
    fiscalia?: boolean
    secretario?: boolean
    dniSecretario?: boolean
    dni?: boolean
    email?: boolean
    emailSecretario?: boolean
    direccion?: boolean
    telefono?: boolean
    telefonoMovil?: boolean
    activo?: boolean
    createdAt?: boolean
    usuarioId?: boolean
  }

  export type FiscalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FiscalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FiscalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fiscal"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      cargo: string | null
      fiscalia: string | null
      secretario: string | null
      dniSecretario: string | null
      dni: string | null
      email: string | null
      emailSecretario: string | null
      direccion: string | null
      telefono: string | null
      telefonoMovil: string | null
      activo: boolean
      createdAt: Date
      usuarioId: string
    }, ExtArgs["result"]["fiscal"]>
    composites: {}
  }

  type FiscalGetPayload<S extends boolean | null | undefined | FiscalDefaultArgs> = $Result.GetResult<Prisma.$FiscalPayload, S>

  type FiscalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FiscalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FiscalCountAggregateInputType | true
    }

  export interface FiscalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fiscal'], meta: { name: 'Fiscal' } }
    /**
     * Find zero or one Fiscal that matches the filter.
     * @param {FiscalFindUniqueArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiscalFindUniqueArgs>(args: SelectSubset<T, FiscalFindUniqueArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fiscal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FiscalFindUniqueOrThrowArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiscalFindUniqueOrThrowArgs>(args: SelectSubset<T, FiscalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fiscal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalFindFirstArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiscalFindFirstArgs>(args?: SelectSubset<T, FiscalFindFirstArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fiscal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalFindFirstOrThrowArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiscalFindFirstOrThrowArgs>(args?: SelectSubset<T, FiscalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fiscals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fiscals
     * const fiscals = await prisma.fiscal.findMany()
     * 
     * // Get first 10 Fiscals
     * const fiscals = await prisma.fiscal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiscalWithIdOnly = await prisma.fiscal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FiscalFindManyArgs>(args?: SelectSubset<T, FiscalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fiscal.
     * @param {FiscalCreateArgs} args - Arguments to create a Fiscal.
     * @example
     * // Create one Fiscal
     * const Fiscal = await prisma.fiscal.create({
     *   data: {
     *     // ... data to create a Fiscal
     *   }
     * })
     * 
     */
    create<T extends FiscalCreateArgs>(args: SelectSubset<T, FiscalCreateArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fiscals.
     * @param {FiscalCreateManyArgs} args - Arguments to create many Fiscals.
     * @example
     * // Create many Fiscals
     * const fiscal = await prisma.fiscal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiscalCreateManyArgs>(args?: SelectSubset<T, FiscalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fiscals and returns the data saved in the database.
     * @param {FiscalCreateManyAndReturnArgs} args - Arguments to create many Fiscals.
     * @example
     * // Create many Fiscals
     * const fiscal = await prisma.fiscal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fiscals and only return the `id`
     * const fiscalWithIdOnly = await prisma.fiscal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FiscalCreateManyAndReturnArgs>(args?: SelectSubset<T, FiscalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fiscal.
     * @param {FiscalDeleteArgs} args - Arguments to delete one Fiscal.
     * @example
     * // Delete one Fiscal
     * const Fiscal = await prisma.fiscal.delete({
     *   where: {
     *     // ... filter to delete one Fiscal
     *   }
     * })
     * 
     */
    delete<T extends FiscalDeleteArgs>(args: SelectSubset<T, FiscalDeleteArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fiscal.
     * @param {FiscalUpdateArgs} args - Arguments to update one Fiscal.
     * @example
     * // Update one Fiscal
     * const fiscal = await prisma.fiscal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiscalUpdateArgs>(args: SelectSubset<T, FiscalUpdateArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fiscals.
     * @param {FiscalDeleteManyArgs} args - Arguments to filter Fiscals to delete.
     * @example
     * // Delete a few Fiscals
     * const { count } = await prisma.fiscal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiscalDeleteManyArgs>(args?: SelectSubset<T, FiscalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fiscals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fiscals
     * const fiscal = await prisma.fiscal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiscalUpdateManyArgs>(args: SelectSubset<T, FiscalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fiscal.
     * @param {FiscalUpsertArgs} args - Arguments to update or create a Fiscal.
     * @example
     * // Update or create a Fiscal
     * const fiscal = await prisma.fiscal.upsert({
     *   create: {
     *     // ... data to create a Fiscal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fiscal we want to update
     *   }
     * })
     */
    upsert<T extends FiscalUpsertArgs>(args: SelectSubset<T, FiscalUpsertArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fiscals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalCountArgs} args - Arguments to filter Fiscals to count.
     * @example
     * // Count the number of Fiscals
     * const count = await prisma.fiscal.count({
     *   where: {
     *     // ... the filter for the Fiscals we want to count
     *   }
     * })
    **/
    count<T extends FiscalCountArgs>(
      args?: Subset<T, FiscalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiscalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fiscal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiscalAggregateArgs>(args: Subset<T, FiscalAggregateArgs>): Prisma.PrismaPromise<GetFiscalAggregateType<T>>

    /**
     * Group by Fiscal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalGroupByArgs} args - Group by arguments.
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
      T extends FiscalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiscalGroupByArgs['orderBy'] }
        : { orderBy?: FiscalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiscalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiscalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fiscal model
   */
  readonly fields: FiscalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fiscal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiscalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Fiscal model
   */ 
  interface FiscalFieldRefs {
    readonly id: FieldRef<"Fiscal", 'String'>
    readonly nombre: FieldRef<"Fiscal", 'String'>
    readonly cargo: FieldRef<"Fiscal", 'String'>
    readonly fiscalia: FieldRef<"Fiscal", 'String'>
    readonly secretario: FieldRef<"Fiscal", 'String'>
    readonly dniSecretario: FieldRef<"Fiscal", 'String'>
    readonly dni: FieldRef<"Fiscal", 'String'>
    readonly email: FieldRef<"Fiscal", 'String'>
    readonly emailSecretario: FieldRef<"Fiscal", 'String'>
    readonly direccion: FieldRef<"Fiscal", 'String'>
    readonly telefono: FieldRef<"Fiscal", 'String'>
    readonly telefonoMovil: FieldRef<"Fiscal", 'String'>
    readonly activo: FieldRef<"Fiscal", 'Boolean'>
    readonly createdAt: FieldRef<"Fiscal", 'DateTime'>
    readonly usuarioId: FieldRef<"Fiscal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fiscal findUnique
   */
  export type FiscalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal findUniqueOrThrow
   */
  export type FiscalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal findFirst
   */
  export type FiscalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fiscals.
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fiscals.
     */
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Fiscal findFirstOrThrow
   */
  export type FiscalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fiscals.
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fiscals.
     */
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Fiscal findMany
   */
  export type FiscalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscals to fetch.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fiscals.
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Fiscal create
   */
  export type FiscalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * The data needed to create a Fiscal.
     */
    data: XOR<FiscalCreateInput, FiscalUncheckedCreateInput>
  }

  /**
   * Fiscal createMany
   */
  export type FiscalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fiscals.
     */
    data: FiscalCreateManyInput | FiscalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fiscal createManyAndReturn
   */
  export type FiscalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Fiscals.
     */
    data: FiscalCreateManyInput | FiscalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fiscal update
   */
  export type FiscalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * The data needed to update a Fiscal.
     */
    data: XOR<FiscalUpdateInput, FiscalUncheckedUpdateInput>
    /**
     * Choose, which Fiscal to update.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal updateMany
   */
  export type FiscalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fiscals.
     */
    data: XOR<FiscalUpdateManyMutationInput, FiscalUncheckedUpdateManyInput>
    /**
     * Filter which Fiscals to update
     */
    where?: FiscalWhereInput
  }

  /**
   * Fiscal upsert
   */
  export type FiscalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * The filter to search for the Fiscal to update in case it exists.
     */
    where: FiscalWhereUniqueInput
    /**
     * In case the Fiscal found by the `where` argument doesn't exist, create a new Fiscal with this data.
     */
    create: XOR<FiscalCreateInput, FiscalUncheckedCreateInput>
    /**
     * In case the Fiscal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiscalUpdateInput, FiscalUncheckedUpdateInput>
  }

  /**
   * Fiscal delete
   */
  export type FiscalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter which Fiscal to delete.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal deleteMany
   */
  export type FiscalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fiscals to delete
     */
    where?: FiscalWhereInput
  }

  /**
   * Fiscal without action
   */
  export type FiscalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
  }


  /**
   * Model Configuracion
   */

  export type AggregateConfiguracion = {
    _count: ConfiguracionCountAggregateOutputType | null
    _avg: ConfiguracionAvgAggregateOutputType | null
    _sum: ConfiguracionSumAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  export type ConfiguracionAvgAggregateOutputType = {
    diasAlertaMedia: number | null
    diasAlertaAlta: number | null
    diasAlertaCritica: number | null
  }

  export type ConfiguracionSumAggregateOutputType = {
    diasAlertaMedia: number | null
    diasAlertaAlta: number | null
    diasAlertaCritica: number | null
  }

  export type ConfiguracionMinAggregateOutputType = {
    id: string | null
    emailRespuesta: string | null
    diasAlertaMedia: number | null
    diasAlertaAlta: number | null
    diasAlertaCritica: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracionMaxAggregateOutputType = {
    id: string | null
    emailRespuesta: string | null
    diasAlertaMedia: number | null
    diasAlertaAlta: number | null
    diasAlertaCritica: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracionCountAggregateOutputType = {
    id: number
    emailRespuesta: number
    diasAlertaMedia: number
    diasAlertaAlta: number
    diasAlertaCritica: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracionAvgAggregateInputType = {
    diasAlertaMedia?: true
    diasAlertaAlta?: true
    diasAlertaCritica?: true
  }

  export type ConfiguracionSumAggregateInputType = {
    diasAlertaMedia?: true
    diasAlertaAlta?: true
    diasAlertaCritica?: true
  }

  export type ConfiguracionMinAggregateInputType = {
    id?: true
    emailRespuesta?: true
    diasAlertaMedia?: true
    diasAlertaAlta?: true
    diasAlertaCritica?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracionMaxAggregateInputType = {
    id?: true
    emailRespuesta?: true
    diasAlertaMedia?: true
    diasAlertaAlta?: true
    diasAlertaCritica?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracionCountAggregateInputType = {
    id?: true
    emailRespuesta?: true
    diasAlertaMedia?: true
    diasAlertaAlta?: true
    diasAlertaCritica?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracion to aggregate.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configuracions
    **/
    _count?: true | ConfiguracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type GetConfiguracionAggregateType<T extends ConfiguracionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion[P]>
      : GetScalarType<T[P], AggregateConfiguracion[P]>
  }




  export type ConfiguracionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracionWhereInput
    orderBy?: ConfiguracionOrderByWithAggregationInput | ConfiguracionOrderByWithAggregationInput[]
    by: ConfiguracionScalarFieldEnum[] | ConfiguracionScalarFieldEnum
    having?: ConfiguracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionCountAggregateInputType | true
    _avg?: ConfiguracionAvgAggregateInputType
    _sum?: ConfiguracionSumAggregateInputType
    _min?: ConfiguracionMinAggregateInputType
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type ConfiguracionGroupByOutputType = {
    id: string
    emailRespuesta: string
    diasAlertaMedia: number
    diasAlertaAlta: number
    diasAlertaCritica: number
    createdAt: Date
    updatedAt: Date
    _count: ConfiguracionCountAggregateOutputType | null
    _avg: ConfiguracionAvgAggregateOutputType | null
    _sum: ConfiguracionSumAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  type GetConfiguracionGroupByPayload<T extends ConfiguracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailRespuesta?: boolean
    diasAlertaMedia?: boolean
    diasAlertaAlta?: boolean
    diasAlertaCritica?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracion"]>

  export type ConfiguracionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailRespuesta?: boolean
    diasAlertaMedia?: boolean
    diasAlertaAlta?: boolean
    diasAlertaCritica?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracion"]>

  export type ConfiguracionSelectScalar = {
    id?: boolean
    emailRespuesta?: boolean
    diasAlertaMedia?: boolean
    diasAlertaAlta?: boolean
    diasAlertaCritica?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ConfiguracionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuracion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emailRespuesta: string
      diasAlertaMedia: number
      diasAlertaAlta: number
      diasAlertaCritica: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["configuracion"]>
    composites: {}
  }

  type ConfiguracionGetPayload<S extends boolean | null | undefined | ConfiguracionDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracionPayload, S>

  type ConfiguracionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConfiguracionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConfiguracionCountAggregateInputType | true
    }

  export interface ConfiguracionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuracion'], meta: { name: 'Configuracion' } }
    /**
     * Find zero or one Configuracion that matches the filter.
     * @param {ConfiguracionFindUniqueArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracionFindUniqueArgs>(args: SelectSubset<T, ConfiguracionFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Configuracion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConfiguracionFindUniqueOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Configuracion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionFindFirstArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracionFindFirstArgs>(args?: SelectSubset<T, ConfiguracionFindFirstArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Configuracion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionFindFirstOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Configuracions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracions
     * const configuracions = await prisma.configuracion.findMany()
     * 
     * // Get first 10 Configuracions
     * const configuracions = await prisma.configuracion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracionFindManyArgs>(args?: SelectSubset<T, ConfiguracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Configuracion.
     * @param {ConfiguracionCreateArgs} args - Arguments to create a Configuracion.
     * @example
     * // Create one Configuracion
     * const Configuracion = await prisma.configuracion.create({
     *   data: {
     *     // ... data to create a Configuracion
     *   }
     * })
     * 
     */
    create<T extends ConfiguracionCreateArgs>(args: SelectSubset<T, ConfiguracionCreateArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Configuracions.
     * @param {ConfiguracionCreateManyArgs} args - Arguments to create many Configuracions.
     * @example
     * // Create many Configuracions
     * const configuracion = await prisma.configuracion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracionCreateManyArgs>(args?: SelectSubset<T, ConfiguracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracions and returns the data saved in the database.
     * @param {ConfiguracionCreateManyAndReturnArgs} args - Arguments to create many Configuracions.
     * @example
     * // Create many Configuracions
     * const configuracion = await prisma.configuracion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracions and only return the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Configuracion.
     * @param {ConfiguracionDeleteArgs} args - Arguments to delete one Configuracion.
     * @example
     * // Delete one Configuracion
     * const Configuracion = await prisma.configuracion.delete({
     *   where: {
     *     // ... filter to delete one Configuracion
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracionDeleteArgs>(args: SelectSubset<T, ConfiguracionDeleteArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Configuracion.
     * @param {ConfiguracionUpdateArgs} args - Arguments to update one Configuracion.
     * @example
     * // Update one Configuracion
     * const configuracion = await prisma.configuracion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracionUpdateArgs>(args: SelectSubset<T, ConfiguracionUpdateArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Configuracions.
     * @param {ConfiguracionDeleteManyArgs} args - Arguments to filter Configuracions to delete.
     * @example
     * // Delete a few Configuracions
     * const { count } = await prisma.configuracion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracionDeleteManyArgs>(args?: SelectSubset<T, ConfiguracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracions
     * const configuracion = await prisma.configuracion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracionUpdateManyArgs>(args: SelectSubset<T, ConfiguracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuracion.
     * @param {ConfiguracionUpsertArgs} args - Arguments to update or create a Configuracion.
     * @example
     * // Update or create a Configuracion
     * const configuracion = await prisma.configuracion.upsert({
     *   create: {
     *     // ... data to create a Configuracion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracionUpsertArgs>(args: SelectSubset<T, ConfiguracionUpsertArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionCountArgs} args - Arguments to filter Configuracions to count.
     * @example
     * // Count the number of Configuracions
     * const count = await prisma.configuracion.count({
     *   where: {
     *     // ... the filter for the Configuracions we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracionCountArgs>(
      args?: Subset<T, ConfiguracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracionAggregateArgs>(args: Subset<T, ConfiguracionAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionAggregateType<T>>

    /**
     * Group by Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionGroupByArgs} args - Group by arguments.
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
      T extends ConfiguracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracionGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfiguracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuracion model
   */
  readonly fields: ConfiguracionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuracion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Configuracion model
   */ 
  interface ConfiguracionFieldRefs {
    readonly id: FieldRef<"Configuracion", 'String'>
    readonly emailRespuesta: FieldRef<"Configuracion", 'String'>
    readonly diasAlertaMedia: FieldRef<"Configuracion", 'Int'>
    readonly diasAlertaAlta: FieldRef<"Configuracion", 'Int'>
    readonly diasAlertaCritica: FieldRef<"Configuracion", 'Int'>
    readonly createdAt: FieldRef<"Configuracion", 'DateTime'>
    readonly updatedAt: FieldRef<"Configuracion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuracion findUnique
   */
  export type ConfiguracionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion findUniqueOrThrow
   */
  export type ConfiguracionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion findFirst
   */
  export type ConfiguracionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracions.
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracions.
     */
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * Configuracion findFirstOrThrow
   */
  export type ConfiguracionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracions.
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracions.
     */
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * Configuracion findMany
   */
  export type ConfiguracionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Filter, which Configuracions to fetch.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configuracions.
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * Configuracion create
   */
  export type ConfiguracionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * The data needed to create a Configuracion.
     */
    data: XOR<ConfiguracionCreateInput, ConfiguracionUncheckedCreateInput>
  }

  /**
   * Configuracion createMany
   */
  export type ConfiguracionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configuracions.
     */
    data: ConfiguracionCreateManyInput | ConfiguracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracion createManyAndReturn
   */
  export type ConfiguracionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Configuracions.
     */
    data: ConfiguracionCreateManyInput | ConfiguracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracion update
   */
  export type ConfiguracionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * The data needed to update a Configuracion.
     */
    data: XOR<ConfiguracionUpdateInput, ConfiguracionUncheckedUpdateInput>
    /**
     * Choose, which Configuracion to update.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion updateMany
   */
  export type ConfiguracionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configuracions.
     */
    data: XOR<ConfiguracionUpdateManyMutationInput, ConfiguracionUncheckedUpdateManyInput>
    /**
     * Filter which Configuracions to update
     */
    where?: ConfiguracionWhereInput
  }

  /**
   * Configuracion upsert
   */
  export type ConfiguracionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * The filter to search for the Configuracion to update in case it exists.
     */
    where: ConfiguracionWhereUniqueInput
    /**
     * In case the Configuracion found by the `where` argument doesn't exist, create a new Configuracion with this data.
     */
    create: XOR<ConfiguracionCreateInput, ConfiguracionUncheckedCreateInput>
    /**
     * In case the Configuracion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracionUpdateInput, ConfiguracionUncheckedUpdateInput>
  }

  /**
   * Configuracion delete
   */
  export type ConfiguracionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Filter which Configuracion to delete.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion deleteMany
   */
  export type ConfiguracionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracions to delete
     */
    where?: ConfiguracionWhereInput
  }

  /**
   * Configuracion without action
   */
  export type ConfiguracionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
  }


  /**
   * Model RegistroTelefonia
   */

  export type AggregateRegistroTelefonia = {
    _count: RegistroTelefoniaCountAggregateOutputType | null
    _avg: RegistroTelefoniaAvgAggregateOutputType | null
    _sum: RegistroTelefoniaSumAggregateOutputType | null
    _min: RegistroTelefoniaMinAggregateOutputType | null
    _max: RegistroTelefoniaMaxAggregateOutputType | null
  }

  export type RegistroTelefoniaAvgAggregateOutputType = {
    anio: number | null
    nroInterno: number | null
  }

  export type RegistroTelefoniaSumAggregateOutputType = {
    anio: number | null
    nroInterno: number | null
  }

  export type RegistroTelefoniaMinAggregateOutputType = {
    id: string | null
    anio: number | null
    nroLegajo: string | null
    nroInterno: number | null
    cuij: string | null
    fechaHecho: Date | null
    fechaIngreso: Date | null
    lugarHecho: string | null
    barrio: string | null
    victima: string | null
    causa: string | null
    aparato: string | null
    empresa: string | null
    abonado: string | null
    imei: string | null
    color: string | null
    correo: string | null
    clave: string | null
    fiscal: string | null
    depOrigen: string | null
    nroCom: string | null
    rpiComisaria: string | null
    rpiCompleja: string | null
    observaciones: string | null
    estadoLegajo: string | null
    elevaciones: string | null
    imputados: string | null
    requisa: string | null
    procedimientos: string | null
    asignadoA: string | null
    visto: boolean | null
    createdAt: Date | null
  }

  export type RegistroTelefoniaMaxAggregateOutputType = {
    id: string | null
    anio: number | null
    nroLegajo: string | null
    nroInterno: number | null
    cuij: string | null
    fechaHecho: Date | null
    fechaIngreso: Date | null
    lugarHecho: string | null
    barrio: string | null
    victima: string | null
    causa: string | null
    aparato: string | null
    empresa: string | null
    abonado: string | null
    imei: string | null
    color: string | null
    correo: string | null
    clave: string | null
    fiscal: string | null
    depOrigen: string | null
    nroCom: string | null
    rpiComisaria: string | null
    rpiCompleja: string | null
    observaciones: string | null
    estadoLegajo: string | null
    elevaciones: string | null
    imputados: string | null
    requisa: string | null
    procedimientos: string | null
    asignadoA: string | null
    visto: boolean | null
    createdAt: Date | null
  }

  export type RegistroTelefoniaCountAggregateOutputType = {
    id: number
    anio: number
    nroLegajo: number
    nroInterno: number
    cuij: number
    fechaHecho: number
    fechaIngreso: number
    lugarHecho: number
    barrio: number
    victima: number
    causa: number
    aparato: number
    empresa: number
    abonado: number
    imei: number
    color: number
    correo: number
    clave: number
    fiscal: number
    depOrigen: number
    nroCom: number
    rpiComisaria: number
    rpiCompleja: number
    observaciones: number
    estadoLegajo: number
    elevaciones: number
    imputados: number
    requisa: number
    procedimientos: number
    asignadoA: number
    visto: number
    createdAt: number
    _all: number
  }


  export type RegistroTelefoniaAvgAggregateInputType = {
    anio?: true
    nroInterno?: true
  }

  export type RegistroTelefoniaSumAggregateInputType = {
    anio?: true
    nroInterno?: true
  }

  export type RegistroTelefoniaMinAggregateInputType = {
    id?: true
    anio?: true
    nroLegajo?: true
    nroInterno?: true
    cuij?: true
    fechaHecho?: true
    fechaIngreso?: true
    lugarHecho?: true
    barrio?: true
    victima?: true
    causa?: true
    aparato?: true
    empresa?: true
    abonado?: true
    imei?: true
    color?: true
    correo?: true
    clave?: true
    fiscal?: true
    depOrigen?: true
    nroCom?: true
    rpiComisaria?: true
    rpiCompleja?: true
    observaciones?: true
    estadoLegajo?: true
    elevaciones?: true
    imputados?: true
    requisa?: true
    procedimientos?: true
    asignadoA?: true
    visto?: true
    createdAt?: true
  }

  export type RegistroTelefoniaMaxAggregateInputType = {
    id?: true
    anio?: true
    nroLegajo?: true
    nroInterno?: true
    cuij?: true
    fechaHecho?: true
    fechaIngreso?: true
    lugarHecho?: true
    barrio?: true
    victima?: true
    causa?: true
    aparato?: true
    empresa?: true
    abonado?: true
    imei?: true
    color?: true
    correo?: true
    clave?: true
    fiscal?: true
    depOrigen?: true
    nroCom?: true
    rpiComisaria?: true
    rpiCompleja?: true
    observaciones?: true
    estadoLegajo?: true
    elevaciones?: true
    imputados?: true
    requisa?: true
    procedimientos?: true
    asignadoA?: true
    visto?: true
    createdAt?: true
  }

  export type RegistroTelefoniaCountAggregateInputType = {
    id?: true
    anio?: true
    nroLegajo?: true
    nroInterno?: true
    cuij?: true
    fechaHecho?: true
    fechaIngreso?: true
    lugarHecho?: true
    barrio?: true
    victima?: true
    causa?: true
    aparato?: true
    empresa?: true
    abonado?: true
    imei?: true
    color?: true
    correo?: true
    clave?: true
    fiscal?: true
    depOrigen?: true
    nroCom?: true
    rpiComisaria?: true
    rpiCompleja?: true
    observaciones?: true
    estadoLegajo?: true
    elevaciones?: true
    imputados?: true
    requisa?: true
    procedimientos?: true
    asignadoA?: true
    visto?: true
    createdAt?: true
    _all?: true
  }

  export type RegistroTelefoniaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTelefonia to aggregate.
     */
    where?: RegistroTelefoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTelefonias to fetch.
     */
    orderBy?: RegistroTelefoniaOrderByWithRelationInput | RegistroTelefoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroTelefoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTelefonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTelefonias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroTelefonias
    **/
    _count?: true | RegistroTelefoniaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroTelefoniaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroTelefoniaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroTelefoniaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroTelefoniaMaxAggregateInputType
  }

  export type GetRegistroTelefoniaAggregateType<T extends RegistroTelefoniaAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroTelefonia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroTelefonia[P]>
      : GetScalarType<T[P], AggregateRegistroTelefonia[P]>
  }




  export type RegistroTelefoniaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroTelefoniaWhereInput
    orderBy?: RegistroTelefoniaOrderByWithAggregationInput | RegistroTelefoniaOrderByWithAggregationInput[]
    by: RegistroTelefoniaScalarFieldEnum[] | RegistroTelefoniaScalarFieldEnum
    having?: RegistroTelefoniaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroTelefoniaCountAggregateInputType | true
    _avg?: RegistroTelefoniaAvgAggregateInputType
    _sum?: RegistroTelefoniaSumAggregateInputType
    _min?: RegistroTelefoniaMinAggregateInputType
    _max?: RegistroTelefoniaMaxAggregateInputType
  }

  export type RegistroTelefoniaGroupByOutputType = {
    id: string
    anio: number | null
    nroLegajo: string | null
    nroInterno: number | null
    cuij: string | null
    fechaHecho: Date | null
    fechaIngreso: Date | null
    lugarHecho: string | null
    barrio: string | null
    victima: string | null
    causa: string | null
    aparato: string | null
    empresa: string | null
    abonado: string | null
    imei: string | null
    color: string | null
    correo: string | null
    clave: string | null
    fiscal: string | null
    depOrigen: string | null
    nroCom: string | null
    rpiComisaria: string | null
    rpiCompleja: string | null
    observaciones: string | null
    estadoLegajo: string | null
    elevaciones: string | null
    imputados: string | null
    requisa: string | null
    procedimientos: string | null
    asignadoA: string | null
    visto: boolean
    createdAt: Date
    _count: RegistroTelefoniaCountAggregateOutputType | null
    _avg: RegistroTelefoniaAvgAggregateOutputType | null
    _sum: RegistroTelefoniaSumAggregateOutputType | null
    _min: RegistroTelefoniaMinAggregateOutputType | null
    _max: RegistroTelefoniaMaxAggregateOutputType | null
  }

  type GetRegistroTelefoniaGroupByPayload<T extends RegistroTelefoniaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroTelefoniaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroTelefoniaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroTelefoniaGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroTelefoniaGroupByOutputType[P]>
        }
      >
    >


  export type RegistroTelefoniaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anio?: boolean
    nroLegajo?: boolean
    nroInterno?: boolean
    cuij?: boolean
    fechaHecho?: boolean
    fechaIngreso?: boolean
    lugarHecho?: boolean
    barrio?: boolean
    victima?: boolean
    causa?: boolean
    aparato?: boolean
    empresa?: boolean
    abonado?: boolean
    imei?: boolean
    color?: boolean
    correo?: boolean
    clave?: boolean
    fiscal?: boolean
    depOrigen?: boolean
    nroCom?: boolean
    rpiComisaria?: boolean
    rpiCompleja?: boolean
    observaciones?: boolean
    estadoLegajo?: boolean
    elevaciones?: boolean
    imputados?: boolean
    requisa?: boolean
    procedimientos?: boolean
    asignadoA?: boolean
    visto?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registroTelefonia"]>

  export type RegistroTelefoniaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anio?: boolean
    nroLegajo?: boolean
    nroInterno?: boolean
    cuij?: boolean
    fechaHecho?: boolean
    fechaIngreso?: boolean
    lugarHecho?: boolean
    barrio?: boolean
    victima?: boolean
    causa?: boolean
    aparato?: boolean
    empresa?: boolean
    abonado?: boolean
    imei?: boolean
    color?: boolean
    correo?: boolean
    clave?: boolean
    fiscal?: boolean
    depOrigen?: boolean
    nroCom?: boolean
    rpiComisaria?: boolean
    rpiCompleja?: boolean
    observaciones?: boolean
    estadoLegajo?: boolean
    elevaciones?: boolean
    imputados?: boolean
    requisa?: boolean
    procedimientos?: boolean
    asignadoA?: boolean
    visto?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registroTelefonia"]>

  export type RegistroTelefoniaSelectScalar = {
    id?: boolean
    anio?: boolean
    nroLegajo?: boolean
    nroInterno?: boolean
    cuij?: boolean
    fechaHecho?: boolean
    fechaIngreso?: boolean
    lugarHecho?: boolean
    barrio?: boolean
    victima?: boolean
    causa?: boolean
    aparato?: boolean
    empresa?: boolean
    abonado?: boolean
    imei?: boolean
    color?: boolean
    correo?: boolean
    clave?: boolean
    fiscal?: boolean
    depOrigen?: boolean
    nroCom?: boolean
    rpiComisaria?: boolean
    rpiCompleja?: boolean
    observaciones?: boolean
    estadoLegajo?: boolean
    elevaciones?: boolean
    imputados?: boolean
    requisa?: boolean
    procedimientos?: boolean
    asignadoA?: boolean
    visto?: boolean
    createdAt?: boolean
  }


  export type $RegistroTelefoniaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroTelefonia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anio: number | null
      nroLegajo: string | null
      nroInterno: number | null
      cuij: string | null
      fechaHecho: Date | null
      fechaIngreso: Date | null
      lugarHecho: string | null
      barrio: string | null
      victima: string | null
      causa: string | null
      aparato: string | null
      empresa: string | null
      abonado: string | null
      imei: string | null
      color: string | null
      correo: string | null
      clave: string | null
      fiscal: string | null
      depOrigen: string | null
      nroCom: string | null
      rpiComisaria: string | null
      rpiCompleja: string | null
      observaciones: string | null
      estadoLegajo: string | null
      elevaciones: string | null
      imputados: string | null
      requisa: string | null
      procedimientos: string | null
      asignadoA: string | null
      visto: boolean
      createdAt: Date
    }, ExtArgs["result"]["registroTelefonia"]>
    composites: {}
  }

  type RegistroTelefoniaGetPayload<S extends boolean | null | undefined | RegistroTelefoniaDefaultArgs> = $Result.GetResult<Prisma.$RegistroTelefoniaPayload, S>

  type RegistroTelefoniaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistroTelefoniaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistroTelefoniaCountAggregateInputType | true
    }

  export interface RegistroTelefoniaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroTelefonia'], meta: { name: 'RegistroTelefonia' } }
    /**
     * Find zero or one RegistroTelefonia that matches the filter.
     * @param {RegistroTelefoniaFindUniqueArgs} args - Arguments to find a RegistroTelefonia
     * @example
     * // Get one RegistroTelefonia
     * const registroTelefonia = await prisma.registroTelefonia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroTelefoniaFindUniqueArgs>(args: SelectSubset<T, RegistroTelefoniaFindUniqueArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RegistroTelefonia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistroTelefoniaFindUniqueOrThrowArgs} args - Arguments to find a RegistroTelefonia
     * @example
     * // Get one RegistroTelefonia
     * const registroTelefonia = await prisma.registroTelefonia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroTelefoniaFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroTelefoniaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RegistroTelefonia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaFindFirstArgs} args - Arguments to find a RegistroTelefonia
     * @example
     * // Get one RegistroTelefonia
     * const registroTelefonia = await prisma.registroTelefonia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroTelefoniaFindFirstArgs>(args?: SelectSubset<T, RegistroTelefoniaFindFirstArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RegistroTelefonia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaFindFirstOrThrowArgs} args - Arguments to find a RegistroTelefonia
     * @example
     * // Get one RegistroTelefonia
     * const registroTelefonia = await prisma.registroTelefonia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroTelefoniaFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroTelefoniaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RegistroTelefonias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroTelefonias
     * const registroTelefonias = await prisma.registroTelefonia.findMany()
     * 
     * // Get first 10 RegistroTelefonias
     * const registroTelefonias = await prisma.registroTelefonia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroTelefoniaWithIdOnly = await prisma.registroTelefonia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroTelefoniaFindManyArgs>(args?: SelectSubset<T, RegistroTelefoniaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RegistroTelefonia.
     * @param {RegistroTelefoniaCreateArgs} args - Arguments to create a RegistroTelefonia.
     * @example
     * // Create one RegistroTelefonia
     * const RegistroTelefonia = await prisma.registroTelefonia.create({
     *   data: {
     *     // ... data to create a RegistroTelefonia
     *   }
     * })
     * 
     */
    create<T extends RegistroTelefoniaCreateArgs>(args: SelectSubset<T, RegistroTelefoniaCreateArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RegistroTelefonias.
     * @param {RegistroTelefoniaCreateManyArgs} args - Arguments to create many RegistroTelefonias.
     * @example
     * // Create many RegistroTelefonias
     * const registroTelefonia = await prisma.registroTelefonia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroTelefoniaCreateManyArgs>(args?: SelectSubset<T, RegistroTelefoniaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroTelefonias and returns the data saved in the database.
     * @param {RegistroTelefoniaCreateManyAndReturnArgs} args - Arguments to create many RegistroTelefonias.
     * @example
     * // Create many RegistroTelefonias
     * const registroTelefonia = await prisma.registroTelefonia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroTelefonias and only return the `id`
     * const registroTelefoniaWithIdOnly = await prisma.registroTelefonia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroTelefoniaCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroTelefoniaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RegistroTelefonia.
     * @param {RegistroTelefoniaDeleteArgs} args - Arguments to delete one RegistroTelefonia.
     * @example
     * // Delete one RegistroTelefonia
     * const RegistroTelefonia = await prisma.registroTelefonia.delete({
     *   where: {
     *     // ... filter to delete one RegistroTelefonia
     *   }
     * })
     * 
     */
    delete<T extends RegistroTelefoniaDeleteArgs>(args: SelectSubset<T, RegistroTelefoniaDeleteArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RegistroTelefonia.
     * @param {RegistroTelefoniaUpdateArgs} args - Arguments to update one RegistroTelefonia.
     * @example
     * // Update one RegistroTelefonia
     * const registroTelefonia = await prisma.registroTelefonia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroTelefoniaUpdateArgs>(args: SelectSubset<T, RegistroTelefoniaUpdateArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RegistroTelefonias.
     * @param {RegistroTelefoniaDeleteManyArgs} args - Arguments to filter RegistroTelefonias to delete.
     * @example
     * // Delete a few RegistroTelefonias
     * const { count } = await prisma.registroTelefonia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroTelefoniaDeleteManyArgs>(args?: SelectSubset<T, RegistroTelefoniaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTelefonias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroTelefonias
     * const registroTelefonia = await prisma.registroTelefonia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroTelefoniaUpdateManyArgs>(args: SelectSubset<T, RegistroTelefoniaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistroTelefonia.
     * @param {RegistroTelefoniaUpsertArgs} args - Arguments to update or create a RegistroTelefonia.
     * @example
     * // Update or create a RegistroTelefonia
     * const registroTelefonia = await prisma.registroTelefonia.upsert({
     *   create: {
     *     // ... data to create a RegistroTelefonia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroTelefonia we want to update
     *   }
     * })
     */
    upsert<T extends RegistroTelefoniaUpsertArgs>(args: SelectSubset<T, RegistroTelefoniaUpsertArgs<ExtArgs>>): Prisma__RegistroTelefoniaClient<$Result.GetResult<Prisma.$RegistroTelefoniaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RegistroTelefonias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaCountArgs} args - Arguments to filter RegistroTelefonias to count.
     * @example
     * // Count the number of RegistroTelefonias
     * const count = await prisma.registroTelefonia.count({
     *   where: {
     *     // ... the filter for the RegistroTelefonias we want to count
     *   }
     * })
    **/
    count<T extends RegistroTelefoniaCountArgs>(
      args?: Subset<T, RegistroTelefoniaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroTelefoniaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroTelefonia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroTelefoniaAggregateArgs>(args: Subset<T, RegistroTelefoniaAggregateArgs>): Prisma.PrismaPromise<GetRegistroTelefoniaAggregateType<T>>

    /**
     * Group by RegistroTelefonia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTelefoniaGroupByArgs} args - Group by arguments.
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
      T extends RegistroTelefoniaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroTelefoniaGroupByArgs['orderBy'] }
        : { orderBy?: RegistroTelefoniaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroTelefoniaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroTelefoniaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroTelefonia model
   */
  readonly fields: RegistroTelefoniaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroTelefonia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroTelefoniaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RegistroTelefonia model
   */ 
  interface RegistroTelefoniaFieldRefs {
    readonly id: FieldRef<"RegistroTelefonia", 'String'>
    readonly anio: FieldRef<"RegistroTelefonia", 'Int'>
    readonly nroLegajo: FieldRef<"RegistroTelefonia", 'String'>
    readonly nroInterno: FieldRef<"RegistroTelefonia", 'Int'>
    readonly cuij: FieldRef<"RegistroTelefonia", 'String'>
    readonly fechaHecho: FieldRef<"RegistroTelefonia", 'DateTime'>
    readonly fechaIngreso: FieldRef<"RegistroTelefonia", 'DateTime'>
    readonly lugarHecho: FieldRef<"RegistroTelefonia", 'String'>
    readonly barrio: FieldRef<"RegistroTelefonia", 'String'>
    readonly victima: FieldRef<"RegistroTelefonia", 'String'>
    readonly causa: FieldRef<"RegistroTelefonia", 'String'>
    readonly aparato: FieldRef<"RegistroTelefonia", 'String'>
    readonly empresa: FieldRef<"RegistroTelefonia", 'String'>
    readonly abonado: FieldRef<"RegistroTelefonia", 'String'>
    readonly imei: FieldRef<"RegistroTelefonia", 'String'>
    readonly color: FieldRef<"RegistroTelefonia", 'String'>
    readonly correo: FieldRef<"RegistroTelefonia", 'String'>
    readonly clave: FieldRef<"RegistroTelefonia", 'String'>
    readonly fiscal: FieldRef<"RegistroTelefonia", 'String'>
    readonly depOrigen: FieldRef<"RegistroTelefonia", 'String'>
    readonly nroCom: FieldRef<"RegistroTelefonia", 'String'>
    readonly rpiComisaria: FieldRef<"RegistroTelefonia", 'String'>
    readonly rpiCompleja: FieldRef<"RegistroTelefonia", 'String'>
    readonly observaciones: FieldRef<"RegistroTelefonia", 'String'>
    readonly estadoLegajo: FieldRef<"RegistroTelefonia", 'String'>
    readonly elevaciones: FieldRef<"RegistroTelefonia", 'String'>
    readonly imputados: FieldRef<"RegistroTelefonia", 'String'>
    readonly requisa: FieldRef<"RegistroTelefonia", 'String'>
    readonly procedimientos: FieldRef<"RegistroTelefonia", 'String'>
    readonly asignadoA: FieldRef<"RegistroTelefonia", 'String'>
    readonly visto: FieldRef<"RegistroTelefonia", 'Boolean'>
    readonly createdAt: FieldRef<"RegistroTelefonia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroTelefonia findUnique
   */
  export type RegistroTelefoniaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroTelefonia to fetch.
     */
    where: RegistroTelefoniaWhereUniqueInput
  }

  /**
   * RegistroTelefonia findUniqueOrThrow
   */
  export type RegistroTelefoniaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroTelefonia to fetch.
     */
    where: RegistroTelefoniaWhereUniqueInput
  }

  /**
   * RegistroTelefonia findFirst
   */
  export type RegistroTelefoniaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroTelefonia to fetch.
     */
    where?: RegistroTelefoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTelefonias to fetch.
     */
    orderBy?: RegistroTelefoniaOrderByWithRelationInput | RegistroTelefoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTelefonias.
     */
    cursor?: RegistroTelefoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTelefonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTelefonias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTelefonias.
     */
    distinct?: RegistroTelefoniaScalarFieldEnum | RegistroTelefoniaScalarFieldEnum[]
  }

  /**
   * RegistroTelefonia findFirstOrThrow
   */
  export type RegistroTelefoniaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroTelefonia to fetch.
     */
    where?: RegistroTelefoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTelefonias to fetch.
     */
    orderBy?: RegistroTelefoniaOrderByWithRelationInput | RegistroTelefoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTelefonias.
     */
    cursor?: RegistroTelefoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTelefonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTelefonias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTelefonias.
     */
    distinct?: RegistroTelefoniaScalarFieldEnum | RegistroTelefoniaScalarFieldEnum[]
  }

  /**
   * RegistroTelefonia findMany
   */
  export type RegistroTelefoniaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroTelefonias to fetch.
     */
    where?: RegistroTelefoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTelefonias to fetch.
     */
    orderBy?: RegistroTelefoniaOrderByWithRelationInput | RegistroTelefoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroTelefonias.
     */
    cursor?: RegistroTelefoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTelefonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTelefonias.
     */
    skip?: number
    distinct?: RegistroTelefoniaScalarFieldEnum | RegistroTelefoniaScalarFieldEnum[]
  }

  /**
   * RegistroTelefonia create
   */
  export type RegistroTelefoniaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * The data needed to create a RegistroTelefonia.
     */
    data?: XOR<RegistroTelefoniaCreateInput, RegistroTelefoniaUncheckedCreateInput>
  }

  /**
   * RegistroTelefonia createMany
   */
  export type RegistroTelefoniaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroTelefonias.
     */
    data: RegistroTelefoniaCreateManyInput | RegistroTelefoniaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTelefonia createManyAndReturn
   */
  export type RegistroTelefoniaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RegistroTelefonias.
     */
    data: RegistroTelefoniaCreateManyInput | RegistroTelefoniaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTelefonia update
   */
  export type RegistroTelefoniaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * The data needed to update a RegistroTelefonia.
     */
    data: XOR<RegistroTelefoniaUpdateInput, RegistroTelefoniaUncheckedUpdateInput>
    /**
     * Choose, which RegistroTelefonia to update.
     */
    where: RegistroTelefoniaWhereUniqueInput
  }

  /**
   * RegistroTelefonia updateMany
   */
  export type RegistroTelefoniaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroTelefonias.
     */
    data: XOR<RegistroTelefoniaUpdateManyMutationInput, RegistroTelefoniaUncheckedUpdateManyInput>
    /**
     * Filter which RegistroTelefonias to update
     */
    where?: RegistroTelefoniaWhereInput
  }

  /**
   * RegistroTelefonia upsert
   */
  export type RegistroTelefoniaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * The filter to search for the RegistroTelefonia to update in case it exists.
     */
    where: RegistroTelefoniaWhereUniqueInput
    /**
     * In case the RegistroTelefonia found by the `where` argument doesn't exist, create a new RegistroTelefonia with this data.
     */
    create: XOR<RegistroTelefoniaCreateInput, RegistroTelefoniaUncheckedCreateInput>
    /**
     * In case the RegistroTelefonia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroTelefoniaUpdateInput, RegistroTelefoniaUncheckedUpdateInput>
  }

  /**
   * RegistroTelefonia delete
   */
  export type RegistroTelefoniaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
    /**
     * Filter which RegistroTelefonia to delete.
     */
    where: RegistroTelefoniaWhereUniqueInput
  }

  /**
   * RegistroTelefonia deleteMany
   */
  export type RegistroTelefoniaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTelefonias to delete
     */
    where?: RegistroTelefoniaWhereInput
  }

  /**
   * RegistroTelefonia without action
   */
  export type RegistroTelefoniaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTelefonia
     */
    select?: RegistroTelefoniaSelect<ExtArgs> | null
  }


  /**
   * Model RegistroEstafa
   */

  export type AggregateRegistroEstafa = {
    _count: RegistroEstafaCountAggregateOutputType | null
    _avg: RegistroEstafaAvgAggregateOutputType | null
    _sum: RegistroEstafaSumAggregateOutputType | null
    _min: RegistroEstafaMinAggregateOutputType | null
    _max: RegistroEstafaMaxAggregateOutputType | null
  }

  export type RegistroEstafaAvgAggregateOutputType = {
    nroInterno: number | null
    filaExcel: number | null
  }

  export type RegistroEstafaSumAggregateOutputType = {
    nroInterno: number | null
    filaExcel: number | null
  }

  export type RegistroEstafaMinAggregateOutputType = {
    id: string | null
    nroInterno: number | null
    cuij: string | null
    fechaHecho: Date | null
    fechaDenuncia: Date | null
    dependencia: string | null
    nroLegajo: string | null
    recibido: Date | null
    victima: string | null
    telefonoVictima: string | null
    caratula: string | null
    fiscal: string | null
    ardid: string | null
    seudonimo: string | null
    telefonoReferencia: string | null
    nombreReferencia: string | null
    imei: string | null
    otrosTelefonos: string | null
    cbu: string | null
    titulares: string | null
    filaExcel: number | null
    otrosCbu: string | null
    estadoLegajo: string | null
    complementos: string | null
    asignadoA: string | null
    visto: boolean | null
    createdAt: Date | null
  }

  export type RegistroEstafaMaxAggregateOutputType = {
    id: string | null
    nroInterno: number | null
    cuij: string | null
    fechaHecho: Date | null
    fechaDenuncia: Date | null
    dependencia: string | null
    nroLegajo: string | null
    recibido: Date | null
    victima: string | null
    telefonoVictima: string | null
    caratula: string | null
    fiscal: string | null
    ardid: string | null
    seudonimo: string | null
    telefonoReferencia: string | null
    nombreReferencia: string | null
    imei: string | null
    otrosTelefonos: string | null
    cbu: string | null
    titulares: string | null
    filaExcel: number | null
    otrosCbu: string | null
    estadoLegajo: string | null
    complementos: string | null
    asignadoA: string | null
    visto: boolean | null
    createdAt: Date | null
  }

  export type RegistroEstafaCountAggregateOutputType = {
    id: number
    nroInterno: number
    cuij: number
    fechaHecho: number
    fechaDenuncia: number
    dependencia: number
    nroLegajo: number
    recibido: number
    victima: number
    telefonoVictima: number
    caratula: number
    fiscal: number
    ardid: number
    seudonimo: number
    telefonoReferencia: number
    nombreReferencia: number
    imei: number
    otrosTelefonos: number
    cbu: number
    titulares: number
    filaExcel: number
    otrosCbu: number
    estadoLegajo: number
    complementos: number
    asignadoA: number
    visto: number
    createdAt: number
    _all: number
  }


  export type RegistroEstafaAvgAggregateInputType = {
    nroInterno?: true
    filaExcel?: true
  }

  export type RegistroEstafaSumAggregateInputType = {
    nroInterno?: true
    filaExcel?: true
  }

  export type RegistroEstafaMinAggregateInputType = {
    id?: true
    nroInterno?: true
    cuij?: true
    fechaHecho?: true
    fechaDenuncia?: true
    dependencia?: true
    nroLegajo?: true
    recibido?: true
    victima?: true
    telefonoVictima?: true
    caratula?: true
    fiscal?: true
    ardid?: true
    seudonimo?: true
    telefonoReferencia?: true
    nombreReferencia?: true
    imei?: true
    otrosTelefonos?: true
    cbu?: true
    titulares?: true
    filaExcel?: true
    otrosCbu?: true
    estadoLegajo?: true
    complementos?: true
    asignadoA?: true
    visto?: true
    createdAt?: true
  }

  export type RegistroEstafaMaxAggregateInputType = {
    id?: true
    nroInterno?: true
    cuij?: true
    fechaHecho?: true
    fechaDenuncia?: true
    dependencia?: true
    nroLegajo?: true
    recibido?: true
    victima?: true
    telefonoVictima?: true
    caratula?: true
    fiscal?: true
    ardid?: true
    seudonimo?: true
    telefonoReferencia?: true
    nombreReferencia?: true
    imei?: true
    otrosTelefonos?: true
    cbu?: true
    titulares?: true
    filaExcel?: true
    otrosCbu?: true
    estadoLegajo?: true
    complementos?: true
    asignadoA?: true
    visto?: true
    createdAt?: true
  }

  export type RegistroEstafaCountAggregateInputType = {
    id?: true
    nroInterno?: true
    cuij?: true
    fechaHecho?: true
    fechaDenuncia?: true
    dependencia?: true
    nroLegajo?: true
    recibido?: true
    victima?: true
    telefonoVictima?: true
    caratula?: true
    fiscal?: true
    ardid?: true
    seudonimo?: true
    telefonoReferencia?: true
    nombreReferencia?: true
    imei?: true
    otrosTelefonos?: true
    cbu?: true
    titulares?: true
    filaExcel?: true
    otrosCbu?: true
    estadoLegajo?: true
    complementos?: true
    asignadoA?: true
    visto?: true
    createdAt?: true
    _all?: true
  }

  export type RegistroEstafaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroEstafa to aggregate.
     */
    where?: RegistroEstafaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEstafas to fetch.
     */
    orderBy?: RegistroEstafaOrderByWithRelationInput | RegistroEstafaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroEstafaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEstafas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEstafas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroEstafas
    **/
    _count?: true | RegistroEstafaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroEstafaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroEstafaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroEstafaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroEstafaMaxAggregateInputType
  }

  export type GetRegistroEstafaAggregateType<T extends RegistroEstafaAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroEstafa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroEstafa[P]>
      : GetScalarType<T[P], AggregateRegistroEstafa[P]>
  }




  export type RegistroEstafaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroEstafaWhereInput
    orderBy?: RegistroEstafaOrderByWithAggregationInput | RegistroEstafaOrderByWithAggregationInput[]
    by: RegistroEstafaScalarFieldEnum[] | RegistroEstafaScalarFieldEnum
    having?: RegistroEstafaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroEstafaCountAggregateInputType | true
    _avg?: RegistroEstafaAvgAggregateInputType
    _sum?: RegistroEstafaSumAggregateInputType
    _min?: RegistroEstafaMinAggregateInputType
    _max?: RegistroEstafaMaxAggregateInputType
  }

  export type RegistroEstafaGroupByOutputType = {
    id: string
    nroInterno: number | null
    cuij: string | null
    fechaHecho: Date | null
    fechaDenuncia: Date | null
    dependencia: string | null
    nroLegajo: string | null
    recibido: Date | null
    victima: string | null
    telefonoVictima: string | null
    caratula: string | null
    fiscal: string | null
    ardid: string | null
    seudonimo: string | null
    telefonoReferencia: string | null
    nombreReferencia: string | null
    imei: string | null
    otrosTelefonos: string | null
    cbu: string | null
    titulares: string | null
    filaExcel: number | null
    otrosCbu: string | null
    estadoLegajo: string | null
    complementos: string | null
    asignadoA: string | null
    visto: boolean
    createdAt: Date
    _count: RegistroEstafaCountAggregateOutputType | null
    _avg: RegistroEstafaAvgAggregateOutputType | null
    _sum: RegistroEstafaSumAggregateOutputType | null
    _min: RegistroEstafaMinAggregateOutputType | null
    _max: RegistroEstafaMaxAggregateOutputType | null
  }

  type GetRegistroEstafaGroupByPayload<T extends RegistroEstafaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroEstafaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroEstafaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroEstafaGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroEstafaGroupByOutputType[P]>
        }
      >
    >


  export type RegistroEstafaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nroInterno?: boolean
    cuij?: boolean
    fechaHecho?: boolean
    fechaDenuncia?: boolean
    dependencia?: boolean
    nroLegajo?: boolean
    recibido?: boolean
    victima?: boolean
    telefonoVictima?: boolean
    caratula?: boolean
    fiscal?: boolean
    ardid?: boolean
    seudonimo?: boolean
    telefonoReferencia?: boolean
    nombreReferencia?: boolean
    imei?: boolean
    otrosTelefonos?: boolean
    cbu?: boolean
    titulares?: boolean
    filaExcel?: boolean
    otrosCbu?: boolean
    estadoLegajo?: boolean
    complementos?: boolean
    asignadoA?: boolean
    visto?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registroEstafa"]>

  export type RegistroEstafaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nroInterno?: boolean
    cuij?: boolean
    fechaHecho?: boolean
    fechaDenuncia?: boolean
    dependencia?: boolean
    nroLegajo?: boolean
    recibido?: boolean
    victima?: boolean
    telefonoVictima?: boolean
    caratula?: boolean
    fiscal?: boolean
    ardid?: boolean
    seudonimo?: boolean
    telefonoReferencia?: boolean
    nombreReferencia?: boolean
    imei?: boolean
    otrosTelefonos?: boolean
    cbu?: boolean
    titulares?: boolean
    filaExcel?: boolean
    otrosCbu?: boolean
    estadoLegajo?: boolean
    complementos?: boolean
    asignadoA?: boolean
    visto?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registroEstafa"]>

  export type RegistroEstafaSelectScalar = {
    id?: boolean
    nroInterno?: boolean
    cuij?: boolean
    fechaHecho?: boolean
    fechaDenuncia?: boolean
    dependencia?: boolean
    nroLegajo?: boolean
    recibido?: boolean
    victima?: boolean
    telefonoVictima?: boolean
    caratula?: boolean
    fiscal?: boolean
    ardid?: boolean
    seudonimo?: boolean
    telefonoReferencia?: boolean
    nombreReferencia?: boolean
    imei?: boolean
    otrosTelefonos?: boolean
    cbu?: boolean
    titulares?: boolean
    filaExcel?: boolean
    otrosCbu?: boolean
    estadoLegajo?: boolean
    complementos?: boolean
    asignadoA?: boolean
    visto?: boolean
    createdAt?: boolean
  }


  export type $RegistroEstafaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroEstafa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nroInterno: number | null
      cuij: string | null
      fechaHecho: Date | null
      fechaDenuncia: Date | null
      dependencia: string | null
      nroLegajo: string | null
      recibido: Date | null
      victima: string | null
      telefonoVictima: string | null
      caratula: string | null
      fiscal: string | null
      ardid: string | null
      seudonimo: string | null
      telefonoReferencia: string | null
      nombreReferencia: string | null
      imei: string | null
      otrosTelefonos: string | null
      cbu: string | null
      titulares: string | null
      filaExcel: number | null
      otrosCbu: string | null
      estadoLegajo: string | null
      complementos: string | null
      asignadoA: string | null
      visto: boolean
      createdAt: Date
    }, ExtArgs["result"]["registroEstafa"]>
    composites: {}
  }

  type RegistroEstafaGetPayload<S extends boolean | null | undefined | RegistroEstafaDefaultArgs> = $Result.GetResult<Prisma.$RegistroEstafaPayload, S>

  type RegistroEstafaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistroEstafaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistroEstafaCountAggregateInputType | true
    }

  export interface RegistroEstafaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroEstafa'], meta: { name: 'RegistroEstafa' } }
    /**
     * Find zero or one RegistroEstafa that matches the filter.
     * @param {RegistroEstafaFindUniqueArgs} args - Arguments to find a RegistroEstafa
     * @example
     * // Get one RegistroEstafa
     * const registroEstafa = await prisma.registroEstafa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroEstafaFindUniqueArgs>(args: SelectSubset<T, RegistroEstafaFindUniqueArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RegistroEstafa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistroEstafaFindUniqueOrThrowArgs} args - Arguments to find a RegistroEstafa
     * @example
     * // Get one RegistroEstafa
     * const registroEstafa = await prisma.registroEstafa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroEstafaFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroEstafaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RegistroEstafa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaFindFirstArgs} args - Arguments to find a RegistroEstafa
     * @example
     * // Get one RegistroEstafa
     * const registroEstafa = await prisma.registroEstafa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroEstafaFindFirstArgs>(args?: SelectSubset<T, RegistroEstafaFindFirstArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RegistroEstafa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaFindFirstOrThrowArgs} args - Arguments to find a RegistroEstafa
     * @example
     * // Get one RegistroEstafa
     * const registroEstafa = await prisma.registroEstafa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroEstafaFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroEstafaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RegistroEstafas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroEstafas
     * const registroEstafas = await prisma.registroEstafa.findMany()
     * 
     * // Get first 10 RegistroEstafas
     * const registroEstafas = await prisma.registroEstafa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroEstafaWithIdOnly = await prisma.registroEstafa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroEstafaFindManyArgs>(args?: SelectSubset<T, RegistroEstafaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RegistroEstafa.
     * @param {RegistroEstafaCreateArgs} args - Arguments to create a RegistroEstafa.
     * @example
     * // Create one RegistroEstafa
     * const RegistroEstafa = await prisma.registroEstafa.create({
     *   data: {
     *     // ... data to create a RegistroEstafa
     *   }
     * })
     * 
     */
    create<T extends RegistroEstafaCreateArgs>(args: SelectSubset<T, RegistroEstafaCreateArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RegistroEstafas.
     * @param {RegistroEstafaCreateManyArgs} args - Arguments to create many RegistroEstafas.
     * @example
     * // Create many RegistroEstafas
     * const registroEstafa = await prisma.registroEstafa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroEstafaCreateManyArgs>(args?: SelectSubset<T, RegistroEstafaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroEstafas and returns the data saved in the database.
     * @param {RegistroEstafaCreateManyAndReturnArgs} args - Arguments to create many RegistroEstafas.
     * @example
     * // Create many RegistroEstafas
     * const registroEstafa = await prisma.registroEstafa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroEstafas and only return the `id`
     * const registroEstafaWithIdOnly = await prisma.registroEstafa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroEstafaCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroEstafaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RegistroEstafa.
     * @param {RegistroEstafaDeleteArgs} args - Arguments to delete one RegistroEstafa.
     * @example
     * // Delete one RegistroEstafa
     * const RegistroEstafa = await prisma.registroEstafa.delete({
     *   where: {
     *     // ... filter to delete one RegistroEstafa
     *   }
     * })
     * 
     */
    delete<T extends RegistroEstafaDeleteArgs>(args: SelectSubset<T, RegistroEstafaDeleteArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RegistroEstafa.
     * @param {RegistroEstafaUpdateArgs} args - Arguments to update one RegistroEstafa.
     * @example
     * // Update one RegistroEstafa
     * const registroEstafa = await prisma.registroEstafa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroEstafaUpdateArgs>(args: SelectSubset<T, RegistroEstafaUpdateArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RegistroEstafas.
     * @param {RegistroEstafaDeleteManyArgs} args - Arguments to filter RegistroEstafas to delete.
     * @example
     * // Delete a few RegistroEstafas
     * const { count } = await prisma.registroEstafa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroEstafaDeleteManyArgs>(args?: SelectSubset<T, RegistroEstafaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroEstafas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroEstafas
     * const registroEstafa = await prisma.registroEstafa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroEstafaUpdateManyArgs>(args: SelectSubset<T, RegistroEstafaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistroEstafa.
     * @param {RegistroEstafaUpsertArgs} args - Arguments to update or create a RegistroEstafa.
     * @example
     * // Update or create a RegistroEstafa
     * const registroEstafa = await prisma.registroEstafa.upsert({
     *   create: {
     *     // ... data to create a RegistroEstafa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroEstafa we want to update
     *   }
     * })
     */
    upsert<T extends RegistroEstafaUpsertArgs>(args: SelectSubset<T, RegistroEstafaUpsertArgs<ExtArgs>>): Prisma__RegistroEstafaClient<$Result.GetResult<Prisma.$RegistroEstafaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RegistroEstafas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaCountArgs} args - Arguments to filter RegistroEstafas to count.
     * @example
     * // Count the number of RegistroEstafas
     * const count = await prisma.registroEstafa.count({
     *   where: {
     *     // ... the filter for the RegistroEstafas we want to count
     *   }
     * })
    **/
    count<T extends RegistroEstafaCountArgs>(
      args?: Subset<T, RegistroEstafaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroEstafaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroEstafa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroEstafaAggregateArgs>(args: Subset<T, RegistroEstafaAggregateArgs>): Prisma.PrismaPromise<GetRegistroEstafaAggregateType<T>>

    /**
     * Group by RegistroEstafa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEstafaGroupByArgs} args - Group by arguments.
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
      T extends RegistroEstafaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroEstafaGroupByArgs['orderBy'] }
        : { orderBy?: RegistroEstafaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroEstafaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroEstafaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroEstafa model
   */
  readonly fields: RegistroEstafaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroEstafa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroEstafaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RegistroEstafa model
   */ 
  interface RegistroEstafaFieldRefs {
    readonly id: FieldRef<"RegistroEstafa", 'String'>
    readonly nroInterno: FieldRef<"RegistroEstafa", 'Int'>
    readonly cuij: FieldRef<"RegistroEstafa", 'String'>
    readonly fechaHecho: FieldRef<"RegistroEstafa", 'DateTime'>
    readonly fechaDenuncia: FieldRef<"RegistroEstafa", 'DateTime'>
    readonly dependencia: FieldRef<"RegistroEstafa", 'String'>
    readonly nroLegajo: FieldRef<"RegistroEstafa", 'String'>
    readonly recibido: FieldRef<"RegistroEstafa", 'DateTime'>
    readonly victima: FieldRef<"RegistroEstafa", 'String'>
    readonly telefonoVictima: FieldRef<"RegistroEstafa", 'String'>
    readonly caratula: FieldRef<"RegistroEstafa", 'String'>
    readonly fiscal: FieldRef<"RegistroEstafa", 'String'>
    readonly ardid: FieldRef<"RegistroEstafa", 'String'>
    readonly seudonimo: FieldRef<"RegistroEstafa", 'String'>
    readonly telefonoReferencia: FieldRef<"RegistroEstafa", 'String'>
    readonly nombreReferencia: FieldRef<"RegistroEstafa", 'String'>
    readonly imei: FieldRef<"RegistroEstafa", 'String'>
    readonly otrosTelefonos: FieldRef<"RegistroEstafa", 'String'>
    readonly cbu: FieldRef<"RegistroEstafa", 'String'>
    readonly titulares: FieldRef<"RegistroEstafa", 'String'>
    readonly filaExcel: FieldRef<"RegistroEstafa", 'Int'>
    readonly otrosCbu: FieldRef<"RegistroEstafa", 'String'>
    readonly estadoLegajo: FieldRef<"RegistroEstafa", 'String'>
    readonly complementos: FieldRef<"RegistroEstafa", 'String'>
    readonly asignadoA: FieldRef<"RegistroEstafa", 'String'>
    readonly visto: FieldRef<"RegistroEstafa", 'Boolean'>
    readonly createdAt: FieldRef<"RegistroEstafa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroEstafa findUnique
   */
  export type RegistroEstafaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroEstafa to fetch.
     */
    where: RegistroEstafaWhereUniqueInput
  }

  /**
   * RegistroEstafa findUniqueOrThrow
   */
  export type RegistroEstafaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroEstafa to fetch.
     */
    where: RegistroEstafaWhereUniqueInput
  }

  /**
   * RegistroEstafa findFirst
   */
  export type RegistroEstafaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroEstafa to fetch.
     */
    where?: RegistroEstafaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEstafas to fetch.
     */
    orderBy?: RegistroEstafaOrderByWithRelationInput | RegistroEstafaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroEstafas.
     */
    cursor?: RegistroEstafaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEstafas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEstafas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroEstafas.
     */
    distinct?: RegistroEstafaScalarFieldEnum | RegistroEstafaScalarFieldEnum[]
  }

  /**
   * RegistroEstafa findFirstOrThrow
   */
  export type RegistroEstafaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroEstafa to fetch.
     */
    where?: RegistroEstafaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEstafas to fetch.
     */
    orderBy?: RegistroEstafaOrderByWithRelationInput | RegistroEstafaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroEstafas.
     */
    cursor?: RegistroEstafaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEstafas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEstafas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroEstafas.
     */
    distinct?: RegistroEstafaScalarFieldEnum | RegistroEstafaScalarFieldEnum[]
  }

  /**
   * RegistroEstafa findMany
   */
  export type RegistroEstafaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * Filter, which RegistroEstafas to fetch.
     */
    where?: RegistroEstafaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEstafas to fetch.
     */
    orderBy?: RegistroEstafaOrderByWithRelationInput | RegistroEstafaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroEstafas.
     */
    cursor?: RegistroEstafaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEstafas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEstafas.
     */
    skip?: number
    distinct?: RegistroEstafaScalarFieldEnum | RegistroEstafaScalarFieldEnum[]
  }

  /**
   * RegistroEstafa create
   */
  export type RegistroEstafaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * The data needed to create a RegistroEstafa.
     */
    data?: XOR<RegistroEstafaCreateInput, RegistroEstafaUncheckedCreateInput>
  }

  /**
   * RegistroEstafa createMany
   */
  export type RegistroEstafaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroEstafas.
     */
    data: RegistroEstafaCreateManyInput | RegistroEstafaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroEstafa createManyAndReturn
   */
  export type RegistroEstafaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RegistroEstafas.
     */
    data: RegistroEstafaCreateManyInput | RegistroEstafaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroEstafa update
   */
  export type RegistroEstafaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * The data needed to update a RegistroEstafa.
     */
    data: XOR<RegistroEstafaUpdateInput, RegistroEstafaUncheckedUpdateInput>
    /**
     * Choose, which RegistroEstafa to update.
     */
    where: RegistroEstafaWhereUniqueInput
  }

  /**
   * RegistroEstafa updateMany
   */
  export type RegistroEstafaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroEstafas.
     */
    data: XOR<RegistroEstafaUpdateManyMutationInput, RegistroEstafaUncheckedUpdateManyInput>
    /**
     * Filter which RegistroEstafas to update
     */
    where?: RegistroEstafaWhereInput
  }

  /**
   * RegistroEstafa upsert
   */
  export type RegistroEstafaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * The filter to search for the RegistroEstafa to update in case it exists.
     */
    where: RegistroEstafaWhereUniqueInput
    /**
     * In case the RegistroEstafa found by the `where` argument doesn't exist, create a new RegistroEstafa with this data.
     */
    create: XOR<RegistroEstafaCreateInput, RegistroEstafaUncheckedCreateInput>
    /**
     * In case the RegistroEstafa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroEstafaUpdateInput, RegistroEstafaUncheckedUpdateInput>
  }

  /**
   * RegistroEstafa delete
   */
  export type RegistroEstafaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
    /**
     * Filter which RegistroEstafa to delete.
     */
    where: RegistroEstafaWhereUniqueInput
  }

  /**
   * RegistroEstafa deleteMany
   */
  export type RegistroEstafaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroEstafas to delete
     */
    where?: RegistroEstafaWhereInput
  }

  /**
   * RegistroEstafa without action
   */
  export type RegistroEstafaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEstafa
     */
    select?: RegistroEstafaSelect<ExtArgs> | null
  }


  /**
   * Model ComentarioLegajo
   */

  export type AggregateComentarioLegajo = {
    _count: ComentarioLegajoCountAggregateOutputType | null
    _min: ComentarioLegajoMinAggregateOutputType | null
    _max: ComentarioLegajoMaxAggregateOutputType | null
  }

  export type ComentarioLegajoMinAggregateOutputType = {
    id: string | null
    legajoId: string | null
    usuarioId: string | null
    texto: string | null
    createdAt: Date | null
  }

  export type ComentarioLegajoMaxAggregateOutputType = {
    id: string | null
    legajoId: string | null
    usuarioId: string | null
    texto: string | null
    createdAt: Date | null
  }

  export type ComentarioLegajoCountAggregateOutputType = {
    id: number
    legajoId: number
    usuarioId: number
    texto: number
    createdAt: number
    _all: number
  }


  export type ComentarioLegajoMinAggregateInputType = {
    id?: true
    legajoId?: true
    usuarioId?: true
    texto?: true
    createdAt?: true
  }

  export type ComentarioLegajoMaxAggregateInputType = {
    id?: true
    legajoId?: true
    usuarioId?: true
    texto?: true
    createdAt?: true
  }

  export type ComentarioLegajoCountAggregateInputType = {
    id?: true
    legajoId?: true
    usuarioId?: true
    texto?: true
    createdAt?: true
    _all?: true
  }

  export type ComentarioLegajoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComentarioLegajo to aggregate.
     */
    where?: ComentarioLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComentarioLegajos to fetch.
     */
    orderBy?: ComentarioLegajoOrderByWithRelationInput | ComentarioLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComentarioLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComentarioLegajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComentarioLegajos
    **/
    _count?: true | ComentarioLegajoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioLegajoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioLegajoMaxAggregateInputType
  }

  export type GetComentarioLegajoAggregateType<T extends ComentarioLegajoAggregateArgs> = {
        [P in keyof T & keyof AggregateComentarioLegajo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentarioLegajo[P]>
      : GetScalarType<T[P], AggregateComentarioLegajo[P]>
  }




  export type ComentarioLegajoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioLegajoWhereInput
    orderBy?: ComentarioLegajoOrderByWithAggregationInput | ComentarioLegajoOrderByWithAggregationInput[]
    by: ComentarioLegajoScalarFieldEnum[] | ComentarioLegajoScalarFieldEnum
    having?: ComentarioLegajoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioLegajoCountAggregateInputType | true
    _min?: ComentarioLegajoMinAggregateInputType
    _max?: ComentarioLegajoMaxAggregateInputType
  }

  export type ComentarioLegajoGroupByOutputType = {
    id: string
    legajoId: string
    usuarioId: string
    texto: string
    createdAt: Date
    _count: ComentarioLegajoCountAggregateOutputType | null
    _min: ComentarioLegajoMinAggregateOutputType | null
    _max: ComentarioLegajoMaxAggregateOutputType | null
  }

  type GetComentarioLegajoGroupByPayload<T extends ComentarioLegajoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioLegajoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioLegajoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioLegajoGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioLegajoGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioLegajoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajoId?: boolean
    usuarioId?: boolean
    texto?: boolean
    createdAt?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentarioLegajo"]>

  export type ComentarioLegajoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajoId?: boolean
    usuarioId?: boolean
    texto?: boolean
    createdAt?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentarioLegajo"]>

  export type ComentarioLegajoSelectScalar = {
    id?: boolean
    legajoId?: boolean
    usuarioId?: boolean
    texto?: boolean
    createdAt?: boolean
  }

  export type ComentarioLegajoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ComentarioLegajoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ComentarioLegajoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComentarioLegajo"
    objects: {
      legajo: Prisma.$LegajoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      legajoId: string
      usuarioId: string
      texto: string
      createdAt: Date
    }, ExtArgs["result"]["comentarioLegajo"]>
    composites: {}
  }

  type ComentarioLegajoGetPayload<S extends boolean | null | undefined | ComentarioLegajoDefaultArgs> = $Result.GetResult<Prisma.$ComentarioLegajoPayload, S>

  type ComentarioLegajoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComentarioLegajoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComentarioLegajoCountAggregateInputType | true
    }

  export interface ComentarioLegajoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComentarioLegajo'], meta: { name: 'ComentarioLegajo' } }
    /**
     * Find zero or one ComentarioLegajo that matches the filter.
     * @param {ComentarioLegajoFindUniqueArgs} args - Arguments to find a ComentarioLegajo
     * @example
     * // Get one ComentarioLegajo
     * const comentarioLegajo = await prisma.comentarioLegajo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioLegajoFindUniqueArgs>(args: SelectSubset<T, ComentarioLegajoFindUniqueArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ComentarioLegajo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ComentarioLegajoFindUniqueOrThrowArgs} args - Arguments to find a ComentarioLegajo
     * @example
     * // Get one ComentarioLegajo
     * const comentarioLegajo = await prisma.comentarioLegajo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioLegajoFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioLegajoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ComentarioLegajo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoFindFirstArgs} args - Arguments to find a ComentarioLegajo
     * @example
     * // Get one ComentarioLegajo
     * const comentarioLegajo = await prisma.comentarioLegajo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioLegajoFindFirstArgs>(args?: SelectSubset<T, ComentarioLegajoFindFirstArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ComentarioLegajo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoFindFirstOrThrowArgs} args - Arguments to find a ComentarioLegajo
     * @example
     * // Get one ComentarioLegajo
     * const comentarioLegajo = await prisma.comentarioLegajo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioLegajoFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioLegajoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ComentarioLegajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComentarioLegajos
     * const comentarioLegajos = await prisma.comentarioLegajo.findMany()
     * 
     * // Get first 10 ComentarioLegajos
     * const comentarioLegajos = await prisma.comentarioLegajo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioLegajoWithIdOnly = await prisma.comentarioLegajo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioLegajoFindManyArgs>(args?: SelectSubset<T, ComentarioLegajoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ComentarioLegajo.
     * @param {ComentarioLegajoCreateArgs} args - Arguments to create a ComentarioLegajo.
     * @example
     * // Create one ComentarioLegajo
     * const ComentarioLegajo = await prisma.comentarioLegajo.create({
     *   data: {
     *     // ... data to create a ComentarioLegajo
     *   }
     * })
     * 
     */
    create<T extends ComentarioLegajoCreateArgs>(args: SelectSubset<T, ComentarioLegajoCreateArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ComentarioLegajos.
     * @param {ComentarioLegajoCreateManyArgs} args - Arguments to create many ComentarioLegajos.
     * @example
     * // Create many ComentarioLegajos
     * const comentarioLegajo = await prisma.comentarioLegajo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioLegajoCreateManyArgs>(args?: SelectSubset<T, ComentarioLegajoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComentarioLegajos and returns the data saved in the database.
     * @param {ComentarioLegajoCreateManyAndReturnArgs} args - Arguments to create many ComentarioLegajos.
     * @example
     * // Create many ComentarioLegajos
     * const comentarioLegajo = await prisma.comentarioLegajo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComentarioLegajos and only return the `id`
     * const comentarioLegajoWithIdOnly = await prisma.comentarioLegajo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioLegajoCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioLegajoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ComentarioLegajo.
     * @param {ComentarioLegajoDeleteArgs} args - Arguments to delete one ComentarioLegajo.
     * @example
     * // Delete one ComentarioLegajo
     * const ComentarioLegajo = await prisma.comentarioLegajo.delete({
     *   where: {
     *     // ... filter to delete one ComentarioLegajo
     *   }
     * })
     * 
     */
    delete<T extends ComentarioLegajoDeleteArgs>(args: SelectSubset<T, ComentarioLegajoDeleteArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ComentarioLegajo.
     * @param {ComentarioLegajoUpdateArgs} args - Arguments to update one ComentarioLegajo.
     * @example
     * // Update one ComentarioLegajo
     * const comentarioLegajo = await prisma.comentarioLegajo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioLegajoUpdateArgs>(args: SelectSubset<T, ComentarioLegajoUpdateArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ComentarioLegajos.
     * @param {ComentarioLegajoDeleteManyArgs} args - Arguments to filter ComentarioLegajos to delete.
     * @example
     * // Delete a few ComentarioLegajos
     * const { count } = await prisma.comentarioLegajo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioLegajoDeleteManyArgs>(args?: SelectSubset<T, ComentarioLegajoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComentarioLegajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComentarioLegajos
     * const comentarioLegajo = await prisma.comentarioLegajo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioLegajoUpdateManyArgs>(args: SelectSubset<T, ComentarioLegajoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComentarioLegajo.
     * @param {ComentarioLegajoUpsertArgs} args - Arguments to update or create a ComentarioLegajo.
     * @example
     * // Update or create a ComentarioLegajo
     * const comentarioLegajo = await prisma.comentarioLegajo.upsert({
     *   create: {
     *     // ... data to create a ComentarioLegajo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComentarioLegajo we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioLegajoUpsertArgs>(args: SelectSubset<T, ComentarioLegajoUpsertArgs<ExtArgs>>): Prisma__ComentarioLegajoClient<$Result.GetResult<Prisma.$ComentarioLegajoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ComentarioLegajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoCountArgs} args - Arguments to filter ComentarioLegajos to count.
     * @example
     * // Count the number of ComentarioLegajos
     * const count = await prisma.comentarioLegajo.count({
     *   where: {
     *     // ... the filter for the ComentarioLegajos we want to count
     *   }
     * })
    **/
    count<T extends ComentarioLegajoCountArgs>(
      args?: Subset<T, ComentarioLegajoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioLegajoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComentarioLegajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioLegajoAggregateArgs>(args: Subset<T, ComentarioLegajoAggregateArgs>): Prisma.PrismaPromise<GetComentarioLegajoAggregateType<T>>

    /**
     * Group by ComentarioLegajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioLegajoGroupByArgs} args - Group by arguments.
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
      T extends ComentarioLegajoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioLegajoGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioLegajoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentarioLegajoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioLegajoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComentarioLegajo model
   */
  readonly fields: ComentarioLegajoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComentarioLegajo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioLegajoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajo<T extends LegajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegajoDefaultArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ComentarioLegajo model
   */ 
  interface ComentarioLegajoFieldRefs {
    readonly id: FieldRef<"ComentarioLegajo", 'String'>
    readonly legajoId: FieldRef<"ComentarioLegajo", 'String'>
    readonly usuarioId: FieldRef<"ComentarioLegajo", 'String'>
    readonly texto: FieldRef<"ComentarioLegajo", 'String'>
    readonly createdAt: FieldRef<"ComentarioLegajo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComentarioLegajo findUnique
   */
  export type ComentarioLegajoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ComentarioLegajo to fetch.
     */
    where: ComentarioLegajoWhereUniqueInput
  }

  /**
   * ComentarioLegajo findUniqueOrThrow
   */
  export type ComentarioLegajoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ComentarioLegajo to fetch.
     */
    where: ComentarioLegajoWhereUniqueInput
  }

  /**
   * ComentarioLegajo findFirst
   */
  export type ComentarioLegajoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ComentarioLegajo to fetch.
     */
    where?: ComentarioLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComentarioLegajos to fetch.
     */
    orderBy?: ComentarioLegajoOrderByWithRelationInput | ComentarioLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComentarioLegajos.
     */
    cursor?: ComentarioLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComentarioLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComentarioLegajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComentarioLegajos.
     */
    distinct?: ComentarioLegajoScalarFieldEnum | ComentarioLegajoScalarFieldEnum[]
  }

  /**
   * ComentarioLegajo findFirstOrThrow
   */
  export type ComentarioLegajoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ComentarioLegajo to fetch.
     */
    where?: ComentarioLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComentarioLegajos to fetch.
     */
    orderBy?: ComentarioLegajoOrderByWithRelationInput | ComentarioLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComentarioLegajos.
     */
    cursor?: ComentarioLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComentarioLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComentarioLegajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComentarioLegajos.
     */
    distinct?: ComentarioLegajoScalarFieldEnum | ComentarioLegajoScalarFieldEnum[]
  }

  /**
   * ComentarioLegajo findMany
   */
  export type ComentarioLegajoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ComentarioLegajos to fetch.
     */
    where?: ComentarioLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComentarioLegajos to fetch.
     */
    orderBy?: ComentarioLegajoOrderByWithRelationInput | ComentarioLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComentarioLegajos.
     */
    cursor?: ComentarioLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComentarioLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComentarioLegajos.
     */
    skip?: number
    distinct?: ComentarioLegajoScalarFieldEnum | ComentarioLegajoScalarFieldEnum[]
  }

  /**
   * ComentarioLegajo create
   */
  export type ComentarioLegajoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * The data needed to create a ComentarioLegajo.
     */
    data: XOR<ComentarioLegajoCreateInput, ComentarioLegajoUncheckedCreateInput>
  }

  /**
   * ComentarioLegajo createMany
   */
  export type ComentarioLegajoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComentarioLegajos.
     */
    data: ComentarioLegajoCreateManyInput | ComentarioLegajoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComentarioLegajo createManyAndReturn
   */
  export type ComentarioLegajoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ComentarioLegajos.
     */
    data: ComentarioLegajoCreateManyInput | ComentarioLegajoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComentarioLegajo update
   */
  export type ComentarioLegajoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * The data needed to update a ComentarioLegajo.
     */
    data: XOR<ComentarioLegajoUpdateInput, ComentarioLegajoUncheckedUpdateInput>
    /**
     * Choose, which ComentarioLegajo to update.
     */
    where: ComentarioLegajoWhereUniqueInput
  }

  /**
   * ComentarioLegajo updateMany
   */
  export type ComentarioLegajoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComentarioLegajos.
     */
    data: XOR<ComentarioLegajoUpdateManyMutationInput, ComentarioLegajoUncheckedUpdateManyInput>
    /**
     * Filter which ComentarioLegajos to update
     */
    where?: ComentarioLegajoWhereInput
  }

  /**
   * ComentarioLegajo upsert
   */
  export type ComentarioLegajoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * The filter to search for the ComentarioLegajo to update in case it exists.
     */
    where: ComentarioLegajoWhereUniqueInput
    /**
     * In case the ComentarioLegajo found by the `where` argument doesn't exist, create a new ComentarioLegajo with this data.
     */
    create: XOR<ComentarioLegajoCreateInput, ComentarioLegajoUncheckedCreateInput>
    /**
     * In case the ComentarioLegajo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioLegajoUpdateInput, ComentarioLegajoUncheckedUpdateInput>
  }

  /**
   * ComentarioLegajo delete
   */
  export type ComentarioLegajoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
    /**
     * Filter which ComentarioLegajo to delete.
     */
    where: ComentarioLegajoWhereUniqueInput
  }

  /**
   * ComentarioLegajo deleteMany
   */
  export type ComentarioLegajoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComentarioLegajos to delete
     */
    where?: ComentarioLegajoWhereInput
  }

  /**
   * ComentarioLegajo without action
   */
  export type ComentarioLegajoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioLegajo
     */
    select?: ComentarioLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioLegajoInclude<ExtArgs> | null
  }


  /**
   * Model ArchivoLegajo
   */

  export type AggregateArchivoLegajo = {
    _count: ArchivoLegajoCountAggregateOutputType | null
    _avg: ArchivoLegajoAvgAggregateOutputType | null
    _sum: ArchivoLegajoSumAggregateOutputType | null
    _min: ArchivoLegajoMinAggregateOutputType | null
    _max: ArchivoLegajoMaxAggregateOutputType | null
  }

  export type ArchivoLegajoAvgAggregateOutputType = {
    tamano: number | null
  }

  export type ArchivoLegajoSumAggregateOutputType = {
    tamano: number | null
  }

  export type ArchivoLegajoMinAggregateOutputType = {
    id: string | null
    legajoId: string | null
    nombre: string | null
    tipo: string | null
    url: string | null
    publicId: string | null
    tamano: number | null
    esAnalizable: boolean | null
    analisis: string | null
    createdAt: Date | null
  }

  export type ArchivoLegajoMaxAggregateOutputType = {
    id: string | null
    legajoId: string | null
    nombre: string | null
    tipo: string | null
    url: string | null
    publicId: string | null
    tamano: number | null
    esAnalizable: boolean | null
    analisis: string | null
    createdAt: Date | null
  }

  export type ArchivoLegajoCountAggregateOutputType = {
    id: number
    legajoId: number
    nombre: number
    tipo: number
    url: number
    publicId: number
    tamano: number
    esAnalizable: number
    analisis: number
    createdAt: number
    _all: number
  }


  export type ArchivoLegajoAvgAggregateInputType = {
    tamano?: true
  }

  export type ArchivoLegajoSumAggregateInputType = {
    tamano?: true
  }

  export type ArchivoLegajoMinAggregateInputType = {
    id?: true
    legajoId?: true
    nombre?: true
    tipo?: true
    url?: true
    publicId?: true
    tamano?: true
    esAnalizable?: true
    analisis?: true
    createdAt?: true
  }

  export type ArchivoLegajoMaxAggregateInputType = {
    id?: true
    legajoId?: true
    nombre?: true
    tipo?: true
    url?: true
    publicId?: true
    tamano?: true
    esAnalizable?: true
    analisis?: true
    createdAt?: true
  }

  export type ArchivoLegajoCountAggregateInputType = {
    id?: true
    legajoId?: true
    nombre?: true
    tipo?: true
    url?: true
    publicId?: true
    tamano?: true
    esAnalizable?: true
    analisis?: true
    createdAt?: true
    _all?: true
  }

  export type ArchivoLegajoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchivoLegajo to aggregate.
     */
    where?: ArchivoLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivoLegajos to fetch.
     */
    orderBy?: ArchivoLegajoOrderByWithRelationInput | ArchivoLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchivoLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivoLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivoLegajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArchivoLegajos
    **/
    _count?: true | ArchivoLegajoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivoLegajoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivoLegajoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivoLegajoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivoLegajoMaxAggregateInputType
  }

  export type GetArchivoLegajoAggregateType<T extends ArchivoLegajoAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivoLegajo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivoLegajo[P]>
      : GetScalarType<T[P], AggregateArchivoLegajo[P]>
  }




  export type ArchivoLegajoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoLegajoWhereInput
    orderBy?: ArchivoLegajoOrderByWithAggregationInput | ArchivoLegajoOrderByWithAggregationInput[]
    by: ArchivoLegajoScalarFieldEnum[] | ArchivoLegajoScalarFieldEnum
    having?: ArchivoLegajoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivoLegajoCountAggregateInputType | true
    _avg?: ArchivoLegajoAvgAggregateInputType
    _sum?: ArchivoLegajoSumAggregateInputType
    _min?: ArchivoLegajoMinAggregateInputType
    _max?: ArchivoLegajoMaxAggregateInputType
  }

  export type ArchivoLegajoGroupByOutputType = {
    id: string
    legajoId: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano: number | null
    esAnalizable: boolean
    analisis: string | null
    createdAt: Date
    _count: ArchivoLegajoCountAggregateOutputType | null
    _avg: ArchivoLegajoAvgAggregateOutputType | null
    _sum: ArchivoLegajoSumAggregateOutputType | null
    _min: ArchivoLegajoMinAggregateOutputType | null
    _max: ArchivoLegajoMaxAggregateOutputType | null
  }

  type GetArchivoLegajoGroupByPayload<T extends ArchivoLegajoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivoLegajoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivoLegajoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivoLegajoGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivoLegajoGroupByOutputType[P]>
        }
      >
    >


  export type ArchivoLegajoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajoId?: boolean
    nombre?: boolean
    tipo?: boolean
    url?: boolean
    publicId?: boolean
    tamano?: boolean
    esAnalizable?: boolean
    analisis?: boolean
    createdAt?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivoLegajo"]>

  export type ArchivoLegajoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajoId?: boolean
    nombre?: boolean
    tipo?: boolean
    url?: boolean
    publicId?: boolean
    tamano?: boolean
    esAnalizable?: boolean
    analisis?: boolean
    createdAt?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivoLegajo"]>

  export type ArchivoLegajoSelectScalar = {
    id?: boolean
    legajoId?: boolean
    nombre?: boolean
    tipo?: boolean
    url?: boolean
    publicId?: boolean
    tamano?: boolean
    esAnalizable?: boolean
    analisis?: boolean
    createdAt?: boolean
  }

  export type ArchivoLegajoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }
  export type ArchivoLegajoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }

  export type $ArchivoLegajoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArchivoLegajo"
    objects: {
      legajo: Prisma.$LegajoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      legajoId: string
      nombre: string
      tipo: string
      url: string
      publicId: string
      tamano: number | null
      esAnalizable: boolean
      analisis: string | null
      createdAt: Date
    }, ExtArgs["result"]["archivoLegajo"]>
    composites: {}
  }

  type ArchivoLegajoGetPayload<S extends boolean | null | undefined | ArchivoLegajoDefaultArgs> = $Result.GetResult<Prisma.$ArchivoLegajoPayload, S>

  type ArchivoLegajoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArchivoLegajoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArchivoLegajoCountAggregateInputType | true
    }

  export interface ArchivoLegajoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArchivoLegajo'], meta: { name: 'ArchivoLegajo' } }
    /**
     * Find zero or one ArchivoLegajo that matches the filter.
     * @param {ArchivoLegajoFindUniqueArgs} args - Arguments to find a ArchivoLegajo
     * @example
     * // Get one ArchivoLegajo
     * const archivoLegajo = await prisma.archivoLegajo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchivoLegajoFindUniqueArgs>(args: SelectSubset<T, ArchivoLegajoFindUniqueArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ArchivoLegajo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArchivoLegajoFindUniqueOrThrowArgs} args - Arguments to find a ArchivoLegajo
     * @example
     * // Get one ArchivoLegajo
     * const archivoLegajo = await prisma.archivoLegajo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchivoLegajoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchivoLegajoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ArchivoLegajo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoFindFirstArgs} args - Arguments to find a ArchivoLegajo
     * @example
     * // Get one ArchivoLegajo
     * const archivoLegajo = await prisma.archivoLegajo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchivoLegajoFindFirstArgs>(args?: SelectSubset<T, ArchivoLegajoFindFirstArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ArchivoLegajo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoFindFirstOrThrowArgs} args - Arguments to find a ArchivoLegajo
     * @example
     * // Get one ArchivoLegajo
     * const archivoLegajo = await prisma.archivoLegajo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchivoLegajoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchivoLegajoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ArchivoLegajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArchivoLegajos
     * const archivoLegajos = await prisma.archivoLegajo.findMany()
     * 
     * // Get first 10 ArchivoLegajos
     * const archivoLegajos = await prisma.archivoLegajo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivoLegajoWithIdOnly = await prisma.archivoLegajo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchivoLegajoFindManyArgs>(args?: SelectSubset<T, ArchivoLegajoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ArchivoLegajo.
     * @param {ArchivoLegajoCreateArgs} args - Arguments to create a ArchivoLegajo.
     * @example
     * // Create one ArchivoLegajo
     * const ArchivoLegajo = await prisma.archivoLegajo.create({
     *   data: {
     *     // ... data to create a ArchivoLegajo
     *   }
     * })
     * 
     */
    create<T extends ArchivoLegajoCreateArgs>(args: SelectSubset<T, ArchivoLegajoCreateArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ArchivoLegajos.
     * @param {ArchivoLegajoCreateManyArgs} args - Arguments to create many ArchivoLegajos.
     * @example
     * // Create many ArchivoLegajos
     * const archivoLegajo = await prisma.archivoLegajo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchivoLegajoCreateManyArgs>(args?: SelectSubset<T, ArchivoLegajoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArchivoLegajos and returns the data saved in the database.
     * @param {ArchivoLegajoCreateManyAndReturnArgs} args - Arguments to create many ArchivoLegajos.
     * @example
     * // Create many ArchivoLegajos
     * const archivoLegajo = await prisma.archivoLegajo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArchivoLegajos and only return the `id`
     * const archivoLegajoWithIdOnly = await prisma.archivoLegajo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchivoLegajoCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchivoLegajoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ArchivoLegajo.
     * @param {ArchivoLegajoDeleteArgs} args - Arguments to delete one ArchivoLegajo.
     * @example
     * // Delete one ArchivoLegajo
     * const ArchivoLegajo = await prisma.archivoLegajo.delete({
     *   where: {
     *     // ... filter to delete one ArchivoLegajo
     *   }
     * })
     * 
     */
    delete<T extends ArchivoLegajoDeleteArgs>(args: SelectSubset<T, ArchivoLegajoDeleteArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ArchivoLegajo.
     * @param {ArchivoLegajoUpdateArgs} args - Arguments to update one ArchivoLegajo.
     * @example
     * // Update one ArchivoLegajo
     * const archivoLegajo = await prisma.archivoLegajo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchivoLegajoUpdateArgs>(args: SelectSubset<T, ArchivoLegajoUpdateArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ArchivoLegajos.
     * @param {ArchivoLegajoDeleteManyArgs} args - Arguments to filter ArchivoLegajos to delete.
     * @example
     * // Delete a few ArchivoLegajos
     * const { count } = await prisma.archivoLegajo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchivoLegajoDeleteManyArgs>(args?: SelectSubset<T, ArchivoLegajoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchivoLegajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArchivoLegajos
     * const archivoLegajo = await prisma.archivoLegajo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchivoLegajoUpdateManyArgs>(args: SelectSubset<T, ArchivoLegajoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArchivoLegajo.
     * @param {ArchivoLegajoUpsertArgs} args - Arguments to update or create a ArchivoLegajo.
     * @example
     * // Update or create a ArchivoLegajo
     * const archivoLegajo = await prisma.archivoLegajo.upsert({
     *   create: {
     *     // ... data to create a ArchivoLegajo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArchivoLegajo we want to update
     *   }
     * })
     */
    upsert<T extends ArchivoLegajoUpsertArgs>(args: SelectSubset<T, ArchivoLegajoUpsertArgs<ExtArgs>>): Prisma__ArchivoLegajoClient<$Result.GetResult<Prisma.$ArchivoLegajoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ArchivoLegajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoCountArgs} args - Arguments to filter ArchivoLegajos to count.
     * @example
     * // Count the number of ArchivoLegajos
     * const count = await prisma.archivoLegajo.count({
     *   where: {
     *     // ... the filter for the ArchivoLegajos we want to count
     *   }
     * })
    **/
    count<T extends ArchivoLegajoCountArgs>(
      args?: Subset<T, ArchivoLegajoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivoLegajoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArchivoLegajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchivoLegajoAggregateArgs>(args: Subset<T, ArchivoLegajoAggregateArgs>): Prisma.PrismaPromise<GetArchivoLegajoAggregateType<T>>

    /**
     * Group by ArchivoLegajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoLegajoGroupByArgs} args - Group by arguments.
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
      T extends ArchivoLegajoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchivoLegajoGroupByArgs['orderBy'] }
        : { orderBy?: ArchivoLegajoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArchivoLegajoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivoLegajoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArchivoLegajo model
   */
  readonly fields: ArchivoLegajoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArchivoLegajo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchivoLegajoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajo<T extends LegajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegajoDefaultArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ArchivoLegajo model
   */ 
  interface ArchivoLegajoFieldRefs {
    readonly id: FieldRef<"ArchivoLegajo", 'String'>
    readonly legajoId: FieldRef<"ArchivoLegajo", 'String'>
    readonly nombre: FieldRef<"ArchivoLegajo", 'String'>
    readonly tipo: FieldRef<"ArchivoLegajo", 'String'>
    readonly url: FieldRef<"ArchivoLegajo", 'String'>
    readonly publicId: FieldRef<"ArchivoLegajo", 'String'>
    readonly tamano: FieldRef<"ArchivoLegajo", 'Int'>
    readonly esAnalizable: FieldRef<"ArchivoLegajo", 'Boolean'>
    readonly analisis: FieldRef<"ArchivoLegajo", 'String'>
    readonly createdAt: FieldRef<"ArchivoLegajo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArchivoLegajo findUnique
   */
  export type ArchivoLegajoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ArchivoLegajo to fetch.
     */
    where: ArchivoLegajoWhereUniqueInput
  }

  /**
   * ArchivoLegajo findUniqueOrThrow
   */
  export type ArchivoLegajoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ArchivoLegajo to fetch.
     */
    where: ArchivoLegajoWhereUniqueInput
  }

  /**
   * ArchivoLegajo findFirst
   */
  export type ArchivoLegajoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ArchivoLegajo to fetch.
     */
    where?: ArchivoLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivoLegajos to fetch.
     */
    orderBy?: ArchivoLegajoOrderByWithRelationInput | ArchivoLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchivoLegajos.
     */
    cursor?: ArchivoLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivoLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivoLegajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivoLegajos.
     */
    distinct?: ArchivoLegajoScalarFieldEnum | ArchivoLegajoScalarFieldEnum[]
  }

  /**
   * ArchivoLegajo findFirstOrThrow
   */
  export type ArchivoLegajoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ArchivoLegajo to fetch.
     */
    where?: ArchivoLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivoLegajos to fetch.
     */
    orderBy?: ArchivoLegajoOrderByWithRelationInput | ArchivoLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchivoLegajos.
     */
    cursor?: ArchivoLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivoLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivoLegajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivoLegajos.
     */
    distinct?: ArchivoLegajoScalarFieldEnum | ArchivoLegajoScalarFieldEnum[]
  }

  /**
   * ArchivoLegajo findMany
   */
  export type ArchivoLegajoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * Filter, which ArchivoLegajos to fetch.
     */
    where?: ArchivoLegajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivoLegajos to fetch.
     */
    orderBy?: ArchivoLegajoOrderByWithRelationInput | ArchivoLegajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArchivoLegajos.
     */
    cursor?: ArchivoLegajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivoLegajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivoLegajos.
     */
    skip?: number
    distinct?: ArchivoLegajoScalarFieldEnum | ArchivoLegajoScalarFieldEnum[]
  }

  /**
   * ArchivoLegajo create
   */
  export type ArchivoLegajoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * The data needed to create a ArchivoLegajo.
     */
    data: XOR<ArchivoLegajoCreateInput, ArchivoLegajoUncheckedCreateInput>
  }

  /**
   * ArchivoLegajo createMany
   */
  export type ArchivoLegajoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArchivoLegajos.
     */
    data: ArchivoLegajoCreateManyInput | ArchivoLegajoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchivoLegajo createManyAndReturn
   */
  export type ArchivoLegajoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ArchivoLegajos.
     */
    data: ArchivoLegajoCreateManyInput | ArchivoLegajoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArchivoLegajo update
   */
  export type ArchivoLegajoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * The data needed to update a ArchivoLegajo.
     */
    data: XOR<ArchivoLegajoUpdateInput, ArchivoLegajoUncheckedUpdateInput>
    /**
     * Choose, which ArchivoLegajo to update.
     */
    where: ArchivoLegajoWhereUniqueInput
  }

  /**
   * ArchivoLegajo updateMany
   */
  export type ArchivoLegajoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArchivoLegajos.
     */
    data: XOR<ArchivoLegajoUpdateManyMutationInput, ArchivoLegajoUncheckedUpdateManyInput>
    /**
     * Filter which ArchivoLegajos to update
     */
    where?: ArchivoLegajoWhereInput
  }

  /**
   * ArchivoLegajo upsert
   */
  export type ArchivoLegajoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * The filter to search for the ArchivoLegajo to update in case it exists.
     */
    where: ArchivoLegajoWhereUniqueInput
    /**
     * In case the ArchivoLegajo found by the `where` argument doesn't exist, create a new ArchivoLegajo with this data.
     */
    create: XOR<ArchivoLegajoCreateInput, ArchivoLegajoUncheckedCreateInput>
    /**
     * In case the ArchivoLegajo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchivoLegajoUpdateInput, ArchivoLegajoUncheckedUpdateInput>
  }

  /**
   * ArchivoLegajo delete
   */
  export type ArchivoLegajoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
    /**
     * Filter which ArchivoLegajo to delete.
     */
    where: ArchivoLegajoWhereUniqueInput
  }

  /**
   * ArchivoLegajo deleteMany
   */
  export type ArchivoLegajoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchivoLegajos to delete
     */
    where?: ArchivoLegajoWhereInput
  }

  /**
   * ArchivoLegajo without action
   */
  export type ArchivoLegajoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivoLegajo
     */
    select?: ArchivoLegajoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoLegajoInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    nivel: string | null
    accion: string | null
    usuarioId: string | null
    ip: string | null
    recurso: string | null
    detalles: string | null
    error: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    nivel: string | null
    accion: string | null
    usuarioId: string | null
    ip: string | null
    recurso: string | null
    detalles: string | null
    error: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    nivel: number
    accion: number
    usuarioId: number
    ip: number
    recurso: number
    detalles: number
    error: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    nivel?: true
    accion?: true
    usuarioId?: true
    ip?: true
    recurso?: true
    detalles?: true
    error?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    nivel?: true
    accion?: true
    usuarioId?: true
    ip?: true
    recurso?: true
    detalles?: true
    error?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    nivel?: true
    accion?: true
    usuarioId?: true
    ip?: true
    recurso?: true
    detalles?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    nivel: string
    accion: string
    usuarioId: string | null
    ip: string | null
    recurso: string | null
    detalles: string | null
    error: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
    accion?: boolean
    usuarioId?: boolean
    ip?: boolean
    recurso?: boolean
    detalles?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
    accion?: boolean
    usuarioId?: boolean
    ip?: boolean
    recurso?: boolean
    detalles?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    nivel?: boolean
    accion?: boolean
    usuarioId?: boolean
    ip?: boolean
    recurso?: boolean
    detalles?: boolean
    error?: boolean
    createdAt?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nivel: string
      accion: string
      usuarioId: string | null
      ip: string | null
      recurso: string | null
      detalles: string | null
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly nivel: FieldRef<"AuditLog", 'String'>
    readonly accion: FieldRef<"AuditLog", 'String'>
    readonly usuarioId: FieldRef<"AuditLog", 'String'>
    readonly ip: FieldRef<"AuditLog", 'String'>
    readonly recurso: FieldRef<"AuditLog", 'String'>
    readonly detalles: FieldRef<"AuditLog", 'String'>
    readonly error: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
  }


  /**
   * Model RedConexiones
   */

  export type AggregateRedConexiones = {
    _count: RedConexionesCountAggregateOutputType | null
    _avg: RedConexionesAvgAggregateOutputType | null
    _sum: RedConexionesSumAggregateOutputType | null
    _min: RedConexionesMinAggregateOutputType | null
    _max: RedConexionesMaxAggregateOutputType | null
  }

  export type RedConexionesAvgAggregateOutputType = {
    confianza: number | null
  }

  export type RedConexionesSumAggregateOutputType = {
    confianza: number | null
  }

  export type RedConexionesMinAggregateOutputType = {
    id: string | null
    legajoId: string | null
    entidad1: string | null
    tipoEntidad1: string | null
    relacion: string | null
    entidad2: string | null
    tipoEntidad2: string | null
    confianza: number | null
    evidenciaId: string | null
    createdAt: Date | null
  }

  export type RedConexionesMaxAggregateOutputType = {
    id: string | null
    legajoId: string | null
    entidad1: string | null
    tipoEntidad1: string | null
    relacion: string | null
    entidad2: string | null
    tipoEntidad2: string | null
    confianza: number | null
    evidenciaId: string | null
    createdAt: Date | null
  }

  export type RedConexionesCountAggregateOutputType = {
    id: number
    legajoId: number
    entidad1: number
    tipoEntidad1: number
    relacion: number
    entidad2: number
    tipoEntidad2: number
    confianza: number
    evidenciaId: number
    createdAt: number
    _all: number
  }


  export type RedConexionesAvgAggregateInputType = {
    confianza?: true
  }

  export type RedConexionesSumAggregateInputType = {
    confianza?: true
  }

  export type RedConexionesMinAggregateInputType = {
    id?: true
    legajoId?: true
    entidad1?: true
    tipoEntidad1?: true
    relacion?: true
    entidad2?: true
    tipoEntidad2?: true
    confianza?: true
    evidenciaId?: true
    createdAt?: true
  }

  export type RedConexionesMaxAggregateInputType = {
    id?: true
    legajoId?: true
    entidad1?: true
    tipoEntidad1?: true
    relacion?: true
    entidad2?: true
    tipoEntidad2?: true
    confianza?: true
    evidenciaId?: true
    createdAt?: true
  }

  export type RedConexionesCountAggregateInputType = {
    id?: true
    legajoId?: true
    entidad1?: true
    tipoEntidad1?: true
    relacion?: true
    entidad2?: true
    tipoEntidad2?: true
    confianza?: true
    evidenciaId?: true
    createdAt?: true
    _all?: true
  }

  export type RedConexionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedConexiones to aggregate.
     */
    where?: RedConexionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedConexiones to fetch.
     */
    orderBy?: RedConexionesOrderByWithRelationInput | RedConexionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedConexionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedConexiones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedConexiones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedConexiones
    **/
    _count?: true | RedConexionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedConexionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedConexionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedConexionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedConexionesMaxAggregateInputType
  }

  export type GetRedConexionesAggregateType<T extends RedConexionesAggregateArgs> = {
        [P in keyof T & keyof AggregateRedConexiones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedConexiones[P]>
      : GetScalarType<T[P], AggregateRedConexiones[P]>
  }




  export type RedConexionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedConexionesWhereInput
    orderBy?: RedConexionesOrderByWithAggregationInput | RedConexionesOrderByWithAggregationInput[]
    by: RedConexionesScalarFieldEnum[] | RedConexionesScalarFieldEnum
    having?: RedConexionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedConexionesCountAggregateInputType | true
    _avg?: RedConexionesAvgAggregateInputType
    _sum?: RedConexionesSumAggregateInputType
    _min?: RedConexionesMinAggregateInputType
    _max?: RedConexionesMaxAggregateInputType
  }

  export type RedConexionesGroupByOutputType = {
    id: string
    legajoId: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza: number
    evidenciaId: string | null
    createdAt: Date
    _count: RedConexionesCountAggregateOutputType | null
    _avg: RedConexionesAvgAggregateOutputType | null
    _sum: RedConexionesSumAggregateOutputType | null
    _min: RedConexionesMinAggregateOutputType | null
    _max: RedConexionesMaxAggregateOutputType | null
  }

  type GetRedConexionesGroupByPayload<T extends RedConexionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedConexionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedConexionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedConexionesGroupByOutputType[P]>
            : GetScalarType<T[P], RedConexionesGroupByOutputType[P]>
        }
      >
    >


  export type RedConexionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajoId?: boolean
    entidad1?: boolean
    tipoEntidad1?: boolean
    relacion?: boolean
    entidad2?: boolean
    tipoEntidad2?: boolean
    confianza?: boolean
    evidenciaId?: boolean
    createdAt?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redConexiones"]>

  export type RedConexionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajoId?: boolean
    entidad1?: boolean
    tipoEntidad1?: boolean
    relacion?: boolean
    entidad2?: boolean
    tipoEntidad2?: boolean
    confianza?: boolean
    evidenciaId?: boolean
    createdAt?: boolean
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redConexiones"]>

  export type RedConexionesSelectScalar = {
    id?: boolean
    legajoId?: boolean
    entidad1?: boolean
    tipoEntidad1?: boolean
    relacion?: boolean
    entidad2?: boolean
    tipoEntidad2?: boolean
    confianza?: boolean
    evidenciaId?: boolean
    createdAt?: boolean
  }

  export type RedConexionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }
  export type RedConexionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legajo?: boolean | LegajoDefaultArgs<ExtArgs>
  }

  export type $RedConexionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RedConexiones"
    objects: {
      legajo: Prisma.$LegajoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      legajoId: string
      entidad1: string
      tipoEntidad1: string
      relacion: string
      entidad2: string
      tipoEntidad2: string
      confianza: number
      evidenciaId: string | null
      createdAt: Date
    }, ExtArgs["result"]["redConexiones"]>
    composites: {}
  }

  type RedConexionesGetPayload<S extends boolean | null | undefined | RedConexionesDefaultArgs> = $Result.GetResult<Prisma.$RedConexionesPayload, S>

  type RedConexionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RedConexionesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RedConexionesCountAggregateInputType | true
    }

  export interface RedConexionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedConexiones'], meta: { name: 'RedConexiones' } }
    /**
     * Find zero or one RedConexiones that matches the filter.
     * @param {RedConexionesFindUniqueArgs} args - Arguments to find a RedConexiones
     * @example
     * // Get one RedConexiones
     * const redConexiones = await prisma.redConexiones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedConexionesFindUniqueArgs>(args: SelectSubset<T, RedConexionesFindUniqueArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RedConexiones that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RedConexionesFindUniqueOrThrowArgs} args - Arguments to find a RedConexiones
     * @example
     * // Get one RedConexiones
     * const redConexiones = await prisma.redConexiones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedConexionesFindUniqueOrThrowArgs>(args: SelectSubset<T, RedConexionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RedConexiones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesFindFirstArgs} args - Arguments to find a RedConexiones
     * @example
     * // Get one RedConexiones
     * const redConexiones = await prisma.redConexiones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedConexionesFindFirstArgs>(args?: SelectSubset<T, RedConexionesFindFirstArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RedConexiones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesFindFirstOrThrowArgs} args - Arguments to find a RedConexiones
     * @example
     * // Get one RedConexiones
     * const redConexiones = await prisma.redConexiones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedConexionesFindFirstOrThrowArgs>(args?: SelectSubset<T, RedConexionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RedConexiones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedConexiones
     * const redConexiones = await prisma.redConexiones.findMany()
     * 
     * // Get first 10 RedConexiones
     * const redConexiones = await prisma.redConexiones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redConexionesWithIdOnly = await prisma.redConexiones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedConexionesFindManyArgs>(args?: SelectSubset<T, RedConexionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RedConexiones.
     * @param {RedConexionesCreateArgs} args - Arguments to create a RedConexiones.
     * @example
     * // Create one RedConexiones
     * const RedConexiones = await prisma.redConexiones.create({
     *   data: {
     *     // ... data to create a RedConexiones
     *   }
     * })
     * 
     */
    create<T extends RedConexionesCreateArgs>(args: SelectSubset<T, RedConexionesCreateArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RedConexiones.
     * @param {RedConexionesCreateManyArgs} args - Arguments to create many RedConexiones.
     * @example
     * // Create many RedConexiones
     * const redConexiones = await prisma.redConexiones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedConexionesCreateManyArgs>(args?: SelectSubset<T, RedConexionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RedConexiones and returns the data saved in the database.
     * @param {RedConexionesCreateManyAndReturnArgs} args - Arguments to create many RedConexiones.
     * @example
     * // Create many RedConexiones
     * const redConexiones = await prisma.redConexiones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RedConexiones and only return the `id`
     * const redConexionesWithIdOnly = await prisma.redConexiones.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedConexionesCreateManyAndReturnArgs>(args?: SelectSubset<T, RedConexionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RedConexiones.
     * @param {RedConexionesDeleteArgs} args - Arguments to delete one RedConexiones.
     * @example
     * // Delete one RedConexiones
     * const RedConexiones = await prisma.redConexiones.delete({
     *   where: {
     *     // ... filter to delete one RedConexiones
     *   }
     * })
     * 
     */
    delete<T extends RedConexionesDeleteArgs>(args: SelectSubset<T, RedConexionesDeleteArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RedConexiones.
     * @param {RedConexionesUpdateArgs} args - Arguments to update one RedConexiones.
     * @example
     * // Update one RedConexiones
     * const redConexiones = await prisma.redConexiones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedConexionesUpdateArgs>(args: SelectSubset<T, RedConexionesUpdateArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RedConexiones.
     * @param {RedConexionesDeleteManyArgs} args - Arguments to filter RedConexiones to delete.
     * @example
     * // Delete a few RedConexiones
     * const { count } = await prisma.redConexiones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedConexionesDeleteManyArgs>(args?: SelectSubset<T, RedConexionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedConexiones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedConexiones
     * const redConexiones = await prisma.redConexiones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedConexionesUpdateManyArgs>(args: SelectSubset<T, RedConexionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RedConexiones.
     * @param {RedConexionesUpsertArgs} args - Arguments to update or create a RedConexiones.
     * @example
     * // Update or create a RedConexiones
     * const redConexiones = await prisma.redConexiones.upsert({
     *   create: {
     *     // ... data to create a RedConexiones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedConexiones we want to update
     *   }
     * })
     */
    upsert<T extends RedConexionesUpsertArgs>(args: SelectSubset<T, RedConexionesUpsertArgs<ExtArgs>>): Prisma__RedConexionesClient<$Result.GetResult<Prisma.$RedConexionesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RedConexiones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesCountArgs} args - Arguments to filter RedConexiones to count.
     * @example
     * // Count the number of RedConexiones
     * const count = await prisma.redConexiones.count({
     *   where: {
     *     // ... the filter for the RedConexiones we want to count
     *   }
     * })
    **/
    count<T extends RedConexionesCountArgs>(
      args?: Subset<T, RedConexionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedConexionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedConexiones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RedConexionesAggregateArgs>(args: Subset<T, RedConexionesAggregateArgs>): Prisma.PrismaPromise<GetRedConexionesAggregateType<T>>

    /**
     * Group by RedConexiones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedConexionesGroupByArgs} args - Group by arguments.
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
      T extends RedConexionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedConexionesGroupByArgs['orderBy'] }
        : { orderBy?: RedConexionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RedConexionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedConexionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RedConexiones model
   */
  readonly fields: RedConexionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RedConexiones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedConexionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legajo<T extends LegajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegajoDefaultArgs<ExtArgs>>): Prisma__LegajoClient<$Result.GetResult<Prisma.$LegajoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RedConexiones model
   */ 
  interface RedConexionesFieldRefs {
    readonly id: FieldRef<"RedConexiones", 'String'>
    readonly legajoId: FieldRef<"RedConexiones", 'String'>
    readonly entidad1: FieldRef<"RedConexiones", 'String'>
    readonly tipoEntidad1: FieldRef<"RedConexiones", 'String'>
    readonly relacion: FieldRef<"RedConexiones", 'String'>
    readonly entidad2: FieldRef<"RedConexiones", 'String'>
    readonly tipoEntidad2: FieldRef<"RedConexiones", 'String'>
    readonly confianza: FieldRef<"RedConexiones", 'Int'>
    readonly evidenciaId: FieldRef<"RedConexiones", 'String'>
    readonly createdAt: FieldRef<"RedConexiones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RedConexiones findUnique
   */
  export type RedConexionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * Filter, which RedConexiones to fetch.
     */
    where: RedConexionesWhereUniqueInput
  }

  /**
   * RedConexiones findUniqueOrThrow
   */
  export type RedConexionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * Filter, which RedConexiones to fetch.
     */
    where: RedConexionesWhereUniqueInput
  }

  /**
   * RedConexiones findFirst
   */
  export type RedConexionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * Filter, which RedConexiones to fetch.
     */
    where?: RedConexionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedConexiones to fetch.
     */
    orderBy?: RedConexionesOrderByWithRelationInput | RedConexionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedConexiones.
     */
    cursor?: RedConexionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedConexiones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedConexiones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedConexiones.
     */
    distinct?: RedConexionesScalarFieldEnum | RedConexionesScalarFieldEnum[]
  }

  /**
   * RedConexiones findFirstOrThrow
   */
  export type RedConexionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * Filter, which RedConexiones to fetch.
     */
    where?: RedConexionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedConexiones to fetch.
     */
    orderBy?: RedConexionesOrderByWithRelationInput | RedConexionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedConexiones.
     */
    cursor?: RedConexionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedConexiones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedConexiones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedConexiones.
     */
    distinct?: RedConexionesScalarFieldEnum | RedConexionesScalarFieldEnum[]
  }

  /**
   * RedConexiones findMany
   */
  export type RedConexionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * Filter, which RedConexiones to fetch.
     */
    where?: RedConexionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedConexiones to fetch.
     */
    orderBy?: RedConexionesOrderByWithRelationInput | RedConexionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedConexiones.
     */
    cursor?: RedConexionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedConexiones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedConexiones.
     */
    skip?: number
    distinct?: RedConexionesScalarFieldEnum | RedConexionesScalarFieldEnum[]
  }

  /**
   * RedConexiones create
   */
  export type RedConexionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * The data needed to create a RedConexiones.
     */
    data: XOR<RedConexionesCreateInput, RedConexionesUncheckedCreateInput>
  }

  /**
   * RedConexiones createMany
   */
  export type RedConexionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedConexiones.
     */
    data: RedConexionesCreateManyInput | RedConexionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedConexiones createManyAndReturn
   */
  export type RedConexionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RedConexiones.
     */
    data: RedConexionesCreateManyInput | RedConexionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RedConexiones update
   */
  export type RedConexionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * The data needed to update a RedConexiones.
     */
    data: XOR<RedConexionesUpdateInput, RedConexionesUncheckedUpdateInput>
    /**
     * Choose, which RedConexiones to update.
     */
    where: RedConexionesWhereUniqueInput
  }

  /**
   * RedConexiones updateMany
   */
  export type RedConexionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedConexiones.
     */
    data: XOR<RedConexionesUpdateManyMutationInput, RedConexionesUncheckedUpdateManyInput>
    /**
     * Filter which RedConexiones to update
     */
    where?: RedConexionesWhereInput
  }

  /**
   * RedConexiones upsert
   */
  export type RedConexionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * The filter to search for the RedConexiones to update in case it exists.
     */
    where: RedConexionesWhereUniqueInput
    /**
     * In case the RedConexiones found by the `where` argument doesn't exist, create a new RedConexiones with this data.
     */
    create: XOR<RedConexionesCreateInput, RedConexionesUncheckedCreateInput>
    /**
     * In case the RedConexiones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedConexionesUpdateInput, RedConexionesUncheckedUpdateInput>
  }

  /**
   * RedConexiones delete
   */
  export type RedConexionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
    /**
     * Filter which RedConexiones to delete.
     */
    where: RedConexionesWhereUniqueInput
  }

  /**
   * RedConexiones deleteMany
   */
  export type RedConexionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedConexiones to delete
     */
    where?: RedConexionesWhereInput
  }

  /**
   * RedConexiones without action
   */
  export type RedConexionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedConexiones
     */
    select?: RedConexionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedConexionesInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    usuario: 'usuario',
    password: 'password',
    rol: 'rol',
    activo: 'activo',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const LegajoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    caratula: 'caratula',
    cuij: 'cuij',
    delito: 'delito',
    fechaHecho: 'fechaHecho',
    estado: 'estado',
    observaciones: 'observaciones',
    fiscal: 'fiscal',
    emailRespuesta: 'emailRespuesta',
    visto: 'visto',
    origenTipo: 'origenTipo',
    origenId: 'origenId',
    asignadoA: 'asignadoA',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId'
  };

  export type LegajoScalarFieldEnum = (typeof LegajoScalarFieldEnum)[keyof typeof LegajoScalarFieldEnum]


  export const VictimaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    dni: 'dni',
    telefono: 'telefono',
    email: 'email',
    legajoId: 'legajoId'
  };

  export type VictimaScalarFieldEnum = (typeof VictimaScalarFieldEnum)[keyof typeof VictimaScalarFieldEnum]


  export const DispositivoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    marca: 'marca',
    modelo: 'modelo',
    imei: 'imei',
    color: 'color',
    numeroLinea: 'numeroLinea',
    legajoId: 'legajoId'
  };

  export type DispositivoScalarFieldEnum = (typeof DispositivoScalarFieldEnum)[keyof typeof DispositivoScalarFieldEnum]


  export const OficioScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    operadora: 'operadora',
    tipo: 'tipo',
    fechaEnvio: 'fechaEnvio',
    fechaRespuesta: 'fechaRespuesta',
    estado: 'estado',
    urgencia: 'urgencia',
    observaciones: 'observaciones',
    columnas: 'columnas',
    tipoConsulta: 'tipoConsulta',
    numeroLinea: 'numeroLinea',
    imeiSeleccionado: 'imeiSeleccionado',
    createdAt: 'createdAt',
    legajoId: 'legajoId'
  };

  export type OficioScalarFieldEnum = (typeof OficioScalarFieldEnum)[keyof typeof OficioScalarFieldEnum]


  export const RespuestaScalarFieldEnum: {
    id: 'id',
    oficioId: 'oficioId',
    datos: 'datos',
    createdAt: 'createdAt'
  };

  export type RespuestaScalarFieldEnum = (typeof RespuestaScalarFieldEnum)[keyof typeof RespuestaScalarFieldEnum]


  export const FiscalScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cargo: 'cargo',
    fiscalia: 'fiscalia',
    secretario: 'secretario',
    dniSecretario: 'dniSecretario',
    dni: 'dni',
    email: 'email',
    emailSecretario: 'emailSecretario',
    direccion: 'direccion',
    telefono: 'telefono',
    telefonoMovil: 'telefonoMovil',
    activo: 'activo',
    createdAt: 'createdAt',
    usuarioId: 'usuarioId'
  };

  export type FiscalScalarFieldEnum = (typeof FiscalScalarFieldEnum)[keyof typeof FiscalScalarFieldEnum]


  export const ConfiguracionScalarFieldEnum: {
    id: 'id',
    emailRespuesta: 'emailRespuesta',
    diasAlertaMedia: 'diasAlertaMedia',
    diasAlertaAlta: 'diasAlertaAlta',
    diasAlertaCritica: 'diasAlertaCritica',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracionScalarFieldEnum = (typeof ConfiguracionScalarFieldEnum)[keyof typeof ConfiguracionScalarFieldEnum]


  export const RegistroTelefoniaScalarFieldEnum: {
    id: 'id',
    anio: 'anio',
    nroLegajo: 'nroLegajo',
    nroInterno: 'nroInterno',
    cuij: 'cuij',
    fechaHecho: 'fechaHecho',
    fechaIngreso: 'fechaIngreso',
    lugarHecho: 'lugarHecho',
    barrio: 'barrio',
    victima: 'victima',
    causa: 'causa',
    aparato: 'aparato',
    empresa: 'empresa',
    abonado: 'abonado',
    imei: 'imei',
    color: 'color',
    correo: 'correo',
    clave: 'clave',
    fiscal: 'fiscal',
    depOrigen: 'depOrigen',
    nroCom: 'nroCom',
    rpiComisaria: 'rpiComisaria',
    rpiCompleja: 'rpiCompleja',
    observaciones: 'observaciones',
    estadoLegajo: 'estadoLegajo',
    elevaciones: 'elevaciones',
    imputados: 'imputados',
    requisa: 'requisa',
    procedimientos: 'procedimientos',
    asignadoA: 'asignadoA',
    visto: 'visto',
    createdAt: 'createdAt'
  };

  export type RegistroTelefoniaScalarFieldEnum = (typeof RegistroTelefoniaScalarFieldEnum)[keyof typeof RegistroTelefoniaScalarFieldEnum]


  export const RegistroEstafaScalarFieldEnum: {
    id: 'id',
    nroInterno: 'nroInterno',
    cuij: 'cuij',
    fechaHecho: 'fechaHecho',
    fechaDenuncia: 'fechaDenuncia',
    dependencia: 'dependencia',
    nroLegajo: 'nroLegajo',
    recibido: 'recibido',
    victima: 'victima',
    telefonoVictima: 'telefonoVictima',
    caratula: 'caratula',
    fiscal: 'fiscal',
    ardid: 'ardid',
    seudonimo: 'seudonimo',
    telefonoReferencia: 'telefonoReferencia',
    nombreReferencia: 'nombreReferencia',
    imei: 'imei',
    otrosTelefonos: 'otrosTelefonos',
    cbu: 'cbu',
    titulares: 'titulares',
    filaExcel: 'filaExcel',
    otrosCbu: 'otrosCbu',
    estadoLegajo: 'estadoLegajo',
    complementos: 'complementos',
    asignadoA: 'asignadoA',
    visto: 'visto',
    createdAt: 'createdAt'
  };

  export type RegistroEstafaScalarFieldEnum = (typeof RegistroEstafaScalarFieldEnum)[keyof typeof RegistroEstafaScalarFieldEnum]


  export const ComentarioLegajoScalarFieldEnum: {
    id: 'id',
    legajoId: 'legajoId',
    usuarioId: 'usuarioId',
    texto: 'texto',
    createdAt: 'createdAt'
  };

  export type ComentarioLegajoScalarFieldEnum = (typeof ComentarioLegajoScalarFieldEnum)[keyof typeof ComentarioLegajoScalarFieldEnum]


  export const ArchivoLegajoScalarFieldEnum: {
    id: 'id',
    legajoId: 'legajoId',
    nombre: 'nombre',
    tipo: 'tipo',
    url: 'url',
    publicId: 'publicId',
    tamano: 'tamano',
    esAnalizable: 'esAnalizable',
    analisis: 'analisis',
    createdAt: 'createdAt'
  };

  export type ArchivoLegajoScalarFieldEnum = (typeof ArchivoLegajoScalarFieldEnum)[keyof typeof ArchivoLegajoScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    nivel: 'nivel',
    accion: 'accion',
    usuarioId: 'usuarioId',
    ip: 'ip',
    recurso: 'recurso',
    detalles: 'detalles',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const RedConexionesScalarFieldEnum: {
    id: 'id',
    legajoId: 'legajoId',
    entidad1: 'entidad1',
    tipoEntidad1: 'tipoEntidad1',
    relacion: 'relacion',
    entidad2: 'entidad2',
    tipoEntidad2: 'tipoEntidad2',
    confianza: 'confianza',
    evidenciaId: 'evidenciaId',
    createdAt: 'createdAt'
  };

  export type RedConexionesScalarFieldEnum = (typeof RedConexionesScalarFieldEnum)[keyof typeof RedConexionesScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    usuario?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    legajos?: LegajoListRelationFilter
    fiscales?: FiscalListRelationFilter
    comentarios?: ComentarioLegajoListRelationFilter
    sesiones?: SessionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    legajos?: LegajoOrderByRelationAggregateInput
    fiscales?: FiscalOrderByRelationAggregateInput
    comentarios?: ComentarioLegajoOrderByRelationAggregateInput
    sesiones?: SessionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuario?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    legajos?: LegajoListRelationFilter
    fiscales?: FiscalListRelationFilter
    comentarios?: ComentarioLegajoListRelationFilter
    sesiones?: SessionListRelationFilter
  }, "id" | "usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    usuario?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type LegajoWhereInput = {
    AND?: LegajoWhereInput | LegajoWhereInput[]
    OR?: LegajoWhereInput[]
    NOT?: LegajoWhereInput | LegajoWhereInput[]
    id?: StringFilter<"Legajo"> | string
    numero?: StringFilter<"Legajo"> | string
    caratula?: StringFilter<"Legajo"> | string
    cuij?: StringNullableFilter<"Legajo"> | string | null
    delito?: StringFilter<"Legajo"> | string
    fechaHecho?: DateTimeFilter<"Legajo"> | Date | string
    estado?: StringFilter<"Legajo"> | string
    observaciones?: StringNullableFilter<"Legajo"> | string | null
    fiscal?: StringNullableFilter<"Legajo"> | string | null
    emailRespuesta?: StringNullableFilter<"Legajo"> | string | null
    visto?: BoolFilter<"Legajo"> | boolean
    origenTipo?: StringNullableFilter<"Legajo"> | string | null
    origenId?: StringNullableFilter<"Legajo"> | string | null
    asignadoA?: StringNullableFilter<"Legajo"> | string | null
    createdAt?: DateTimeFilter<"Legajo"> | Date | string
    updatedAt?: DateTimeFilter<"Legajo"> | Date | string
    usuarioId?: StringFilter<"Legajo"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    victimas?: VictimaListRelationFilter
    dispositivos?: DispositivoListRelationFilter
    oficios?: OficioListRelationFilter
    archivos?: ArchivoLegajoListRelationFilter
    comentarios?: ComentarioLegajoListRelationFilter
    conexiones?: RedConexionesListRelationFilter
  }

  export type LegajoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    caratula?: SortOrder
    cuij?: SortOrderInput | SortOrder
    delito?: SortOrder
    fechaHecho?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fiscal?: SortOrderInput | SortOrder
    emailRespuesta?: SortOrderInput | SortOrder
    visto?: SortOrder
    origenTipo?: SortOrderInput | SortOrder
    origenId?: SortOrderInput | SortOrder
    asignadoA?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    victimas?: VictimaOrderByRelationAggregateInput
    dispositivos?: DispositivoOrderByRelationAggregateInput
    oficios?: OficioOrderByRelationAggregateInput
    archivos?: ArchivoLegajoOrderByRelationAggregateInput
    comentarios?: ComentarioLegajoOrderByRelationAggregateInput
    conexiones?: RedConexionesOrderByRelationAggregateInput
  }

  export type LegajoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero?: string
    AND?: LegajoWhereInput | LegajoWhereInput[]
    OR?: LegajoWhereInput[]
    NOT?: LegajoWhereInput | LegajoWhereInput[]
    caratula?: StringFilter<"Legajo"> | string
    cuij?: StringNullableFilter<"Legajo"> | string | null
    delito?: StringFilter<"Legajo"> | string
    fechaHecho?: DateTimeFilter<"Legajo"> | Date | string
    estado?: StringFilter<"Legajo"> | string
    observaciones?: StringNullableFilter<"Legajo"> | string | null
    fiscal?: StringNullableFilter<"Legajo"> | string | null
    emailRespuesta?: StringNullableFilter<"Legajo"> | string | null
    visto?: BoolFilter<"Legajo"> | boolean
    origenTipo?: StringNullableFilter<"Legajo"> | string | null
    origenId?: StringNullableFilter<"Legajo"> | string | null
    asignadoA?: StringNullableFilter<"Legajo"> | string | null
    createdAt?: DateTimeFilter<"Legajo"> | Date | string
    updatedAt?: DateTimeFilter<"Legajo"> | Date | string
    usuarioId?: StringFilter<"Legajo"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    victimas?: VictimaListRelationFilter
    dispositivos?: DispositivoListRelationFilter
    oficios?: OficioListRelationFilter
    archivos?: ArchivoLegajoListRelationFilter
    comentarios?: ComentarioLegajoListRelationFilter
    conexiones?: RedConexionesListRelationFilter
  }, "id" | "numero">

  export type LegajoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    caratula?: SortOrder
    cuij?: SortOrderInput | SortOrder
    delito?: SortOrder
    fechaHecho?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fiscal?: SortOrderInput | SortOrder
    emailRespuesta?: SortOrderInput | SortOrder
    visto?: SortOrder
    origenTipo?: SortOrderInput | SortOrder
    origenId?: SortOrderInput | SortOrder
    asignadoA?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    _count?: LegajoCountOrderByAggregateInput
    _max?: LegajoMaxOrderByAggregateInput
    _min?: LegajoMinOrderByAggregateInput
  }

  export type LegajoScalarWhereWithAggregatesInput = {
    AND?: LegajoScalarWhereWithAggregatesInput | LegajoScalarWhereWithAggregatesInput[]
    OR?: LegajoScalarWhereWithAggregatesInput[]
    NOT?: LegajoScalarWhereWithAggregatesInput | LegajoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Legajo"> | string
    numero?: StringWithAggregatesFilter<"Legajo"> | string
    caratula?: StringWithAggregatesFilter<"Legajo"> | string
    cuij?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    delito?: StringWithAggregatesFilter<"Legajo"> | string
    fechaHecho?: DateTimeWithAggregatesFilter<"Legajo"> | Date | string
    estado?: StringWithAggregatesFilter<"Legajo"> | string
    observaciones?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    fiscal?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    emailRespuesta?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    visto?: BoolWithAggregatesFilter<"Legajo"> | boolean
    origenTipo?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    origenId?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    asignadoA?: StringNullableWithAggregatesFilter<"Legajo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Legajo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Legajo"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Legajo"> | string
  }

  export type VictimaWhereInput = {
    AND?: VictimaWhereInput | VictimaWhereInput[]
    OR?: VictimaWhereInput[]
    NOT?: VictimaWhereInput | VictimaWhereInput[]
    id?: StringFilter<"Victima"> | string
    nombre?: StringFilter<"Victima"> | string
    dni?: StringNullableFilter<"Victima"> | string | null
    telefono?: StringNullableFilter<"Victima"> | string | null
    email?: StringNullableFilter<"Victima"> | string | null
    legajoId?: StringFilter<"Victima"> | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }

  export type VictimaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    legajoId?: SortOrder
    legajo?: LegajoOrderByWithRelationInput
  }

  export type VictimaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VictimaWhereInput | VictimaWhereInput[]
    OR?: VictimaWhereInput[]
    NOT?: VictimaWhereInput | VictimaWhereInput[]
    nombre?: StringFilter<"Victima"> | string
    dni?: StringNullableFilter<"Victima"> | string | null
    telefono?: StringNullableFilter<"Victima"> | string | null
    email?: StringNullableFilter<"Victima"> | string | null
    legajoId?: StringFilter<"Victima"> | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }, "id">

  export type VictimaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    dni?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    legajoId?: SortOrder
    _count?: VictimaCountOrderByAggregateInput
    _max?: VictimaMaxOrderByAggregateInput
    _min?: VictimaMinOrderByAggregateInput
  }

  export type VictimaScalarWhereWithAggregatesInput = {
    AND?: VictimaScalarWhereWithAggregatesInput | VictimaScalarWhereWithAggregatesInput[]
    OR?: VictimaScalarWhereWithAggregatesInput[]
    NOT?: VictimaScalarWhereWithAggregatesInput | VictimaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Victima"> | string
    nombre?: StringWithAggregatesFilter<"Victima"> | string
    dni?: StringNullableWithAggregatesFilter<"Victima"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Victima"> | string | null
    email?: StringNullableWithAggregatesFilter<"Victima"> | string | null
    legajoId?: StringWithAggregatesFilter<"Victima"> | string
  }

  export type DispositivoWhereInput = {
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    id?: StringFilter<"Dispositivo"> | string
    tipo?: StringFilter<"Dispositivo"> | string
    marca?: StringNullableFilter<"Dispositivo"> | string | null
    modelo?: StringNullableFilter<"Dispositivo"> | string | null
    imei?: StringNullableFilter<"Dispositivo"> | string | null
    color?: StringNullableFilter<"Dispositivo"> | string | null
    numeroLinea?: StringNullableFilter<"Dispositivo"> | string | null
    legajoId?: StringFilter<"Dispositivo"> | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }

  export type DispositivoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    numeroLinea?: SortOrderInput | SortOrder
    legajoId?: SortOrder
    legajo?: LegajoOrderByWithRelationInput
  }

  export type DispositivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    tipo?: StringFilter<"Dispositivo"> | string
    marca?: StringNullableFilter<"Dispositivo"> | string | null
    modelo?: StringNullableFilter<"Dispositivo"> | string | null
    imei?: StringNullableFilter<"Dispositivo"> | string | null
    color?: StringNullableFilter<"Dispositivo"> | string | null
    numeroLinea?: StringNullableFilter<"Dispositivo"> | string | null
    legajoId?: StringFilter<"Dispositivo"> | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }, "id">

  export type DispositivoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    numeroLinea?: SortOrderInput | SortOrder
    legajoId?: SortOrder
    _count?: DispositivoCountOrderByAggregateInput
    _max?: DispositivoMaxOrderByAggregateInput
    _min?: DispositivoMinOrderByAggregateInput
  }

  export type DispositivoScalarWhereWithAggregatesInput = {
    AND?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    OR?: DispositivoScalarWhereWithAggregatesInput[]
    NOT?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispositivo"> | string
    tipo?: StringWithAggregatesFilter<"Dispositivo"> | string
    marca?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    imei?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    color?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    numeroLinea?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    legajoId?: StringWithAggregatesFilter<"Dispositivo"> | string
  }

  export type OficioWhereInput = {
    AND?: OficioWhereInput | OficioWhereInput[]
    OR?: OficioWhereInput[]
    NOT?: OficioWhereInput | OficioWhereInput[]
    id?: StringFilter<"Oficio"> | string
    numero?: StringNullableFilter<"Oficio"> | string | null
    operadora?: StringFilter<"Oficio"> | string
    tipo?: StringFilter<"Oficio"> | string
    fechaEnvio?: DateTimeNullableFilter<"Oficio"> | Date | string | null
    fechaRespuesta?: DateTimeNullableFilter<"Oficio"> | Date | string | null
    estado?: StringFilter<"Oficio"> | string
    urgencia?: StringFilter<"Oficio"> | string
    observaciones?: StringNullableFilter<"Oficio"> | string | null
    columnas?: StringNullableFilter<"Oficio"> | string | null
    tipoConsulta?: StringNullableFilter<"Oficio"> | string | null
    numeroLinea?: StringNullableFilter<"Oficio"> | string | null
    imeiSeleccionado?: StringNullableFilter<"Oficio"> | string | null
    createdAt?: DateTimeFilter<"Oficio"> | Date | string
    legajoId?: StringFilter<"Oficio"> | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
    respuestas?: RespuestaListRelationFilter
  }

  export type OficioOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrderInput | SortOrder
    operadora?: SortOrder
    tipo?: SortOrder
    fechaEnvio?: SortOrderInput | SortOrder
    fechaRespuesta?: SortOrderInput | SortOrder
    estado?: SortOrder
    urgencia?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    columnas?: SortOrderInput | SortOrder
    tipoConsulta?: SortOrderInput | SortOrder
    numeroLinea?: SortOrderInput | SortOrder
    imeiSeleccionado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    legajoId?: SortOrder
    legajo?: LegajoOrderByWithRelationInput
    respuestas?: RespuestaOrderByRelationAggregateInput
  }

  export type OficioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OficioWhereInput | OficioWhereInput[]
    OR?: OficioWhereInput[]
    NOT?: OficioWhereInput | OficioWhereInput[]
    numero?: StringNullableFilter<"Oficio"> | string | null
    operadora?: StringFilter<"Oficio"> | string
    tipo?: StringFilter<"Oficio"> | string
    fechaEnvio?: DateTimeNullableFilter<"Oficio"> | Date | string | null
    fechaRespuesta?: DateTimeNullableFilter<"Oficio"> | Date | string | null
    estado?: StringFilter<"Oficio"> | string
    urgencia?: StringFilter<"Oficio"> | string
    observaciones?: StringNullableFilter<"Oficio"> | string | null
    columnas?: StringNullableFilter<"Oficio"> | string | null
    tipoConsulta?: StringNullableFilter<"Oficio"> | string | null
    numeroLinea?: StringNullableFilter<"Oficio"> | string | null
    imeiSeleccionado?: StringNullableFilter<"Oficio"> | string | null
    createdAt?: DateTimeFilter<"Oficio"> | Date | string
    legajoId?: StringFilter<"Oficio"> | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
    respuestas?: RespuestaListRelationFilter
  }, "id">

  export type OficioOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrderInput | SortOrder
    operadora?: SortOrder
    tipo?: SortOrder
    fechaEnvio?: SortOrderInput | SortOrder
    fechaRespuesta?: SortOrderInput | SortOrder
    estado?: SortOrder
    urgencia?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    columnas?: SortOrderInput | SortOrder
    tipoConsulta?: SortOrderInput | SortOrder
    numeroLinea?: SortOrderInput | SortOrder
    imeiSeleccionado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    legajoId?: SortOrder
    _count?: OficioCountOrderByAggregateInput
    _max?: OficioMaxOrderByAggregateInput
    _min?: OficioMinOrderByAggregateInput
  }

  export type OficioScalarWhereWithAggregatesInput = {
    AND?: OficioScalarWhereWithAggregatesInput | OficioScalarWhereWithAggregatesInput[]
    OR?: OficioScalarWhereWithAggregatesInput[]
    NOT?: OficioScalarWhereWithAggregatesInput | OficioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Oficio"> | string
    numero?: StringNullableWithAggregatesFilter<"Oficio"> | string | null
    operadora?: StringWithAggregatesFilter<"Oficio"> | string
    tipo?: StringWithAggregatesFilter<"Oficio"> | string
    fechaEnvio?: DateTimeNullableWithAggregatesFilter<"Oficio"> | Date | string | null
    fechaRespuesta?: DateTimeNullableWithAggregatesFilter<"Oficio"> | Date | string | null
    estado?: StringWithAggregatesFilter<"Oficio"> | string
    urgencia?: StringWithAggregatesFilter<"Oficio"> | string
    observaciones?: StringNullableWithAggregatesFilter<"Oficio"> | string | null
    columnas?: StringNullableWithAggregatesFilter<"Oficio"> | string | null
    tipoConsulta?: StringNullableWithAggregatesFilter<"Oficio"> | string | null
    numeroLinea?: StringNullableWithAggregatesFilter<"Oficio"> | string | null
    imeiSeleccionado?: StringNullableWithAggregatesFilter<"Oficio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Oficio"> | Date | string
    legajoId?: StringWithAggregatesFilter<"Oficio"> | string
  }

  export type RespuestaWhereInput = {
    AND?: RespuestaWhereInput | RespuestaWhereInput[]
    OR?: RespuestaWhereInput[]
    NOT?: RespuestaWhereInput | RespuestaWhereInput[]
    id?: StringFilter<"Respuesta"> | string
    oficioId?: StringFilter<"Respuesta"> | string
    datos?: StringFilter<"Respuesta"> | string
    createdAt?: DateTimeFilter<"Respuesta"> | Date | string
    oficio?: XOR<OficioRelationFilter, OficioWhereInput>
  }

  export type RespuestaOrderByWithRelationInput = {
    id?: SortOrder
    oficioId?: SortOrder
    datos?: SortOrder
    createdAt?: SortOrder
    oficio?: OficioOrderByWithRelationInput
  }

  export type RespuestaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RespuestaWhereInput | RespuestaWhereInput[]
    OR?: RespuestaWhereInput[]
    NOT?: RespuestaWhereInput | RespuestaWhereInput[]
    oficioId?: StringFilter<"Respuesta"> | string
    datos?: StringFilter<"Respuesta"> | string
    createdAt?: DateTimeFilter<"Respuesta"> | Date | string
    oficio?: XOR<OficioRelationFilter, OficioWhereInput>
  }, "id">

  export type RespuestaOrderByWithAggregationInput = {
    id?: SortOrder
    oficioId?: SortOrder
    datos?: SortOrder
    createdAt?: SortOrder
    _count?: RespuestaCountOrderByAggregateInput
    _max?: RespuestaMaxOrderByAggregateInput
    _min?: RespuestaMinOrderByAggregateInput
  }

  export type RespuestaScalarWhereWithAggregatesInput = {
    AND?: RespuestaScalarWhereWithAggregatesInput | RespuestaScalarWhereWithAggregatesInput[]
    OR?: RespuestaScalarWhereWithAggregatesInput[]
    NOT?: RespuestaScalarWhereWithAggregatesInput | RespuestaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Respuesta"> | string
    oficioId?: StringWithAggregatesFilter<"Respuesta"> | string
    datos?: StringWithAggregatesFilter<"Respuesta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Respuesta"> | Date | string
  }

  export type FiscalWhereInput = {
    AND?: FiscalWhereInput | FiscalWhereInput[]
    OR?: FiscalWhereInput[]
    NOT?: FiscalWhereInput | FiscalWhereInput[]
    id?: StringFilter<"Fiscal"> | string
    nombre?: StringFilter<"Fiscal"> | string
    cargo?: StringNullableFilter<"Fiscal"> | string | null
    fiscalia?: StringNullableFilter<"Fiscal"> | string | null
    secretario?: StringNullableFilter<"Fiscal"> | string | null
    dniSecretario?: StringNullableFilter<"Fiscal"> | string | null
    dni?: StringNullableFilter<"Fiscal"> | string | null
    email?: StringNullableFilter<"Fiscal"> | string | null
    emailSecretario?: StringNullableFilter<"Fiscal"> | string | null
    direccion?: StringNullableFilter<"Fiscal"> | string | null
    telefono?: StringNullableFilter<"Fiscal"> | string | null
    telefonoMovil?: StringNullableFilter<"Fiscal"> | string | null
    activo?: BoolFilter<"Fiscal"> | boolean
    createdAt?: DateTimeFilter<"Fiscal"> | Date | string
    usuarioId?: StringFilter<"Fiscal"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type FiscalOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrderInput | SortOrder
    fiscalia?: SortOrderInput | SortOrder
    secretario?: SortOrderInput | SortOrder
    dniSecretario?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailSecretario?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    telefonoMovil?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type FiscalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FiscalWhereInput | FiscalWhereInput[]
    OR?: FiscalWhereInput[]
    NOT?: FiscalWhereInput | FiscalWhereInput[]
    nombre?: StringFilter<"Fiscal"> | string
    cargo?: StringNullableFilter<"Fiscal"> | string | null
    fiscalia?: StringNullableFilter<"Fiscal"> | string | null
    secretario?: StringNullableFilter<"Fiscal"> | string | null
    dniSecretario?: StringNullableFilter<"Fiscal"> | string | null
    dni?: StringNullableFilter<"Fiscal"> | string | null
    email?: StringNullableFilter<"Fiscal"> | string | null
    emailSecretario?: StringNullableFilter<"Fiscal"> | string | null
    direccion?: StringNullableFilter<"Fiscal"> | string | null
    telefono?: StringNullableFilter<"Fiscal"> | string | null
    telefonoMovil?: StringNullableFilter<"Fiscal"> | string | null
    activo?: BoolFilter<"Fiscal"> | boolean
    createdAt?: DateTimeFilter<"Fiscal"> | Date | string
    usuarioId?: StringFilter<"Fiscal"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type FiscalOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrderInput | SortOrder
    fiscalia?: SortOrderInput | SortOrder
    secretario?: SortOrderInput | SortOrder
    dniSecretario?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailSecretario?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    telefonoMovil?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    _count?: FiscalCountOrderByAggregateInput
    _max?: FiscalMaxOrderByAggregateInput
    _min?: FiscalMinOrderByAggregateInput
  }

  export type FiscalScalarWhereWithAggregatesInput = {
    AND?: FiscalScalarWhereWithAggregatesInput | FiscalScalarWhereWithAggregatesInput[]
    OR?: FiscalScalarWhereWithAggregatesInput[]
    NOT?: FiscalScalarWhereWithAggregatesInput | FiscalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fiscal"> | string
    nombre?: StringWithAggregatesFilter<"Fiscal"> | string
    cargo?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    fiscalia?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    secretario?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    dniSecretario?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    dni?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    email?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    emailSecretario?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    telefonoMovil?: StringNullableWithAggregatesFilter<"Fiscal"> | string | null
    activo?: BoolWithAggregatesFilter<"Fiscal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Fiscal"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Fiscal"> | string
  }

  export type ConfiguracionWhereInput = {
    AND?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    OR?: ConfiguracionWhereInput[]
    NOT?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    id?: StringFilter<"Configuracion"> | string
    emailRespuesta?: StringFilter<"Configuracion"> | string
    diasAlertaMedia?: IntFilter<"Configuracion"> | number
    diasAlertaAlta?: IntFilter<"Configuracion"> | number
    diasAlertaCritica?: IntFilter<"Configuracion"> | number
    createdAt?: DateTimeFilter<"Configuracion"> | Date | string
    updatedAt?: DateTimeFilter<"Configuracion"> | Date | string
  }

  export type ConfiguracionOrderByWithRelationInput = {
    id?: SortOrder
    emailRespuesta?: SortOrder
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    OR?: ConfiguracionWhereInput[]
    NOT?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    emailRespuesta?: StringFilter<"Configuracion"> | string
    diasAlertaMedia?: IntFilter<"Configuracion"> | number
    diasAlertaAlta?: IntFilter<"Configuracion"> | number
    diasAlertaCritica?: IntFilter<"Configuracion"> | number
    createdAt?: DateTimeFilter<"Configuracion"> | Date | string
    updatedAt?: DateTimeFilter<"Configuracion"> | Date | string
  }, "id">

  export type ConfiguracionOrderByWithAggregationInput = {
    id?: SortOrder
    emailRespuesta?: SortOrder
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracionCountOrderByAggregateInput
    _avg?: ConfiguracionAvgOrderByAggregateInput
    _max?: ConfiguracionMaxOrderByAggregateInput
    _min?: ConfiguracionMinOrderByAggregateInput
    _sum?: ConfiguracionSumOrderByAggregateInput
  }

  export type ConfiguracionScalarWhereWithAggregatesInput = {
    AND?: ConfiguracionScalarWhereWithAggregatesInput | ConfiguracionScalarWhereWithAggregatesInput[]
    OR?: ConfiguracionScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracionScalarWhereWithAggregatesInput | ConfiguracionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuracion"> | string
    emailRespuesta?: StringWithAggregatesFilter<"Configuracion"> | string
    diasAlertaMedia?: IntWithAggregatesFilter<"Configuracion"> | number
    diasAlertaAlta?: IntWithAggregatesFilter<"Configuracion"> | number
    diasAlertaCritica?: IntWithAggregatesFilter<"Configuracion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Configuracion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Configuracion"> | Date | string
  }

  export type RegistroTelefoniaWhereInput = {
    AND?: RegistroTelefoniaWhereInput | RegistroTelefoniaWhereInput[]
    OR?: RegistroTelefoniaWhereInput[]
    NOT?: RegistroTelefoniaWhereInput | RegistroTelefoniaWhereInput[]
    id?: StringFilter<"RegistroTelefonia"> | string
    anio?: IntNullableFilter<"RegistroTelefonia"> | number | null
    nroLegajo?: StringNullableFilter<"RegistroTelefonia"> | string | null
    nroInterno?: IntNullableFilter<"RegistroTelefonia"> | number | null
    cuij?: StringNullableFilter<"RegistroTelefonia"> | string | null
    fechaHecho?: DateTimeNullableFilter<"RegistroTelefonia"> | Date | string | null
    fechaIngreso?: DateTimeNullableFilter<"RegistroTelefonia"> | Date | string | null
    lugarHecho?: StringNullableFilter<"RegistroTelefonia"> | string | null
    barrio?: StringNullableFilter<"RegistroTelefonia"> | string | null
    victima?: StringNullableFilter<"RegistroTelefonia"> | string | null
    causa?: StringNullableFilter<"RegistroTelefonia"> | string | null
    aparato?: StringNullableFilter<"RegistroTelefonia"> | string | null
    empresa?: StringNullableFilter<"RegistroTelefonia"> | string | null
    abonado?: StringNullableFilter<"RegistroTelefonia"> | string | null
    imei?: StringNullableFilter<"RegistroTelefonia"> | string | null
    color?: StringNullableFilter<"RegistroTelefonia"> | string | null
    correo?: StringNullableFilter<"RegistroTelefonia"> | string | null
    clave?: StringNullableFilter<"RegistroTelefonia"> | string | null
    fiscal?: StringNullableFilter<"RegistroTelefonia"> | string | null
    depOrigen?: StringNullableFilter<"RegistroTelefonia"> | string | null
    nroCom?: StringNullableFilter<"RegistroTelefonia"> | string | null
    rpiComisaria?: StringNullableFilter<"RegistroTelefonia"> | string | null
    rpiCompleja?: StringNullableFilter<"RegistroTelefonia"> | string | null
    observaciones?: StringNullableFilter<"RegistroTelefonia"> | string | null
    estadoLegajo?: StringNullableFilter<"RegistroTelefonia"> | string | null
    elevaciones?: StringNullableFilter<"RegistroTelefonia"> | string | null
    imputados?: StringNullableFilter<"RegistroTelefonia"> | string | null
    requisa?: StringNullableFilter<"RegistroTelefonia"> | string | null
    procedimientos?: StringNullableFilter<"RegistroTelefonia"> | string | null
    asignadoA?: StringNullableFilter<"RegistroTelefonia"> | string | null
    visto?: BoolFilter<"RegistroTelefonia"> | boolean
    createdAt?: DateTimeFilter<"RegistroTelefonia"> | Date | string
  }

  export type RegistroTelefoniaOrderByWithRelationInput = {
    id?: SortOrder
    anio?: SortOrderInput | SortOrder
    nroLegajo?: SortOrderInput | SortOrder
    nroInterno?: SortOrderInput | SortOrder
    cuij?: SortOrderInput | SortOrder
    fechaHecho?: SortOrderInput | SortOrder
    fechaIngreso?: SortOrderInput | SortOrder
    lugarHecho?: SortOrderInput | SortOrder
    barrio?: SortOrderInput | SortOrder
    victima?: SortOrderInput | SortOrder
    causa?: SortOrderInput | SortOrder
    aparato?: SortOrderInput | SortOrder
    empresa?: SortOrderInput | SortOrder
    abonado?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    clave?: SortOrderInput | SortOrder
    fiscal?: SortOrderInput | SortOrder
    depOrigen?: SortOrderInput | SortOrder
    nroCom?: SortOrderInput | SortOrder
    rpiComisaria?: SortOrderInput | SortOrder
    rpiCompleja?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    estadoLegajo?: SortOrderInput | SortOrder
    elevaciones?: SortOrderInput | SortOrder
    imputados?: SortOrderInput | SortOrder
    requisa?: SortOrderInput | SortOrder
    procedimientos?: SortOrderInput | SortOrder
    asignadoA?: SortOrderInput | SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroTelefoniaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroTelefoniaWhereInput | RegistroTelefoniaWhereInput[]
    OR?: RegistroTelefoniaWhereInput[]
    NOT?: RegistroTelefoniaWhereInput | RegistroTelefoniaWhereInput[]
    anio?: IntNullableFilter<"RegistroTelefonia"> | number | null
    nroLegajo?: StringNullableFilter<"RegistroTelefonia"> | string | null
    nroInterno?: IntNullableFilter<"RegistroTelefonia"> | number | null
    cuij?: StringNullableFilter<"RegistroTelefonia"> | string | null
    fechaHecho?: DateTimeNullableFilter<"RegistroTelefonia"> | Date | string | null
    fechaIngreso?: DateTimeNullableFilter<"RegistroTelefonia"> | Date | string | null
    lugarHecho?: StringNullableFilter<"RegistroTelefonia"> | string | null
    barrio?: StringNullableFilter<"RegistroTelefonia"> | string | null
    victima?: StringNullableFilter<"RegistroTelefonia"> | string | null
    causa?: StringNullableFilter<"RegistroTelefonia"> | string | null
    aparato?: StringNullableFilter<"RegistroTelefonia"> | string | null
    empresa?: StringNullableFilter<"RegistroTelefonia"> | string | null
    abonado?: StringNullableFilter<"RegistroTelefonia"> | string | null
    imei?: StringNullableFilter<"RegistroTelefonia"> | string | null
    color?: StringNullableFilter<"RegistroTelefonia"> | string | null
    correo?: StringNullableFilter<"RegistroTelefonia"> | string | null
    clave?: StringNullableFilter<"RegistroTelefonia"> | string | null
    fiscal?: StringNullableFilter<"RegistroTelefonia"> | string | null
    depOrigen?: StringNullableFilter<"RegistroTelefonia"> | string | null
    nroCom?: StringNullableFilter<"RegistroTelefonia"> | string | null
    rpiComisaria?: StringNullableFilter<"RegistroTelefonia"> | string | null
    rpiCompleja?: StringNullableFilter<"RegistroTelefonia"> | string | null
    observaciones?: StringNullableFilter<"RegistroTelefonia"> | string | null
    estadoLegajo?: StringNullableFilter<"RegistroTelefonia"> | string | null
    elevaciones?: StringNullableFilter<"RegistroTelefonia"> | string | null
    imputados?: StringNullableFilter<"RegistroTelefonia"> | string | null
    requisa?: StringNullableFilter<"RegistroTelefonia"> | string | null
    procedimientos?: StringNullableFilter<"RegistroTelefonia"> | string | null
    asignadoA?: StringNullableFilter<"RegistroTelefonia"> | string | null
    visto?: BoolFilter<"RegistroTelefonia"> | boolean
    createdAt?: DateTimeFilter<"RegistroTelefonia"> | Date | string
  }, "id">

  export type RegistroTelefoniaOrderByWithAggregationInput = {
    id?: SortOrder
    anio?: SortOrderInput | SortOrder
    nroLegajo?: SortOrderInput | SortOrder
    nroInterno?: SortOrderInput | SortOrder
    cuij?: SortOrderInput | SortOrder
    fechaHecho?: SortOrderInput | SortOrder
    fechaIngreso?: SortOrderInput | SortOrder
    lugarHecho?: SortOrderInput | SortOrder
    barrio?: SortOrderInput | SortOrder
    victima?: SortOrderInput | SortOrder
    causa?: SortOrderInput | SortOrder
    aparato?: SortOrderInput | SortOrder
    empresa?: SortOrderInput | SortOrder
    abonado?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    clave?: SortOrderInput | SortOrder
    fiscal?: SortOrderInput | SortOrder
    depOrigen?: SortOrderInput | SortOrder
    nroCom?: SortOrderInput | SortOrder
    rpiComisaria?: SortOrderInput | SortOrder
    rpiCompleja?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    estadoLegajo?: SortOrderInput | SortOrder
    elevaciones?: SortOrderInput | SortOrder
    imputados?: SortOrderInput | SortOrder
    requisa?: SortOrderInput | SortOrder
    procedimientos?: SortOrderInput | SortOrder
    asignadoA?: SortOrderInput | SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
    _count?: RegistroTelefoniaCountOrderByAggregateInput
    _avg?: RegistroTelefoniaAvgOrderByAggregateInput
    _max?: RegistroTelefoniaMaxOrderByAggregateInput
    _min?: RegistroTelefoniaMinOrderByAggregateInput
    _sum?: RegistroTelefoniaSumOrderByAggregateInput
  }

  export type RegistroTelefoniaScalarWhereWithAggregatesInput = {
    AND?: RegistroTelefoniaScalarWhereWithAggregatesInput | RegistroTelefoniaScalarWhereWithAggregatesInput[]
    OR?: RegistroTelefoniaScalarWhereWithAggregatesInput[]
    NOT?: RegistroTelefoniaScalarWhereWithAggregatesInput | RegistroTelefoniaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroTelefonia"> | string
    anio?: IntNullableWithAggregatesFilter<"RegistroTelefonia"> | number | null
    nroLegajo?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    nroInterno?: IntNullableWithAggregatesFilter<"RegistroTelefonia"> | number | null
    cuij?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    fechaHecho?: DateTimeNullableWithAggregatesFilter<"RegistroTelefonia"> | Date | string | null
    fechaIngreso?: DateTimeNullableWithAggregatesFilter<"RegistroTelefonia"> | Date | string | null
    lugarHecho?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    barrio?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    victima?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    causa?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    aparato?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    empresa?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    abonado?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    imei?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    color?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    correo?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    clave?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    fiscal?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    depOrigen?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    nroCom?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    rpiComisaria?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    rpiCompleja?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    estadoLegajo?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    elevaciones?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    imputados?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    requisa?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    procedimientos?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    asignadoA?: StringNullableWithAggregatesFilter<"RegistroTelefonia"> | string | null
    visto?: BoolWithAggregatesFilter<"RegistroTelefonia"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RegistroTelefonia"> | Date | string
  }

  export type RegistroEstafaWhereInput = {
    AND?: RegistroEstafaWhereInput | RegistroEstafaWhereInput[]
    OR?: RegistroEstafaWhereInput[]
    NOT?: RegistroEstafaWhereInput | RegistroEstafaWhereInput[]
    id?: StringFilter<"RegistroEstafa"> | string
    nroInterno?: IntNullableFilter<"RegistroEstafa"> | number | null
    cuij?: StringNullableFilter<"RegistroEstafa"> | string | null
    fechaHecho?: DateTimeNullableFilter<"RegistroEstafa"> | Date | string | null
    fechaDenuncia?: DateTimeNullableFilter<"RegistroEstafa"> | Date | string | null
    dependencia?: StringNullableFilter<"RegistroEstafa"> | string | null
    nroLegajo?: StringNullableFilter<"RegistroEstafa"> | string | null
    recibido?: DateTimeNullableFilter<"RegistroEstafa"> | Date | string | null
    victima?: StringNullableFilter<"RegistroEstafa"> | string | null
    telefonoVictima?: StringNullableFilter<"RegistroEstafa"> | string | null
    caratula?: StringNullableFilter<"RegistroEstafa"> | string | null
    fiscal?: StringNullableFilter<"RegistroEstafa"> | string | null
    ardid?: StringNullableFilter<"RegistroEstafa"> | string | null
    seudonimo?: StringNullableFilter<"RegistroEstafa"> | string | null
    telefonoReferencia?: StringNullableFilter<"RegistroEstafa"> | string | null
    nombreReferencia?: StringNullableFilter<"RegistroEstafa"> | string | null
    imei?: StringNullableFilter<"RegistroEstafa"> | string | null
    otrosTelefonos?: StringNullableFilter<"RegistroEstafa"> | string | null
    cbu?: StringNullableFilter<"RegistroEstafa"> | string | null
    titulares?: StringNullableFilter<"RegistroEstafa"> | string | null
    filaExcel?: IntNullableFilter<"RegistroEstafa"> | number | null
    otrosCbu?: StringNullableFilter<"RegistroEstafa"> | string | null
    estadoLegajo?: StringNullableFilter<"RegistroEstafa"> | string | null
    complementos?: StringNullableFilter<"RegistroEstafa"> | string | null
    asignadoA?: StringNullableFilter<"RegistroEstafa"> | string | null
    visto?: BoolFilter<"RegistroEstafa"> | boolean
    createdAt?: DateTimeFilter<"RegistroEstafa"> | Date | string
  }

  export type RegistroEstafaOrderByWithRelationInput = {
    id?: SortOrder
    nroInterno?: SortOrderInput | SortOrder
    cuij?: SortOrderInput | SortOrder
    fechaHecho?: SortOrderInput | SortOrder
    fechaDenuncia?: SortOrderInput | SortOrder
    dependencia?: SortOrderInput | SortOrder
    nroLegajo?: SortOrderInput | SortOrder
    recibido?: SortOrderInput | SortOrder
    victima?: SortOrderInput | SortOrder
    telefonoVictima?: SortOrderInput | SortOrder
    caratula?: SortOrderInput | SortOrder
    fiscal?: SortOrderInput | SortOrder
    ardid?: SortOrderInput | SortOrder
    seudonimo?: SortOrderInput | SortOrder
    telefonoReferencia?: SortOrderInput | SortOrder
    nombreReferencia?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    otrosTelefonos?: SortOrderInput | SortOrder
    cbu?: SortOrderInput | SortOrder
    titulares?: SortOrderInput | SortOrder
    filaExcel?: SortOrderInput | SortOrder
    otrosCbu?: SortOrderInput | SortOrder
    estadoLegajo?: SortOrderInput | SortOrder
    complementos?: SortOrderInput | SortOrder
    asignadoA?: SortOrderInput | SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroEstafaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroEstafaWhereInput | RegistroEstafaWhereInput[]
    OR?: RegistroEstafaWhereInput[]
    NOT?: RegistroEstafaWhereInput | RegistroEstafaWhereInput[]
    nroInterno?: IntNullableFilter<"RegistroEstafa"> | number | null
    cuij?: StringNullableFilter<"RegistroEstafa"> | string | null
    fechaHecho?: DateTimeNullableFilter<"RegistroEstafa"> | Date | string | null
    fechaDenuncia?: DateTimeNullableFilter<"RegistroEstafa"> | Date | string | null
    dependencia?: StringNullableFilter<"RegistroEstafa"> | string | null
    nroLegajo?: StringNullableFilter<"RegistroEstafa"> | string | null
    recibido?: DateTimeNullableFilter<"RegistroEstafa"> | Date | string | null
    victima?: StringNullableFilter<"RegistroEstafa"> | string | null
    telefonoVictima?: StringNullableFilter<"RegistroEstafa"> | string | null
    caratula?: StringNullableFilter<"RegistroEstafa"> | string | null
    fiscal?: StringNullableFilter<"RegistroEstafa"> | string | null
    ardid?: StringNullableFilter<"RegistroEstafa"> | string | null
    seudonimo?: StringNullableFilter<"RegistroEstafa"> | string | null
    telefonoReferencia?: StringNullableFilter<"RegistroEstafa"> | string | null
    nombreReferencia?: StringNullableFilter<"RegistroEstafa"> | string | null
    imei?: StringNullableFilter<"RegistroEstafa"> | string | null
    otrosTelefonos?: StringNullableFilter<"RegistroEstafa"> | string | null
    cbu?: StringNullableFilter<"RegistroEstafa"> | string | null
    titulares?: StringNullableFilter<"RegistroEstafa"> | string | null
    filaExcel?: IntNullableFilter<"RegistroEstafa"> | number | null
    otrosCbu?: StringNullableFilter<"RegistroEstafa"> | string | null
    estadoLegajo?: StringNullableFilter<"RegistroEstafa"> | string | null
    complementos?: StringNullableFilter<"RegistroEstafa"> | string | null
    asignadoA?: StringNullableFilter<"RegistroEstafa"> | string | null
    visto?: BoolFilter<"RegistroEstafa"> | boolean
    createdAt?: DateTimeFilter<"RegistroEstafa"> | Date | string
  }, "id">

  export type RegistroEstafaOrderByWithAggregationInput = {
    id?: SortOrder
    nroInterno?: SortOrderInput | SortOrder
    cuij?: SortOrderInput | SortOrder
    fechaHecho?: SortOrderInput | SortOrder
    fechaDenuncia?: SortOrderInput | SortOrder
    dependencia?: SortOrderInput | SortOrder
    nroLegajo?: SortOrderInput | SortOrder
    recibido?: SortOrderInput | SortOrder
    victima?: SortOrderInput | SortOrder
    telefonoVictima?: SortOrderInput | SortOrder
    caratula?: SortOrderInput | SortOrder
    fiscal?: SortOrderInput | SortOrder
    ardid?: SortOrderInput | SortOrder
    seudonimo?: SortOrderInput | SortOrder
    telefonoReferencia?: SortOrderInput | SortOrder
    nombreReferencia?: SortOrderInput | SortOrder
    imei?: SortOrderInput | SortOrder
    otrosTelefonos?: SortOrderInput | SortOrder
    cbu?: SortOrderInput | SortOrder
    titulares?: SortOrderInput | SortOrder
    filaExcel?: SortOrderInput | SortOrder
    otrosCbu?: SortOrderInput | SortOrder
    estadoLegajo?: SortOrderInput | SortOrder
    complementos?: SortOrderInput | SortOrder
    asignadoA?: SortOrderInput | SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
    _count?: RegistroEstafaCountOrderByAggregateInput
    _avg?: RegistroEstafaAvgOrderByAggregateInput
    _max?: RegistroEstafaMaxOrderByAggregateInput
    _min?: RegistroEstafaMinOrderByAggregateInput
    _sum?: RegistroEstafaSumOrderByAggregateInput
  }

  export type RegistroEstafaScalarWhereWithAggregatesInput = {
    AND?: RegistroEstafaScalarWhereWithAggregatesInput | RegistroEstafaScalarWhereWithAggregatesInput[]
    OR?: RegistroEstafaScalarWhereWithAggregatesInput[]
    NOT?: RegistroEstafaScalarWhereWithAggregatesInput | RegistroEstafaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroEstafa"> | string
    nroInterno?: IntNullableWithAggregatesFilter<"RegistroEstafa"> | number | null
    cuij?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    fechaHecho?: DateTimeNullableWithAggregatesFilter<"RegistroEstafa"> | Date | string | null
    fechaDenuncia?: DateTimeNullableWithAggregatesFilter<"RegistroEstafa"> | Date | string | null
    dependencia?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    nroLegajo?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    recibido?: DateTimeNullableWithAggregatesFilter<"RegistroEstafa"> | Date | string | null
    victima?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    telefonoVictima?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    caratula?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    fiscal?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    ardid?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    seudonimo?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    telefonoReferencia?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    nombreReferencia?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    imei?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    otrosTelefonos?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    cbu?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    titulares?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    filaExcel?: IntNullableWithAggregatesFilter<"RegistroEstafa"> | number | null
    otrosCbu?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    estadoLegajo?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    complementos?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    asignadoA?: StringNullableWithAggregatesFilter<"RegistroEstafa"> | string | null
    visto?: BoolWithAggregatesFilter<"RegistroEstafa"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RegistroEstafa"> | Date | string
  }

  export type ComentarioLegajoWhereInput = {
    AND?: ComentarioLegajoWhereInput | ComentarioLegajoWhereInput[]
    OR?: ComentarioLegajoWhereInput[]
    NOT?: ComentarioLegajoWhereInput | ComentarioLegajoWhereInput[]
    id?: StringFilter<"ComentarioLegajo"> | string
    legajoId?: StringFilter<"ComentarioLegajo"> | string
    usuarioId?: StringFilter<"ComentarioLegajo"> | string
    texto?: StringFilter<"ComentarioLegajo"> | string
    createdAt?: DateTimeFilter<"ComentarioLegajo"> | Date | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type ComentarioLegajoOrderByWithRelationInput = {
    id?: SortOrder
    legajoId?: SortOrder
    usuarioId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    legajo?: LegajoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ComentarioLegajoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComentarioLegajoWhereInput | ComentarioLegajoWhereInput[]
    OR?: ComentarioLegajoWhereInput[]
    NOT?: ComentarioLegajoWhereInput | ComentarioLegajoWhereInput[]
    legajoId?: StringFilter<"ComentarioLegajo"> | string
    usuarioId?: StringFilter<"ComentarioLegajo"> | string
    texto?: StringFilter<"ComentarioLegajo"> | string
    createdAt?: DateTimeFilter<"ComentarioLegajo"> | Date | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ComentarioLegajoOrderByWithAggregationInput = {
    id?: SortOrder
    legajoId?: SortOrder
    usuarioId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    _count?: ComentarioLegajoCountOrderByAggregateInput
    _max?: ComentarioLegajoMaxOrderByAggregateInput
    _min?: ComentarioLegajoMinOrderByAggregateInput
  }

  export type ComentarioLegajoScalarWhereWithAggregatesInput = {
    AND?: ComentarioLegajoScalarWhereWithAggregatesInput | ComentarioLegajoScalarWhereWithAggregatesInput[]
    OR?: ComentarioLegajoScalarWhereWithAggregatesInput[]
    NOT?: ComentarioLegajoScalarWhereWithAggregatesInput | ComentarioLegajoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ComentarioLegajo"> | string
    legajoId?: StringWithAggregatesFilter<"ComentarioLegajo"> | string
    usuarioId?: StringWithAggregatesFilter<"ComentarioLegajo"> | string
    texto?: StringWithAggregatesFilter<"ComentarioLegajo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ComentarioLegajo"> | Date | string
  }

  export type ArchivoLegajoWhereInput = {
    AND?: ArchivoLegajoWhereInput | ArchivoLegajoWhereInput[]
    OR?: ArchivoLegajoWhereInput[]
    NOT?: ArchivoLegajoWhereInput | ArchivoLegajoWhereInput[]
    id?: StringFilter<"ArchivoLegajo"> | string
    legajoId?: StringFilter<"ArchivoLegajo"> | string
    nombre?: StringFilter<"ArchivoLegajo"> | string
    tipo?: StringFilter<"ArchivoLegajo"> | string
    url?: StringFilter<"ArchivoLegajo"> | string
    publicId?: StringFilter<"ArchivoLegajo"> | string
    tamano?: IntNullableFilter<"ArchivoLegajo"> | number | null
    esAnalizable?: BoolFilter<"ArchivoLegajo"> | boolean
    analisis?: StringNullableFilter<"ArchivoLegajo"> | string | null
    createdAt?: DateTimeFilter<"ArchivoLegajo"> | Date | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }

  export type ArchivoLegajoOrderByWithRelationInput = {
    id?: SortOrder
    legajoId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    tamano?: SortOrderInput | SortOrder
    esAnalizable?: SortOrder
    analisis?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    legajo?: LegajoOrderByWithRelationInput
  }

  export type ArchivoLegajoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArchivoLegajoWhereInput | ArchivoLegajoWhereInput[]
    OR?: ArchivoLegajoWhereInput[]
    NOT?: ArchivoLegajoWhereInput | ArchivoLegajoWhereInput[]
    legajoId?: StringFilter<"ArchivoLegajo"> | string
    nombre?: StringFilter<"ArchivoLegajo"> | string
    tipo?: StringFilter<"ArchivoLegajo"> | string
    url?: StringFilter<"ArchivoLegajo"> | string
    publicId?: StringFilter<"ArchivoLegajo"> | string
    tamano?: IntNullableFilter<"ArchivoLegajo"> | number | null
    esAnalizable?: BoolFilter<"ArchivoLegajo"> | boolean
    analisis?: StringNullableFilter<"ArchivoLegajo"> | string | null
    createdAt?: DateTimeFilter<"ArchivoLegajo"> | Date | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }, "id">

  export type ArchivoLegajoOrderByWithAggregationInput = {
    id?: SortOrder
    legajoId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    tamano?: SortOrderInput | SortOrder
    esAnalizable?: SortOrder
    analisis?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ArchivoLegajoCountOrderByAggregateInput
    _avg?: ArchivoLegajoAvgOrderByAggregateInput
    _max?: ArchivoLegajoMaxOrderByAggregateInput
    _min?: ArchivoLegajoMinOrderByAggregateInput
    _sum?: ArchivoLegajoSumOrderByAggregateInput
  }

  export type ArchivoLegajoScalarWhereWithAggregatesInput = {
    AND?: ArchivoLegajoScalarWhereWithAggregatesInput | ArchivoLegajoScalarWhereWithAggregatesInput[]
    OR?: ArchivoLegajoScalarWhereWithAggregatesInput[]
    NOT?: ArchivoLegajoScalarWhereWithAggregatesInput | ArchivoLegajoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArchivoLegajo"> | string
    legajoId?: StringWithAggregatesFilter<"ArchivoLegajo"> | string
    nombre?: StringWithAggregatesFilter<"ArchivoLegajo"> | string
    tipo?: StringWithAggregatesFilter<"ArchivoLegajo"> | string
    url?: StringWithAggregatesFilter<"ArchivoLegajo"> | string
    publicId?: StringWithAggregatesFilter<"ArchivoLegajo"> | string
    tamano?: IntNullableWithAggregatesFilter<"ArchivoLegajo"> | number | null
    esAnalizable?: BoolWithAggregatesFilter<"ArchivoLegajo"> | boolean
    analisis?: StringNullableWithAggregatesFilter<"ArchivoLegajo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ArchivoLegajo"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    nivel?: StringFilter<"AuditLog"> | string
    accion?: StringFilter<"AuditLog"> | string
    usuarioId?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    recurso?: StringNullableFilter<"AuditLog"> | string | null
    detalles?: StringNullableFilter<"AuditLog"> | string | null
    error?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    nivel?: SortOrder
    accion?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    recurso?: SortOrderInput | SortOrder
    detalles?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    nivel?: StringFilter<"AuditLog"> | string
    accion?: StringFilter<"AuditLog"> | string
    usuarioId?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    recurso?: StringNullableFilter<"AuditLog"> | string | null
    detalles?: StringNullableFilter<"AuditLog"> | string | null
    error?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    nivel?: SortOrder
    accion?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    recurso?: SortOrderInput | SortOrder
    detalles?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    nivel?: StringWithAggregatesFilter<"AuditLog"> | string
    accion?: StringWithAggregatesFilter<"AuditLog"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ip?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    recurso?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    detalles?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    error?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type RedConexionesWhereInput = {
    AND?: RedConexionesWhereInput | RedConexionesWhereInput[]
    OR?: RedConexionesWhereInput[]
    NOT?: RedConexionesWhereInput | RedConexionesWhereInput[]
    id?: StringFilter<"RedConexiones"> | string
    legajoId?: StringFilter<"RedConexiones"> | string
    entidad1?: StringFilter<"RedConexiones"> | string
    tipoEntidad1?: StringFilter<"RedConexiones"> | string
    relacion?: StringFilter<"RedConexiones"> | string
    entidad2?: StringFilter<"RedConexiones"> | string
    tipoEntidad2?: StringFilter<"RedConexiones"> | string
    confianza?: IntFilter<"RedConexiones"> | number
    evidenciaId?: StringNullableFilter<"RedConexiones"> | string | null
    createdAt?: DateTimeFilter<"RedConexiones"> | Date | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }

  export type RedConexionesOrderByWithRelationInput = {
    id?: SortOrder
    legajoId?: SortOrder
    entidad1?: SortOrder
    tipoEntidad1?: SortOrder
    relacion?: SortOrder
    entidad2?: SortOrder
    tipoEntidad2?: SortOrder
    confianza?: SortOrder
    evidenciaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    legajo?: LegajoOrderByWithRelationInput
  }

  export type RedConexionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RedConexionesWhereInput | RedConexionesWhereInput[]
    OR?: RedConexionesWhereInput[]
    NOT?: RedConexionesWhereInput | RedConexionesWhereInput[]
    legajoId?: StringFilter<"RedConexiones"> | string
    entidad1?: StringFilter<"RedConexiones"> | string
    tipoEntidad1?: StringFilter<"RedConexiones"> | string
    relacion?: StringFilter<"RedConexiones"> | string
    entidad2?: StringFilter<"RedConexiones"> | string
    tipoEntidad2?: StringFilter<"RedConexiones"> | string
    confianza?: IntFilter<"RedConexiones"> | number
    evidenciaId?: StringNullableFilter<"RedConexiones"> | string | null
    createdAt?: DateTimeFilter<"RedConexiones"> | Date | string
    legajo?: XOR<LegajoRelationFilter, LegajoWhereInput>
  }, "id">

  export type RedConexionesOrderByWithAggregationInput = {
    id?: SortOrder
    legajoId?: SortOrder
    entidad1?: SortOrder
    tipoEntidad1?: SortOrder
    relacion?: SortOrder
    entidad2?: SortOrder
    tipoEntidad2?: SortOrder
    confianza?: SortOrder
    evidenciaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RedConexionesCountOrderByAggregateInput
    _avg?: RedConexionesAvgOrderByAggregateInput
    _max?: RedConexionesMaxOrderByAggregateInput
    _min?: RedConexionesMinOrderByAggregateInput
    _sum?: RedConexionesSumOrderByAggregateInput
  }

  export type RedConexionesScalarWhereWithAggregatesInput = {
    AND?: RedConexionesScalarWhereWithAggregatesInput | RedConexionesScalarWhereWithAggregatesInput[]
    OR?: RedConexionesScalarWhereWithAggregatesInput[]
    NOT?: RedConexionesScalarWhereWithAggregatesInput | RedConexionesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RedConexiones"> | string
    legajoId?: StringWithAggregatesFilter<"RedConexiones"> | string
    entidad1?: StringWithAggregatesFilter<"RedConexiones"> | string
    tipoEntidad1?: StringWithAggregatesFilter<"RedConexiones"> | string
    relacion?: StringWithAggregatesFilter<"RedConexiones"> | string
    entidad2?: StringWithAggregatesFilter<"RedConexiones"> | string
    tipoEntidad2?: StringWithAggregatesFilter<"RedConexiones"> | string
    confianza?: IntWithAggregatesFilter<"RedConexiones"> | number
    evidenciaId?: StringNullableWithAggregatesFilter<"RedConexiones"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RedConexiones"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoCreateNestedManyWithoutUsuarioInput
    fiscales?: FiscalCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoUncheckedCreateNestedManyWithoutUsuarioInput
    fiscales?: FiscalUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUpdateManyWithoutUsuarioNestedInput
    fiscales?: FiscalUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    fiscales?: FiscalUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    usuario: UsuarioCreateNestedOneWithoutSesionesInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegajoCreateInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoCreateManyInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
  }

  export type LegajoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegajoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type VictimaCreateInput = {
    id?: string
    nombre: string
    dni?: string | null
    telefono?: string | null
    email?: string | null
    legajo: LegajoCreateNestedOneWithoutVictimasInput
  }

  export type VictimaUncheckedCreateInput = {
    id?: string
    nombre: string
    dni?: string | null
    telefono?: string | null
    email?: string | null
    legajoId: string
  }

  export type VictimaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    legajo?: LegajoUpdateOneRequiredWithoutVictimasNestedInput
  }

  export type VictimaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    legajoId?: StringFieldUpdateOperationsInput | string
  }

  export type VictimaCreateManyInput = {
    id?: string
    nombre: string
    dni?: string | null
    telefono?: string | null
    email?: string | null
    legajoId: string
  }

  export type VictimaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VictimaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    legajoId?: StringFieldUpdateOperationsInput | string
  }

  export type DispositivoCreateInput = {
    id?: string
    tipo: string
    marca?: string | null
    modelo?: string | null
    imei?: string | null
    color?: string | null
    numeroLinea?: string | null
    legajo: LegajoCreateNestedOneWithoutDispositivosInput
  }

  export type DispositivoUncheckedCreateInput = {
    id?: string
    tipo: string
    marca?: string | null
    modelo?: string | null
    imei?: string | null
    color?: string | null
    numeroLinea?: string | null
    legajoId: string
  }

  export type DispositivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    legajo?: LegajoUpdateOneRequiredWithoutDispositivosNestedInput
  }

  export type DispositivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    legajoId?: StringFieldUpdateOperationsInput | string
  }

  export type DispositivoCreateManyInput = {
    id?: string
    tipo: string
    marca?: string | null
    modelo?: string | null
    imei?: string | null
    color?: string | null
    numeroLinea?: string | null
    legajoId: string
  }

  export type DispositivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    legajoId?: StringFieldUpdateOperationsInput | string
  }

  export type OficioCreateInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    legajo: LegajoCreateNestedOneWithoutOficiosInput
    respuestas?: RespuestaCreateNestedManyWithoutOficioInput
  }

  export type OficioUncheckedCreateInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    legajoId: string
    respuestas?: RespuestaUncheckedCreateNestedManyWithoutOficioInput
  }

  export type OficioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajo?: LegajoUpdateOneRequiredWithoutOficiosNestedInput
    respuestas?: RespuestaUpdateManyWithoutOficioNestedInput
  }

  export type OficioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoId?: StringFieldUpdateOperationsInput | string
    respuestas?: RespuestaUncheckedUpdateManyWithoutOficioNestedInput
  }

  export type OficioCreateManyInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    legajoId: string
  }

  export type OficioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OficioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaCreateInput = {
    id?: string
    datos: string
    createdAt?: Date | string
    oficio: OficioCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaUncheckedCreateInput = {
    id?: string
    oficioId: string
    datos: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oficio?: OficioUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oficioId?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateManyInput = {
    id?: string
    oficioId: string
    datos: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oficioId?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalCreateInput = {
    id?: string
    nombre: string
    cargo?: string | null
    fiscalia?: string | null
    secretario?: string | null
    dniSecretario?: string | null
    dni?: string | null
    email?: string | null
    emailSecretario?: string | null
    direccion?: string | null
    telefono?: string | null
    telefonoMovil?: string | null
    activo?: boolean
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFiscalesInput
  }

  export type FiscalUncheckedCreateInput = {
    id?: string
    nombre: string
    cargo?: string | null
    fiscalia?: string | null
    secretario?: string | null
    dniSecretario?: string | null
    dni?: string | null
    email?: string | null
    emailSecretario?: string | null
    direccion?: string | null
    telefono?: string | null
    telefonoMovil?: string | null
    activo?: boolean
    createdAt?: Date | string
    usuarioId: string
  }

  export type FiscalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFiscalesNestedInput
  }

  export type FiscalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type FiscalCreateManyInput = {
    id?: string
    nombre: string
    cargo?: string | null
    fiscalia?: string | null
    secretario?: string | null
    dniSecretario?: string | null
    dni?: string | null
    email?: string | null
    emailSecretario?: string | null
    direccion?: string | null
    telefono?: string | null
    telefonoMovil?: string | null
    activo?: boolean
    createdAt?: Date | string
    usuarioId: string
  }

  export type FiscalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ConfiguracionCreateInput = {
    id?: string
    emailRespuesta?: string
    diasAlertaMedia?: number
    diasAlertaAlta?: number
    diasAlertaCritica?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionUncheckedCreateInput = {
    id?: string
    emailRespuesta?: string
    diasAlertaMedia?: number
    diasAlertaAlta?: number
    diasAlertaCritica?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailRespuesta?: StringFieldUpdateOperationsInput | string
    diasAlertaMedia?: IntFieldUpdateOperationsInput | number
    diasAlertaAlta?: IntFieldUpdateOperationsInput | number
    diasAlertaCritica?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailRespuesta?: StringFieldUpdateOperationsInput | string
    diasAlertaMedia?: IntFieldUpdateOperationsInput | number
    diasAlertaAlta?: IntFieldUpdateOperationsInput | number
    diasAlertaCritica?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionCreateManyInput = {
    id?: string
    emailRespuesta?: string
    diasAlertaMedia?: number
    diasAlertaAlta?: number
    diasAlertaCritica?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailRespuesta?: StringFieldUpdateOperationsInput | string
    diasAlertaMedia?: IntFieldUpdateOperationsInput | number
    diasAlertaAlta?: IntFieldUpdateOperationsInput | number
    diasAlertaCritica?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailRespuesta?: StringFieldUpdateOperationsInput | string
    diasAlertaMedia?: IntFieldUpdateOperationsInput | number
    diasAlertaAlta?: IntFieldUpdateOperationsInput | number
    diasAlertaCritica?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTelefoniaCreateInput = {
    id?: string
    anio?: number | null
    nroLegajo?: string | null
    nroInterno?: number | null
    cuij?: string | null
    fechaHecho?: Date | string | null
    fechaIngreso?: Date | string | null
    lugarHecho?: string | null
    barrio?: string | null
    victima?: string | null
    causa?: string | null
    aparato?: string | null
    empresa?: string | null
    abonado?: string | null
    imei?: string | null
    color?: string | null
    correo?: string | null
    clave?: string | null
    fiscal?: string | null
    depOrigen?: string | null
    nroCom?: string | null
    rpiComisaria?: string | null
    rpiCompleja?: string | null
    observaciones?: string | null
    estadoLegajo?: string | null
    elevaciones?: string | null
    imputados?: string | null
    requisa?: string | null
    procedimientos?: string | null
    asignadoA?: string | null
    visto?: boolean
    createdAt?: Date | string
  }

  export type RegistroTelefoniaUncheckedCreateInput = {
    id?: string
    anio?: number | null
    nroLegajo?: string | null
    nroInterno?: number | null
    cuij?: string | null
    fechaHecho?: Date | string | null
    fechaIngreso?: Date | string | null
    lugarHecho?: string | null
    barrio?: string | null
    victima?: string | null
    causa?: string | null
    aparato?: string | null
    empresa?: string | null
    abonado?: string | null
    imei?: string | null
    color?: string | null
    correo?: string | null
    clave?: string | null
    fiscal?: string | null
    depOrigen?: string | null
    nroCom?: string | null
    rpiComisaria?: string | null
    rpiCompleja?: string | null
    observaciones?: string | null
    estadoLegajo?: string | null
    elevaciones?: string | null
    imputados?: string | null
    requisa?: string | null
    procedimientos?: string | null
    asignadoA?: string | null
    visto?: boolean
    createdAt?: Date | string
  }

  export type RegistroTelefoniaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugarHecho?: NullableStringFieldUpdateOperationsInput | string | null
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    causa?: NullableStringFieldUpdateOperationsInput | string | null
    aparato?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    abonado?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    depOrigen?: NullableStringFieldUpdateOperationsInput | string | null
    nroCom?: NullableStringFieldUpdateOperationsInput | string | null
    rpiComisaria?: NullableStringFieldUpdateOperationsInput | string | null
    rpiCompleja?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    elevaciones?: NullableStringFieldUpdateOperationsInput | string | null
    imputados?: NullableStringFieldUpdateOperationsInput | string | null
    requisa?: NullableStringFieldUpdateOperationsInput | string | null
    procedimientos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTelefoniaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugarHecho?: NullableStringFieldUpdateOperationsInput | string | null
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    causa?: NullableStringFieldUpdateOperationsInput | string | null
    aparato?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    abonado?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    depOrigen?: NullableStringFieldUpdateOperationsInput | string | null
    nroCom?: NullableStringFieldUpdateOperationsInput | string | null
    rpiComisaria?: NullableStringFieldUpdateOperationsInput | string | null
    rpiCompleja?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    elevaciones?: NullableStringFieldUpdateOperationsInput | string | null
    imputados?: NullableStringFieldUpdateOperationsInput | string | null
    requisa?: NullableStringFieldUpdateOperationsInput | string | null
    procedimientos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTelefoniaCreateManyInput = {
    id?: string
    anio?: number | null
    nroLegajo?: string | null
    nroInterno?: number | null
    cuij?: string | null
    fechaHecho?: Date | string | null
    fechaIngreso?: Date | string | null
    lugarHecho?: string | null
    barrio?: string | null
    victima?: string | null
    causa?: string | null
    aparato?: string | null
    empresa?: string | null
    abonado?: string | null
    imei?: string | null
    color?: string | null
    correo?: string | null
    clave?: string | null
    fiscal?: string | null
    depOrigen?: string | null
    nroCom?: string | null
    rpiComisaria?: string | null
    rpiCompleja?: string | null
    observaciones?: string | null
    estadoLegajo?: string | null
    elevaciones?: string | null
    imputados?: string | null
    requisa?: string | null
    procedimientos?: string | null
    asignadoA?: string | null
    visto?: boolean
    createdAt?: Date | string
  }

  export type RegistroTelefoniaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugarHecho?: NullableStringFieldUpdateOperationsInput | string | null
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    causa?: NullableStringFieldUpdateOperationsInput | string | null
    aparato?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    abonado?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    depOrigen?: NullableStringFieldUpdateOperationsInput | string | null
    nroCom?: NullableStringFieldUpdateOperationsInput | string | null
    rpiComisaria?: NullableStringFieldUpdateOperationsInput | string | null
    rpiCompleja?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    elevaciones?: NullableStringFieldUpdateOperationsInput | string | null
    imputados?: NullableStringFieldUpdateOperationsInput | string | null
    requisa?: NullableStringFieldUpdateOperationsInput | string | null
    procedimientos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTelefoniaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaIngreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugarHecho?: NullableStringFieldUpdateOperationsInput | string | null
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    causa?: NullableStringFieldUpdateOperationsInput | string | null
    aparato?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    abonado?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    depOrigen?: NullableStringFieldUpdateOperationsInput | string | null
    nroCom?: NullableStringFieldUpdateOperationsInput | string | null
    rpiComisaria?: NullableStringFieldUpdateOperationsInput | string | null
    rpiCompleja?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    elevaciones?: NullableStringFieldUpdateOperationsInput | string | null
    imputados?: NullableStringFieldUpdateOperationsInput | string | null
    requisa?: NullableStringFieldUpdateOperationsInput | string | null
    procedimientos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEstafaCreateInput = {
    id?: string
    nroInterno?: number | null
    cuij?: string | null
    fechaHecho?: Date | string | null
    fechaDenuncia?: Date | string | null
    dependencia?: string | null
    nroLegajo?: string | null
    recibido?: Date | string | null
    victima?: string | null
    telefonoVictima?: string | null
    caratula?: string | null
    fiscal?: string | null
    ardid?: string | null
    seudonimo?: string | null
    telefonoReferencia?: string | null
    nombreReferencia?: string | null
    imei?: string | null
    otrosTelefonos?: string | null
    cbu?: string | null
    titulares?: string | null
    filaExcel?: number | null
    otrosCbu?: string | null
    estadoLegajo?: string | null
    complementos?: string | null
    asignadoA?: string | null
    visto?: boolean
    createdAt?: Date | string
  }

  export type RegistroEstafaUncheckedCreateInput = {
    id?: string
    nroInterno?: number | null
    cuij?: string | null
    fechaHecho?: Date | string | null
    fechaDenuncia?: Date | string | null
    dependencia?: string | null
    nroLegajo?: string | null
    recibido?: Date | string | null
    victima?: string | null
    telefonoVictima?: string | null
    caratula?: string | null
    fiscal?: string | null
    ardid?: string | null
    seudonimo?: string | null
    telefonoReferencia?: string | null
    nombreReferencia?: string | null
    imei?: string | null
    otrosTelefonos?: string | null
    cbu?: string | null
    titulares?: string | null
    filaExcel?: number | null
    otrosCbu?: string | null
    estadoLegajo?: string | null
    complementos?: string | null
    asignadoA?: string | null
    visto?: boolean
    createdAt?: Date | string
  }

  export type RegistroEstafaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDenuncia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependencia?: NullableStringFieldUpdateOperationsInput | string | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoVictima?: NullableStringFieldUpdateOperationsInput | string | null
    caratula?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    ardid?: NullableStringFieldUpdateOperationsInput | string | null
    seudonimo?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    otrosTelefonos?: NullableStringFieldUpdateOperationsInput | string | null
    cbu?: NullableStringFieldUpdateOperationsInput | string | null
    titulares?: NullableStringFieldUpdateOperationsInput | string | null
    filaExcel?: NullableIntFieldUpdateOperationsInput | number | null
    otrosCbu?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    complementos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEstafaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDenuncia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependencia?: NullableStringFieldUpdateOperationsInput | string | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoVictima?: NullableStringFieldUpdateOperationsInput | string | null
    caratula?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    ardid?: NullableStringFieldUpdateOperationsInput | string | null
    seudonimo?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    otrosTelefonos?: NullableStringFieldUpdateOperationsInput | string | null
    cbu?: NullableStringFieldUpdateOperationsInput | string | null
    titulares?: NullableStringFieldUpdateOperationsInput | string | null
    filaExcel?: NullableIntFieldUpdateOperationsInput | number | null
    otrosCbu?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    complementos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEstafaCreateManyInput = {
    id?: string
    nroInterno?: number | null
    cuij?: string | null
    fechaHecho?: Date | string | null
    fechaDenuncia?: Date | string | null
    dependencia?: string | null
    nroLegajo?: string | null
    recibido?: Date | string | null
    victima?: string | null
    telefonoVictima?: string | null
    caratula?: string | null
    fiscal?: string | null
    ardid?: string | null
    seudonimo?: string | null
    telefonoReferencia?: string | null
    nombreReferencia?: string | null
    imei?: string | null
    otrosTelefonos?: string | null
    cbu?: string | null
    titulares?: string | null
    filaExcel?: number | null
    otrosCbu?: string | null
    estadoLegajo?: string | null
    complementos?: string | null
    asignadoA?: string | null
    visto?: boolean
    createdAt?: Date | string
  }

  export type RegistroEstafaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDenuncia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependencia?: NullableStringFieldUpdateOperationsInput | string | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoVictima?: NullableStringFieldUpdateOperationsInput | string | null
    caratula?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    ardid?: NullableStringFieldUpdateOperationsInput | string | null
    seudonimo?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    otrosTelefonos?: NullableStringFieldUpdateOperationsInput | string | null
    cbu?: NullableStringFieldUpdateOperationsInput | string | null
    titulares?: NullableStringFieldUpdateOperationsInput | string | null
    filaExcel?: NullableIntFieldUpdateOperationsInput | number | null
    otrosCbu?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    complementos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEstafaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nroInterno?: NullableIntFieldUpdateOperationsInput | number | null
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHecho?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaDenuncia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependencia?: NullableStringFieldUpdateOperationsInput | string | null
    nroLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    recibido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    victima?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoVictima?: NullableStringFieldUpdateOperationsInput | string | null
    caratula?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    ardid?: NullableStringFieldUpdateOperationsInput | string | null
    seudonimo?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    otrosTelefonos?: NullableStringFieldUpdateOperationsInput | string | null
    cbu?: NullableStringFieldUpdateOperationsInput | string | null
    titulares?: NullableStringFieldUpdateOperationsInput | string | null
    filaExcel?: NullableIntFieldUpdateOperationsInput | number | null
    otrosCbu?: NullableStringFieldUpdateOperationsInput | string | null
    estadoLegajo?: NullableStringFieldUpdateOperationsInput | string | null
    complementos?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoCreateInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    legajo: LegajoCreateNestedOneWithoutComentariosInput
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioLegajoUncheckedCreateInput = {
    id?: string
    legajoId: string
    usuarioId: string
    texto: string
    createdAt?: Date | string
  }

  export type ComentarioLegajoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajo?: LegajoUpdateOneRequiredWithoutComentariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioLegajoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoCreateManyInput = {
    id?: string
    legajoId: string
    usuarioId: string
    texto: string
    createdAt?: Date | string
  }

  export type ComentarioLegajoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoLegajoCreateInput = {
    id?: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano?: number | null
    esAnalizable?: boolean
    analisis?: string | null
    createdAt?: Date | string
    legajo: LegajoCreateNestedOneWithoutArchivosInput
  }

  export type ArchivoLegajoUncheckedCreateInput = {
    id?: string
    legajoId: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano?: number | null
    esAnalizable?: boolean
    analisis?: string | null
    createdAt?: Date | string
  }

  export type ArchivoLegajoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajo?: LegajoUpdateOneRequiredWithoutArchivosNestedInput
  }

  export type ArchivoLegajoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoLegajoCreateManyInput = {
    id?: string
    legajoId: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano?: number | null
    esAnalizable?: boolean
    analisis?: string | null
    createdAt?: Date | string
  }

  export type ArchivoLegajoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoLegajoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    nivel: string
    accion: string
    usuarioId?: string | null
    ip?: string | null
    recurso?: string | null
    detalles?: string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    nivel: string
    accion: string
    usuarioId?: string | null
    ip?: string | null
    recurso?: string | null
    detalles?: string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    nivel: string
    accion: string
    usuarioId?: string | null
    ip?: string | null
    recurso?: string | null
    detalles?: string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedConexionesCreateInput = {
    id?: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza?: number
    evidenciaId?: string | null
    createdAt?: Date | string
    legajo: LegajoCreateNestedOneWithoutConexionesInput
  }

  export type RedConexionesUncheckedCreateInput = {
    id?: string
    legajoId: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza?: number
    evidenciaId?: string | null
    createdAt?: Date | string
  }

  export type RedConexionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajo?: LegajoUpdateOneRequiredWithoutConexionesNestedInput
  }

  export type RedConexionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedConexionesCreateManyInput = {
    id?: string
    legajoId: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza?: number
    evidenciaId?: string | null
    createdAt?: Date | string
  }

  export type RedConexionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedConexionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type LegajoListRelationFilter = {
    every?: LegajoWhereInput
    some?: LegajoWhereInput
    none?: LegajoWhereInput
  }

  export type FiscalListRelationFilter = {
    every?: FiscalWhereInput
    some?: FiscalWhereInput
    none?: FiscalWhereInput
  }

  export type ComentarioLegajoListRelationFilter = {
    every?: ComentarioLegajoWhereInput
    some?: ComentarioLegajoWhereInput
    none?: ComentarioLegajoWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type LegajoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FiscalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioLegajoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VictimaListRelationFilter = {
    every?: VictimaWhereInput
    some?: VictimaWhereInput
    none?: VictimaWhereInput
  }

  export type DispositivoListRelationFilter = {
    every?: DispositivoWhereInput
    some?: DispositivoWhereInput
    none?: DispositivoWhereInput
  }

  export type OficioListRelationFilter = {
    every?: OficioWhereInput
    some?: OficioWhereInput
    none?: OficioWhereInput
  }

  export type ArchivoLegajoListRelationFilter = {
    every?: ArchivoLegajoWhereInput
    some?: ArchivoLegajoWhereInput
    none?: ArchivoLegajoWhereInput
  }

  export type RedConexionesListRelationFilter = {
    every?: RedConexionesWhereInput
    some?: RedConexionesWhereInput
    none?: RedConexionesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VictimaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DispositivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OficioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArchivoLegajoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RedConexionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegajoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    caratula?: SortOrder
    cuij?: SortOrder
    delito?: SortOrder
    fechaHecho?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    fiscal?: SortOrder
    emailRespuesta?: SortOrder
    visto?: SortOrder
    origenTipo?: SortOrder
    origenId?: SortOrder
    asignadoA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type LegajoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    caratula?: SortOrder
    cuij?: SortOrder
    delito?: SortOrder
    fechaHecho?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    fiscal?: SortOrder
    emailRespuesta?: SortOrder
    visto?: SortOrder
    origenTipo?: SortOrder
    origenId?: SortOrder
    asignadoA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type LegajoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    caratula?: SortOrder
    cuij?: SortOrder
    delito?: SortOrder
    fechaHecho?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    fiscal?: SortOrder
    emailRespuesta?: SortOrder
    visto?: SortOrder
    origenTipo?: SortOrder
    origenId?: SortOrder
    asignadoA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
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

  export type LegajoRelationFilter = {
    is?: LegajoWhereInput
    isNot?: LegajoWhereInput
  }

  export type VictimaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    legajoId?: SortOrder
  }

  export type VictimaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    legajoId?: SortOrder
  }

  export type VictimaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    legajoId?: SortOrder
  }

  export type DispositivoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    imei?: SortOrder
    color?: SortOrder
    numeroLinea?: SortOrder
    legajoId?: SortOrder
  }

  export type DispositivoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    imei?: SortOrder
    color?: SortOrder
    numeroLinea?: SortOrder
    legajoId?: SortOrder
  }

  export type DispositivoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    imei?: SortOrder
    color?: SortOrder
    numeroLinea?: SortOrder
    legajoId?: SortOrder
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

  export type RespuestaListRelationFilter = {
    every?: RespuestaWhereInput
    some?: RespuestaWhereInput
    none?: RespuestaWhereInput
  }

  export type RespuestaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OficioCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    operadora?: SortOrder
    tipo?: SortOrder
    fechaEnvio?: SortOrder
    fechaRespuesta?: SortOrder
    estado?: SortOrder
    urgencia?: SortOrder
    observaciones?: SortOrder
    columnas?: SortOrder
    tipoConsulta?: SortOrder
    numeroLinea?: SortOrder
    imeiSeleccionado?: SortOrder
    createdAt?: SortOrder
    legajoId?: SortOrder
  }

  export type OficioMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    operadora?: SortOrder
    tipo?: SortOrder
    fechaEnvio?: SortOrder
    fechaRespuesta?: SortOrder
    estado?: SortOrder
    urgencia?: SortOrder
    observaciones?: SortOrder
    columnas?: SortOrder
    tipoConsulta?: SortOrder
    numeroLinea?: SortOrder
    imeiSeleccionado?: SortOrder
    createdAt?: SortOrder
    legajoId?: SortOrder
  }

  export type OficioMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    operadora?: SortOrder
    tipo?: SortOrder
    fechaEnvio?: SortOrder
    fechaRespuesta?: SortOrder
    estado?: SortOrder
    urgencia?: SortOrder
    observaciones?: SortOrder
    columnas?: SortOrder
    tipoConsulta?: SortOrder
    numeroLinea?: SortOrder
    imeiSeleccionado?: SortOrder
    createdAt?: SortOrder
    legajoId?: SortOrder
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

  export type OficioRelationFilter = {
    is?: OficioWhereInput
    isNot?: OficioWhereInput
  }

  export type RespuestaCountOrderByAggregateInput = {
    id?: SortOrder
    oficioId?: SortOrder
    datos?: SortOrder
    createdAt?: SortOrder
  }

  export type RespuestaMaxOrderByAggregateInput = {
    id?: SortOrder
    oficioId?: SortOrder
    datos?: SortOrder
    createdAt?: SortOrder
  }

  export type RespuestaMinOrderByAggregateInput = {
    id?: SortOrder
    oficioId?: SortOrder
    datos?: SortOrder
    createdAt?: SortOrder
  }

  export type FiscalCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
    fiscalia?: SortOrder
    secretario?: SortOrder
    dniSecretario?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    emailSecretario?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    telefonoMovil?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type FiscalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
    fiscalia?: SortOrder
    secretario?: SortOrder
    dniSecretario?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    emailSecretario?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    telefonoMovil?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type FiscalMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
    fiscalia?: SortOrder
    secretario?: SortOrder
    dniSecretario?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    emailSecretario?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    telefonoMovil?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
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

  export type ConfiguracionCountOrderByAggregateInput = {
    id?: SortOrder
    emailRespuesta?: SortOrder
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionAvgOrderByAggregateInput = {
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
  }

  export type ConfiguracionMaxOrderByAggregateInput = {
    id?: SortOrder
    emailRespuesta?: SortOrder
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionMinOrderByAggregateInput = {
    id?: SortOrder
    emailRespuesta?: SortOrder
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionSumOrderByAggregateInput = {
    diasAlertaMedia?: SortOrder
    diasAlertaAlta?: SortOrder
    diasAlertaCritica?: SortOrder
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

  export type RegistroTelefoniaCountOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    nroLegajo?: SortOrder
    nroInterno?: SortOrder
    cuij?: SortOrder
    fechaHecho?: SortOrder
    fechaIngreso?: SortOrder
    lugarHecho?: SortOrder
    barrio?: SortOrder
    victima?: SortOrder
    causa?: SortOrder
    aparato?: SortOrder
    empresa?: SortOrder
    abonado?: SortOrder
    imei?: SortOrder
    color?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    fiscal?: SortOrder
    depOrigen?: SortOrder
    nroCom?: SortOrder
    rpiComisaria?: SortOrder
    rpiCompleja?: SortOrder
    observaciones?: SortOrder
    estadoLegajo?: SortOrder
    elevaciones?: SortOrder
    imputados?: SortOrder
    requisa?: SortOrder
    procedimientos?: SortOrder
    asignadoA?: SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroTelefoniaAvgOrderByAggregateInput = {
    anio?: SortOrder
    nroInterno?: SortOrder
  }

  export type RegistroTelefoniaMaxOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    nroLegajo?: SortOrder
    nroInterno?: SortOrder
    cuij?: SortOrder
    fechaHecho?: SortOrder
    fechaIngreso?: SortOrder
    lugarHecho?: SortOrder
    barrio?: SortOrder
    victima?: SortOrder
    causa?: SortOrder
    aparato?: SortOrder
    empresa?: SortOrder
    abonado?: SortOrder
    imei?: SortOrder
    color?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    fiscal?: SortOrder
    depOrigen?: SortOrder
    nroCom?: SortOrder
    rpiComisaria?: SortOrder
    rpiCompleja?: SortOrder
    observaciones?: SortOrder
    estadoLegajo?: SortOrder
    elevaciones?: SortOrder
    imputados?: SortOrder
    requisa?: SortOrder
    procedimientos?: SortOrder
    asignadoA?: SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroTelefoniaMinOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    nroLegajo?: SortOrder
    nroInterno?: SortOrder
    cuij?: SortOrder
    fechaHecho?: SortOrder
    fechaIngreso?: SortOrder
    lugarHecho?: SortOrder
    barrio?: SortOrder
    victima?: SortOrder
    causa?: SortOrder
    aparato?: SortOrder
    empresa?: SortOrder
    abonado?: SortOrder
    imei?: SortOrder
    color?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    fiscal?: SortOrder
    depOrigen?: SortOrder
    nroCom?: SortOrder
    rpiComisaria?: SortOrder
    rpiCompleja?: SortOrder
    observaciones?: SortOrder
    estadoLegajo?: SortOrder
    elevaciones?: SortOrder
    imputados?: SortOrder
    requisa?: SortOrder
    procedimientos?: SortOrder
    asignadoA?: SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroTelefoniaSumOrderByAggregateInput = {
    anio?: SortOrder
    nroInterno?: SortOrder
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

  export type RegistroEstafaCountOrderByAggregateInput = {
    id?: SortOrder
    nroInterno?: SortOrder
    cuij?: SortOrder
    fechaHecho?: SortOrder
    fechaDenuncia?: SortOrder
    dependencia?: SortOrder
    nroLegajo?: SortOrder
    recibido?: SortOrder
    victima?: SortOrder
    telefonoVictima?: SortOrder
    caratula?: SortOrder
    fiscal?: SortOrder
    ardid?: SortOrder
    seudonimo?: SortOrder
    telefonoReferencia?: SortOrder
    nombreReferencia?: SortOrder
    imei?: SortOrder
    otrosTelefonos?: SortOrder
    cbu?: SortOrder
    titulares?: SortOrder
    filaExcel?: SortOrder
    otrosCbu?: SortOrder
    estadoLegajo?: SortOrder
    complementos?: SortOrder
    asignadoA?: SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroEstafaAvgOrderByAggregateInput = {
    nroInterno?: SortOrder
    filaExcel?: SortOrder
  }

  export type RegistroEstafaMaxOrderByAggregateInput = {
    id?: SortOrder
    nroInterno?: SortOrder
    cuij?: SortOrder
    fechaHecho?: SortOrder
    fechaDenuncia?: SortOrder
    dependencia?: SortOrder
    nroLegajo?: SortOrder
    recibido?: SortOrder
    victima?: SortOrder
    telefonoVictima?: SortOrder
    caratula?: SortOrder
    fiscal?: SortOrder
    ardid?: SortOrder
    seudonimo?: SortOrder
    telefonoReferencia?: SortOrder
    nombreReferencia?: SortOrder
    imei?: SortOrder
    otrosTelefonos?: SortOrder
    cbu?: SortOrder
    titulares?: SortOrder
    filaExcel?: SortOrder
    otrosCbu?: SortOrder
    estadoLegajo?: SortOrder
    complementos?: SortOrder
    asignadoA?: SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroEstafaMinOrderByAggregateInput = {
    id?: SortOrder
    nroInterno?: SortOrder
    cuij?: SortOrder
    fechaHecho?: SortOrder
    fechaDenuncia?: SortOrder
    dependencia?: SortOrder
    nroLegajo?: SortOrder
    recibido?: SortOrder
    victima?: SortOrder
    telefonoVictima?: SortOrder
    caratula?: SortOrder
    fiscal?: SortOrder
    ardid?: SortOrder
    seudonimo?: SortOrder
    telefonoReferencia?: SortOrder
    nombreReferencia?: SortOrder
    imei?: SortOrder
    otrosTelefonos?: SortOrder
    cbu?: SortOrder
    titulares?: SortOrder
    filaExcel?: SortOrder
    otrosCbu?: SortOrder
    estadoLegajo?: SortOrder
    complementos?: SortOrder
    asignadoA?: SortOrder
    visto?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroEstafaSumOrderByAggregateInput = {
    nroInterno?: SortOrder
    filaExcel?: SortOrder
  }

  export type ComentarioLegajoCountOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    usuarioId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
  }

  export type ComentarioLegajoMaxOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    usuarioId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
  }

  export type ComentarioLegajoMinOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    usuarioId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchivoLegajoCountOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    tamano?: SortOrder
    esAnalizable?: SortOrder
    analisis?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchivoLegajoAvgOrderByAggregateInput = {
    tamano?: SortOrder
  }

  export type ArchivoLegajoMaxOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    tamano?: SortOrder
    esAnalizable?: SortOrder
    analisis?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchivoLegajoMinOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    tamano?: SortOrder
    esAnalizable?: SortOrder
    analisis?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchivoLegajoSumOrderByAggregateInput = {
    tamano?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    accion?: SortOrder
    usuarioId?: SortOrder
    ip?: SortOrder
    recurso?: SortOrder
    detalles?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    accion?: SortOrder
    usuarioId?: SortOrder
    ip?: SortOrder
    recurso?: SortOrder
    detalles?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    accion?: SortOrder
    usuarioId?: SortOrder
    ip?: SortOrder
    recurso?: SortOrder
    detalles?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type RedConexionesCountOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    entidad1?: SortOrder
    tipoEntidad1?: SortOrder
    relacion?: SortOrder
    entidad2?: SortOrder
    tipoEntidad2?: SortOrder
    confianza?: SortOrder
    evidenciaId?: SortOrder
    createdAt?: SortOrder
  }

  export type RedConexionesAvgOrderByAggregateInput = {
    confianza?: SortOrder
  }

  export type RedConexionesMaxOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    entidad1?: SortOrder
    tipoEntidad1?: SortOrder
    relacion?: SortOrder
    entidad2?: SortOrder
    tipoEntidad2?: SortOrder
    confianza?: SortOrder
    evidenciaId?: SortOrder
    createdAt?: SortOrder
  }

  export type RedConexionesMinOrderByAggregateInput = {
    id?: SortOrder
    legajoId?: SortOrder
    entidad1?: SortOrder
    tipoEntidad1?: SortOrder
    relacion?: SortOrder
    entidad2?: SortOrder
    tipoEntidad2?: SortOrder
    confianza?: SortOrder
    evidenciaId?: SortOrder
    createdAt?: SortOrder
  }

  export type RedConexionesSumOrderByAggregateInput = {
    confianza?: SortOrder
  }

  export type LegajoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LegajoCreateWithoutUsuarioInput, LegajoUncheckedCreateWithoutUsuarioInput> | LegajoCreateWithoutUsuarioInput[] | LegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LegajoCreateOrConnectWithoutUsuarioInput | LegajoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LegajoCreateManyUsuarioInputEnvelope
    connect?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
  }

  export type FiscalCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FiscalCreateWithoutUsuarioInput, FiscalUncheckedCreateWithoutUsuarioInput> | FiscalCreateWithoutUsuarioInput[] | FiscalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FiscalCreateOrConnectWithoutUsuarioInput | FiscalCreateOrConnectWithoutUsuarioInput[]
    createMany?: FiscalCreateManyUsuarioInputEnvelope
    connect?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
  }

  export type ComentarioLegajoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioLegajoCreateWithoutUsuarioInput, ComentarioLegajoUncheckedCreateWithoutUsuarioInput> | ComentarioLegajoCreateWithoutUsuarioInput[] | ComentarioLegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutUsuarioInput | ComentarioLegajoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioLegajoCreateManyUsuarioInputEnvelope
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type LegajoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LegajoCreateWithoutUsuarioInput, LegajoUncheckedCreateWithoutUsuarioInput> | LegajoCreateWithoutUsuarioInput[] | LegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LegajoCreateOrConnectWithoutUsuarioInput | LegajoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LegajoCreateManyUsuarioInputEnvelope
    connect?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
  }

  export type FiscalUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FiscalCreateWithoutUsuarioInput, FiscalUncheckedCreateWithoutUsuarioInput> | FiscalCreateWithoutUsuarioInput[] | FiscalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FiscalCreateOrConnectWithoutUsuarioInput | FiscalCreateOrConnectWithoutUsuarioInput[]
    createMany?: FiscalCreateManyUsuarioInputEnvelope
    connect?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
  }

  export type ComentarioLegajoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioLegajoCreateWithoutUsuarioInput, ComentarioLegajoUncheckedCreateWithoutUsuarioInput> | ComentarioLegajoCreateWithoutUsuarioInput[] | ComentarioLegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutUsuarioInput | ComentarioLegajoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioLegajoCreateManyUsuarioInputEnvelope
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LegajoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LegajoCreateWithoutUsuarioInput, LegajoUncheckedCreateWithoutUsuarioInput> | LegajoCreateWithoutUsuarioInput[] | LegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LegajoCreateOrConnectWithoutUsuarioInput | LegajoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LegajoUpsertWithWhereUniqueWithoutUsuarioInput | LegajoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LegajoCreateManyUsuarioInputEnvelope
    set?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    disconnect?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    delete?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    connect?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    update?: LegajoUpdateWithWhereUniqueWithoutUsuarioInput | LegajoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LegajoUpdateManyWithWhereWithoutUsuarioInput | LegajoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LegajoScalarWhereInput | LegajoScalarWhereInput[]
  }

  export type FiscalUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FiscalCreateWithoutUsuarioInput, FiscalUncheckedCreateWithoutUsuarioInput> | FiscalCreateWithoutUsuarioInput[] | FiscalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FiscalCreateOrConnectWithoutUsuarioInput | FiscalCreateOrConnectWithoutUsuarioInput[]
    upsert?: FiscalUpsertWithWhereUniqueWithoutUsuarioInput | FiscalUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FiscalCreateManyUsuarioInputEnvelope
    set?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    disconnect?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    delete?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    connect?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    update?: FiscalUpdateWithWhereUniqueWithoutUsuarioInput | FiscalUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FiscalUpdateManyWithWhereWithoutUsuarioInput | FiscalUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FiscalScalarWhereInput | FiscalScalarWhereInput[]
  }

  export type ComentarioLegajoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioLegajoCreateWithoutUsuarioInput, ComentarioLegajoUncheckedCreateWithoutUsuarioInput> | ComentarioLegajoCreateWithoutUsuarioInput[] | ComentarioLegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutUsuarioInput | ComentarioLegajoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioLegajoUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioLegajoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioLegajoCreateManyUsuarioInputEnvelope
    set?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    disconnect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    delete?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    update?: ComentarioLegajoUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioLegajoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioLegajoUpdateManyWithWhereWithoutUsuarioInput | ComentarioLegajoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioLegajoScalarWhereInput | ComentarioLegajoScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUsuarioInput | SessionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUsuarioInput | SessionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUsuarioInput | SessionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LegajoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LegajoCreateWithoutUsuarioInput, LegajoUncheckedCreateWithoutUsuarioInput> | LegajoCreateWithoutUsuarioInput[] | LegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LegajoCreateOrConnectWithoutUsuarioInput | LegajoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LegajoUpsertWithWhereUniqueWithoutUsuarioInput | LegajoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LegajoCreateManyUsuarioInputEnvelope
    set?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    disconnect?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    delete?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    connect?: LegajoWhereUniqueInput | LegajoWhereUniqueInput[]
    update?: LegajoUpdateWithWhereUniqueWithoutUsuarioInput | LegajoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LegajoUpdateManyWithWhereWithoutUsuarioInput | LegajoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LegajoScalarWhereInput | LegajoScalarWhereInput[]
  }

  export type FiscalUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FiscalCreateWithoutUsuarioInput, FiscalUncheckedCreateWithoutUsuarioInput> | FiscalCreateWithoutUsuarioInput[] | FiscalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FiscalCreateOrConnectWithoutUsuarioInput | FiscalCreateOrConnectWithoutUsuarioInput[]
    upsert?: FiscalUpsertWithWhereUniqueWithoutUsuarioInput | FiscalUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FiscalCreateManyUsuarioInputEnvelope
    set?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    disconnect?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    delete?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    connect?: FiscalWhereUniqueInput | FiscalWhereUniqueInput[]
    update?: FiscalUpdateWithWhereUniqueWithoutUsuarioInput | FiscalUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FiscalUpdateManyWithWhereWithoutUsuarioInput | FiscalUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FiscalScalarWhereInput | FiscalScalarWhereInput[]
  }

  export type ComentarioLegajoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioLegajoCreateWithoutUsuarioInput, ComentarioLegajoUncheckedCreateWithoutUsuarioInput> | ComentarioLegajoCreateWithoutUsuarioInput[] | ComentarioLegajoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutUsuarioInput | ComentarioLegajoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioLegajoUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioLegajoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioLegajoCreateManyUsuarioInputEnvelope
    set?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    disconnect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    delete?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    update?: ComentarioLegajoUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioLegajoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioLegajoUpdateManyWithWhereWithoutUsuarioInput | ComentarioLegajoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioLegajoScalarWhereInput | ComentarioLegajoScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUsuarioInput | SessionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUsuarioInput | SessionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUsuarioInput | SessionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSesionesInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    upsert?: UsuarioUpsertWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSesionesInput, UsuarioUpdateWithoutSesionesInput>, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioCreateNestedOneWithoutLegajosInput = {
    create?: XOR<UsuarioCreateWithoutLegajosInput, UsuarioUncheckedCreateWithoutLegajosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLegajosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VictimaCreateNestedManyWithoutLegajoInput = {
    create?: XOR<VictimaCreateWithoutLegajoInput, VictimaUncheckedCreateWithoutLegajoInput> | VictimaCreateWithoutLegajoInput[] | VictimaUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: VictimaCreateOrConnectWithoutLegajoInput | VictimaCreateOrConnectWithoutLegajoInput[]
    createMany?: VictimaCreateManyLegajoInputEnvelope
    connect?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
  }

  export type DispositivoCreateNestedManyWithoutLegajoInput = {
    create?: XOR<DispositivoCreateWithoutLegajoInput, DispositivoUncheckedCreateWithoutLegajoInput> | DispositivoCreateWithoutLegajoInput[] | DispositivoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutLegajoInput | DispositivoCreateOrConnectWithoutLegajoInput[]
    createMany?: DispositivoCreateManyLegajoInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type OficioCreateNestedManyWithoutLegajoInput = {
    create?: XOR<OficioCreateWithoutLegajoInput, OficioUncheckedCreateWithoutLegajoInput> | OficioCreateWithoutLegajoInput[] | OficioUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: OficioCreateOrConnectWithoutLegajoInput | OficioCreateOrConnectWithoutLegajoInput[]
    createMany?: OficioCreateManyLegajoInputEnvelope
    connect?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
  }

  export type ArchivoLegajoCreateNestedManyWithoutLegajoInput = {
    create?: XOR<ArchivoLegajoCreateWithoutLegajoInput, ArchivoLegajoUncheckedCreateWithoutLegajoInput> | ArchivoLegajoCreateWithoutLegajoInput[] | ArchivoLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ArchivoLegajoCreateOrConnectWithoutLegajoInput | ArchivoLegajoCreateOrConnectWithoutLegajoInput[]
    createMany?: ArchivoLegajoCreateManyLegajoInputEnvelope
    connect?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
  }

  export type ComentarioLegajoCreateNestedManyWithoutLegajoInput = {
    create?: XOR<ComentarioLegajoCreateWithoutLegajoInput, ComentarioLegajoUncheckedCreateWithoutLegajoInput> | ComentarioLegajoCreateWithoutLegajoInput[] | ComentarioLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutLegajoInput | ComentarioLegajoCreateOrConnectWithoutLegajoInput[]
    createMany?: ComentarioLegajoCreateManyLegajoInputEnvelope
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
  }

  export type RedConexionesCreateNestedManyWithoutLegajoInput = {
    create?: XOR<RedConexionesCreateWithoutLegajoInput, RedConexionesUncheckedCreateWithoutLegajoInput> | RedConexionesCreateWithoutLegajoInput[] | RedConexionesUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: RedConexionesCreateOrConnectWithoutLegajoInput | RedConexionesCreateOrConnectWithoutLegajoInput[]
    createMany?: RedConexionesCreateManyLegajoInputEnvelope
    connect?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
  }

  export type VictimaUncheckedCreateNestedManyWithoutLegajoInput = {
    create?: XOR<VictimaCreateWithoutLegajoInput, VictimaUncheckedCreateWithoutLegajoInput> | VictimaCreateWithoutLegajoInput[] | VictimaUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: VictimaCreateOrConnectWithoutLegajoInput | VictimaCreateOrConnectWithoutLegajoInput[]
    createMany?: VictimaCreateManyLegajoInputEnvelope
    connect?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
  }

  export type DispositivoUncheckedCreateNestedManyWithoutLegajoInput = {
    create?: XOR<DispositivoCreateWithoutLegajoInput, DispositivoUncheckedCreateWithoutLegajoInput> | DispositivoCreateWithoutLegajoInput[] | DispositivoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutLegajoInput | DispositivoCreateOrConnectWithoutLegajoInput[]
    createMany?: DispositivoCreateManyLegajoInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type OficioUncheckedCreateNestedManyWithoutLegajoInput = {
    create?: XOR<OficioCreateWithoutLegajoInput, OficioUncheckedCreateWithoutLegajoInput> | OficioCreateWithoutLegajoInput[] | OficioUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: OficioCreateOrConnectWithoutLegajoInput | OficioCreateOrConnectWithoutLegajoInput[]
    createMany?: OficioCreateManyLegajoInputEnvelope
    connect?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
  }

  export type ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput = {
    create?: XOR<ArchivoLegajoCreateWithoutLegajoInput, ArchivoLegajoUncheckedCreateWithoutLegajoInput> | ArchivoLegajoCreateWithoutLegajoInput[] | ArchivoLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ArchivoLegajoCreateOrConnectWithoutLegajoInput | ArchivoLegajoCreateOrConnectWithoutLegajoInput[]
    createMany?: ArchivoLegajoCreateManyLegajoInputEnvelope
    connect?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
  }

  export type ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput = {
    create?: XOR<ComentarioLegajoCreateWithoutLegajoInput, ComentarioLegajoUncheckedCreateWithoutLegajoInput> | ComentarioLegajoCreateWithoutLegajoInput[] | ComentarioLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutLegajoInput | ComentarioLegajoCreateOrConnectWithoutLegajoInput[]
    createMany?: ComentarioLegajoCreateManyLegajoInputEnvelope
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
  }

  export type RedConexionesUncheckedCreateNestedManyWithoutLegajoInput = {
    create?: XOR<RedConexionesCreateWithoutLegajoInput, RedConexionesUncheckedCreateWithoutLegajoInput> | RedConexionesCreateWithoutLegajoInput[] | RedConexionesUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: RedConexionesCreateOrConnectWithoutLegajoInput | RedConexionesCreateOrConnectWithoutLegajoInput[]
    createMany?: RedConexionesCreateManyLegajoInputEnvelope
    connect?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutLegajosNestedInput = {
    create?: XOR<UsuarioCreateWithoutLegajosInput, UsuarioUncheckedCreateWithoutLegajosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLegajosInput
    upsert?: UsuarioUpsertWithoutLegajosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLegajosInput, UsuarioUpdateWithoutLegajosInput>, UsuarioUncheckedUpdateWithoutLegajosInput>
  }

  export type VictimaUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<VictimaCreateWithoutLegajoInput, VictimaUncheckedCreateWithoutLegajoInput> | VictimaCreateWithoutLegajoInput[] | VictimaUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: VictimaCreateOrConnectWithoutLegajoInput | VictimaCreateOrConnectWithoutLegajoInput[]
    upsert?: VictimaUpsertWithWhereUniqueWithoutLegajoInput | VictimaUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: VictimaCreateManyLegajoInputEnvelope
    set?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    disconnect?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    delete?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    connect?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    update?: VictimaUpdateWithWhereUniqueWithoutLegajoInput | VictimaUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: VictimaUpdateManyWithWhereWithoutLegajoInput | VictimaUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: VictimaScalarWhereInput | VictimaScalarWhereInput[]
  }

  export type DispositivoUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<DispositivoCreateWithoutLegajoInput, DispositivoUncheckedCreateWithoutLegajoInput> | DispositivoCreateWithoutLegajoInput[] | DispositivoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutLegajoInput | DispositivoCreateOrConnectWithoutLegajoInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutLegajoInput | DispositivoUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: DispositivoCreateManyLegajoInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutLegajoInput | DispositivoUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutLegajoInput | DispositivoUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type OficioUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<OficioCreateWithoutLegajoInput, OficioUncheckedCreateWithoutLegajoInput> | OficioCreateWithoutLegajoInput[] | OficioUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: OficioCreateOrConnectWithoutLegajoInput | OficioCreateOrConnectWithoutLegajoInput[]
    upsert?: OficioUpsertWithWhereUniqueWithoutLegajoInput | OficioUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: OficioCreateManyLegajoInputEnvelope
    set?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    disconnect?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    delete?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    connect?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    update?: OficioUpdateWithWhereUniqueWithoutLegajoInput | OficioUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: OficioUpdateManyWithWhereWithoutLegajoInput | OficioUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: OficioScalarWhereInput | OficioScalarWhereInput[]
  }

  export type ArchivoLegajoUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<ArchivoLegajoCreateWithoutLegajoInput, ArchivoLegajoUncheckedCreateWithoutLegajoInput> | ArchivoLegajoCreateWithoutLegajoInput[] | ArchivoLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ArchivoLegajoCreateOrConnectWithoutLegajoInput | ArchivoLegajoCreateOrConnectWithoutLegajoInput[]
    upsert?: ArchivoLegajoUpsertWithWhereUniqueWithoutLegajoInput | ArchivoLegajoUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: ArchivoLegajoCreateManyLegajoInputEnvelope
    set?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    disconnect?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    delete?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    connect?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    update?: ArchivoLegajoUpdateWithWhereUniqueWithoutLegajoInput | ArchivoLegajoUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: ArchivoLegajoUpdateManyWithWhereWithoutLegajoInput | ArchivoLegajoUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: ArchivoLegajoScalarWhereInput | ArchivoLegajoScalarWhereInput[]
  }

  export type ComentarioLegajoUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<ComentarioLegajoCreateWithoutLegajoInput, ComentarioLegajoUncheckedCreateWithoutLegajoInput> | ComentarioLegajoCreateWithoutLegajoInput[] | ComentarioLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutLegajoInput | ComentarioLegajoCreateOrConnectWithoutLegajoInput[]
    upsert?: ComentarioLegajoUpsertWithWhereUniqueWithoutLegajoInput | ComentarioLegajoUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: ComentarioLegajoCreateManyLegajoInputEnvelope
    set?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    disconnect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    delete?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    update?: ComentarioLegajoUpdateWithWhereUniqueWithoutLegajoInput | ComentarioLegajoUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: ComentarioLegajoUpdateManyWithWhereWithoutLegajoInput | ComentarioLegajoUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: ComentarioLegajoScalarWhereInput | ComentarioLegajoScalarWhereInput[]
  }

  export type RedConexionesUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<RedConexionesCreateWithoutLegajoInput, RedConexionesUncheckedCreateWithoutLegajoInput> | RedConexionesCreateWithoutLegajoInput[] | RedConexionesUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: RedConexionesCreateOrConnectWithoutLegajoInput | RedConexionesCreateOrConnectWithoutLegajoInput[]
    upsert?: RedConexionesUpsertWithWhereUniqueWithoutLegajoInput | RedConexionesUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: RedConexionesCreateManyLegajoInputEnvelope
    set?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    disconnect?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    delete?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    connect?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    update?: RedConexionesUpdateWithWhereUniqueWithoutLegajoInput | RedConexionesUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: RedConexionesUpdateManyWithWhereWithoutLegajoInput | RedConexionesUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: RedConexionesScalarWhereInput | RedConexionesScalarWhereInput[]
  }

  export type VictimaUncheckedUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<VictimaCreateWithoutLegajoInput, VictimaUncheckedCreateWithoutLegajoInput> | VictimaCreateWithoutLegajoInput[] | VictimaUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: VictimaCreateOrConnectWithoutLegajoInput | VictimaCreateOrConnectWithoutLegajoInput[]
    upsert?: VictimaUpsertWithWhereUniqueWithoutLegajoInput | VictimaUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: VictimaCreateManyLegajoInputEnvelope
    set?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    disconnect?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    delete?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    connect?: VictimaWhereUniqueInput | VictimaWhereUniqueInput[]
    update?: VictimaUpdateWithWhereUniqueWithoutLegajoInput | VictimaUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: VictimaUpdateManyWithWhereWithoutLegajoInput | VictimaUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: VictimaScalarWhereInput | VictimaScalarWhereInput[]
  }

  export type DispositivoUncheckedUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<DispositivoCreateWithoutLegajoInput, DispositivoUncheckedCreateWithoutLegajoInput> | DispositivoCreateWithoutLegajoInput[] | DispositivoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutLegajoInput | DispositivoCreateOrConnectWithoutLegajoInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutLegajoInput | DispositivoUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: DispositivoCreateManyLegajoInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutLegajoInput | DispositivoUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutLegajoInput | DispositivoUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type OficioUncheckedUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<OficioCreateWithoutLegajoInput, OficioUncheckedCreateWithoutLegajoInput> | OficioCreateWithoutLegajoInput[] | OficioUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: OficioCreateOrConnectWithoutLegajoInput | OficioCreateOrConnectWithoutLegajoInput[]
    upsert?: OficioUpsertWithWhereUniqueWithoutLegajoInput | OficioUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: OficioCreateManyLegajoInputEnvelope
    set?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    disconnect?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    delete?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    connect?: OficioWhereUniqueInput | OficioWhereUniqueInput[]
    update?: OficioUpdateWithWhereUniqueWithoutLegajoInput | OficioUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: OficioUpdateManyWithWhereWithoutLegajoInput | OficioUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: OficioScalarWhereInput | OficioScalarWhereInput[]
  }

  export type ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<ArchivoLegajoCreateWithoutLegajoInput, ArchivoLegajoUncheckedCreateWithoutLegajoInput> | ArchivoLegajoCreateWithoutLegajoInput[] | ArchivoLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ArchivoLegajoCreateOrConnectWithoutLegajoInput | ArchivoLegajoCreateOrConnectWithoutLegajoInput[]
    upsert?: ArchivoLegajoUpsertWithWhereUniqueWithoutLegajoInput | ArchivoLegajoUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: ArchivoLegajoCreateManyLegajoInputEnvelope
    set?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    disconnect?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    delete?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    connect?: ArchivoLegajoWhereUniqueInput | ArchivoLegajoWhereUniqueInput[]
    update?: ArchivoLegajoUpdateWithWhereUniqueWithoutLegajoInput | ArchivoLegajoUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: ArchivoLegajoUpdateManyWithWhereWithoutLegajoInput | ArchivoLegajoUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: ArchivoLegajoScalarWhereInput | ArchivoLegajoScalarWhereInput[]
  }

  export type ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<ComentarioLegajoCreateWithoutLegajoInput, ComentarioLegajoUncheckedCreateWithoutLegajoInput> | ComentarioLegajoCreateWithoutLegajoInput[] | ComentarioLegajoUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: ComentarioLegajoCreateOrConnectWithoutLegajoInput | ComentarioLegajoCreateOrConnectWithoutLegajoInput[]
    upsert?: ComentarioLegajoUpsertWithWhereUniqueWithoutLegajoInput | ComentarioLegajoUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: ComentarioLegajoCreateManyLegajoInputEnvelope
    set?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    disconnect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    delete?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    connect?: ComentarioLegajoWhereUniqueInput | ComentarioLegajoWhereUniqueInput[]
    update?: ComentarioLegajoUpdateWithWhereUniqueWithoutLegajoInput | ComentarioLegajoUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: ComentarioLegajoUpdateManyWithWhereWithoutLegajoInput | ComentarioLegajoUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: ComentarioLegajoScalarWhereInput | ComentarioLegajoScalarWhereInput[]
  }

  export type RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput = {
    create?: XOR<RedConexionesCreateWithoutLegajoInput, RedConexionesUncheckedCreateWithoutLegajoInput> | RedConexionesCreateWithoutLegajoInput[] | RedConexionesUncheckedCreateWithoutLegajoInput[]
    connectOrCreate?: RedConexionesCreateOrConnectWithoutLegajoInput | RedConexionesCreateOrConnectWithoutLegajoInput[]
    upsert?: RedConexionesUpsertWithWhereUniqueWithoutLegajoInput | RedConexionesUpsertWithWhereUniqueWithoutLegajoInput[]
    createMany?: RedConexionesCreateManyLegajoInputEnvelope
    set?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    disconnect?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    delete?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    connect?: RedConexionesWhereUniqueInput | RedConexionesWhereUniqueInput[]
    update?: RedConexionesUpdateWithWhereUniqueWithoutLegajoInput | RedConexionesUpdateWithWhereUniqueWithoutLegajoInput[]
    updateMany?: RedConexionesUpdateManyWithWhereWithoutLegajoInput | RedConexionesUpdateManyWithWhereWithoutLegajoInput[]
    deleteMany?: RedConexionesScalarWhereInput | RedConexionesScalarWhereInput[]
  }

  export type LegajoCreateNestedOneWithoutVictimasInput = {
    create?: XOR<LegajoCreateWithoutVictimasInput, LegajoUncheckedCreateWithoutVictimasInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutVictimasInput
    connect?: LegajoWhereUniqueInput
  }

  export type LegajoUpdateOneRequiredWithoutVictimasNestedInput = {
    create?: XOR<LegajoCreateWithoutVictimasInput, LegajoUncheckedCreateWithoutVictimasInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutVictimasInput
    upsert?: LegajoUpsertWithoutVictimasInput
    connect?: LegajoWhereUniqueInput
    update?: XOR<XOR<LegajoUpdateToOneWithWhereWithoutVictimasInput, LegajoUpdateWithoutVictimasInput>, LegajoUncheckedUpdateWithoutVictimasInput>
  }

  export type LegajoCreateNestedOneWithoutDispositivosInput = {
    create?: XOR<LegajoCreateWithoutDispositivosInput, LegajoUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutDispositivosInput
    connect?: LegajoWhereUniqueInput
  }

  export type LegajoUpdateOneRequiredWithoutDispositivosNestedInput = {
    create?: XOR<LegajoCreateWithoutDispositivosInput, LegajoUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutDispositivosInput
    upsert?: LegajoUpsertWithoutDispositivosInput
    connect?: LegajoWhereUniqueInput
    update?: XOR<XOR<LegajoUpdateToOneWithWhereWithoutDispositivosInput, LegajoUpdateWithoutDispositivosInput>, LegajoUncheckedUpdateWithoutDispositivosInput>
  }

  export type LegajoCreateNestedOneWithoutOficiosInput = {
    create?: XOR<LegajoCreateWithoutOficiosInput, LegajoUncheckedCreateWithoutOficiosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutOficiosInput
    connect?: LegajoWhereUniqueInput
  }

  export type RespuestaCreateNestedManyWithoutOficioInput = {
    create?: XOR<RespuestaCreateWithoutOficioInput, RespuestaUncheckedCreateWithoutOficioInput> | RespuestaCreateWithoutOficioInput[] | RespuestaUncheckedCreateWithoutOficioInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutOficioInput | RespuestaCreateOrConnectWithoutOficioInput[]
    createMany?: RespuestaCreateManyOficioInputEnvelope
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
  }

  export type RespuestaUncheckedCreateNestedManyWithoutOficioInput = {
    create?: XOR<RespuestaCreateWithoutOficioInput, RespuestaUncheckedCreateWithoutOficioInput> | RespuestaCreateWithoutOficioInput[] | RespuestaUncheckedCreateWithoutOficioInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutOficioInput | RespuestaCreateOrConnectWithoutOficioInput[]
    createMany?: RespuestaCreateManyOficioInputEnvelope
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LegajoUpdateOneRequiredWithoutOficiosNestedInput = {
    create?: XOR<LegajoCreateWithoutOficiosInput, LegajoUncheckedCreateWithoutOficiosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutOficiosInput
    upsert?: LegajoUpsertWithoutOficiosInput
    connect?: LegajoWhereUniqueInput
    update?: XOR<XOR<LegajoUpdateToOneWithWhereWithoutOficiosInput, LegajoUpdateWithoutOficiosInput>, LegajoUncheckedUpdateWithoutOficiosInput>
  }

  export type RespuestaUpdateManyWithoutOficioNestedInput = {
    create?: XOR<RespuestaCreateWithoutOficioInput, RespuestaUncheckedCreateWithoutOficioInput> | RespuestaCreateWithoutOficioInput[] | RespuestaUncheckedCreateWithoutOficioInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutOficioInput | RespuestaCreateOrConnectWithoutOficioInput[]
    upsert?: RespuestaUpsertWithWhereUniqueWithoutOficioInput | RespuestaUpsertWithWhereUniqueWithoutOficioInput[]
    createMany?: RespuestaCreateManyOficioInputEnvelope
    set?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    disconnect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    delete?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    update?: RespuestaUpdateWithWhereUniqueWithoutOficioInput | RespuestaUpdateWithWhereUniqueWithoutOficioInput[]
    updateMany?: RespuestaUpdateManyWithWhereWithoutOficioInput | RespuestaUpdateManyWithWhereWithoutOficioInput[]
    deleteMany?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
  }

  export type RespuestaUncheckedUpdateManyWithoutOficioNestedInput = {
    create?: XOR<RespuestaCreateWithoutOficioInput, RespuestaUncheckedCreateWithoutOficioInput> | RespuestaCreateWithoutOficioInput[] | RespuestaUncheckedCreateWithoutOficioInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutOficioInput | RespuestaCreateOrConnectWithoutOficioInput[]
    upsert?: RespuestaUpsertWithWhereUniqueWithoutOficioInput | RespuestaUpsertWithWhereUniqueWithoutOficioInput[]
    createMany?: RespuestaCreateManyOficioInputEnvelope
    set?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    disconnect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    delete?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    update?: RespuestaUpdateWithWhereUniqueWithoutOficioInput | RespuestaUpdateWithWhereUniqueWithoutOficioInput[]
    updateMany?: RespuestaUpdateManyWithWhereWithoutOficioInput | RespuestaUpdateManyWithWhereWithoutOficioInput[]
    deleteMany?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
  }

  export type OficioCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<OficioCreateWithoutRespuestasInput, OficioUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: OficioCreateOrConnectWithoutRespuestasInput
    connect?: OficioWhereUniqueInput
  }

  export type OficioUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<OficioCreateWithoutRespuestasInput, OficioUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: OficioCreateOrConnectWithoutRespuestasInput
    upsert?: OficioUpsertWithoutRespuestasInput
    connect?: OficioWhereUniqueInput
    update?: XOR<XOR<OficioUpdateToOneWithWhereWithoutRespuestasInput, OficioUpdateWithoutRespuestasInput>, OficioUncheckedUpdateWithoutRespuestasInput>
  }

  export type UsuarioCreateNestedOneWithoutFiscalesInput = {
    create?: XOR<UsuarioCreateWithoutFiscalesInput, UsuarioUncheckedCreateWithoutFiscalesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFiscalesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutFiscalesNestedInput = {
    create?: XOR<UsuarioCreateWithoutFiscalesInput, UsuarioUncheckedCreateWithoutFiscalesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFiscalesInput
    upsert?: UsuarioUpsertWithoutFiscalesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFiscalesInput, UsuarioUpdateWithoutFiscalesInput>, UsuarioUncheckedUpdateWithoutFiscalesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LegajoCreateNestedOneWithoutComentariosInput = {
    create?: XOR<LegajoCreateWithoutComentariosInput, LegajoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutComentariosInput
    connect?: LegajoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LegajoUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<LegajoCreateWithoutComentariosInput, LegajoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutComentariosInput
    upsert?: LegajoUpsertWithoutComentariosInput
    connect?: LegajoWhereUniqueInput
    update?: XOR<XOR<LegajoUpdateToOneWithWhereWithoutComentariosInput, LegajoUpdateWithoutComentariosInput>, LegajoUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type LegajoCreateNestedOneWithoutArchivosInput = {
    create?: XOR<LegajoCreateWithoutArchivosInput, LegajoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutArchivosInput
    connect?: LegajoWhereUniqueInput
  }

  export type LegajoUpdateOneRequiredWithoutArchivosNestedInput = {
    create?: XOR<LegajoCreateWithoutArchivosInput, LegajoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutArchivosInput
    upsert?: LegajoUpsertWithoutArchivosInput
    connect?: LegajoWhereUniqueInput
    update?: XOR<XOR<LegajoUpdateToOneWithWhereWithoutArchivosInput, LegajoUpdateWithoutArchivosInput>, LegajoUncheckedUpdateWithoutArchivosInput>
  }

  export type LegajoCreateNestedOneWithoutConexionesInput = {
    create?: XOR<LegajoCreateWithoutConexionesInput, LegajoUncheckedCreateWithoutConexionesInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutConexionesInput
    connect?: LegajoWhereUniqueInput
  }

  export type LegajoUpdateOneRequiredWithoutConexionesNestedInput = {
    create?: XOR<LegajoCreateWithoutConexionesInput, LegajoUncheckedCreateWithoutConexionesInput>
    connectOrCreate?: LegajoCreateOrConnectWithoutConexionesInput
    upsert?: LegajoUpsertWithoutConexionesInput
    connect?: LegajoWhereUniqueInput
    update?: XOR<XOR<LegajoUpdateToOneWithWhereWithoutConexionesInput, LegajoUpdateWithoutConexionesInput>, LegajoUncheckedUpdateWithoutConexionesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type LegajoCreateWithoutUsuarioInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutUsuarioInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutUsuarioInput, LegajoUncheckedCreateWithoutUsuarioInput>
  }

  export type LegajoCreateManyUsuarioInputEnvelope = {
    data: LegajoCreateManyUsuarioInput | LegajoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FiscalCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    cargo?: string | null
    fiscalia?: string | null
    secretario?: string | null
    dniSecretario?: string | null
    dni?: string | null
    email?: string | null
    emailSecretario?: string | null
    direccion?: string | null
    telefono?: string | null
    telefonoMovil?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type FiscalUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    cargo?: string | null
    fiscalia?: string | null
    secretario?: string | null
    dniSecretario?: string | null
    dni?: string | null
    email?: string | null
    emailSecretario?: string | null
    direccion?: string | null
    telefono?: string | null
    telefonoMovil?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type FiscalCreateOrConnectWithoutUsuarioInput = {
    where: FiscalWhereUniqueInput
    create: XOR<FiscalCreateWithoutUsuarioInput, FiscalUncheckedCreateWithoutUsuarioInput>
  }

  export type FiscalCreateManyUsuarioInputEnvelope = {
    data: FiscalCreateManyUsuarioInput | FiscalCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioLegajoCreateWithoutUsuarioInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    legajo: LegajoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioLegajoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    legajoId: string
    texto: string
    createdAt?: Date | string
  }

  export type ComentarioLegajoCreateOrConnectWithoutUsuarioInput = {
    where: ComentarioLegajoWhereUniqueInput
    create: XOR<ComentarioLegajoCreateWithoutUsuarioInput, ComentarioLegajoUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioLegajoCreateManyUsuarioInputEnvelope = {
    data: ComentarioLegajoCreateManyUsuarioInput | ComentarioLegajoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUsuarioInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUsuarioInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUsuarioInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput>
  }

  export type SessionCreateManyUsuarioInputEnvelope = {
    data: SessionCreateManyUsuarioInput | SessionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LegajoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LegajoWhereUniqueInput
    update: XOR<LegajoUpdateWithoutUsuarioInput, LegajoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LegajoCreateWithoutUsuarioInput, LegajoUncheckedCreateWithoutUsuarioInput>
  }

  export type LegajoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LegajoWhereUniqueInput
    data: XOR<LegajoUpdateWithoutUsuarioInput, LegajoUncheckedUpdateWithoutUsuarioInput>
  }

  export type LegajoUpdateManyWithWhereWithoutUsuarioInput = {
    where: LegajoScalarWhereInput
    data: XOR<LegajoUpdateManyMutationInput, LegajoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LegajoScalarWhereInput = {
    AND?: LegajoScalarWhereInput | LegajoScalarWhereInput[]
    OR?: LegajoScalarWhereInput[]
    NOT?: LegajoScalarWhereInput | LegajoScalarWhereInput[]
    id?: StringFilter<"Legajo"> | string
    numero?: StringFilter<"Legajo"> | string
    caratula?: StringFilter<"Legajo"> | string
    cuij?: StringNullableFilter<"Legajo"> | string | null
    delito?: StringFilter<"Legajo"> | string
    fechaHecho?: DateTimeFilter<"Legajo"> | Date | string
    estado?: StringFilter<"Legajo"> | string
    observaciones?: StringNullableFilter<"Legajo"> | string | null
    fiscal?: StringNullableFilter<"Legajo"> | string | null
    emailRespuesta?: StringNullableFilter<"Legajo"> | string | null
    visto?: BoolFilter<"Legajo"> | boolean
    origenTipo?: StringNullableFilter<"Legajo"> | string | null
    origenId?: StringNullableFilter<"Legajo"> | string | null
    asignadoA?: StringNullableFilter<"Legajo"> | string | null
    createdAt?: DateTimeFilter<"Legajo"> | Date | string
    updatedAt?: DateTimeFilter<"Legajo"> | Date | string
    usuarioId?: StringFilter<"Legajo"> | string
  }

  export type FiscalUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FiscalWhereUniqueInput
    update: XOR<FiscalUpdateWithoutUsuarioInput, FiscalUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FiscalCreateWithoutUsuarioInput, FiscalUncheckedCreateWithoutUsuarioInput>
  }

  export type FiscalUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FiscalWhereUniqueInput
    data: XOR<FiscalUpdateWithoutUsuarioInput, FiscalUncheckedUpdateWithoutUsuarioInput>
  }

  export type FiscalUpdateManyWithWhereWithoutUsuarioInput = {
    where: FiscalScalarWhereInput
    data: XOR<FiscalUpdateManyMutationInput, FiscalUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FiscalScalarWhereInput = {
    AND?: FiscalScalarWhereInput | FiscalScalarWhereInput[]
    OR?: FiscalScalarWhereInput[]
    NOT?: FiscalScalarWhereInput | FiscalScalarWhereInput[]
    id?: StringFilter<"Fiscal"> | string
    nombre?: StringFilter<"Fiscal"> | string
    cargo?: StringNullableFilter<"Fiscal"> | string | null
    fiscalia?: StringNullableFilter<"Fiscal"> | string | null
    secretario?: StringNullableFilter<"Fiscal"> | string | null
    dniSecretario?: StringNullableFilter<"Fiscal"> | string | null
    dni?: StringNullableFilter<"Fiscal"> | string | null
    email?: StringNullableFilter<"Fiscal"> | string | null
    emailSecretario?: StringNullableFilter<"Fiscal"> | string | null
    direccion?: StringNullableFilter<"Fiscal"> | string | null
    telefono?: StringNullableFilter<"Fiscal"> | string | null
    telefonoMovil?: StringNullableFilter<"Fiscal"> | string | null
    activo?: BoolFilter<"Fiscal"> | boolean
    createdAt?: DateTimeFilter<"Fiscal"> | Date | string
    usuarioId?: StringFilter<"Fiscal"> | string
  }

  export type ComentarioLegajoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioLegajoWhereUniqueInput
    update: XOR<ComentarioLegajoUpdateWithoutUsuarioInput, ComentarioLegajoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComentarioLegajoCreateWithoutUsuarioInput, ComentarioLegajoUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioLegajoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioLegajoWhereUniqueInput
    data: XOR<ComentarioLegajoUpdateWithoutUsuarioInput, ComentarioLegajoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComentarioLegajoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComentarioLegajoScalarWhereInput
    data: XOR<ComentarioLegajoUpdateManyMutationInput, ComentarioLegajoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComentarioLegajoScalarWhereInput = {
    AND?: ComentarioLegajoScalarWhereInput | ComentarioLegajoScalarWhereInput[]
    OR?: ComentarioLegajoScalarWhereInput[]
    NOT?: ComentarioLegajoScalarWhereInput | ComentarioLegajoScalarWhereInput[]
    id?: StringFilter<"ComentarioLegajo"> | string
    legajoId?: StringFilter<"ComentarioLegajo"> | string
    usuarioId?: StringFilter<"ComentarioLegajo"> | string
    texto?: StringFilter<"ComentarioLegajo"> | string
    createdAt?: DateTimeFilter<"ComentarioLegajo"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUsuarioInput, SessionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUsuarioInput, SessionUncheckedUpdateWithoutUsuarioInput>
  }

  export type SessionUpdateManyWithWhereWithoutUsuarioInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UsuarioCreateWithoutSesionesInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoCreateNestedManyWithoutUsuarioInput
    fiscales?: FiscalCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSesionesInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoUncheckedCreateNestedManyWithoutUsuarioInput
    fiscales?: FiscalUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSesionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
  }

  export type UsuarioUpsertWithoutSesionesInput = {
    update: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSesionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioUpdateWithoutSesionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUpdateManyWithoutUsuarioNestedInput
    fiscales?: FiscalUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSesionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    fiscales?: FiscalUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutLegajosInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    fiscales?: FiscalCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLegajosInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    fiscales?: FiscalUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLegajosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLegajosInput, UsuarioUncheckedCreateWithoutLegajosInput>
  }

  export type VictimaCreateWithoutLegajoInput = {
    id?: string
    nombre: string
    dni?: string | null
    telefono?: string | null
    email?: string | null
  }

  export type VictimaUncheckedCreateWithoutLegajoInput = {
    id?: string
    nombre: string
    dni?: string | null
    telefono?: string | null
    email?: string | null
  }

  export type VictimaCreateOrConnectWithoutLegajoInput = {
    where: VictimaWhereUniqueInput
    create: XOR<VictimaCreateWithoutLegajoInput, VictimaUncheckedCreateWithoutLegajoInput>
  }

  export type VictimaCreateManyLegajoInputEnvelope = {
    data: VictimaCreateManyLegajoInput | VictimaCreateManyLegajoInput[]
    skipDuplicates?: boolean
  }

  export type DispositivoCreateWithoutLegajoInput = {
    id?: string
    tipo: string
    marca?: string | null
    modelo?: string | null
    imei?: string | null
    color?: string | null
    numeroLinea?: string | null
  }

  export type DispositivoUncheckedCreateWithoutLegajoInput = {
    id?: string
    tipo: string
    marca?: string | null
    modelo?: string | null
    imei?: string | null
    color?: string | null
    numeroLinea?: string | null
  }

  export type DispositivoCreateOrConnectWithoutLegajoInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutLegajoInput, DispositivoUncheckedCreateWithoutLegajoInput>
  }

  export type DispositivoCreateManyLegajoInputEnvelope = {
    data: DispositivoCreateManyLegajoInput | DispositivoCreateManyLegajoInput[]
    skipDuplicates?: boolean
  }

  export type OficioCreateWithoutLegajoInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    respuestas?: RespuestaCreateNestedManyWithoutOficioInput
  }

  export type OficioUncheckedCreateWithoutLegajoInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    respuestas?: RespuestaUncheckedCreateNestedManyWithoutOficioInput
  }

  export type OficioCreateOrConnectWithoutLegajoInput = {
    where: OficioWhereUniqueInput
    create: XOR<OficioCreateWithoutLegajoInput, OficioUncheckedCreateWithoutLegajoInput>
  }

  export type OficioCreateManyLegajoInputEnvelope = {
    data: OficioCreateManyLegajoInput | OficioCreateManyLegajoInput[]
    skipDuplicates?: boolean
  }

  export type ArchivoLegajoCreateWithoutLegajoInput = {
    id?: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano?: number | null
    esAnalizable?: boolean
    analisis?: string | null
    createdAt?: Date | string
  }

  export type ArchivoLegajoUncheckedCreateWithoutLegajoInput = {
    id?: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano?: number | null
    esAnalizable?: boolean
    analisis?: string | null
    createdAt?: Date | string
  }

  export type ArchivoLegajoCreateOrConnectWithoutLegajoInput = {
    where: ArchivoLegajoWhereUniqueInput
    create: XOR<ArchivoLegajoCreateWithoutLegajoInput, ArchivoLegajoUncheckedCreateWithoutLegajoInput>
  }

  export type ArchivoLegajoCreateManyLegajoInputEnvelope = {
    data: ArchivoLegajoCreateManyLegajoInput | ArchivoLegajoCreateManyLegajoInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioLegajoCreateWithoutLegajoInput = {
    id?: string
    texto: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioLegajoUncheckedCreateWithoutLegajoInput = {
    id?: string
    usuarioId: string
    texto: string
    createdAt?: Date | string
  }

  export type ComentarioLegajoCreateOrConnectWithoutLegajoInput = {
    where: ComentarioLegajoWhereUniqueInput
    create: XOR<ComentarioLegajoCreateWithoutLegajoInput, ComentarioLegajoUncheckedCreateWithoutLegajoInput>
  }

  export type ComentarioLegajoCreateManyLegajoInputEnvelope = {
    data: ComentarioLegajoCreateManyLegajoInput | ComentarioLegajoCreateManyLegajoInput[]
    skipDuplicates?: boolean
  }

  export type RedConexionesCreateWithoutLegajoInput = {
    id?: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza?: number
    evidenciaId?: string | null
    createdAt?: Date | string
  }

  export type RedConexionesUncheckedCreateWithoutLegajoInput = {
    id?: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza?: number
    evidenciaId?: string | null
    createdAt?: Date | string
  }

  export type RedConexionesCreateOrConnectWithoutLegajoInput = {
    where: RedConexionesWhereUniqueInput
    create: XOR<RedConexionesCreateWithoutLegajoInput, RedConexionesUncheckedCreateWithoutLegajoInput>
  }

  export type RedConexionesCreateManyLegajoInputEnvelope = {
    data: RedConexionesCreateManyLegajoInput | RedConexionesCreateManyLegajoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutLegajosInput = {
    update: XOR<UsuarioUpdateWithoutLegajosInput, UsuarioUncheckedUpdateWithoutLegajosInput>
    create: XOR<UsuarioCreateWithoutLegajosInput, UsuarioUncheckedCreateWithoutLegajosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLegajosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLegajosInput, UsuarioUncheckedUpdateWithoutLegajosInput>
  }

  export type UsuarioUpdateWithoutLegajosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fiscales?: FiscalUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLegajosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fiscales?: FiscalUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type VictimaUpsertWithWhereUniqueWithoutLegajoInput = {
    where: VictimaWhereUniqueInput
    update: XOR<VictimaUpdateWithoutLegajoInput, VictimaUncheckedUpdateWithoutLegajoInput>
    create: XOR<VictimaCreateWithoutLegajoInput, VictimaUncheckedCreateWithoutLegajoInput>
  }

  export type VictimaUpdateWithWhereUniqueWithoutLegajoInput = {
    where: VictimaWhereUniqueInput
    data: XOR<VictimaUpdateWithoutLegajoInput, VictimaUncheckedUpdateWithoutLegajoInput>
  }

  export type VictimaUpdateManyWithWhereWithoutLegajoInput = {
    where: VictimaScalarWhereInput
    data: XOR<VictimaUpdateManyMutationInput, VictimaUncheckedUpdateManyWithoutLegajoInput>
  }

  export type VictimaScalarWhereInput = {
    AND?: VictimaScalarWhereInput | VictimaScalarWhereInput[]
    OR?: VictimaScalarWhereInput[]
    NOT?: VictimaScalarWhereInput | VictimaScalarWhereInput[]
    id?: StringFilter<"Victima"> | string
    nombre?: StringFilter<"Victima"> | string
    dni?: StringNullableFilter<"Victima"> | string | null
    telefono?: StringNullableFilter<"Victima"> | string | null
    email?: StringNullableFilter<"Victima"> | string | null
    legajoId?: StringFilter<"Victima"> | string
  }

  export type DispositivoUpsertWithWhereUniqueWithoutLegajoInput = {
    where: DispositivoWhereUniqueInput
    update: XOR<DispositivoUpdateWithoutLegajoInput, DispositivoUncheckedUpdateWithoutLegajoInput>
    create: XOR<DispositivoCreateWithoutLegajoInput, DispositivoUncheckedCreateWithoutLegajoInput>
  }

  export type DispositivoUpdateWithWhereUniqueWithoutLegajoInput = {
    where: DispositivoWhereUniqueInput
    data: XOR<DispositivoUpdateWithoutLegajoInput, DispositivoUncheckedUpdateWithoutLegajoInput>
  }

  export type DispositivoUpdateManyWithWhereWithoutLegajoInput = {
    where: DispositivoScalarWhereInput
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyWithoutLegajoInput>
  }

  export type DispositivoScalarWhereInput = {
    AND?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    OR?: DispositivoScalarWhereInput[]
    NOT?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    id?: StringFilter<"Dispositivo"> | string
    tipo?: StringFilter<"Dispositivo"> | string
    marca?: StringNullableFilter<"Dispositivo"> | string | null
    modelo?: StringNullableFilter<"Dispositivo"> | string | null
    imei?: StringNullableFilter<"Dispositivo"> | string | null
    color?: StringNullableFilter<"Dispositivo"> | string | null
    numeroLinea?: StringNullableFilter<"Dispositivo"> | string | null
    legajoId?: StringFilter<"Dispositivo"> | string
  }

  export type OficioUpsertWithWhereUniqueWithoutLegajoInput = {
    where: OficioWhereUniqueInput
    update: XOR<OficioUpdateWithoutLegajoInput, OficioUncheckedUpdateWithoutLegajoInput>
    create: XOR<OficioCreateWithoutLegajoInput, OficioUncheckedCreateWithoutLegajoInput>
  }

  export type OficioUpdateWithWhereUniqueWithoutLegajoInput = {
    where: OficioWhereUniqueInput
    data: XOR<OficioUpdateWithoutLegajoInput, OficioUncheckedUpdateWithoutLegajoInput>
  }

  export type OficioUpdateManyWithWhereWithoutLegajoInput = {
    where: OficioScalarWhereInput
    data: XOR<OficioUpdateManyMutationInput, OficioUncheckedUpdateManyWithoutLegajoInput>
  }

  export type OficioScalarWhereInput = {
    AND?: OficioScalarWhereInput | OficioScalarWhereInput[]
    OR?: OficioScalarWhereInput[]
    NOT?: OficioScalarWhereInput | OficioScalarWhereInput[]
    id?: StringFilter<"Oficio"> | string
    numero?: StringNullableFilter<"Oficio"> | string | null
    operadora?: StringFilter<"Oficio"> | string
    tipo?: StringFilter<"Oficio"> | string
    fechaEnvio?: DateTimeNullableFilter<"Oficio"> | Date | string | null
    fechaRespuesta?: DateTimeNullableFilter<"Oficio"> | Date | string | null
    estado?: StringFilter<"Oficio"> | string
    urgencia?: StringFilter<"Oficio"> | string
    observaciones?: StringNullableFilter<"Oficio"> | string | null
    columnas?: StringNullableFilter<"Oficio"> | string | null
    tipoConsulta?: StringNullableFilter<"Oficio"> | string | null
    numeroLinea?: StringNullableFilter<"Oficio"> | string | null
    imeiSeleccionado?: StringNullableFilter<"Oficio"> | string | null
    createdAt?: DateTimeFilter<"Oficio"> | Date | string
    legajoId?: StringFilter<"Oficio"> | string
  }

  export type ArchivoLegajoUpsertWithWhereUniqueWithoutLegajoInput = {
    where: ArchivoLegajoWhereUniqueInput
    update: XOR<ArchivoLegajoUpdateWithoutLegajoInput, ArchivoLegajoUncheckedUpdateWithoutLegajoInput>
    create: XOR<ArchivoLegajoCreateWithoutLegajoInput, ArchivoLegajoUncheckedCreateWithoutLegajoInput>
  }

  export type ArchivoLegajoUpdateWithWhereUniqueWithoutLegajoInput = {
    where: ArchivoLegajoWhereUniqueInput
    data: XOR<ArchivoLegajoUpdateWithoutLegajoInput, ArchivoLegajoUncheckedUpdateWithoutLegajoInput>
  }

  export type ArchivoLegajoUpdateManyWithWhereWithoutLegajoInput = {
    where: ArchivoLegajoScalarWhereInput
    data: XOR<ArchivoLegajoUpdateManyMutationInput, ArchivoLegajoUncheckedUpdateManyWithoutLegajoInput>
  }

  export type ArchivoLegajoScalarWhereInput = {
    AND?: ArchivoLegajoScalarWhereInput | ArchivoLegajoScalarWhereInput[]
    OR?: ArchivoLegajoScalarWhereInput[]
    NOT?: ArchivoLegajoScalarWhereInput | ArchivoLegajoScalarWhereInput[]
    id?: StringFilter<"ArchivoLegajo"> | string
    legajoId?: StringFilter<"ArchivoLegajo"> | string
    nombre?: StringFilter<"ArchivoLegajo"> | string
    tipo?: StringFilter<"ArchivoLegajo"> | string
    url?: StringFilter<"ArchivoLegajo"> | string
    publicId?: StringFilter<"ArchivoLegajo"> | string
    tamano?: IntNullableFilter<"ArchivoLegajo"> | number | null
    esAnalizable?: BoolFilter<"ArchivoLegajo"> | boolean
    analisis?: StringNullableFilter<"ArchivoLegajo"> | string | null
    createdAt?: DateTimeFilter<"ArchivoLegajo"> | Date | string
  }

  export type ComentarioLegajoUpsertWithWhereUniqueWithoutLegajoInput = {
    where: ComentarioLegajoWhereUniqueInput
    update: XOR<ComentarioLegajoUpdateWithoutLegajoInput, ComentarioLegajoUncheckedUpdateWithoutLegajoInput>
    create: XOR<ComentarioLegajoCreateWithoutLegajoInput, ComentarioLegajoUncheckedCreateWithoutLegajoInput>
  }

  export type ComentarioLegajoUpdateWithWhereUniqueWithoutLegajoInput = {
    where: ComentarioLegajoWhereUniqueInput
    data: XOR<ComentarioLegajoUpdateWithoutLegajoInput, ComentarioLegajoUncheckedUpdateWithoutLegajoInput>
  }

  export type ComentarioLegajoUpdateManyWithWhereWithoutLegajoInput = {
    where: ComentarioLegajoScalarWhereInput
    data: XOR<ComentarioLegajoUpdateManyMutationInput, ComentarioLegajoUncheckedUpdateManyWithoutLegajoInput>
  }

  export type RedConexionesUpsertWithWhereUniqueWithoutLegajoInput = {
    where: RedConexionesWhereUniqueInput
    update: XOR<RedConexionesUpdateWithoutLegajoInput, RedConexionesUncheckedUpdateWithoutLegajoInput>
    create: XOR<RedConexionesCreateWithoutLegajoInput, RedConexionesUncheckedCreateWithoutLegajoInput>
  }

  export type RedConexionesUpdateWithWhereUniqueWithoutLegajoInput = {
    where: RedConexionesWhereUniqueInput
    data: XOR<RedConexionesUpdateWithoutLegajoInput, RedConexionesUncheckedUpdateWithoutLegajoInput>
  }

  export type RedConexionesUpdateManyWithWhereWithoutLegajoInput = {
    where: RedConexionesScalarWhereInput
    data: XOR<RedConexionesUpdateManyMutationInput, RedConexionesUncheckedUpdateManyWithoutLegajoInput>
  }

  export type RedConexionesScalarWhereInput = {
    AND?: RedConexionesScalarWhereInput | RedConexionesScalarWhereInput[]
    OR?: RedConexionesScalarWhereInput[]
    NOT?: RedConexionesScalarWhereInput | RedConexionesScalarWhereInput[]
    id?: StringFilter<"RedConexiones"> | string
    legajoId?: StringFilter<"RedConexiones"> | string
    entidad1?: StringFilter<"RedConexiones"> | string
    tipoEntidad1?: StringFilter<"RedConexiones"> | string
    relacion?: StringFilter<"RedConexiones"> | string
    entidad2?: StringFilter<"RedConexiones"> | string
    tipoEntidad2?: StringFilter<"RedConexiones"> | string
    confianza?: IntFilter<"RedConexiones"> | number
    evidenciaId?: StringNullableFilter<"RedConexiones"> | string | null
    createdAt?: DateTimeFilter<"RedConexiones"> | Date | string
  }

  export type LegajoCreateWithoutVictimasInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutVictimasInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutVictimasInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutVictimasInput, LegajoUncheckedCreateWithoutVictimasInput>
  }

  export type LegajoUpsertWithoutVictimasInput = {
    update: XOR<LegajoUpdateWithoutVictimasInput, LegajoUncheckedUpdateWithoutVictimasInput>
    create: XOR<LegajoCreateWithoutVictimasInput, LegajoUncheckedCreateWithoutVictimasInput>
    where?: LegajoWhereInput
  }

  export type LegajoUpdateToOneWithWhereWithoutVictimasInput = {
    where?: LegajoWhereInput
    data: XOR<LegajoUpdateWithoutVictimasInput, LegajoUncheckedUpdateWithoutVictimasInput>
  }

  export type LegajoUpdateWithoutVictimasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutVictimasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoCreateWithoutDispositivosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutDispositivosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutDispositivosInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutDispositivosInput, LegajoUncheckedCreateWithoutDispositivosInput>
  }

  export type LegajoUpsertWithoutDispositivosInput = {
    update: XOR<LegajoUpdateWithoutDispositivosInput, LegajoUncheckedUpdateWithoutDispositivosInput>
    create: XOR<LegajoCreateWithoutDispositivosInput, LegajoUncheckedCreateWithoutDispositivosInput>
    where?: LegajoWhereInput
  }

  export type LegajoUpdateToOneWithWhereWithoutDispositivosInput = {
    where?: LegajoWhereInput
    data: XOR<LegajoUpdateWithoutDispositivosInput, LegajoUncheckedUpdateWithoutDispositivosInput>
  }

  export type LegajoUpdateWithoutDispositivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutDispositivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoCreateWithoutOficiosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutOficiosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutOficiosInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutOficiosInput, LegajoUncheckedCreateWithoutOficiosInput>
  }

  export type RespuestaCreateWithoutOficioInput = {
    id?: string
    datos: string
    createdAt?: Date | string
  }

  export type RespuestaUncheckedCreateWithoutOficioInput = {
    id?: string
    datos: string
    createdAt?: Date | string
  }

  export type RespuestaCreateOrConnectWithoutOficioInput = {
    where: RespuestaWhereUniqueInput
    create: XOR<RespuestaCreateWithoutOficioInput, RespuestaUncheckedCreateWithoutOficioInput>
  }

  export type RespuestaCreateManyOficioInputEnvelope = {
    data: RespuestaCreateManyOficioInput | RespuestaCreateManyOficioInput[]
    skipDuplicates?: boolean
  }

  export type LegajoUpsertWithoutOficiosInput = {
    update: XOR<LegajoUpdateWithoutOficiosInput, LegajoUncheckedUpdateWithoutOficiosInput>
    create: XOR<LegajoCreateWithoutOficiosInput, LegajoUncheckedCreateWithoutOficiosInput>
    where?: LegajoWhereInput
  }

  export type LegajoUpdateToOneWithWhereWithoutOficiosInput = {
    where?: LegajoWhereInput
    data: XOR<LegajoUpdateWithoutOficiosInput, LegajoUncheckedUpdateWithoutOficiosInput>
  }

  export type LegajoUpdateWithoutOficiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutOficiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type RespuestaUpsertWithWhereUniqueWithoutOficioInput = {
    where: RespuestaWhereUniqueInput
    update: XOR<RespuestaUpdateWithoutOficioInput, RespuestaUncheckedUpdateWithoutOficioInput>
    create: XOR<RespuestaCreateWithoutOficioInput, RespuestaUncheckedCreateWithoutOficioInput>
  }

  export type RespuestaUpdateWithWhereUniqueWithoutOficioInput = {
    where: RespuestaWhereUniqueInput
    data: XOR<RespuestaUpdateWithoutOficioInput, RespuestaUncheckedUpdateWithoutOficioInput>
  }

  export type RespuestaUpdateManyWithWhereWithoutOficioInput = {
    where: RespuestaScalarWhereInput
    data: XOR<RespuestaUpdateManyMutationInput, RespuestaUncheckedUpdateManyWithoutOficioInput>
  }

  export type RespuestaScalarWhereInput = {
    AND?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
    OR?: RespuestaScalarWhereInput[]
    NOT?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
    id?: StringFilter<"Respuesta"> | string
    oficioId?: StringFilter<"Respuesta"> | string
    datos?: StringFilter<"Respuesta"> | string
    createdAt?: DateTimeFilter<"Respuesta"> | Date | string
  }

  export type OficioCreateWithoutRespuestasInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    legajo: LegajoCreateNestedOneWithoutOficiosInput
  }

  export type OficioUncheckedCreateWithoutRespuestasInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
    legajoId: string
  }

  export type OficioCreateOrConnectWithoutRespuestasInput = {
    where: OficioWhereUniqueInput
    create: XOR<OficioCreateWithoutRespuestasInput, OficioUncheckedCreateWithoutRespuestasInput>
  }

  export type OficioUpsertWithoutRespuestasInput = {
    update: XOR<OficioUpdateWithoutRespuestasInput, OficioUncheckedUpdateWithoutRespuestasInput>
    create: XOR<OficioCreateWithoutRespuestasInput, OficioUncheckedCreateWithoutRespuestasInput>
    where?: OficioWhereInput
  }

  export type OficioUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: OficioWhereInput
    data: XOR<OficioUpdateWithoutRespuestasInput, OficioUncheckedUpdateWithoutRespuestasInput>
  }

  export type OficioUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajo?: LegajoUpdateOneRequiredWithoutOficiosNestedInput
  }

  export type OficioUncheckedUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutFiscalesInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFiscalesInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFiscalesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFiscalesInput, UsuarioUncheckedCreateWithoutFiscalesInput>
  }

  export type UsuarioUpsertWithoutFiscalesInput = {
    update: XOR<UsuarioUpdateWithoutFiscalesInput, UsuarioUncheckedUpdateWithoutFiscalesInput>
    create: XOR<UsuarioCreateWithoutFiscalesInput, UsuarioUncheckedCreateWithoutFiscalesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFiscalesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFiscalesInput, UsuarioUncheckedUpdateWithoutFiscalesInput>
  }

  export type UsuarioUpdateWithoutFiscalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFiscalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type LegajoCreateWithoutComentariosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutComentariosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutComentariosInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutComentariosInput, LegajoUncheckedCreateWithoutComentariosInput>
  }

  export type UsuarioCreateWithoutComentariosInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoCreateNestedManyWithoutUsuarioInput
    fiscales?: FiscalCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: string
    nombre: string
    usuario: string
    password: string
    rol?: string
    activo?: boolean
    createdAt?: Date | string
    legajos?: LegajoUncheckedCreateNestedManyWithoutUsuarioInput
    fiscales?: FiscalUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type LegajoUpsertWithoutComentariosInput = {
    update: XOR<LegajoUpdateWithoutComentariosInput, LegajoUncheckedUpdateWithoutComentariosInput>
    create: XOR<LegajoCreateWithoutComentariosInput, LegajoUncheckedCreateWithoutComentariosInput>
    where?: LegajoWhereInput
  }

  export type LegajoUpdateToOneWithWhereWithoutComentariosInput = {
    where?: LegajoWhereInput
    data: XOR<LegajoUpdateWithoutComentariosInput, LegajoUncheckedUpdateWithoutComentariosInput>
  }

  export type LegajoUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUpdateManyWithoutUsuarioNestedInput
    fiscales?: FiscalUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajos?: LegajoUncheckedUpdateManyWithoutUsuarioNestedInput
    fiscales?: FiscalUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type LegajoCreateWithoutArchivosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutArchivosInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
    conexiones?: RedConexionesUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutArchivosInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutArchivosInput, LegajoUncheckedCreateWithoutArchivosInput>
  }

  export type LegajoUpsertWithoutArchivosInput = {
    update: XOR<LegajoUpdateWithoutArchivosInput, LegajoUncheckedUpdateWithoutArchivosInput>
    create: XOR<LegajoCreateWithoutArchivosInput, LegajoUncheckedCreateWithoutArchivosInput>
    where?: LegajoWhereInput
  }

  export type LegajoUpdateToOneWithWhereWithoutArchivosInput = {
    where?: LegajoWhereInput
    data: XOR<LegajoUpdateWithoutArchivosInput, LegajoUncheckedUpdateWithoutArchivosInput>
  }

  export type LegajoUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoCreateWithoutConexionesInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLegajosInput
    victimas?: VictimaCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoCreateNestedManyWithoutLegajoInput
    oficios?: OficioCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoCreateNestedManyWithoutLegajoInput
  }

  export type LegajoUncheckedCreateWithoutConexionesInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    victimas?: VictimaUncheckedCreateNestedManyWithoutLegajoInput
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutLegajoInput
    oficios?: OficioUncheckedCreateNestedManyWithoutLegajoInput
    archivos?: ArchivoLegajoUncheckedCreateNestedManyWithoutLegajoInput
    comentarios?: ComentarioLegajoUncheckedCreateNestedManyWithoutLegajoInput
  }

  export type LegajoCreateOrConnectWithoutConexionesInput = {
    where: LegajoWhereUniqueInput
    create: XOR<LegajoCreateWithoutConexionesInput, LegajoUncheckedCreateWithoutConexionesInput>
  }

  export type LegajoUpsertWithoutConexionesInput = {
    update: XOR<LegajoUpdateWithoutConexionesInput, LegajoUncheckedUpdateWithoutConexionesInput>
    create: XOR<LegajoCreateWithoutConexionesInput, LegajoUncheckedCreateWithoutConexionesInput>
    where?: LegajoWhereInput
  }

  export type LegajoUpdateToOneWithWhereWithoutConexionesInput = {
    where?: LegajoWhereInput
    data: XOR<LegajoUpdateWithoutConexionesInput, LegajoUncheckedUpdateWithoutConexionesInput>
  }

  export type LegajoUpdateWithoutConexionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLegajosNestedInput
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutConexionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoCreateManyUsuarioInput = {
    id?: string
    numero: string
    caratula: string
    cuij?: string | null
    delito: string
    fechaHecho: Date | string
    estado?: string
    observaciones?: string | null
    fiscal?: string | null
    emailRespuesta?: string | null
    visto?: boolean
    origenTipo?: string | null
    origenId?: string | null
    asignadoA?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FiscalCreateManyUsuarioInput = {
    id?: string
    nombre: string
    cargo?: string | null
    fiscalia?: string | null
    secretario?: string | null
    dniSecretario?: string | null
    dni?: string | null
    email?: string | null
    emailSecretario?: string | null
    direccion?: string | null
    telefono?: string | null
    telefonoMovil?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type ComentarioLegajoCreateManyUsuarioInput = {
    id?: string
    legajoId: string
    texto: string
    createdAt?: Date | string
  }

  export type SessionCreateManyUsuarioInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type LegajoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    victimas?: VictimaUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    victimas?: VictimaUncheckedUpdateManyWithoutLegajoNestedInput
    dispositivos?: DispositivoUncheckedUpdateManyWithoutLegajoNestedInput
    oficios?: OficioUncheckedUpdateManyWithoutLegajoNestedInput
    archivos?: ArchivoLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    comentarios?: ComentarioLegajoUncheckedUpdateManyWithoutLegajoNestedInput
    conexiones?: RedConexionesUncheckedUpdateManyWithoutLegajoNestedInput
  }

  export type LegajoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    caratula?: StringFieldUpdateOperationsInput | string
    cuij?: NullableStringFieldUpdateOperationsInput | string | null
    delito?: StringFieldUpdateOperationsInput | string
    fechaHecho?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: NullableStringFieldUpdateOperationsInput | string | null
    emailRespuesta?: NullableStringFieldUpdateOperationsInput | string | null
    visto?: BoolFieldUpdateOperationsInput | boolean
    origenTipo?: NullableStringFieldUpdateOperationsInput | string | null
    origenId?: NullableStringFieldUpdateOperationsInput | string | null
    asignadoA?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalia?: NullableStringFieldUpdateOperationsInput | string | null
    secretario?: NullableStringFieldUpdateOperationsInput | string | null
    dniSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecretario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoMovil?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legajo?: LegajoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioLegajoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    legajoId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VictimaCreateManyLegajoInput = {
    id?: string
    nombre: string
    dni?: string | null
    telefono?: string | null
    email?: string | null
  }

  export type DispositivoCreateManyLegajoInput = {
    id?: string
    tipo: string
    marca?: string | null
    modelo?: string | null
    imei?: string | null
    color?: string | null
    numeroLinea?: string | null
  }

  export type OficioCreateManyLegajoInput = {
    id?: string
    numero?: string | null
    operadora: string
    tipo: string
    fechaEnvio?: Date | string | null
    fechaRespuesta?: Date | string | null
    estado?: string
    urgencia?: string
    observaciones?: string | null
    columnas?: string | null
    tipoConsulta?: string | null
    numeroLinea?: string | null
    imeiSeleccionado?: string | null
    createdAt?: Date | string
  }

  export type ArchivoLegajoCreateManyLegajoInput = {
    id?: string
    nombre: string
    tipo: string
    url: string
    publicId: string
    tamano?: number | null
    esAnalizable?: boolean
    analisis?: string | null
    createdAt?: Date | string
  }

  export type ComentarioLegajoCreateManyLegajoInput = {
    id?: string
    usuarioId: string
    texto: string
    createdAt?: Date | string
  }

  export type RedConexionesCreateManyLegajoInput = {
    id?: string
    entidad1: string
    tipoEntidad1: string
    relacion: string
    entidad2: string
    tipoEntidad2: string
    confianza?: number
    evidenciaId?: string | null
    createdAt?: Date | string
  }

  export type VictimaUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VictimaUncheckedUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VictimaUncheckedUpdateManyWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUncheckedUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispositivoUncheckedUpdateManyWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    imei?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OficioUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUpdateManyWithoutOficioNestedInput
  }

  export type OficioUncheckedUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUncheckedUpdateManyWithoutOficioNestedInput
  }

  export type OficioUncheckedUpdateManyWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    operadora?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    urgencia?: StringFieldUpdateOperationsInput | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    columnas?: NullableStringFieldUpdateOperationsInput | string | null
    tipoConsulta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLinea?: NullableStringFieldUpdateOperationsInput | string | null
    imeiSeleccionado?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoLegajoUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoLegajoUncheckedUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoLegajoUncheckedUpdateManyWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    esAnalizable?: BoolFieldUpdateOperationsInput | boolean
    analisis?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioLegajoUncheckedUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioLegajoUncheckedUpdateManyWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedConexionesUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedConexionesUncheckedUpdateWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedConexionesUncheckedUpdateManyWithoutLegajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    entidad1?: StringFieldUpdateOperationsInput | string
    tipoEntidad1?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    entidad2?: StringFieldUpdateOperationsInput | string
    tipoEntidad2?: StringFieldUpdateOperationsInput | string
    confianza?: IntFieldUpdateOperationsInput | number
    evidenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateManyOficioInput = {
    id?: string
    datos: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateWithoutOficioInput = {
    id?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUncheckedUpdateWithoutOficioInput = {
    id?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUncheckedUpdateManyWithoutOficioInput = {
    id?: StringFieldUpdateOperationsInput | string
    datos?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegajoCountOutputTypeDefaultArgs instead
     */
    export type LegajoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegajoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OficioCountOutputTypeDefaultArgs instead
     */
    export type OficioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OficioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegajoDefaultArgs instead
     */
    export type LegajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegajoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VictimaDefaultArgs instead
     */
    export type VictimaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VictimaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DispositivoDefaultArgs instead
     */
    export type DispositivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DispositivoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OficioDefaultArgs instead
     */
    export type OficioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OficioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RespuestaDefaultArgs instead
     */
    export type RespuestaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RespuestaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FiscalDefaultArgs instead
     */
    export type FiscalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FiscalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConfiguracionDefaultArgs instead
     */
    export type ConfiguracionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConfiguracionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistroTelefoniaDefaultArgs instead
     */
    export type RegistroTelefoniaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistroTelefoniaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistroEstafaDefaultArgs instead
     */
    export type RegistroEstafaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistroEstafaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComentarioLegajoDefaultArgs instead
     */
    export type ComentarioLegajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComentarioLegajoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArchivoLegajoDefaultArgs instead
     */
    export type ArchivoLegajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArchivoLegajoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RedConexionesDefaultArgs instead
     */
    export type RedConexionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RedConexionesDefaultArgs<ExtArgs>

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