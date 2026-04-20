const mysql = require(&#39;mysql2&#39;);
const db = mysql.createConnection({
    host: &#39;localhost&#39;,
    user: &#39;root&#39;,
    password: &#39;your_password&#39;, // change this
    database: &#39;24wh1a05c5_sameeksha&#39; //change this
});
db.connect((err) =&gt; {
    if (err) {
        console.error(&#39;DB connection failed:&#39;, err);
    } else {
        console.log(&#39;Connected to MySQL&#39;);
    }
});
module.exports = db;
