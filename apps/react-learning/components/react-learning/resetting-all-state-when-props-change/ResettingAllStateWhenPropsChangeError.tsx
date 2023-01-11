import { Button, Flex, Textarea } from '@mantine/core';
import { Prism } from '@mantine/prism';

import { useState } from 'react';
import CodeSnippet from '../CodeSnippet';
import { codeExamples } from './code';

type User = {
  userId: number;
  name: string;
};
const users: User[] = [
  {
    userId: 1,
    name: 'Joe Doe',
  },
  {
    userId: 2,
    name: 'Marouane',
  },
  {
    userId: 3,
    name: 'Ayoub',
  },
];



const ResettingAllStateWhenPropsChangeError = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [comment, setComment] = useState<string>('');

 
  const usersUI = () => users.map(user => <Button color="violet" size="md" variant="light" key={user.userId} onClick={() => setSelectedUser(user)} >{user.name}</Button>)

  return (
    <>
      <h2>
        Wen can&apos;t reset comment state when a user is selected
      </h2>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'center' }}
      >
        {usersUI()}
      </Flex>

        <>
          <h3>User ❤️ {selectedUser && selectedUser.name}</h3>
          <Textarea
            placeholder="Your comment"
            label="Your comment"
            variant="filled"
            radius="md"
            size="md"
            value={comment}
            onChange={event => setComment(event.target.value)}
            withAsterisk
          />
        </>
      <CodeSnippet language="tsx" withLineNumbers title="Code Example">{codeExamples.error}</CodeSnippet>
    </>
  )
};

export default ResettingAllStateWhenPropsChangeError;
