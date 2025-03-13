import { FiCreditCard } from "react-icons/fi";
import BaseIcon from "../BaseIcon";

const PaymentsIcon = ({ color = "primary", size, ...props }) => (
  <BaseIcon color={color} size={size} {...props}>
    <FiCreditCard />
  </BaseIcon>
);

export default PaymentsIcon;

