const db = require(&#39;../config/db&#39;);
exports.getAll = (callback) =&gt; {
db.query(&#39;SELECT * FROM students&#39;, callback);
};
exports.getById = (id, callback) =&gt; {
db.query(&#39;SELECT * FROM students WHERE id = ?&#39;, [id], callback);
};
exports.create = (student, callback) =&gt; {
const { id, name, age, course } = student;
db.query(
&#39;INSERT INTO students (id, name, age, course) VALUES (?, ?, ?, ?)&#39;,
[id, name, age, course],
callback

);
};
exports.update = (id, student, callback) =&gt; {
db.query(
&#39;UPDATE students SET name=?, age=?, course=? WHERE id=?&#39;,
[student.name, student.age, student.course, id],
callback
);
};
exports.delete = (id, callback) =&gt; {
db.query(&#39;DELETE FROM students WHERE id=?&#39;, [id], callback);
};
