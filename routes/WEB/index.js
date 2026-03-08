import express, { json } from "express";
const router = express.Router();

router.get("/Dashboard", (req, res) => {
  res.render("Dashboard", { pagetittle: "Dashboard" });
});
router.get("/index", (req, res) => {
  res.render("index", { pagetittle: "index" });
});
router.get("/Login", (req, res) => {
  res.render("Login", { pagetittle: "Login" });
});
router.get("/Register", (req, res) => {
  res.render("Register", { pagetittle: "Register" });
});

router.use((req, res) => {
  res.status(404).render("Eroor", {
    pagetittle: "Eroor",
    massage: "Page Are Not Found",
  });
});

export default router;
