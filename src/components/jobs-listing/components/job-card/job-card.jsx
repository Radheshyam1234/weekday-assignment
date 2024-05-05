import "./job-card.css";

const JobCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-info_container">
        <div className="card-info_company-and-role-wrapper">
          <img
            src={"https://logo.clearbit.com/intel.com"}
            alt="comapny-name.png"
            className="company-logo"
          />
          <div>
            <p className="card-info_company-name">FlexWash Technologies</p>
            <p className="card-info_role-name">Senior Engineer</p>
            <p className="card-info_job-location">Banglore</p>
          </div>
        </div>
        <div className="card-info_salary-detail">
          <p>Estimated Salary: ₹30 - 60 LPA ✅</p>
        </div>
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
          <p className="experience-details_headingText">Minimum Experience</p>
          <p className="experience-details_subText">3 Years</p>
        </div>
      </div>
      <div className="easy-apply-button_container">
        <button className="easy-apply-button">⚡ Easy Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
