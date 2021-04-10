const app = require('../app');
const port = process.env.port || 3000;

app.listen(port, (error)=>{
    if (error)
        console.log('Error in server starting ', error);
    else
        console.log(`Server running on the port: ${port}`);
})