import { FormContainer } from './components/FormContainer';
import { Stage, StageProvider } from './context/stage';

interface FormProps {
  stage: Stage;
}

export const Form: React.FC<FormProps> = ({ stage }) => (
  <StageProvider defaultStage={stage}>
    <FormContainer />
  </StageProvider>
);
