import patientGray from '../assets/paciente-cinza.svg';
import patientOrange from '../assets/paciente-terracota.svg';
import psicoGray from '../assets/psico-cinza.svg';
import psicoOrange from '../assets/psico-orange.svg';
import { LoginType } from '../types/login';

const loginTypes: LoginType[] = [
  {
    isSelected: false,
    loginType: 'Psicólogo',
    selectedIcon: psicoOrange,
    notSelectedIcon: psicoGray
  },
  {
    isSelected: true,
    loginType: 'Paciente',
    selectedIcon: patientOrange,
    notSelectedIcon: patientGray
  }
]

export default loginTypes;