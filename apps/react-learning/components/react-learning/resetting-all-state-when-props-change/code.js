export const codeExamples = {
  error: `
  const ResettingAllStateError = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [comment, setComment] = useState<string>('');
  
  return (
    <div>
      <div>
        {users.map(user => <button key={user.userId} onClick={() => setSelectedUser(user)} >{user.name}</button>)}
      </div>
      {
        selectedUser &&
        <>
          <h3>User ❤️ {selectedUser.name}</h3>
          <textarea
            value={comment}
            onChange={event => setComment(event.target.value)}
          />
        </>
      }
    </div>
    )
  }
  `,
  useEffect: `
  const ResettingAllStateError = () => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
    const [comment, setComment] = useState<string>('');

    useEffect(() => {
      setComment('')
    }, [selectedUser]);
    
    return (
      <div>
        <div>
          {users.map(user => <button key={user.userId} onClick={() => setSelectedUser(user)} >{user.name}</button>)}
        </div>
        {
          selectedUser &&
          <>
            <h3>User ❤️ {selectedUser.name}</h3>
            <textarea
              value={comment}
              onChange={event => setComment(event.target.value)}
            />
          </>
        }
      </div>
      )
    }
  `,
  key: `
  export const ResettingAllStateWhenPropsChangeUsingKey = () => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  
    const usersUI = () => users.map(user => <Button color="violet" size="md" variant="light" key={user.userId} onClick={() => setSelectedUser(user)} >{user.name}</Button>)
  
    return (
      <Container>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
          {usersUI()}
        </Flex>
  
        <h3>User ❤️ {selectedUser && selectedUser.name}</h3>
        {selectedUser && <Profile user={selectedUser} key={selectedUser.userId} /> }
      </Container>
    )
  }
  `,
};
