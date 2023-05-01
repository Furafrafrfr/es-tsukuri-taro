export class Store<T> {
  public constructor(private db: IDBDatabase, private storeName: string) {}
  getAll(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const req: IDBRequest<T[]> = this.db
        .transaction(this.storeName, 'readonly')
        .objectStore(this.storeName)
        .getAll();
      req.onsuccess = () => {
        resolve(req.result);
      };
      req.onerror = () => {
        reject(req.error);
      };
    });
  }
  delete(key: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const req = this.db
        .transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName)
        .delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
  update(key: any, data: Partial<T>): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const objStore = this.db
        .transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName);
      const req = objStore.get(key);
      req.onsuccess = () => {
        const old: T = req.result;
        const newData = { ...old, ...data };
        const updateReq = objStore.put(newData);
        updateReq.onsuccess = () => resolve();
        updateReq.onerror = () => reject(req.error);
      };
      req.onerror = () => reject(req.error);
    });
  }
  add(data: T) {
    return new Promise<void>((resolve, reject) => {
      const req = this.db
        .transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName)
        .add(data);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
}
