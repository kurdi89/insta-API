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
    let ndoes = [];
    var media = await Object.values(insta)[0].hashtag.edge_hashtag_to_media
    Object.values(media.edges).forEach(element=>{
        // console.log('nodes : ', element.node)
        ndoes.push(element.node)
    })
    ndoes.forEach(x=>{
        if(x.edge_media_to_caption.edges[0]){
            var text = x.edge_media_to_caption.edges[0].node.text;
        }else{
            var text = "";
        }
        var img = `<div class="card-img-top node-image"><img src="${x.thumbnail_src}" width="100%"</div>`
        var div = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2 node" id="${x.id}">
            <div class="card m-1 mx-auto" style="width: 14rem;">
                ${img}
                <div class="card-body">
                <h6 class="card-title node-status">id:${x.id}</h6>
                <p class="card-text m-0"><small class="text-muted node-id">${text}, video : ${x.is_video}, deminsions : ${x.dimensions.width}x${x.dimensions.height}</small></p>
                </div>
            </div>
        </div>
        `;
        $('#row').append(div);
    })

    $("#json").html(JSON.stringify(Object.values(insta)[0].hashtag.edge_hashtag_to_media, undefined, 2))





})

