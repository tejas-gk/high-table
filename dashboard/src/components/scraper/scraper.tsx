// components/AmazonScraper.js
import { useEffect, useState } from 'react';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

const AmazonScraper = ({ amazonLink }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(amazonLink);

        const content = await page.content();
        const $ = cheerio.load(content);

        // Your scraping logic here to extract prices

        // Example: Scraping the price of the product
        const price = $('#priceblock_ourprice').text();
        setPrices([price]);

        await browser.close();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [amazonLink]);

  return (
    <div>
      <h2>Prices</h2>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    </div>
  );
};

export default AmazonScraper;
