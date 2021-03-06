/**
 * 需要检查的token的 请求地址
 */
const verifyPath = [
    '/api/userlist',
    '/api/createarticle',
    '/api/articlelist',
    '/api/setarticle'
];

const whitelist = ["http://boss.didiheng.com", "*"]

export default {
    db: {
        url: 'mongodb://root:12345678@localhost/test'
    },
    secret: 'LiuHeng9227fe78182er',
    port: process.env.port || '12345',
    redis: {
        host: process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1',
        port: process.env.REDIS_PORT_6379_TCP_PORT || 6379,
        password: process.env.REDIS_PASSWORD || ''
    },
    session: {
        cookie: {
            maxAge: 60000 * 5
        }
    },
    Imgurl: process.env.NODE_ENV === 'production' ? 'http://www.didiheng.com:8888' : `http://localhost:12345`,
    verifyPath,
    whitelist
}