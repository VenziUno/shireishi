import React from "react";
import Image from 'next/legacy/image';

interface props {
    onClick?: () => void
    setNextButtonOnHover: (e: boolean) => void
    nextButtonOnHover: boolean
    rightClass?: string
    topClass?: string
}

const NextButton: React.FC<props> = (props) => {
    const { onClick, setNextButtonOnHover, nextButtonOnHover, rightClass, topClass } = props
    const ChangeRight = require('../../../public/images/arrowRight.png');
    const Right  = require('../../../public/images/arrow-right.png');
    return (
        <button
            onClick={onClick}
            className={`absolute ${rightClass} ${topClass}`} onMouseEnter={() => setNextButtonOnHover(true)}
            onMouseLeave={() => setNextButtonOnHover(false)}
        >
            {nextButtonOnHover ? (
                <Image layout="fixed"
                    src={ChangeRight}
                    alt="left"
                    className="max-w-[36px]"
                />
            ) : (
                <Image layout="fixed"
                    src={Right}
                    alt="left"
                    className="max-w-[36px]"
                />
            )}

        </button>
    )
}

export default NextButton

NextButton.defaultProps = {
    rightClass: 'right-[5%]',
    topClass: 'top-[42%]'
}