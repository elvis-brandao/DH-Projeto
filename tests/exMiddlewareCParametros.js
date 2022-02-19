const setMyInfo = (text) => {
    return (req, res, next) => {
      req.myInfo = text;
      next();
    };
};
  
app.get("/", setMyInfo("Test-123"), (req, res) => {
    res.send("Hi there! myInfo = " + req.myInfo);
});