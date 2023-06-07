import Tippy from '@tippyjs/react';

function TippyBox({ children, title, placement = 'bottom' }) {
    return (
        <Tippy
            arrow=""
            className="bg-[#fff] text-[#242526] p-1 text-[0.8rem]"
            delay={[100, 150]}
            content={title}
            placement={placement}
        >
            {children}
        </Tippy>
    );
}

export default TippyBox;
