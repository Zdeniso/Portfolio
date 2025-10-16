type PrimaryButtonProps = {
    onClick: () => void
};

export default function PrimaryButton({ onClick }: PrimaryButtonProps) {

    return (
        <button 
            className="btn primary-btn"
            onClick={onClick}
        >Add to list
        </button>
    )
}
    