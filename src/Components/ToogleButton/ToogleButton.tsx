
import React from 'react';
import IconUp from '../../assets/Icon/charm_chevron-up.png';
import IconDown from '../../assets/Icon/charm_chevron-down.png';

import { ToggleButtonContainer } from './ToogleButton';

interface ToggleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isExpanded, onToggle }) => (
  <ToggleButtonContainer onClick={onToggle}>
    <img
      src={isExpanded ? IconUp : IconDown}
      alt="Alternar detalhes"
      style={{ width: '24px', height: '24px' }}
    />
  </ToggleButtonContainer>
);

export default ToggleButton;
