import { SignContainer } from './SignContainer';
import { SIGN_UP_CONSTANTS } from '../constants/constants';

export const SignUp = () => {
  return <SignContainer CONTENT={SIGN_UP_CONSTANTS} isSignUp={true} />;
};
