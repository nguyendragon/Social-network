import { useEffect } from 'react';

import { Header } from '@src/components/Layout';

function DefaultLayout({ children, layout }) {
    useEffect(() => {
        // document.title = props.title;
        window.scrollTo({ top: 0 }); // , behavior: 'smooth'
    }, [children.props.link]);
    return (
        <>
            {layout && <Header />}
            <div className="min-w-screen min-h-screen bg-[#0c1022]">{children}</div>
        </>
    );
}

export default DefaultLayout;
