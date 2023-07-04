import React, { useState } from 'react';

const SlideText: React.FC = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    return (
        <div>
            <p className="Montserrat text-[17px] leading-[20.72px]">
                How many pages does 2000 words
                The answer is around spaced, and
                8 pages double spaced. Your word
                processing page margins and a 12
                point Arial or Times New </p>
        </div>
    )
}

export default SlideText