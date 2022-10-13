import fetch from 'node-fetch';

fetch("https://api.bigw.com.au/api/availability/v0/product/124626?storeId=0117&deliveryPostcode=2137&deliverySuburb=NORTH%20STRATHFIELD", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "cookie": "AWSELB=05899F9F144D6921751B7C597B830B2FF46FF797A86BF0124D4794146D22F0904FE9FD2AA571120DF3BC81117F078C7D2ADF85F0E7A202B225EF8AA15C00020345352FA823; AWSELBCORS=05899F9F144D6921751B7C597B830B2FF46FF797A86BF0124D4794146D22F0904FE9FD2AA571120DF3BC81117F078C7D2ADF85F0E7A202B225EF8AA15C00020345352FA823; rr_rcs=eF5jYSlN9jBJNDMxTjI30U20sDDSNUlJSdQ1SjNK0jVNNU1NTUkxSUyxSOLKLSvJTOGzNDfWNdQ1BACaJQ73; BVBRANDID=a1e8318d-087d-44b9-abb0-7ca09c52aba3; bm_sz=E3CD64BEF78B9608469F5CBA53A5A485~YAAQHQUgFwK018aDAQAArSFezxEKVW8OrO3mbQpmHtz+bHwRXvE0Sy3Ar1lr4WcdBFqP56za6yKo4y268B0Yq4Iof/PD4p8kH5BVy/HG4IaX19K3UtsUE8RIBTjEZXHvHECT+00yOOJtou/tkjqRCCVPQfLULuviBbrZZa1ettXTks1p99AlN/FHJOowDMReaxallOxRmPFx9v0HrY8Kw41LySyfl8DFOm+PVhSv/ioBe4USw5GZbgePD9WZQEy9GywUFbOt/1InDSfpsifdPYO/A057+plAZft4yoQRMHhqAOll~3225153~3228481; X-Correlation-ID=600af3e6-3781-4239-8f00-b0af48313b18; AKA_A2=A; SameSite=None; JSESSIONID=4738943A7F5EF0844CEFAF3FF82A6D8F; ak_bmsc=7A98E35469DF8B8030EF290D1EDC6F4C~000000000000000000000000000000~YAAQHQUgF6Ua7saDAQAAJ/HyzxEniLLGYBXWmcPRo+2KcV4uWobnSLPLZoI3T3g7vFT2M52ZZtcaVrr3Eok2fWxRTEz+naUXwOJecD05BGqDtGVy3LZfQIamDKdfWl+RknOzQmi7OSStllsYPaqmyM0odxDiJucDZPYTUSYf8VlQz12NXfUs4tK6zi1z4aXEmmkrgJeEowyA/2rftYVlNo9OuPw+6St6mhkmT3rDV8hrcj9iZ0uSWdauSoxYdfRPW5Y6YkpirRRhwsoFVBUZUCcBt7IEj6uCWnxTcXT0DJtdQyeoNh+KQ/Zv57YiCevS5o8KNYOmr30kvtvfFGHgOJ47KWB8hVzi6MiYXbxnZ5Gw0E7zbMrcVs8SYKnvnNJdjspZjhQiY3o3x4dNegxZq7UrfGr5lPEGnktvKHjwB14plPdF2jOyQtgvYP201vEbG9gDeGPASB3gZEcNw6rJWxzkxwHs0i7XfYNyMsqZ8TKNPQf8+Cy9eOKs9m0=; ADRUM_BTa=\"R:24|g:321ccbbf-f8de-42a0-824a-4b3a9803b8a8|n:bigw_a10f65ff-d444-47cb-b49b-e67770b7ea04\"; ADRUM_BT1=\"R:24|i:440693|e:55\"; BVBRANDSID=7978736c-66c8-4124-b1ba-46fea5101a15; bm_sv=24E25D8F3A91F5E79DE507FB9DDF6061~YAAQHQUgF5ki7saDAQAApi7zzxFieompJtm7tPzDCzQMYNqKKlN2oXSci4qCadBF5G6nRpphjK9GXk7zzU62SktrY6SyvcaurfAo3PrMvnInj8iXV+OUAUuJVzx0CMjz7Pd78uynlqpXPNr9El56OOIPL98xsa87BP0THj97zg8qSEjxzhwv6MBD14FjNGbeUiQu4NWo1NQ9rYacrmYOy8/lsgy1FUrhI4nas3ieVrBCaGVrIF6HQd3ryfaiacnOFaA=~1; _abck=681194C3A1C543B0F8CB4276DC6AE7BB~0~YAAQHQUgF9Qi7saDAQAAqDDzzwgKsls5EluBt6S4HudJBzMHLcdRxIuzDRi7jnurRs0sQ15Jukvvt1PZWIa9vwm6TeZax7nNoaLy5Ph/o/F6xD2ApD11cuJq1Dz7s0nMVo4wXIZlaWCtOZamdpJEqmfYiSS+5REPO7LM//8Dg4DroccQqaN5Dw7k/uJWOjcudxvdKvDOebcAV+rZjs8PgEcCWIDcAitUn6WA4jTIMX631Ce0a2LLFciQGda/608L6SC1JZon09ICiyIBUL96EPsrwEcoGmAA6xw5EvVxAzIz4ta0KmGk6vTAJ5IehIQiI326Gb3Prg5SBEvxT1yq0gXuEZzu01o0edBwrxpSntH/gJACuQjI4MT6iQrHXVySefl0HKTp9jyBqPEm2t0XLxILOjrg/zQlGw==~-1~||1-mKgKJwAjzd-1-10-1000-2||~-1",
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
});  


/*
powershell json path - $obj.products.$ItemNo.delivery.'Standard Delivery'.available

const body = await response.text();
console.log(body);
*/
