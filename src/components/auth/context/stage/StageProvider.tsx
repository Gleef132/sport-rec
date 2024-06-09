import React from 'react';
import { Stage, StageContext } from './StageContext';

export interface StageProviderProps {
  defaultStage?: Stage;
  children: React.ReactNode;
}

export const StageProvider: React.FC<StageProviderProps> = ({
  children,
  defaultStage = 'signIn'
}) => {
  const [stage, setStage] = React.useState<Stage>(defaultStage);

  const value = React.useMemo(() => ({ stage, setStage }), [stage]);

  React.useEffect(() => {
    setStage(defaultStage);
  }, [defaultStage]);

  return <StageContext.Provider value={value}>{children}</StageContext.Provider>;
};
