/**
 * Get JSON data from specified `url`. Run this from within
 * a useEffect() hook and call abort() from the cleanup function
 * @param {string} url - url to fetch data from using GET
 * @param {Object} opts - options object for fetch() function
 * @returns {Promise<{data: any, response: Response}>}
 */
export async function getJSON(url, opts = {}) {

  if (!url) {
    throw new Error('URL is required');
  }

  const doRequest = async () => {
    try {
      return await fetch(url, opts)
    }
    catch (e) {
      throw new Error(e);
    }
  };

  const response = await doRequest();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return {
    data,
    response
  }
}
