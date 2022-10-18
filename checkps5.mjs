import fetch from 'node-fetch';
var itemno = "124626";
var url = `https://api.bigw.com.au/api/availability/v0/product/${itemno}?storeId=0117&deliveryPostcode=2137&deliverySuburb=NORTH%20STRATHFIELD`;
console.log(itemno);
console.log(url);
fetch(url, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
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

      "cookie": "AWSELB=05899F9F144D6921751B7C597B830B2FF46FF797A86BF0124D4794146D22F0904FE9FD2AA571120DF3BC81117F078C7D2ADF85F0E7A202B225EF8AA15C00020345352FA823; AWSELBCORS=05899F9F144D6921751B7C597B830B2FF46FF797A86BF0124D4794146D22F0904FE9FD2AA571120DF3BC81117F078C7D2ADF85F0E7A202B225EF8AA15C00020345352FA823; rr_rcs=eF5jYSlN9jBJNDMxTjI30U20sDDSNUlJSdQ1SjNK0jVNNU1NTUkxSUyxSOLKLSvJTOGzNDfWNdQ1BACaJQ73; BVBRANDID=a1e8318d-087d-44b9-abb0-7ca09c52aba3; bm_sz=351C35BF129AF127FBB908D9AF6AC000~YAAQHQUgF+c5aceDAQAA17lB1BHC09Qn66l44MKhtX0V2UkN7cVSf5/OPJyEpETE6nfa9EcWxky+kq1jqybuEyUh3ARJ+JxCkt3v1r1p2nfJVXrsWVz1yprWxoMKwBGLz9GFdK8mGfMzhKjyoBpMBm02Ju2Bto2PwfjOADiYGcdC8naVW9oZB8CWqsXkVjQXh/OL6uxRUMg8B5fDnjaF56vYU17cHXMWGVdqFcbGk50fgotdFErFV7a1D9eiRUp2tIsbOYNG/B5qQOKDk37eE7VRmeGqgL9jJvP47T7e6btaPUl2~4535861~3294278; JSESSIONID=EFCA3125D3E1314793326AFB3A900649; _abck=681194C3A1C543B0F8CB4276DC6AE7BB~0~YAAQHQUgF+FgaceDAQAAGehC1AiVZ0AFGPdQ/HAXUeIHJjvShmAsKX4WqZ/0Hy2KovZ8AT9aiKn3VNg8qAJ31mch/h3PsEqRVGoHOhMHFtr1W71H2J7/u7kri5H3C8d+zQjup3sJUsohziF9rcopJtAh2eYBEwXr8PzfNJUxImzS4oQoiurCLebLFhOXeHTnCesVtGEZAZZYr173AlYJpPCAggx7tAsjHwis0WhBMlpAtbD84BbkhXlWuaSOzh5SACe+b6Z3gwsq5vSbUd3waSJkIIise2+m3KsVDl12oMucd2kvjduv8VpBP2901Par6tlilr77PygMoDCkeSZoIpniYNvEQ03Sp8WkVN54RZbGH6/PhnHbmyNyRaYH5VotQj5fM8d07ggfXAw5OcbBti/+ogMlbKVsiw==~-1~-1~-1; AKA_A2=A; ak_bmsc=9310E2242EC231722CA31196B90E958A~000000000000000000000000000000~YAAQKgUgF2g3lrqDAQAA0d/31BFvLGcGpryiA5WaAqeMmWv/tJGmz72O+02THUQ3kSdeUt8zQqN4KOZY7XLFS0vCYSt+PYWhtNNDaX+Fybj73ktKAo2cSTv1LKxD7qngZDihA3AB44PT+0RdeGU9qA/7kdZZXEuQYUtfDglUPl0nTW5cXqQXP16xAs1lUgYOFJYrE6/LPjoY3nXDoBhehkTl2yMTU9jDJ0lRWOkW7ycVI4/t8ljJo/KOE65M0A0xrZEzthcc4YXxyleB9O7A5n4CrgNl+9OK/tfjWuK7snSyR1ibI4S05qgr5ayq0d2h8J37N0/GG5cmEbj8icFieNi0S8iPNHzs7Q43mMr8GTDvLLho9Z4LXr8D0QKyXJVXtycX9xE+PGFXhTlZzpXRcZ0UcNOeoXaH2YEDg9336/UnGFnMC0m1hVxnn5SLgtk0VhbnrKiejPRt0g6ynW9vdMPp0zRIyI1SUYj01jsTmpU=",

const body = await response.text();
console.log(body);
*/
