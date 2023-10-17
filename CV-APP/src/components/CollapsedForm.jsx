import React from 'react';

function CollapsedForm({ title, onExpand }) {
  return (
    <div className="infoSlice" onClick={onExpand}>
      {title}
    </div>
  );
}

export default CollapsedForm;