exports.home = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to DATAVIO",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};
