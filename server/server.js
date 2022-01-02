const app = require('./index');
const dotenv = require('dotenv')

const PORT = process.env.PORT;
app.listen(PORT, () => { console.log(`listening on http://localhost:${PORT}`); });
