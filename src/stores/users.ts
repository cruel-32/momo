import { atom } from 'recoil';

const currentUserState = atom({
  key: 'currentUserState', // unique ID (with respect to other atoms/selectors)
  default: 'test', // default value (aka initial value)
});

export default currentUserState;
