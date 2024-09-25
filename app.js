//创建实例对象
const Koa = require("koa");
const app = new Koa();
const respDurationMiddleware = require("./middleware/koa_response_duration");
//绑定第一个中间层
app.use(respDurationMiddleware);
//绑定第二个中间层
const respHeaderMiddleware = require("./middleware/koa_response_header");
app.use(respHeaderMiddleware);
//绑定第三个中间件
const resDataMiddleware = require("./middleware/koa_response_data");
app.use(resDataMiddleware);
//绑定端口号
app.listen(8080);
//websocket使用
const webSocketService=require('./service/web_socket_service')
webSocketService.listen()