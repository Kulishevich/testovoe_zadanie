import { Ref, SVGProps, forwardRef, memo } from "react";

const DownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    ref={ref}
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 6.66699V25.3337"
      stroke="currentColor"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.3337 16L16.0003 25.3333L6.66699 16"
      stroke="currentColor"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(DownIcon);
const Memo = memo(ForwardRef);

export default Memo;
