// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
	try {
			return promise = new Promise((resolve,reject) =>{
				resolve()
			})
			.then(() =>{
				return db.collection('signUp').where({
					title: event.title
				}).update({
					data:{
						list: event.list
					}
				})
			})
			.catch(err =>{
				reject(err)
			})
	} catch(e) {
		console.error(e)
	}
}