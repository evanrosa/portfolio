import type { PropsWithChildren, ReactElement } from 'react';
import DrawerAppBar from '../navigation';
function IndexLayout({ children }: PropsWithChildren<{}>): ReactElement {
    return (
        <div>
            <header>
                <DrawerAppBar/>
            </header>
            {children}
        </div>
    );
}
export default IndexLayout;