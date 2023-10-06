import { pool } from "../config/database.js"

const getLocations = async (req, res) => {
  try {
    const results = pool.query("SELECT * FROM locations ORDER BY id ASC")
    res.status(200).json(results.rows)
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

const getLocationById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT venue_name, venue_address, image
      FROM locations
      WHERE id=$1
    `
    const locationId = req.params.locationId

    const results = await pool.query(selectQuery, [locationId])
    res.status(200).json(results.rows[0])
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

export default {
  getLocations,
  getLocationById,
}
