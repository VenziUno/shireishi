import React, { useState } from "react";
import Image from 'next/image';

interface Props {
    onClick?: () => void;
    rightClass?: string;
    topClass?: string;
}

const NextButton: React.FC<Props> = ({ onClick, rightClass, topClass }) => {
    const ChangeRight = require('/images/arrowRight.png');
    const Right = require('/images/arrow-right.png');
    const [nextButtonOnHover, setNextButtonOnHover] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setNextButtonOnHover(true);
    };

    const handleMouseLeave = () => {
        setNextButtonOnHover(false);
    };



    return (
        <button
            onClick={onClick}
            className={`absolute ${rightClass} ${topClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                layout="fixed"
                src={nextButtonOnHover ? ChangeRight : Right}
                alt="right-arrow"
                width={36}
                height={36}
                className="max-w-[36px]"
            />
        </button>
    );
};

NextButton.defaultProps = {
    rightClass: 'right-[5%]',
    topClass: 'top-[42%]'
};

export default NextButton;