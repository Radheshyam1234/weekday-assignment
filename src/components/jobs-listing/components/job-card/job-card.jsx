import "./job-card.css";

const JobCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card-wrapper">
      <div className="card-info_container">
        <div className="card-info_company-and-role-wrapper">
          <img
            src={data.logoUrl}
            alt="comapny-name.png"
            className="company-logo"
          />
          <div>
            <p className="card-info_company-name">{data.companyName}</p>
            <p className="card-info_role-name">{data.jobRole}</p>
            <p className="card-info_job-location">{data.location}</p>
          </div>
        </div>
        {(data.minJdSalary || data.maxJdSalary) && (
          <div className="card-info_salary-detail">
            <p>
              Estimated Salary: ₹{data.minJdSalary ? data.minJdSalary : ""}
              {data.minJdSalary && data.maxJdSalary ? " - " : ""}
              {data.maxJdSalary ? data.maxJdSalary : ""} LPA ✅
              {/* ₹30 - 60 LPA */}
            </p>
          </div>
        )}

        <div className="">
          <p className="card-info_about-company">About Company</p>
          <div className="card-info_about-us">
            <p>
              <strong>About Us</strong>
            </p>
            <p className="">
              Flex Wash is an operating system for the car wash industry. Our
              solutions help owners manage their operations and grow revenue.{" "}
            </p>
            <p className="">
              Flex Wash is an operating system for the car wash industry. Our
              solutions help owners manage their operations and grow revenue.{" "}
            </p>
            <p className="">
              Flex Wash is an operating system for the car wash industry. Our
              solutions help owners manage their operations and grow revenue.{" "}
            </p>
            <p className="">
              Flex Wash is an operating system for the car wash industry. Our
              solutions help owners manage their operations and grow revenue.{" "}
            </p>
          </div>
          <div className="view-job-button-container">
            <div className="view-job-btn">View Job</div>
          </div>
        </div>
        <div className="experience-details-container">
          {data.minExp && (
            <>
              <p className="experience-details_headingText">
                Minimum Experience
              </p>
              <p className="experience-details_subText">3 Years</p>
            </>
          )}
        </div>
      </div>
      <div className="easy-apply-button_container">
        <button className="easy-apply-button">⚡ Easy Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
