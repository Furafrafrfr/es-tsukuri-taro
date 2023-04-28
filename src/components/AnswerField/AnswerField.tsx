import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { AnswerFieldProps } from './AnswerField.type';

export function AnswerField({
  answer,
  limit,
  onChangeAnswer,
}: AnswerFieldProps): React.ReactElement {
  return (
    <Box>
      <TextField
        label="回答"
        type="text"
        multiline
        fullWidth
        margin="normal"
        value={answer}
        onChange={(e) => onChangeAnswer(e.target.value)}
      />
      <Box display="flex" sx={{ float: 'right' }}>
        <div>
          <Typography
            color={
              answer.length < limit * 0.8
                ? 'error.main'
                : answer.length < limit * 0.9
                ? 'warning.main'
                : answer.length <= limit
                ? 'success.main'
                : 'error.main'
            }
            component="span"
          >
            {answer.length}
          </Typography>
          <Typography component="span"> / {limit}</Typography>
        </div>
      </Box>
    </Box>
  );
}
