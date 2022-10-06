const data = {
    projects: [
      {
        title: 'Project1',
        description: 'Something about Proj1'
      },
      {
        title: 'Project2',
        description: 'Something abt Project2'
      }
    ],
  };
  
  const getProducts = () => {
    return data.projects;
  };
  
  module.exports = { getProducts};
  
