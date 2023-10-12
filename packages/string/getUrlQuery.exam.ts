import { getUrlQuery } from './getUrlQuery'

const url = 'https://utils.vtrbo.cn:80/#/randomString?id=666&name=randomString&age=18'

const key = 'name'

console.log(getUrlQuery(url, key))
