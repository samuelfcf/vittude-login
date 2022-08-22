import patientGray from '../assets/paciente-cinza.svg';
import patientOrange from '../assets/paciente-terracota.svg';
import psicoGray from '../assets/psico-cinza.svg';
import psicoOrange from '../assets/psico-orange.svg';

type LoginType = {
  isSelected: boolean;
  loginType: string;
  selectedIcon: string;
  notSelectedIcon: string;
}

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

export const defaultLoginType = loginTypes[1]['loginType'];

export default loginTypes;