import { v4 as uuidv4 } from 'uuid'
export class Order {
    constructor(user) {
        this.user = user
        this.status = 'paying'
        this.uuid = uuidv4()
        this.date = new Date().toLocaleString('zh-CH',{timeZone:'Asia/Shanghai'})
    }
    getOrderInfo() {
        return {
            username: this.user.username,
            status: this.status,
            uuid: this.uuid,
            date: this.date
        }
    }
}