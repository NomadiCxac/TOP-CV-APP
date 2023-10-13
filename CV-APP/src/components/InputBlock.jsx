import { useState } from 'react';
import FormType from './FormType';

function InputBlock ({title, fieldTitles, expandable}) {
    
    // useState to manage visibility of the form
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle function for the arrow
    function toggleExpansion () {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="inputBlock" id={"draggable" + title}>
            <div className='headerContainer'>
                <h2>{title}</h2>
                
                {/* If expandable is true, show the arrow */}
                {expandable && (
                    <span onClick={toggleExpansion}>
                        {isExpanded ? '^' : 'v'}
                    </span>
                )}
            </div>

            {/* Show FormType based on isExpanded state */}
            {(!expandable || isExpanded) && (
                <FormType
                    fieldTitles={fieldTitles}
                    headerTitle={title}
                    expandable={expandable}
                />
            )}
        </div>
    );
}

export default InputBlock;