"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateNotesSchema extends Schema {
  up() {
    this.create("notes", (table) => {
      table.increments();
      table.integer("organization_id").unsigned();
      table.integer("user_id").unsigned();
      table.string("title").notNullable();
      table.text("description");
      table.text("frase");
      table.timestamp("deleted_at").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("notes");
  }
}

module.exports = CreateNotesSchema;
