import app from '@server'
import supertest from 'supertest'

import { Response, SuperTest, Test } from 'supertest'

describe('SpotifyRouter', () => {
    const spotifyPath = '/api/spotify'
    const authorizePath = `${spotifyPath}/authorize`

    let agent: SuperTest<Test>

    beforeAll((done) => {
        agent = supertest.agent(app)
        done()
    })

    describe(`"GET:${authorizePath}"`, () => {
        const callApi = (reqBody: object) => {
            return agent.get(authorizePath)
                .type('form')
                .send(reqBody)
        };

        it(`should be a redirect endpoint`, (done) => {
            callApi({})
                .expect(302, done)
        })

        it(`should redirect to the Spotify authorize endpoint`, (done) => {
            const endpoint = 'https://accounts.spotify.com/authorize'
            callApi({})
                .expect('location', endpoint, done)
        })

    })
})