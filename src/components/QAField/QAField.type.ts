import { QaId } from '../../state/Qa/Qa.type';

export type QAFieldProps = {
  question: string;
  answer: string;
  limit: number | null;
  num?: number;
  onChangeQuestion: (question: string) => void;
  onChangeAnswer: (answer: string) => void;
  onChangeLimit: (limit: number) => void;
};

export type QAFieldContainerProps = {
  id: QaId;
  num?: number;
};
