import { ResetIcon } from "@radix-ui/react-icons";

type ResetButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export default function ResetButton({ onClick }: ResetButtonProps) {
    return(
        <button className='reset-btn' onClick={onClick}>
            <ResetIcon className="reset-btn-icon"/>
        </button>
    )
}