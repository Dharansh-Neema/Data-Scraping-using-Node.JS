let fetch = require("node-fetch");
let cheerio = require("cheerio");
const user = require("../models/user");
const product = require("../models/product");
exports.scrapping = async (req, res) => {
  try {
    const { url } = req.body;
    //error handling
    if (!url) throw new Error("URL is required to scrap the data");
    let response = await fetch(url);
    if (!response) throw new Error("Not Able to fetch");
    console.log(req.user);
    //converting the response to Html
    const data = await response.text();

    //loading cheerio for scrapping
    const $ = cheerio.load(data);

    //Scrapping the Data from website
    let eleArray = $(".B_NuCI ");
    let priceArray = $(".aMaAEs .dyC4hf .CEmiEU ._16Jk6d");
    let descriptionArr = $("._3nkT-2 ._2o-xpa ._1mXcCf");
    let noofrevireArray = $("._2afbiS");
    let ratingArray = $("._1azcI6 ._2d4LTz");
    let mediaCountArray = $("._21YjFX ._380ehC");
    //Converting the data into text
    let title = $(eleArray[0]).text();

    let price = $(priceArray[0]).text();

    let description = $(descriptionArr[0]).text();

    let numberOfRating = $(noofrevireArray[0]).text();
    let nunmberOfReview = $(noofrevireArray[1]).text();

    let rating = $(ratingArray[0]).text();
    rating = Number(rating);

    let mediacount = $(mediaCountArray[0]).text();

    //Replacing unnecessary attributes
    numberOfRating = numberOfRating.replace("&", "");
    mediacount = mediacount.replace("+", "");
    mediacount = Number(mediacount);

    //Storing the scrapped into DB
    const productResponse = await product.create({
      title,
      price,
      description,
      numberOfRating,
      nunmberOfReview,
      rating,
      mediacount,
    });
    //saving it
    await productResponse.save();

    //sending response
    res.status(200).json({
      success: true,
      productResponse,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message:
        "Something went wrong while Scrapping the Data Please Check Console",
    });
  }
};
