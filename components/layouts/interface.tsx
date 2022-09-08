import type { PropsWithChildren, ReactElement } from 'react';
import DrawerAppBar from '../navigation';
import Footer from '../footer';
import { m, Variants } from 'framer-motion';

import { LazyMotion, domAnimation } from "framer-motion"

const interfaceVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: { type: 'spring', when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

function IndexLayout({ children }: PropsWithChildren<{}>): ReactElement {
    return (
      <LazyMotion features={domAnimation} strict>
        <m.div variants={interfaceVariants} initial="hidden" animate="visible">
            <header>
                <DrawerAppBar/>
            </header>
            
              {children}
            
        </m.div>
        </LazyMotion>
    );
}
export default IndexLayout;