import { Ref, SVGProps, forwardRef, memo } from "react";

const UpRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M9.33301 22.6663L22.6663 9.33301"
      stroke="currentColor"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.33301 9.33301H22.6663V22.6663"
      stroke="currentColor"
      stroke-width="2.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UpRightIcon);
const Memo = memo(ForwardRef);

export default Memo;
