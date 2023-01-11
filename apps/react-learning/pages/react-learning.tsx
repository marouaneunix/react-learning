import { Button, Container, Flex, Textarea, createStyles } from "@mantine/core";
import { Prism } from '@mantine/prism';
import { useState } from "react"
import { codeExamples } from "../components/react-learning/code";
import ResettingAllStateWhenPropsChnageUseEffect from "../components/react-learning/ResettingAllStateWhenPropsChnageUseEffect";

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



const useStyles = createStyles((theme, _params, getRef) => ({

  child: {
    // assign ref to element
    ref: getRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const ResettingAllStateError = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [comment, setComment] = useState<string>('');
  const { classes } = useStyles();

  const usersUI = () => users.map(user => <Button color="violet" size="md" variant="light" key={user.userId} onClick={() => setSelectedUser(user)} >{user.name}</Button>)

  return (
    <Container>
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
      <h3>Code example</h3>
      <div className={classes.child}>
        <Prism language="tsx" withLineNumbers>{codeExamples.error}</Prism>
      </div>
      <h3>First Solution using useEffect</h3>
      <ResettingAllStateWhenPropsChnageUseEffect />
    </Container>
  )
}

export default ResettingAllStateError;