import React from 'react';
import { Paper, TextField, Box, Typography } from '@mui/material';
import { AnswerField } from '../AnswerField';
import { QAFieldProps } from './QAField.type';

export function QAField({
  question,
  answer,
  limit,
  num,
  onChangeQuestion,
  onChangeAnswer,
  onChangeLimit,
}: QAFieldProps): React.ReactElement {
  return (
    <Paper sx={{ p: 3 }}>
      {num !== undefined && <Typography>{num}</Typography>}
      <TextField
        label="質問"
        placeholder="質問"
        value={question}
        onChange={(e) => onChangeQuestion(e.target.value)}
        type="text"
        fullWidth
        multiline
        margin="normal"
      />
      <TextField
        label="上限文字数"
        value={limit}
        onChange={(e) => onChangeLimit(parseInt(e.target.value))}
        type="number"
        margin="normal"
      />
      <Box>
        <AnswerField
          answer={answer}
          onChangeAnswer={onChangeAnswer}
          limit={400}
        />
        <TextField
          label="メモ"
          type="text"
          multiline
          fullWidth
          margin="normal"
        />
      </Box>
    </Paper>
  );
}
