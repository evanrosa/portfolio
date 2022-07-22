import type { PropsWithChildren, ReactElement } from 'react';
import Navigation from '../../components/navigation';

function IndexLayout({ children }: PropsWithChildren<{}>): ReactElement {
    return (
        <div>
            <header>
                <Navigation/>
            </header>
            {children}
        </div>
    );
}
export default IndexLayout;