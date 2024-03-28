import React from 'react';
import FeedbackItem from './FeedbackItem';
// import PropTypes from'prop-types'
import { useContext } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No data available</p>;
    }
    
    return (
        <div className='feedback-List'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                key={item.id} 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                >
                    <FeedbackItem  item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    );
    // return (
    //     <div className='feedback-List'>
    //         {feedback.map((item) => (
                
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    // );
}

// FeedbackList.propTypes={
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             rating:PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired
//         }
//         )
//     )
// }

export default FeedbackList;