import React, { useState } from "react";
import Image from 'next/legacy/image';

interface Props {
    onClick?: () => void;
    leftClass?: string;
    topClass?: string;
}

const PreviewButton: React.FC<Props> = ({
    onClick,
    leftClass,
    topClass
}) => {
    const ChangeLeft = '/images/arrowLeft.png';
    const Left = '/images/arrow-left.png';
    const [prevButtonOnHover, setPrevButtonOnHover] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setPrevButtonOnHover(true);
    };

    const handleMouseLeave = () => {
        setPrevButtonOnHover(false);
    };

    return (
        <button
            onClick={onClick}
            className={`absolute z-[10] ${leftClass} ${topClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                layout="fixed"
                src={prevButtonOnHover ? ChangeLeft : Left}
                alt="left"
                width={38}
                height={38}
                className="max-w-[36px]"
            />
        </button>
    );
};

PreviewButton.defaultProps = {
    leftClass: 'left-[5%]',
    topClass: 'top-[42%]'
};

export default PreviewButton;