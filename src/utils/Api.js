const API_URL =
  "https://script.google.com/macros/s/AKfycbwteXu8PSTEbTLyBK6UvmnKXbViSf3_qxAuryS6bEhRhESwRlO1M9YCdt3LFmpXrvX2/exec?url=https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=0a8867f1-d238-4856-b3b3-062c409fb876";
export const getAPIdata =  () => {
  return fetch(API_URL).then((res) => res.json());
};
