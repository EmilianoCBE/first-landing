//? API
const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UCXvq0ZcaPPbaqpzH8lDAjhw&part=snippet%2Cid&order=date&maxResults=1'

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c28fc7d380mshb6455231e54d881p1a4debjsn2f2cec654988',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

//* Función que se llama a sí misma
(async () => {
    try{
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `)}
        `;
        content.innerHTML = view
    }catch(err){
        console.log(err);
    }   
})()