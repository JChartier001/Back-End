const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("../server")

  
const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

beforeEach(async () => {
  await db.seed.run()
})

describe("auth router", () => {
  test("register a new user", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({ username: "CaptainAmerican", email: "Avengers@stark.com", password: "testing7" })
    expect(res.status).toBe(201)
  })
    test("register a new user", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({ username: "Hulk", email: "Avengers@stark.com", password: "testing1" })
    expect(res.body.username).toBe("Hulk")
  })


test("login user with correct password", async () => {
    const res = await supertest(server)
     .post("/auth/login")
      .send({ username: "IronMan",  email: "Tony@stark.com", password: "testing1" })
        expect(res.status).toBe(200)
  })
   test("login in user incorrectly", async () => {
      const res = await supertest(server)
      .post("/auth/login")
      .send({ username: "harrypotter", password: "testing" })
      expect(res.status).toBe(401)
  })
})