import { AppStateType } from '../../Store/store';
import { Nullable, Undetectable } from '../../../types';

export const getNewPasswordInfo = ( state: AppStateType ): Undetectable<string> => {
  return state.passwordRegister.newPassword.info;
};
export const getError = ( state: AppStateType ): Nullable<string> => {
  return state.passwordRegister.e;
};