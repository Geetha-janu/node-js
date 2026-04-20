const express = require(&#39;express&#39;);
const router = express.Router();
const controller = require(&#39;../controllers/studentController&#39;);
router.get(&#39;/students&#39;, controller.getStudents);
router.get(&#39;/students/:id&#39;, controller.getStudent);
router.post(&#39;/students&#39;, controller.createStudent);
router.put(&#39;/students/:id&#39;, controller.updateStudent);
router.delete(&#39;/students/:id&#39;, controller.deleteStudent);
module.exports = router;

Step-10:Paste this code in server.js
const express = require(&#39;express&#39;);
const bodyParser = require(&#39;body-parser&#39;);

const cors = require(&#39;cors&#39;);
const studentRoutes = require(&#39;./routes/studentRoutes&#39;);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(&#39;/api&#39;, studentRoutes);
app.listen(3000, () =&gt; {
console.log(&#39;Server running on http://localhost:3000&#39;);
});
