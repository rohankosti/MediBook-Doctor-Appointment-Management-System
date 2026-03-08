import User from "../model/User.js";

const storeuser = async (req, res) => {
  try {
    const body = req.body;
    const userdata = await User.create(body);
    res.status(200).json({ msg: "Sighnup Sucssfully" });
  } catch (error) {
    res.status(500).json({ msg: "Eroor, Try Again" });
    console.error(error);
  }
};
const getuser = async (req, res) => {
  try {
    const body = req.body;
    const get = await User.find();
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json({ msg: "Eroor In User Fetch" });
    console.error(error);
  }
};

export { storeuser, getuser };
