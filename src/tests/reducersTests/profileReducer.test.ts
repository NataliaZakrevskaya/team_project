import { meRespType } from '../../API/meAPI/types';
import { ProfileInitialStateType } from '../../Redux/Reducers/profileReducer/types';
import { profileReducer } from '../../Redux/Reducers/profileReducer/ProfileReducer';
import { profileActions } from '../../Redux/Actions/profileActions/profileActions';
import { UserDataType } from '../../Redux/Actions/loginFormActions/types';

const loginResponse: UserDataType = {
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
  //@ts-ignore
  created: '2022-03-07T11:34:51.828Z',
  email: 'zakrevskaya.97@inbox.ru',
  isAdmin: false,
  name: 'Natasha',
  publicCardPacksCount: 0,
  rememberMe: false,
  token: '3571bb00-a04b-11ec-a728-1562501085a6',
  //@ts-ignore
  updated: '2022-03-07T11:34:51.828Z',
  _id: '6225eddb0373a3000426a627',
};
const meResponse: meRespType = {
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
  //@ts-ignore
  created: '2022-03-07T11:34:51.828Z',
  email: 'zakrevskaya.97@inbox.ru',
  isAdmin: false,
  name: 'Natasha',
  publicCardPacksCount: 0,
  rememberMe: false,
  token: '3571bb00-a04b-11ec-a728-1562501085a6',
  tokenDeathTime: 1646911342128,
  //@ts-ignore
  updated: '2022-03-10T08:22:22.129Z',
  verified: false,
  _id: '6225eddb0373a3000426a627',
};

let startState: ProfileInitialStateType;
beforeEach( () => {
  startState = {
    profile: {
      _id: '',
      email: '',
      name: '',
      avatar: '',
      publicCardPacksCount: 0,

      created: 0,
      updated: 0,
      isAdmin: false,
      verified: false,
      rememberMe: false,

      error: '',
      token: '',
    },
    error: '',
  };
} );
test( 'correct user data from me response should be set', () => {
  const endState = profileReducer( startState, profileActions.setProfileAC( meResponse ) );

  expect( endState.profile ).toEqual( meResponse );
} );

test( 'correct user data from login response should be set', () => {
  const endState = profileReducer( startState, profileActions.setProfileAC( loginResponse ) );

  expect( endState.profile ).toEqual( loginResponse );
} );
test( 'correct error should be set', () => {
  const endState = profileReducer( startState, profileActions.setErrorAC( 'new name is required' ) );

  expect( endState.error ).toBe( 'new name is required' );
} );