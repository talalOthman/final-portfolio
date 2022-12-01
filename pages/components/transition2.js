import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition2 = ({ children }) => {
    const { asPath } = useRouter();
    const shouldReduceMotion = useReducedMotion();
    const variants = {
        out: {
            x: "-100%",
            transition: {
                duration: 0.4,
                delay: 0.5
            }
        },
        in: {
            scale: 0.8,
            y: 100,
            x: "100%",
            transition: {
                duration: 0.4
            }
        },
        inactive: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            },
        },
        scaleDown: {
            scale: 0.8,
            y: 100,
            transition: {
                duration: 0.4
            }
        },
        center: {
            x: 0,
            scale: 0.8,
            transformOrigin: 'top',
            transition: {
                duration: 0.4
            }
        },
        scaleUp: {
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.5
            }
        },
    };
    return (
        <div className="effect-3">
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={!shouldReduceMotion ? variants : null}
                    initial="in"
                    animate={["center", "scaleUp"]}
                    exit={["scaleDown", "out"]}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition2;