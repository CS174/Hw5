## CS174 HW5


### Group Members
- Seungmi Na ID: #014665066
- Michael Ruiz ID: #015740244
- Aadit Doubey ID: #014374087
- 
### Instructions
First, open `Config.js` and fill in your database user and password and other information as needed.
Second, install the node package dependencies:
```
npm install
```
Run the command to get the database tables instantiated:
```bash
npm run createdb
```
OR
```bash
node ./config/CreateDB.js
```
Next, start the Express.js server using the command:
```
npm run server
```
Then start the React.js client:
```
npm run client
```

Optional: You can also try `npm run start`. This command will run the server and client concurrently and should make running
the application easier.

Note: In my opinion, it is not a good practice to have a fullstack react/express application live in the same directory.
I spent a lot of time trying to get react and express together in the same folder when ideally, they should live in 
separate directories since not only do some files share the same name by default (index.js) but the package.json scripts
and dependencies become more complicated than necessary. - Michael