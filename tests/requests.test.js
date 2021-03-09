const request = require('supertest')
const app = require('../index.js')

describe('Get Endpoints', () => {
  it('should return GET', async () => {
    const res = await request(app)
      .get('/')

    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual("GET")
  })
})

describe('Post Endpoints', () => {
    it('should return POST', async () => {
      const res = await request(app)
        .post('/')
  
      expect(res.statusCode).toEqual(200)
      expect(res.body.result).toEqual("POST")
    })
  })

describe('Put Endpoints', () => {
    it('should return PUT', async () => {
      const res = await request(app)
        .put('/')
  
      expect(res.statusCode).toEqual(200)
      expect(res.body.result).toEqual("PUT")
    })
  })

describe('Delete Endpoints', () => {
    it('should return DELETE', async () => {
      const res = await request(app)
        .delete('/')
  
      expect(res.statusCode).toEqual(200)
      expect(res.body.result).toEqual("DELETE")
    })
  })