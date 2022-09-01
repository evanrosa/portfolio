import type { PropsWithChildren, ReactElement } from 'react';
import DrawerAppBar from '../navigation';
import Footer from '../footer';
import { motion, Variants } from 'framer-motion';

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
        <motion.div variants={interfaceVariants} initial="hidden" animate="visible">
            <header>
                <DrawerAppBar children={undefined}/>
            </header>
            {children}
            <Footer />
        </motion.div>
    );
}
export default IndexLayout;