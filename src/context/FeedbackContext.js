import {createContext, useState} from 'react';//createContext: useful when data needs to be accessible by many components at different nesting levels
import {v4 as uuidv4} from 'uuid'

const FeedbackContext= createContext();

export const FeedbackProvider=({children}) =>{
    const [feedback, setFeedback]=useState([]);

    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{},
        edit: false
    })

    //add feedback
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4();
        setFeedback([newFeedback, ...feedback])
     }

     //delete feedback
    const deleteFeedback=(id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
     }

     //Update feedback item
     const updateFeedback=(id, updItem)=>{
        setFeedback(feedback.map((item)=> (item.id ===id?{...item, ...updItem}: item)))
     }

     //edit or update feedback
     const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
            
        })
        console.log(item,'i am edit')
     }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;