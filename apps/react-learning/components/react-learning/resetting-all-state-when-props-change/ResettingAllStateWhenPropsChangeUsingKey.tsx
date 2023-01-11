import { Button, Container, Flex, Textarea } from "@mantine/core";
import { useEffect, useState } from "react";
import CodeSnippet from "../CodeSnippet";
import { codeExamples } from "./code";


type User = {
  userId: number;
  name: string
}

const users: User[] = [
  {
    userId: 1,
    name: 'Joe Doe'
  },
  {
    userId: 2,
    name: 'Marouane'
  },
  {
    userId: 3,
    name: 'Ayoub'
  }
];

const Profile = ({ user }) => {
  const [comment, setComment] = useState<string>('');

  return (
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
  )
}

export const ResettingAllStateWhenPropsChangeUsingKey = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);


  const usersUI = () => users.map(user => <Button color="violet" size="md" variant="light" key={user.userId} onClick={() => setSelectedUser(user)} >{user.name}</Button>)

  return (
    <Container>
      <p></p>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'center' }}
      >
        {usersUI()}
      </Flex>

      <h3>User ❤️ {selectedUser && selectedUser.name}</h3>
      {selectedUser && <Profile user={selectedUser} key={selectedUser.userId} /> }
      <CodeSnippet language="tsx" withLineNumbers title="Code Example" hig={
        {
          added: [5,6,7],
          deleted: []
        }
      }>{codeExamples.error}</CodeSnippet>
    </Container>
  )
}

export default ResettingAllStateWhenPropsChangeUsingKey;