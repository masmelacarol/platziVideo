import fs from 'fs';
import { json } from 'express';

const getManifest = () => {
    try {
        return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`))
    } catch (e) {
        console.log("getManifest -> e", e);

    }
};

export default getManifest;