import { Ref, SVGProps, forwardRef, memo } from "react";

const LeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    ref={ref}
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33337 58.667H58.6667"
      stroke="#FBFBFB"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.86658 58.667L7.99991 26.587C7.99991 24.9603 8.77324 23.4138 10.0532 22.4004L28.72 7.86707C30.64 6.37374 33.3331 6.37374 35.2798 7.86707L53.9467 22.3737C55.2534 23.3871 56 24.9336 56 26.587V58.667"
      stroke="#FBFBFB"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M34.6667 45.333H29.3334C27.12 45.333 25.3334 47.1197 25.3334 49.333V58.6663H38.6667V49.333C38.6667 47.1197 36.88 45.333 34.6667 45.333Z"
      stroke="#FBFBFB"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M25.3334 36.6663H20C18.5334 36.6663 17.3334 35.4663 17.3334 33.9997V29.9997C17.3334 28.533 18.5334 27.333 20 27.333H25.3334C26.8 27.333 28 28.533 28 29.9997V33.9997C28 35.4663 26.8 36.6663 25.3334 36.6663Z"
      stroke="#FBFBFB"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M44 36.6663H38.6667C37.2 36.6663 36 35.4663 36 33.9997V29.9997C36 28.533 37.2 27.333 38.6667 27.333H44C45.4667 27.333 46.6667 28.533 46.6667 29.9997V33.9997C46.6667 35.4663 45.4667 36.6663 44 36.6663Z"
      stroke="#FBFBFB"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M50.667 18.667L50.587 10.667H38.8536"
      stroke="#FBFBFB"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(LeftIcon);
const Memo = memo(ForwardRef);

export default Memo;
