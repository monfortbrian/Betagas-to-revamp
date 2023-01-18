import { useState, Children, cloneElement, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCORDIAN_VARIANTS = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.15 },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const Accordion = ({ children, initialOpenIdx = 0 }) => {
  const [openItemIdx, setOpenItemIdx] = useState(initialOpenIdx);

  const handleOpen = (evt) => {
    const idx = Number(evt.target.getAttribute('data-idx'));

    // If target is currently open, close it
    // Else open target
    setOpenItemIdx((prev) => (prev === idx ? undefined : idx));
  };

  return (
    <div className="w-200">
      {Children.map(children, function (child, idx) {
        // Clonse Collapsed with extra props
        const collapsed = cloneElement(child.props.children[0], {
          handleOpen, // onClick handler to set current open accordian item
          idx, // The index of current accordian item
        });

        const expanded = child.props.children[1];

        return (
          <Fragment>
            {/* Render Collapsed */}
            {collapsed}

            {/* Render Expand content */}
            <AnimatePresence exitBeforeEnter>
              {idx === openItemIdx && (
                <motion.div
                  variants={ACCORDIAN_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {expanded}
                </motion.div>
              )}
            </AnimatePresence>
          </Fragment>
        );
      })}
    </div>
  );
};

// Item wrapper
Accordion.Item = ({ children }) => children;

// Collapsed summary
const Collapsed = ({ children, handleOpen, idx }) => {
  // handleOpen, idx props come from cloned Collapsed component
  return (
    <button
      onClick={handleOpen}
      data-idx={idx}
      className="block w-full text-left px-5 py-3 text-blue-400 bg-gray-100 cursor-pointer"
    >
      {children}
    </button>
  );
};

// Expanded deetail
const Expanded = ({ children }) => {
  return <div className="px-5 py-3">{children}</div>;
};

// Don't defined compound compoennts directly on Accordion
// So that Collapsed and Expanded have their own .type.name
Accordion.Collapsed = Collapsed;
Accordion.Expanded = Expanded;

export default Accordion;
