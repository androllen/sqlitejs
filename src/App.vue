<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
const fs = require('fs');
const path = require('path');
let md5Sqlite = require('sqlite3').verbose();
const dbPath = path.join(__static, 'sql.db');
let db;

function init() {
  if (!db) {
    try {
      console.log(dbPath);
      db = new md5Sqlite.Database(dbPath);
      console.log('create ok');
    } catch (error) {
      console.log('dirname');
      console.log(error);
    }
    console.log('create end');
  }
}

function queryData(sql, callback) {
  init();
  console.log('entry db');

  db.all(sql, function (err, rows) {
    console.log('entry db.all');
    if (null != err) {
      printErrorInfo(err);
      return;
    }
    if (callback) {
      callback(rows);
    }
  });
}

function printErrorInfo(params) {
  console.log(params);
}

function GetMd516(params) {
  let querySql = 'SELECT * FROM md5 WHERE md5_16=' + "'" + params + "'";
  console.log(querySql);
  queryData(querySql, (objects) => {
    console.log('begin deal');
    for (let i = 0; i < objects.length; ++i) {
      console.log(objects[i]);
    }
  });
}

function GetMd532(params, dataDeal) {
  let querySql = 'SELECT * FROM md5 WHERE md5_32=' + "'" + params + "'";
  console.log(querySql);
  queryData(querySql, dataDeal);
}

function dataDeal(objects) {
  console.log('begin deal');
  for (let i = 0; i < objects.length; ++i) {
    console.log(objects[i]);
  }
}

const fileLocation = path.join(__static, 'myText.txt');
const fileContents = fs.readFileSync(fileLocation, 'utf8');

console.log(fileContents);

GetMd516('ac59075b964b0715');
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
