import { QAField } from './QAField';
import { useQa } from '../../state/Qa';
import { QAFieldContainerProps } from './QAField.type';

export function QAFieldContainer({ id, num }: QAFieldContainerProps) {
  const { qa, updateQa } = useQa(id);
  const onChangeQuestion = (q: string) => {
    updateQa({ ...qa, question: q });
  };
  const onChangeAnswer = (a: string) => {
    updateQa({ ...qa, answer: a });
  };
  const onChangeLimit = (l: number) => {
    updateQa({ ...qa, limit: l });
  };

  return (
    <QAField
      question={qa.question}
      answer={qa.answer}
      limit={qa.limit}
      num={num}
      onChangeQuestion={onChangeQuestion}
      onChangeAnswer={onChangeAnswer}
      onChangeLimit={onChangeLimit}
    />
  );
}
