import prisma from '../config/db.config.js';

export const wpController = {

    // Test connection
    async getTestConnection(req, res) {
        try {
            const targetBaseUrl = req.body.targetBaseUrl;
            const sheetToken = req.body.sheetToken;
            console.log(`Testing connection for website: ${targetBaseUrl}`);
            console.log('sheetToken:', sheetToken);
            const response = await fetch(`${targetBaseUrl}/wp-json/sheets-api/v1/test_connection`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "ngrok-skip-browser-warning": "true",
                    "User-Agent": "GoogleAppsScript",
                    "X-Sheet-Token": sheetToken,
                    "Authorization": "Bearer " + sheetToken
                }
            });
            const data = await response.json();
            console.log(`Response from API: ${JSON.stringify(data)}`);
            res.status(200).json({ success: "Connection successful" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Get products from WP site
    async getProducts(req, res) {
        try {
            const targetBaseUrl = req.body.targetBaseUrl;
            const sheetToken = req.body.sheetToken;
            console.log(`Fetching products from website: ${targetBaseUrl}`);
            console.log('sheetToken:', sheetToken);
            const response = await fetch(`${targetBaseUrl}/wp-json/sheets-api/v1/get_products`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "ngrok-skip-browser-warning": "true",
                    "User-Agent": "GoogleAppsScript",
                    "X-Sheet-Token": sheetToken,
                    "Authorization": "Bearer " + sheetToken
                }
            });
            const data = await response.json();
            console.log(`Response from API: ${JSON.stringify(data)}`);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Update products on WP site
    async updateProducts(req, res) {
        try {
            const targetBaseUrl = req.body.targetBaseUrl;
            const sheetToken = req.body.sheetToken;
            const products = req.body.products;
            const deleted_ids = req.body.deleted_ids;

            const response = await fetch(`${targetBaseUrl}/wp-json/sheets-api/v1/update_products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "ngrok-skip-browser-warning": "true",
                    "User-Agent": "GoogleAppsScript",
                    "X-Sheet-Token": sheetToken,
                    "Authorization": "Bearer " + sheetToken
                },
                body: JSON.stringify({ products, deleted_ids })
            });
            const data = await response.json();
            console.log(`Response from API: ${JSON.stringify(data)}`);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};
