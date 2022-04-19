const { useAxios } = require('../utils/api/fetchApi');

module.exports = async (data) => {
  const result = await useAxios(data);
    
  if (!result) return { code: 000, message: 'Failed requisition' }

  return { data: result }
};