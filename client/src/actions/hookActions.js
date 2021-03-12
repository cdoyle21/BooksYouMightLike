/**
 * Fetch the data from databse URL. Catch errors if any are returned
 * @param {boolean} setError - return error message
 * @param {boolean} setLoading - return loading message
 * @param {array} setData - data that is output
 * @returns {data.json} - returns data or error
 *
 */
async function getData(setError, setData, setLoading) {
  fetch('/api/books/')
    .then((data) => data.json())
    .then((res) => {
      if (res.errno) {
        setError(true);
      } else {
        setData(res);
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log('parsing failed', error);
    });
}

export default {
  getData,
};
