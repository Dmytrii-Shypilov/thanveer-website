import { SVGProps } from "react"

export function IconPointer(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20px"
        height="1em"
        {...props}
      >
        <path
          fill="#f0b901"
          fillRule="evenodd"
          d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43z"
          clipRule="evenodd"
        ></path>
      </svg>
    )
  }
  