import { Icon } from "@iconify/react";
import ThemedLink from "./ThemedLink";

function LearnLink({ href, name, icon, iconColor }) {
  return (
    <div className='flex flex-col items-end gap-1'>
      <div className='flex items-center gap-1'>
        <Icon icon={icon} color={iconColor ? iconColor : ""} />
        <ThemedLink href={href}>{name}</ThemedLink>
      </div>
    </div>
  );
}

export default LearnLink;
