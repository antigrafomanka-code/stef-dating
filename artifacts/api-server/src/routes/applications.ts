import { Router, type IRouter } from "express";
import { db, applicationsTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/applications", async (req, res) => {
  try {
    const { name, email, age, stuck, whyNow } = req.body;

    if (!name || !email || !age || !stuck || !whyNow) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      res.status(400).json({ error: "Invalid age." });
      return;
    }

    const [application] = await db
      .insert(applicationsTable)
      .values({ name, email, age: ageNum, stuck, whyNow })
      .returning();

    req.log.info({ applicationId: application.id }, "New coaching application received");

    res.status(201).json({ success: true, id: application.id });
  } catch (err) {
    req.log.error({ err }, "Failed to save application");
    res.status(500).json({ error: "Failed to submit application. Please try again." });
  }
});

export default router;
