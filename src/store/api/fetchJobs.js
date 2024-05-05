export const fetchJobs = async (limit = 10, offset = 0) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  return fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => {
      console.error("Error fetching jobs:", error);
      throw error;
    });
};
