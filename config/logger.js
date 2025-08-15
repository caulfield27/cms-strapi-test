const winstone = require("winston");

const {combine, timestamp, json} = winstone.format

module.exports = ({env}) => ({
    transports: [
        new winstone.transports.Console({
            level: 'debug',
            format: combine(timestamp(), json())
        }),
        new winstone.transports.File({
            filename: 'logs/info.log',
            level: 'debug',
            format: combine(timestamp(), json())
        }),
        
        new winstone.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: combine(timestamp(), json())
        })
    ]
})