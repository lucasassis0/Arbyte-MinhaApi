
const tableName = 'products'

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments()
        table.string('name')
        table.float('price')
        table.timeStamps()
    })
};

exports.down = function (knex) {

};