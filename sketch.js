var database, allProducts;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database);


    // var ref = database.ref("products");
    // ref.on("value", (data)=>{
    //     //console.log(data.val());
    //     allProducts = data.val();
    // })
    Product.getProductInfo();
    console.log(allProducts);
    console.log("Hello");
   
}



function draw()
{background("white");
if(allProducts!=undefined){
    // console.log(allProducts);
    // console.log(allProducts.product1.name);
    Product.display();
}


  
    drawSprites();
}

