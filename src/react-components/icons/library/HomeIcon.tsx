import { FiHome } from "react-icons/fi";
import BaseIcon from "../BaseIcon";

const HomeIcon = ({ color = "primary", size, ...props }) => (
  <BaseIcon color={color} size={size} {...props}>
    <FiHome />
  </BaseIcon>
);

export default HomeIcon;

