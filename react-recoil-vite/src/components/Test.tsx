import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import userState from '@/stores/users';

const Test = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event ::::: ', event);
    setCurrentUser(event.target.value);
  };
  return (
    <div>
      <input name="currentUserName" onChange={handleChange} value={currentUser} />
      <div>{currentUser}</div>
    </div>
  );
};

export default Test;
