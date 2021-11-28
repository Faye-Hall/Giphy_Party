const searchInput = $("#search");


$("form").on("submit", async function (event) {
    event.preventDefault();

    let searchTerm = searchInput.val();


    const url = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "yMljR8rBMRM4ZL1AtSPblItRfZ0OFCGa",
            q: searchTerm


        }
    });
    let newImg = new Image(200, 200);
    let randomImg = Math.floor(Math.random() * url.data.data.length);
    newImg.src = url.data.data[randomImg].images.downsized.url;
    $("#imgDiv").append(newImg);
    searchInput.val("");

})

$("#btnRemove").on("click", function () {
    $("img").remove();

})