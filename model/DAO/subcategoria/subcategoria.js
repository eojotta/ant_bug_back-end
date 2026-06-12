/*****************************************************************************
 * Objeivo: Arquivo responsável pelo CRUD de dados da subcategoria no banco de dados
 *           MySQL
 * Data: 11/06/2026
 * Autor: Pyetro Ferreira
 * Versão: 1.0
 *****************************************************************************/

const knex = require('knex')

const knexDataBaseConfig = require('../../database_config/knexConfig.js')

const knexConection = knex(knexDatabaseConfig.development)

const insertSubCategoria = async function(subCategoria) {
    try {
        let sql = `insert into tbl_subCategoria(
        
        )`
    } catch (error) {
        
    }
}

const updateSubCategoria = async function(id) {

}

const selectAllSubCategoria = async function() {

}

const selectByIdSubCategoria = async function (){

}

const deleteSubCategoria = async function (){

}

module.exports = {

}
