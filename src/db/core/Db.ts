import { StoreSchema } from './types';
import { Store } from './Store';

export class Db {
  public static connect(
    dbName: string,
    dbVersion: number,
    schema: StoreSchema[]
  ): Promise<Db> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion);

      request.onerror = () => {
        reject(request.error);
      };
      request.onsuccess = () => {
        resolve(new Db(request.result));
      };
      request.onupgradeneeded = () => {
        for (const storeSchema of schema) {
          const store = request.result.createObjectStore(
            storeSchema.name,
            storeSchema.options
          );
          for (const indexSchema of storeSchema.indexes) {
            store.createIndex(
              indexSchema.name,
              indexSchema.keyPath || indexSchema.name,
              indexSchema.options
            );
          }
        }
      };
    });
  }
  private constructor(private db: IDBDatabase) {}
  public store<T>(storeName: string): Store<T> {
    return new Store(this.db, storeName);
  }
}
