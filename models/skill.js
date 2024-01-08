const skills = [
    {
      id: 100465,
      name: "Web Development",
      category: "Frontend",
      proficiency: "Advanced",
      experienceYears: 5,
    },
    {
      id: 133454,
      name: "JavaScript",
      category: "Programming Language",
      proficiency: "Expert",
      experienceYears: 6,
    },
    {
      id: 104563,
      name: "React",
      category: "Library/Framework",
      proficiency: "Intermediate",
      experienceYears: 3,
    },
    {
      id: 125644,
      name: "Node.js",
      category: "Backend",
      proficiency: "Advanced",
      experienceYears: 4,
    },
    {
      id: 134675,
      name: "SQL",
      category: "Database",
      proficiency: "Intermediate",
      experienceYears: 3,
    },
    {
      id: 147646,
      name: "Git",
      category: "Version Control",
      proficiency: "Expert",
      experienceYears: 5,
    },
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex( skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function create(skill) {
    // skill = {
    //   id: skills.length + 1,
    //   name: skill
    // }
    skill.id = Date.now() % 1000000;
    // skill.name
    skills.push(skill)
  }

  function getAll() {
    return skills
  }
  
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }
