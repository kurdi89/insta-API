jQuery(document).ready(async() => {

    /**Fetching Codes */
    // Fetch Codes from API
    async function getCodes() {
        const res = await fetch('https://www.instagram.com/explore/tags/saudiarabia/?__a=1');
        const data = await res.json();
        return data
    }
    var insta = await getCodes();
    console.log('insta :', insta)
    await Object.keys(insta).forEach(function (key){
        console.log(insta[key]);
    });
    await console.log(Object.values(insta));
    await console.log(Object.values(insta)[0].hashtag.edge_hashtag_to_media);

    /**Appending Nodes */
    // append nodes on the page : 

    $("#json").html(JSON.stringify(Object.values(insta)[0].hashtag.edge_hashtag_to_media, undefined, 2))





})

