type SecondaryButtonProps = {
    label: string
};

export default function SecondaryButton({ label }: SecondaryButtonProps) {
  return <button className="btn secondary-btn">{label}</button>
}
