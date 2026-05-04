const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newProject = new Project({
      title,
      description,
      createdBy: req.user.id
    });

    await newProject.save();

    res.status(201).json({
      message: "Project Created Successfully",
      project: newProject
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  createProject
};