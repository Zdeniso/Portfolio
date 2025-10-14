import { MinusIcon, PlusIcon} from "@radix-ui/react-icons";

type CountButtonProps = {
    type: 'minus' | 'plus' ;
    locked: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

export default function CountButton({ type, locked, onClick, }: CountButtonProps) {
  return (
      <button 
        className='count-btn' 
        onClick={onClick}
        disabled={locked}>
          {type === 'minus' && <MinusIcon className="count-btn-icon" />}
          {type === 'plus' && <PlusIcon className="count-btn-icon" />}
      </button>
  )
}