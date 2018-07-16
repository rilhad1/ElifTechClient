import Api from '../../api';

const getCompanies = async () => {
  try {
    const allCompanies = await Api.getCompanies();

    return allCompanies;
  } catch (err) {
    throw new Error('Load questions error');
  }
};

export default getCompanies;