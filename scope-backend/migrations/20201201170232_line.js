
exports.up = function(knex) {
    return knex.schema.createTable('debitline', (table) => {
        table.integer('id').notNullable();
        
        // record/line type ('credit' or 'debit')
        table.string('type').notNullable();
        // reference to transaction
        table.string('transactionId').notNullable().references('id').inTable('transaction');
        // reference to account
        table.integer('accountId').notNullable().references('id').inTable('account'); // same as references('account.id')
        
        table.string('sourceDocumentId').notNullable();
        table.timestamp('systemEntryDate', { useTz: true }).notNullable();
        table.string('description').notNullable();
        table.float('amount', 6).notNullable();
});
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('debitline');
};
