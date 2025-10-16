type SecondaryButtonProps = {
    label: string,
    onClick: () => void
};

export default function SecondaryButton({ label, onClick }: SecondaryButtonProps) {
    return (
        <button 
            className="btn secondary-btn"
            onClick={onClick}
        >{label}
        </button>
    )
}
    