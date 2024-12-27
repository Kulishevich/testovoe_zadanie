import { Ref, SVGProps, forwardRef, memo } from "react";

const UpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 25.3337V6.66699"
      stroke="currentColor"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.66699 16.0003L16.0003 6.66699L25.3337 16.0003"
      stroke="currentColor"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UpIcon);
const Memo = memo(ForwardRef);

export default Memo;
