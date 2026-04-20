const studentModel = require(&#39;../models/studentModel&#39;);
exports.getStudents = (req, res) =&gt; {
studentModel.getAll((err, results) =&gt; {
if (err) return res.status(500).json(err);
res.json(results);
});
};
exports.getStudent = (req, res) =&gt; {
const id = req.params.id;
studentModel.getById(id, (err, results) =&gt; {
if (err) return res.status(500).json(err);
if (results.length === 0)
return res.status(404).json({ message: &quot;Student not found&quot; });
res.json(results[0]);
});
};
exports.createStudent = (req, res) =&gt; {
studentModel.create(req.body, (err, result) =&gt; {
if (err) return res.status(500).json(err);

res.status(201).json({ message: &quot;Student added&quot; });
});
};
exports.updateStudent = (req, res) =&gt; {
const id = req.params.id;
studentModel.update(id, req.body, (err, result) =&gt; {
if (err) return res.status(500).json(err);
res.json({ message: &quot;Student updated&quot; });
});
};
exports.deleteStudent = (req, res) =&gt; {
const id = req.params.id;
studentModel.delete(id, (err, result) =&gt; {
if (err) return res.status(500).json(err);
res.json({ message: &quot;Student deleted&quot; });
});
};
