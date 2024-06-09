import { Box } from '@mui/material';
import { SelectionAthlete } from './SelectionAthlete';
import { SelectionProfile } from './SelectionProfile';
import { SelectionSport } from './SelectionSport';

interface SelectionContainerProps {
  stage: number;
  setUserIsVerified: React.Dispatch<React.SetStateAction<() => boolean>>;
}

export const SelectionContainer: React.FC<SelectionContainerProps> = ({
  stage,
  setUserIsVerified
}) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '718px' },
        height: '100%',
        maxHeight: '538px',
        py: '16px'
      }}
    >
      {stage === 1 && <SelectionSport />}
      {(stage === 2 || stage === 3) && <SelectionAthlete stage={stage} />}
      {stage === 4 && <SelectionProfile setUserIsVerified={setUserIsVerified} />}
    </Box>
  );
};
