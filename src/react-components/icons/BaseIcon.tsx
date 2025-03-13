import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { COLORS } from "@/react-components/theme/colors";

type ColorType = keyof typeof COLORS;

interface BaseIconProps extends IconBaseProps {
  color?: ColorType;  // Only allow design system colors
  size?: string | number;
}

const BaseIcon: FC<BaseIconProps> = ({ color = "primary", size = 24, ...props }) => {
  return <span style={{ color: COLORS[color], fontSize: size }} {...props} />;
};

export default BaseIcon;

