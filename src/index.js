const { prisma } = require('../prisma-client')

const n = 1000;

const multiRequest = async requestList =>
  await Promise.all(
    requestList.map(async item => {
      return await item.request();
    })
  );

const main = async () => {
  const randomName = `${Math.random() * 1000}`;
  const tasks = new Array(n).fill(0).map((_,i) => ({request: () => prisma.createUser({
    name: `${randomName}.${i}`,
    email: `${randomName}.${i}@skipp.pro`,
  })}))

  console.time('tm');
  await multiRequest(tasks);
  console.timeEnd('tm');

  const users = await prisma.users()
  console.log(`Done: ${users.length} users`);

}

main().catch(e => console.error(e))
