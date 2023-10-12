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
        <div className="inputBlock">
            <h1>{title}</h1>
            
            {/* If expandable is true, show the arrow */}
            {expandable && (
                <div onClick={toggleExpansion}>
                    {isExpanded ? '^' : 'v'}
                </div>
            )}

            {/* Show FormType based on isExpanded state */}
            {(!expandable || isExpanded) && (
                <FormType
                    fieldTitles={fieldTitles}
                />
            )}
        </div>
    );
}

export default InputBlock;