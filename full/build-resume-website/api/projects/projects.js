const data = {
    projects: [
      {
        title: 'Amazing Project!',
        description: 'JUST AMAZING!'
      },
      {
        title: 'Kickass Project',
        description: 'NO WORDS TO DESCRIBE <3'
      }
    ],
  };
  
  const getProducts = () => {
    return data.projects;
  };
  
  module.exports = { getProducts};
  
