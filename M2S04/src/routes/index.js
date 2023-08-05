const { Router } = require('express')
const routes = Router()
const userRoutes = require('./v1/userRoutes')
const itensRoutes = require('./v1/itensRoutes')
const dataRoutes = require('./v1/dataRoutes')
const userJsonRoutes = require('./v1/userJsonRoutes')
const stringsConverterRoutes = require('./v1/stringsConverterRoutes')

routes.use([userRoutes, itensRoutes, dataRoutes, userJsonRoutes, stringsConverterRoutes])

module.exports = routes