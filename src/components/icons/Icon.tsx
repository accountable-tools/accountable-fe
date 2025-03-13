import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
}

const Icon = ({ name, size = 24, color = 'currentColor', className }: IconProps) => {
    const LucideIcon = Icons[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found in lucide-react.`);
        return null;
    }

    return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;