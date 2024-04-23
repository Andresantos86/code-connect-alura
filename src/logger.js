import {createLogger,format,transports} from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({filename: 'error.log', level: 'error'}), // vai salvar tudo em um arquivo de erro
    new transports.File({filename: 'conbined.log'}),
  ]
})

export default logger