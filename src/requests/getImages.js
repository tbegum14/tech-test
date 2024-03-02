import axios from "axios";

const getImages = (query) => {
	if (!query) {
		return Promise.resolve([]);
	} else {
		axios.get(`https://images-api.nasa.gov/search?q=${query}`).then((response) => {
            const imageResults = response.data.collection.items
            const parsedImages = imageResults.filter(image=>image.data[0].media_type==='image')
            const images = parsedImages.map(image=>image.links[0].href)
            console.log(images)
            return images
			//console.log(response.data.collection.items);
		}).catch(error=>{
            console.log(error)
        });
	}
};

export default getImages;
