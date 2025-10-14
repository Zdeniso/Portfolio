type WarningProps = {
    text: string
};

export default function Warning({ text }: WarningProps) {
  return (
    <p className="warning">{text}</p>
  )
}
