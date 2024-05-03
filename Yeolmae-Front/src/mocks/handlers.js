import { http } from 'msw';

export const handlers = [
  http.post('users/login', (req, res, ctx) => {
    if (req.body.id && req.body.pw) {
      return res(
        ctx.json({
          accessToken: '토큰 획득'
        })
      );
    }
    return res(ctx.status(400));
  })
];
