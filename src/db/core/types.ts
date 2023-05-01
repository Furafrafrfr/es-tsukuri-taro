export type Company = {
  id: number;
  name: string;
  deadline: string;
  note: string;
};

export type Qa = {
  id: number;
  question: string;
  limit: number;
  answer: string;
};

export type Index = {
  name: string;
  keyPath?: string;
  options?: {
    unique?: boolean;
    multiEntry?: boolean;
    locale?: string | 'auto' | undefined | null;
  };
};

export type StoreSchema = {
  name: string;
  options?: {
    keyPath?: string;
    autoIncrement?: boolean;
  };
  indexes: Index[];
};
