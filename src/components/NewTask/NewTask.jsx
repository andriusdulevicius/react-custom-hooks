import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { dbUrl } from './../../config';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const makeTask = (data) => {
    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    // const createdTask = { id: generatedId, text: data.text };

    props.onAddTask();
  };

  const requestConfig = {
    url: `${dbUrl}tasks.json`,
    method: 'POST',
    body: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { sendRequest: enterTaskHandler, isLoading, error } = useHttp(requestConfig, makeTask);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
