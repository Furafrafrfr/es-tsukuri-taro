import {
  atom,
  atomFamily,
  useRecoilCallback,
  useRecoilSnapshot,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Qa, QaId } from './Qa.type';

const defaultQa: Qa = {
  question: '',
  answer: '',
  limit: 400,
};

const qaFamilyState = atomFamily<Qa, number>({
  key: 'qa',
  default: defaultQa,
});

const qaIdsState = atom<number[]>({
  key: 'qa-id',
  default: [],
});

let _id = 0;
function getId() {
  return _id++;
}

let _called = 0;

export function useQaIds() {
  const [ids, setIds] = useRecoilState(qaIdsState);
  const addId = (id: number) => {
    _called++;
    if (ids.findIndex((val) => val === id) !== -1)
      throw new Error(
        `specified id is already used: ${id}. Number of called: ${_called}`
      );

    setIds((prev) => [...prev, id]);
  };
  const removeId = (id: number) => {
    const idIndex = ids.findIndex((val) => val === id);
    if (idIndex === -1) throw new Error('specified id is not exist');

    setIds(ids.filter((val) => val !== id));
  };

  return {
    ids,
    addId,
    removeId,
  };
}

export function useQa(id: QaId) {
  const qa = useRecoilValue(qaFamilyState(id));
  const { removeId } = useQaIds();

  const removeQa = useRecoilCallback(({ reset }) => () => {
    removeId(id);
    reset(qaFamilyState(id));
  });
  const updateQa = useRecoilCallback(({ set }) => (qa: Qa) => {
    set(qaFamilyState(id), qa);
  });

  return {
    qa,
    removeQa,
    updateQa,
  };
}

export function useCreateQa() {
  const { addId } = useQaIds();
  const addQa = useRecoilCallback(({ set }) => () => {
    const newId = getId();
    addId(newId);
    set(qaFamilyState(newId), { ...defaultQa });
    return newId;
  });

  return addQa;
}

export function useQaSnapshot() {
  const snapshot = useRecoilSnapshot();
  const getIdsState = async () => await snapshot.getPromise(qaIdsState);
  return getIdsState;
}
