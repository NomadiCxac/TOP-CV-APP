import React from 'react';

function ResumeContent({ title, data, onExpand }) {
  console.log(data.formData)
  return (
    <div className="infoSlice" onClick={onExpand}>
      {title}
    </div>
  );
}

export default ResumeContent;