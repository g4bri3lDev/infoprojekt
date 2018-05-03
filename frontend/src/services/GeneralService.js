import Api from './Api'

export default {
    async backendOnline() {
        try {
            let response = await Api().get('http://localhost:8081/online')
            return response.data.status
        } catch (e) {
            console.log(e)
        }
    }
}