function ExpandedForm({ formId, fieldTitles, formData, handleChange, onRemove, onCancel, onSave }) {
    return (
      <form className="inputForm">
        {fieldTitles.map((title) => (
          <div className="inputGroup" key={title}>
            <label htmlFor={title}>{title}:</label>
            <input
              type="text"
              id={title}
              name={title}
              value={formData[title] || ''}
              onChange={(e) => handleChange(formId, title, e.target.value)}
            />
          </div>
        ))}
        <div className='infoSliceButtons'>
          {onRemove && <button onClick={onRemove}>Remove</button>}
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </form>
    );
  }
  export default ExpandedForm;