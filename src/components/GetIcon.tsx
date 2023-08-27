import * as Hi from "react-icons/hi2";

interface Props {
  icon: string;
  className?: string;
  title?: string;
}

const GetIcon = ({ icon, className, title }: Props) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Hi", Hi);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} title={title} />;
};

export default GetIcon;
