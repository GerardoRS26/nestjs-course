const { DataSource } = require('typeorm');

module.exports = {
  dataSource: new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres123',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  }),
};

// CLI Command
// npx typeorm migration:create -n CoffeeRefactor <- Fails
// npx typeorm migration:create src/migrations/CoffeeRefactor
// run firts npm run build
// npx typeorm migration:run -d ormconfig.js
// npx typeorm migration:revert -d ormconfig.js
// npx typeorm migration:generate src/migrations/SchemaSync -d ormconfig.js
