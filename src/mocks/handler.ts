// import { rest } from 'msw';

export const handlers = [
  // rest.get('/api/stations/search', async (req, res, ctx) => {
  //   await sleep(200);
  //   return res(ctx.status(200), ctx.json(subwayDumy));
  // }),
  // rest.get('/api/stations', async (req, res, ctx) => {
  //   const title = req.url.searchParams.get('title');
  //   const station = elevatorDumy.find((item) => item.subway === title);
  //   async function sleep(timeout: number) {
  //     return new Promise((resolve) => {
  //       setTimeout(resolve, timeout);
  //     });
  //   }
  //   await sleep(200);
  //   return res(ctx.status(200), ctx.json(station));
  // }),
  // rest.get('/api/elevators', async (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(elevatorDumy));
  // }),
];

// async function sleep(timeout: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout);
//   });
// }
