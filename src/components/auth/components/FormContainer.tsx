import { Stage, useStage } from '../context/stage';
import { Selection } from './Selection/Selection';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const component: Record<Stage, React.ReactNode> = {
  signIn: <SignIn />,
  signUp: <SignUp />,
  selection: <Selection />
};

export const FormContainer = () => {
  const { stage } = useStage();

  return component[stage];
};
