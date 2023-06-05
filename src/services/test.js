const apiInstance = require('./api');

async function testApi() {
  try {
    // Test getAllAnime method
    console.log('=== Testing getAllAnime ===');
    const allAnime = await apiInstance.getAllAnime();
    console.log(allAnime);

    // // Test getAnime method
    // console.log('=== Testing getAnime ===');
    // const animeId = 1; // Provide the anime ID you want to retrieve
    // const anime = await apiInstance.getAnime(animeId);
    // console.log(anime);

    // // Test getAnimeDetails method
    // console.log('=== Testing getAnimeDetails ===');
    // const animeDetails = await apiInstance.getAnimeDetails(animeId);
    // console.log(animeDetails);

    // // Test getAnimeReviews method
    // console.log('=== Testing getAnimeReviews ===');
    // const animeReviews = await apiInstance.getAnimeReviews(animeId);
    // console.log(animeReviews);

    // // Test getAnimeSynopsis method
    // console.log('=== Testing getAnimeSynopsis ===');
    // const animeSynopsis = await apiInstance.getAnimeSynopsis(animeId);
    // console.log(animeSynopsis);

    // // Test getAnimeImage method
    // console.log('=== Testing getAnimeImage ===');
    // const animeImage = await apiInstance.getAnimeImage(animeId);
    // console.log(animeImage);

    // // Test getComments method
    // console.log('=== Testing getComments ===');
    // const comments = await apiInstance.getComments(animeId);
    // console.log(comments);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the database connection
    await apiInstance.pool.end();
  }
}

testApi();
