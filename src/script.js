const el = document.querySelector('.data')

console.log('tst')

async function getSmartFloorPrice(contractAddress) {
  try {
    // const tst = fetch('https://api.adviceslip.com/advice')
    // .then(res => res.json())
    // .then(data => el.innerHTML += data.slip.advice)
    // .then(data => console.log(data.slip.advice))
    // const config = {
    //   method: 'GET',
    //   url: `https://api.adviceslip.com/advice`,
    //   // url: `https://your-app.vercel.app/api/smart-floor-price`,
    //   params: {
    //     contractAddress: contractAddress,
    //   },
    // }
    // const data = await fetch(config).then((res) => res.data)
    const data = await fetch('/api/smart-floor-price').then((res) => res.json()).then(data => el.innerHTML += data.slip.advice)
    // el.innerHTML = data
    return data
  } catch (err) {
    // console.log(err)
  }
}

// https://thisisit-six.vercel.app/api/getSmartFloorPrice

// el.innerHTML = getSmartFloorPrice('lol')

getSmartFloorPrice()

console.log(el)

el.innerText = 'world'