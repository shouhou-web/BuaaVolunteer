const cloud = require('wx-server-sdk')
//环境变量 ID
cloud.init({
	traceUser:true,
	env:"buaalx-w5aor"
})

const db = cloud.database()
const _ = db.command
// 云函数入口函数
//传递的参数可通过event.xxx得到
exports.main = async (event, context) => {
  try {
    return await db.collection('project').where({
			title: event.title
		}).update({
			data:{
				innerList: _.push(event.openid)
			}
		})
  } catch (e) {
    console.error(e)
  }
}