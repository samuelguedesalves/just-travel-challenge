import React from "react";

export function Apto(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M2.998 2.998H10.5a.75.75 0 0 1 .75.75v11.255H2.998a.75.75 0 0 1-.75-.75V3.747a.75.75 0 0 1 .75-.75ZM11.251 5.999h3.752a.75.75 0 0 1 .75.75v7.503a.75.75 0 0 1-.75.75H11.25V6Z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.248 5.905a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 5.905a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188M5.248 8.906a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188M8.25 8.906a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188M5.248 11.908a.094.094 0 1 0 0 .187.094.094 0 0 0 0-.187M8.25 11.908a.094.094 0 1 0 0 .187.094.094 0 0 0 0-.187M13.502 8.906a.094.094 0 1 0 0 .188.094.094 0 0 0 0-.188M13.502 11.908a.094.094 0 1 0 0 .187.094.094 0 0 0 0-.187"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
