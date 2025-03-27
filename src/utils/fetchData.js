const BASE_url = 'https://twitter241.p.rapidapi.com'

export const fetchData = async (query) => {
    const result = await fetch(`${BASE_url}/search?type=Top&count=20&query=${query}`, {   
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6abbfa36cdmshc3bfd0c1b1e3013p19ffa0jsnd078e62e5d1c',
		    'x-rapidapi-host': 'twitter241.p.rapidapi.com'
        }
    })

    console.log(result);
    const data = await result.json();  // converting promise to json
    console.log(data)
    return data;
}

export const fetchAns = async () => {
    const result = await fetch(`https://fakestoreapi.com/products`, {     
        method: 'GET',
    })
    
    console.log(result);
    const data = await result.json();  // converting promise to json
    console.log(data)
    return data;
}

export const fetchTweets = async () => {
    const result = await fetch(`${BASE_url}/retweets?pid=1552735248026411010&count=40`, {   
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6abbfa36cdmshc3bfd0c1b1e3013p19ffa0jsnd078e62e5d1c',
		    'x-rapidapi-host': 'twitter241.p.rapidapi.com'
        }
    })

    console.log(result);
    const data = await result.json();  // converting promise to json
    console.log(data)
    return data;
}

