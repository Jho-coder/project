import { pool } from "../db.js";

export const getLista = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM producto ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
