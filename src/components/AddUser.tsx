import React, { useCallback, useState } from 'react'
import { idGenerator } from '../helpers/helpers'
import { addUser } from '../redux-toolkit/usersSlice'
import { useDispatch } from 'react-redux'

const AddUser = (): JSX.Element => {
  const dispatch = useDispatch()
  const [addUserName, setAddUserName] = useState<string>()
  const [addUserAge, setAddUserAge] = useState<string>()

  const handleAddUser = useCallback(() => {
    const id = idGenerator()
    console.log('id', id)
    dispatch(addUser({ id: idGenerator(), name: addUserName ?? '', age: !(addUserAge == null) ? +addUserAge : 0 }))
    setAddUserName('')
    setAddUserAge('')
  }, [addUserAge, addUserName, dispatch])

  return <>
        <input type="text" value={addUserName} onChange={(e) => setAddUserName(e.target.value)}/>
        <input type="text" value={addUserAge} onChange={(e) => setAddUserAge(e.target.value)}/>

        <button onClick={handleAddUser}>Add User</button>
    </>
}

export default AddUser
