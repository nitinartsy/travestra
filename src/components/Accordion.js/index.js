import Minus from '@/icons/Minus';
import Plus from '@/icons/Plus';
import React from 'react'
import styles from './accordion.module.css'

const Accordion = ({ children, type = "single", collapsible = true, className }) => {
    return (
        <div className={("border border-gray-700 rounded-lg", className)}>
            {children}
        </div>
    );
};

const AccordionItem = ({ title, count, value, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={styles.accordion_item_main}>
            <div
                className={styles.accordion_item_inner}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.accordion_count_content}>
                    <div className={styles.count}>
                        {count}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
                <span >{isOpen ?
                    <Plus />
                    :
                    <Minus />
                }</span>
            </div>
            {isOpen && <div className={styles.content_accordion}>{children}</div>}
        </div>
    );
};

export { Accordion, AccordionItem };
