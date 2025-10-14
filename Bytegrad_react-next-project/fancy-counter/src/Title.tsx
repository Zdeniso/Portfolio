import type { ReactNode } from "react"

type TitleProps = {
    children: ReactNode | string
};

export default function Title({ children }: TitleProps) {
    return(
        <h1 className='title'>{children}</h1>
    )
}