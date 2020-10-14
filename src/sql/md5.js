let md5Sqlite = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.join(__static, 'sql.db')
let db

export function init() {
	if (!db) {
		try {
			console.log(dbPath);
			db = new md5Sqlite.Database(dbPath)
		} catch (error) {
			console.log(error);
			console.log('dirname');

		}
	}
}

function queryData(sql, callback) {
	init();
	db.all(sql, function (err, rows) {
		if (null != err) {
			printErrorInfo(err);
			return;
		}
		if (callback) {
			callback(rows);
		}
	});
}

export function GetMd516(params, dataDeal) {
	let querySql = 'SELECT * FROM md5 WHERE md5_16=' + "\'" + params + "\'";
	console.log(querySql);
	queryData(querySql, dataDeal);
}

function GetMd532(params, dataDeal) {
	let querySql = 'SELECT * FROM md5 WHERE md5_32=' + "\'" + params + "\'";
	console.log(querySql);
	queryData(querySql, dataDeal);
}

function dataDeal(objects) {
	for (let i = 0; i < objects.length; ++i) {
		console.log(objects[i]);
	}
}

// init()
// GetMd5_16('ac59075b964b0715', dataDeal)
