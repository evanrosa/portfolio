import type { PropsWithChildren, ReactElement } from 'react';
import DrawerAppBar from '../navigation';
import Footer from '../footer';

function IndexLayout({ children }: PropsWithChildren<{}>): ReactElement {
    return (
        <div>
            <header>
                <DrawerAppBar children={undefined}/>
            </header>
            {children}
            <Footer />
        </div>
    );
}
export default IndexLayout;