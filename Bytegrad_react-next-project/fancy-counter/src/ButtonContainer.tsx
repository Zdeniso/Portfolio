import type { ReactElement } from "react"

type ButtonContainerProps = {
    children: ReactElement[]
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
    return (
        <div className='button-container'>
            {children}
        </div>
    )
}