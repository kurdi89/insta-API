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

    // var img = `<div class="card-img-top code-image ${scanned}">${svg}</div>`
    // var div = `
    // <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2 code" id="${id}">
    //     <div class="card m-1 mx-auto" style="width: 14rem;">
    //         ${img}
    //         <div class="card-body">
    //         <h6 class="card-title code-status ${status}">${title}</h6>
    //         <p class="card-text m-0"><small class="text-muted code-id">${id}</small> <span class="ml-2 delete-code" id="${id}"><small><i class="fa fa-trash"></i></small></small></span></p>
    //         </div>
    //     </div>
    // </div>
    // `;
    // $('#row').append(div);

    // document.getElementById("json").innerHTML = JSON.stringify(Object.values(insta)[0].hashtag.edge_hashtag_to_media, undefined, 2);
    $("#json").html(JSON.stringify(Object.values(insta)[0].hashtag.edge_hashtag_to_media, undefined, 2))





})

