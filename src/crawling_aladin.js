const Axios = require('axios'); 
const Cheerio = require('cheerio'); 
const iconv = require('iconv-lite'); 

const getHTML = async(page) => {
    try {

        let content = ""; 

        await(Axios({
            //url : `https://www.aladin.co.kr/shop/common/wbest.aspx?BestType=Bestseller&BranchType=1&CID=0&page=${page}&cnt=1000&SortOrder=1`,
            url : "https://www.aladin.co.kr/shop/common/wbest.aspx?BestType=Bestseller&BranchType=1&CID=0&page=1&cnt=1000&SortOrder=1",
            method: 'GET',
            responseType: 'arraybuffer',
        })).then( async (html) => {
            content = iconv.decode(html.data, "UTF-8").toString(); 
        })
        return content; 
        // 왜 안될까? 
    }catch(error) {
        console.log(error); 
    }
}

const parsing = async (page) => {
    const html = await getHTML(page); 
    
    const $ = Cheerio.load(html);
    const $courseList = $(".ss_book_box");

    let coureses = []; 
    
    $courseList.each((idx, node) => {
        coureses.push({
            title: $(node).find(".ss_book_list > ul > li > a > b").text(),
            image: $(node).find(".flipcover_in > img:last-child").attr("src"),
        }); 
    });
    
    console.log(coureses); 
}

parsing(1); 
// parsing(2); 
