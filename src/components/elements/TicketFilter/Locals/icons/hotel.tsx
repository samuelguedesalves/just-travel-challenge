import React from "react";

export function Hotel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.999 15.753V2.998a.75.75 0 0 1 .75-.75h4.502a.75.75 0 0 1 .75.75v12.755"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.753 15.753v-9.82a.685.685 0 0 0-.685-.684H12M5.999 5.249H2.932a.685.685 0 0 0-.685.685v9.819"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.001 7.5h1.876M12.001 9.75h1.876M12.001 12.001h1.876M4.123 7.5H6M4.123 9.75H6M4.123 12.001H6M7.875 9.75h2.25M7.875 12.001h2.25M7.875 7.5h2.25M7.875 5.249h2.25M9 14.252v1.5M16.503 15.753H1.497"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
