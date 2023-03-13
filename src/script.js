const el = document.querySelector('.data')
async function getSmartFloorPrice(contractAddress) {
  try {
    const config = {
      method: 'GET',
      url: `https://your-app.vercel.app/api/smart-floor-price`,
      params: {
        contractAddress: contractAddress,
      },
    }
    const data = await axios(config).then((res) => res.data)
    // el.innerHTML = data
    return data
  } catch (err) {
    console.log(err)
  }
}

el.innerHTML = getSmartFloorPrice('lol')