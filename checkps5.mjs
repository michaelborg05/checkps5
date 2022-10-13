import fetch from 'node-fetch';

const response = await fetch("https://api.bigw.com.au/api/availability/v0/product/124626?storeId=0117&delivery$
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.5",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
   "cookie": "X-Correlation-ID=cb31fb88-5bd4-4a5d-9bac-3e9e8759d89d; AWSELB=05899F9F144D6921751B7C597B830B2FF4$
     "Referer": "https://www.bigw.com.au/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

const body = await response.text();
console.log(body);
