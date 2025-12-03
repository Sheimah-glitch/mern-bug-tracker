import request from "supertest";
import app from "../app.js";

describe("Bug API Tests", () => {
  test("GET /api/bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
  });
});
