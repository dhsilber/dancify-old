import { Request, Response, Router } from 'express'

const router = Router()

router.get('/authorize', async (req: Request, res: Response) => {
    try {
        // const { key, options } = jwtCookieProps;
        // res.clearCookie(key, options);
        res.redirect('https://accounts.spotify.com/authorize')
        // return res.status(OK).end();
    } catch (err) {
        // logger.error(err.message, err);
        // return res.status(BAD_REQUEST).json({
        //     error: err.message,
        // });
    }
});

export default router