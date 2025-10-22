import type {ComponentProps, FC} from "react";
type CheckIconProps =  ComponentProps<'svg'> & {
  isActive?: boolean;
}
export const CheckIcon:FC<CheckIconProps> = ({isActive}) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1953 4.19529C12.4557 3.93494 12.8777 3.93494 13.1381 4.19529C13.3984 4.45564 13.3984 4.87765 13.1381 5.138L6.47139 11.8047C6.21104 12.065 5.78903 12.065 5.52868 11.8047L2.86201 9.138C2.60166 8.87765 2.60166 8.45564 2.86201 8.19529C3.10609 7.95122 3.49209 7.93615 3.75394 8.14972L3.80472 8.19529L6.00003 10.3906L12.1953 4.19529Z" fill={isActive ? "#FAFCFF" : "#48494D"}/>
    </svg>

  );
};