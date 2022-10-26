
// here we are converting the image to base64 code to show it in when we don't have an internet connection
const Offline = ({image}) => {

    console.log(image)
    // const image = ""
    // let encoded = base64_encode    
    // const image = new Buffer("/static/media/Image.502e0f3368847542f070.jpeg").toString('base64');
    // var data2 = base64Img.base64('../assets/Images.jpeg');
    // console.log(data2);




    return (
        <>
            <h1> 🐱‍🐉 You don't have proper-internet-connection </h1>
            {/* var url = 'http://../demo.png';
            base64Img.requestBase64(url, function(err, res, body) {

            }); */}
            <img src={image} alt="no_image" />
            <hr  style={{color:"rgba(0,0,0,0.3)"}} />
        </>
    )
}

export default Offline;