import axios from 'axios';

const getUser = async () => {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?nat=us');
    return data.results[0];
  } catch (e) {
    console.error("Couldn't find a user", e);
  }
  return undefined;
};

export default getUser;
