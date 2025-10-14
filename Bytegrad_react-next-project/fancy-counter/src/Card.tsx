import Title from './Title.tsx';
import Count from './Count.tsx';
import ResetButton from './ResetButton.tsx';
import ButtonContainer from './ButtonContainer.tsx';
import { useEffect, useState } from 'react';
import CountButton from './CountButton.tsx';

export default function Card() {
    // STATE
    const [count, setCount] = useState(0);

    // DERIVED VARIABLE FROM STATE
    const locked = count === 5 ? true : false;
    const children = count === 5 ? 
        <span>Limit! Buy <span className='u--bold'>Pro</span> for &gt;5</span> :
        'Fancy Counter';
    const textClass = `card ${locked ? 'card--limit' : ''}`
    
    // USE EFFECT
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                if (count === 5) return;
                setCount(c => c + 1)
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [count]);

    // EVENT HANDLER   
    const handlePlusClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (count > 4) return;
        setCount(c => c + 1);
        event.currentTarget.blur()
    };
    const handleMinusClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (count < 1) return;
        setCount(c => c - 1);
        event.currentTarget.blur()
    };  
    const handleResetClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCount(0);
        event.currentTarget.blur()
    };
    
    return (
        <div className={textClass}>
            <Title>{children}</Title>
            <Count number={count}/>
            <ResetButton onClick={handleResetClick}/>
            <ButtonContainer>
                <CountButton 
                    type='minus' 
                    onClick={handleMinusClick}
                    locked={locked}
                />
                <CountButton 
                    type='plus' 
                    onClick={handlePlusClick}
                    locked={locked}
                />
            </ButtonContainer>
        </div>
    )
}
