const app = require("express");
const { getRequest, postRequest, getSingleRequest, updateRequest, deleteRequest } = require("../controllers/articleControllers");
const router = app.Router();

router.get("/", getRequest);
router.post("/", postRequest);
router.get("/:id", getSingleRequest);
router.put("/:id", updateRequest);
router.delete("/:id", deleteRequest);

module.exports = router;
