import Tippy from '@tippyjs/react';

function TippyBox({ children, arrow = false, title, placement = 'bottom' }) {
    return (
        <Tippy
            arrow={arrow}
            className="bg-[#e9e9ee] text-[#242526] p-1 text-[0.8rem]"
            delay={[100, 150]}
            content={title}
            placement={placement}
        >
            {children}
        </Tippy>
    );
}

export default TippyBox;
