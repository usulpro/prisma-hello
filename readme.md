# Test Hello-Prisma

1. `npm install -g prisma@beta`
2. `docker-compose up -d`
3. `npm run deploy`
4. `npm start`

Clean: open http://localhost:4466

```graphql
mutation del {
  deleteManyUsers {
    count
  }
}

```