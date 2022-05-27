import Icon from './Icon'
import bell from './Bell.png'
import logo from './logo.png'

const IconsComponent = {
    title: "Atoms/Icons",
    component: Icon,
  };
  
  export default IconsComponent;

  export const BellIcon=()=>(<Icon height="18.07px" width='15.17px' img={bell} margin="0px"/>)
  export const LogoIcon=()=>(<Icon height="30px" width='135px' img={logo} margin="0px"/>)