const mongoose = require("mongoose");
const Tour = require("../model/articleModel");

const getRequest = async (req, res) => {
  try {
    const response = await Tour.find();
    if (!response) {
      return res.status(404).json({ msg: "No data found" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const postRequest = async (req, res) => {
  try {
    const { color, title, content } = req.body;
    const response = await Tour.create({ color, title, content });
    return res.status(201).json({ response });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const getSingleRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Tour.findById(id);
    if (!response) {
      return res.status(404).json({ msg: "Data not found" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { color, title, content } = req.body;
    const response = await Tour.findByIdAndUpdate(id, { color, title, content }, { new: true });
    if (!response) {
      return res.status(404).json({ msg: "Data not found" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Tour.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ msg: "Data not found" });
    }
    return res.status(200).json({ msg: "Data deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  getRequest,
  postRequest,
  getSingleRequest,
  updateRequest,
  deleteRequest,
};
