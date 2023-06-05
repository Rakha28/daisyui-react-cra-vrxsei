const { Pool } = require('pg');

class Api {
  constructor() {
    // Create a connection pool for PostgreSQL
    this.pool = new Pool({
      user: 'laode.alif',
      host: 'ep-wild-shadow-492151.ap-southeast-1.aws.neon.tech',
      database: 'animehub',
      password: 'Fm8Wq6ITNhkH',
      port: '5432',
      ssl: true,
    });
  }

  async getAllAnime() {
    const query = 'SELECT * FROM allanime;';
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async getAnime(animeId) {
    const query = `SELECT * FROM anime WHERE animeid = ${animeId};`;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async getAnimeDetails(animeId) {
    const query = `SELECT * FROM animedetail WHERE animeid = ${animeId};`;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async getAnimeReviews(animeId) {
    const query = `SELECT * FROM animereview WHERE animeid = ${animeId};`;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async getAnimeSynopsis(animeId) {
    const query = `SELECT * FROM animesynopsis WHERE animeid = ${animeId};`;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async getAnimeImage(animeId) {
    const query = `SELECT img_url FROM allanime WHERE animeid = ${animeId};`;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows[0].img_url;
    } finally {
      client.release();
    }
  }

  async getComments(animeId) {
    const query = `SELECT * FROM comment WHERE animeid = ${animeId};`;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }
}

const apiInstance = new Api(); // Create an instance of the Api class

module.exports = apiInstance;
