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
  `
};
