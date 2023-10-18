function ResumeHeader({ title, data }) {
  return (
    <div className="resumeHeader">

      <div className="resumeFullName">
        <h1>{data["Full Name"]}</h1>
      </div>

      <div className="resumeAdditionalPersonalDetailsContainer">
        <p>{data["Email"]}</p>
        <p>{data["Phone Number"]}</p>
        <p>{data["Address"]}</p>
      </div>

    </div>
  );
}

export default ResumeHeader;