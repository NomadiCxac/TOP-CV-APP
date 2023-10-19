import ContentBlock from './ContentBlock';

function ResumeContent({ title, data }) {

  return (
    <div className={"detailsContainer"} id={title}>
      <h2>{title}</h2>
      {data.map((form) => {
        // For this example, I'm using the first and second keys of formData for header and subHeader. 
        // Adjust as needed.
        const keys = Object.keys(form.formData);
        
        return (
          <ContentBlock 
            key={form.id}  // Assuming each form object has a unique id property
            startDate={form.formData["Start Date"] || " "}
            endDate={form.formData["End Date"] || " "}
            location={form.formData["Location"] || " "}
            header={form.formData[keys[0]] || " "}  
            subHeader={form.formData[keys[1]] || " "}
            description={form.formData["Description"] || " "}
          />
        );
      })}
    </div>
  );
}

export default ResumeContent;