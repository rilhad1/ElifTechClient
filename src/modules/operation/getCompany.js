import Api from '../../api';

const getCompany = ({ _id }) => async () => {
  try {
    const company = await Api.getCompany({ _id });

    return company;
  } catch (err) {
    throw new Error('Load questions error');
  }
};

export default getCompany;
