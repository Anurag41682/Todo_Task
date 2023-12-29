import addTask from "../controllers/addTask";
const router = express.Router();
router.post("/add", addTask);
export default router;
