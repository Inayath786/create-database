const sqlite3 = require('sqlite3');
const dbname = 'myDatabase.db';

let db=new sqlite3.Database(dbname,(err)=>{
  if(err){
    console.error(err.message)
  }
  else{
    console.log("Connected to database");
}
});
db.serialize(()=>{
    db.run("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,description TEXT)",(err)=>{
      if (err){
        console.log(err.message)
      }
      else{
        console.log("Table created or exist")
      }
    })
})
    
  


module.exports=db;