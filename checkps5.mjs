import fetch from 'node-fetch';
const itemno = "124626"
const url = "https://api.bigw.com.au/api/availability/v0/product/${itemno}?storeId=0117&deliveryPostcode=2137&deliverySuburb=NORTH%20STRATHFIELD"
console.log(url);
fetch(url, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "cookie": "AWSELB=05899F9F144D6921751B7C597B830B2FF46FF797A86BF0124D4794146D22F0904FE9FD2AA571120DF3BC81117F078C7D2ADF85F0E7A202B225EF8AA15C00020345352FA823; AWSELBCORS=05899F9F144D6921751B7C597B830B2FF46FF797A86BF0124D4794146D22F0904FE9FD2AA571120DF3BC81117F078C7D2ADF85F0E7A202B225EF8AA15C00020345352FA823; rr_rcs=eF5jYSlN9jBJNDMxTjI30U20sDDSNUlJSdQ1SjNK0jVNNU1NTUkxSUyxSOLKLSvJTOGzNDfWNdQ1BACaJQ73; BVBRANDID=a1e8318d-087d-44b9-abb0-7ca09c52aba3; X-Correlation-ID=600af3e6-3781-4239-8f00-b0af48313b18; JSESSIONID=4738943A7F5EF0844CEFAF3FF82A6D8F; AKA_A2=A; _abck=681194C3A1C543B0F8CB4276DC6AE7BB~0~YAAQHQUgF+Q5aceDAQAA17lB1Aiu5xuFYJAQ9Qt8UZELzIbnhiGB8EFE9EzLqT/B64afoueizBFf4klHsHbM2GRZU/AEEFcs/dwxCjOQTFXI378wBqUH7MFWm+aMY3TO23AQMZT3aVYV9UMn18LkcgyR9JdWBbADzZd3vM6SbXSUW6q0RO3CyGDL6LUAVHwLZ7BNVvnH/KI00LiWRUN8WWeaqUuo46YFaqwsYrbcXXzwRRc6Jvq02QVIncxt+yOS4riCbvIyezhQvAGfXNm5/rCybBQKudtodDQBS/jqY4E8J0nbDsm8eDe/+On4+5T2tkb2tav724vM6HOx020WUpgFZBjyxzQ3rZ7RiDN5ZZ7T4b8tUHvmMo3DeM7/ty043An/ydo4gfxWv+pWlblpHzHr/6SAgLAgSg==~-1~-1~-1; bm_sz=351C35BF129AF127FBB908D9AF6AC000~YAAQHQUgF+c5aceDAQAA17lB1BHC09Qn66l44MKhtX0V2UkN7cVSf5/OPJyEpETE6nfa9EcWxky+kq1jqybuEyUh3ARJ+JxCkt3v1r1p2nfJVXrsWVz1yprWxoMKwBGLz9GFdK8mGfMzhKjyoBpMBm02Ju2Bto2PwfjOADiYGcdC8naVW9oZB8CWqsXkVjQXh/OL6uxRUMg8B5fDnjaF56vYU17cHXMWGVdqFcbGk50fgotdFErFV7a1D9eiRUp2tIsbOYNG/B5qQOKDk37eE7VRmeGqgL9jJvP47T7e6btaPUl2~4535861~3294278; ak_bmsc=0E1B2E5D20B9B788919BB2590777B8CC~000000000000000000000000000000~YAAQHQUgF046aceDAQAAibxB1BFPEBZ+vqX1Q7Z0jDfbEqkUHFSjcfvhuxSfmNQt5vRiDIJgSTutjdfteB5Egv93ZTyPc1Fr2dghVPFRGkoWtRAKBksdAPqu7Z6QQRScmPs2zyF16LFwr9mxZuw5FJttdyWJy1E8msqErCtB3FIHgvVnb1GoM9oTb4dYcQZyuWo4vU7zBqy6xUfN4TUjO2v3/iO4zRx+YR6ehnELKQZ2LT8PiHJ5MTTzwCxkzEGjcMT4VVXyXGlBGDnZ5CTV0ky1G/cxhqr5jiskO/4A4w7WGxPmRs+YqzNzvoyQdTWaTQY6aB2Wltf7fYd+1ioEJeqKtaIUkPAlKhM9ib8SgniVU/YWHXpmWpQGtJg/c52SOWAgIBwdI8KQ9a+fWdaO+YadKwdW5mbUrwPS5cgf/1b3Tn9/M/si+UwI4ATn6LIDMP+lF+wWg/rMRJfKdKQJF5qJ4eS0dPexUBCZaIaUZPI=",
      "Referer": "https://www.bigw.com.au/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  })
.then(res => res.json())
.then(json => {
  console.log("Json details");
  console.log(json[0]);
  console.log(json.products);
  for(var attr in json.products){
    console.log(attr +": "+json.products[attr]);
  }
});  


/*
powershell json path - $obj.products.$ItemNo.delivery.'Standard Delivery'.available

const body = await response.text();
console.log(body);
*/
