const { prisma } = require('./prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user with a new post
  // const newUser = await prisma.createUser({
  //     name: "Bob",
  //     email: "bob@prisma.io",
  //     posts: {
  //       create: {
  //         title: "The data layer for modern apps",
  //       }
  //     },
  //   })
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read the newly created user from the database and print their posts to the console
  const postsByUser = await prisma
    .user({ email: "bob@prisma.io" })
    .posts()
  console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`)


}

main().catch(e => console.error(e))