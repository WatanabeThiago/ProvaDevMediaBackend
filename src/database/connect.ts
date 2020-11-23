import { createConnection } from 'typeorm'

createConnection().then(() => console.log('[BANCO DE DADOS] Banco de dados conectado com sucesso.'))