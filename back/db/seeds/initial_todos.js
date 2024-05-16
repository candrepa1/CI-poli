exports.seed = function(knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {  name: "make dinner", isDone: false },
        { name: "run a mile", isDone: false },
        {  name: "clean room", isDone: false }
      ]);
    });
};
