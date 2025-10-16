type InputProps = {
    inputValue: string,
    onChange: (value: string) => void
};

export default function Input({ inputValue, onChange }: InputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            value={inputValue} 
            className="input" 
            placeholder="Toothbrush..."
            onChange={handleChange}
        />
    )
}
