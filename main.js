// change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll >150 )
        {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else
        {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
});


// smooth scrolling
const navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    let targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();
});

// navbar mobile view
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

// swiper
let swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
})





// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '75f4c13246msh454d143971256acp14e37ajsn9af53cf1d0d3',
// 		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
// 	}
// };

// let jobTitle = document.getElementById("job-title");
// let searchBtn = document.getElementById(`search-btn`);
// let result = document.getElementById("result");

// let getJob = () => {
//     let jobSearch = jobTitle.value;

//     if (jobSearch.length <= 0)
//     {
//         result.innerHTML = `<h3 class="msg">Search a job </h3>;`
//     }
    
//     else
//     {
//         fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Philippines%2C%20Javascript%20developer%20in%20Philippines%2C%20Web%20developer%20in%20Philippines%2C%20Softwawre%20Engineer%20in%20Philippines&page=10&num_pages=3&date_posted=all', options).then((resp) => resp.json()).then((data) => {
//             if (data.Response == "True")
//             {
//                 result.innerHTML = `<h3 class="msg">${data.Response}</h3>`
//                 console.log(response);
                
//             }
//             else
//             {
//                 result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
//                 console.log(error)
//             }
//         })
//         .catch(() => {
//             result.innerHTML = `<h3 class="msg">Something went wrong</h3>`
//         })
//     }
// }

// searchBtn.addEventListener("click",getJob);
// window.addEventListener("load", getJob);





// let jobTitle = document.getElementById("job-title");
// let searchBtn = document.getElementById(`search-btn`);
// let result = document.getElementById("result");

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '75f4c13246msh454d143971256acp14e37ajsn9af53cf1d0d3',
// 		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
// 	}
// };

// fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Philippines%2C%20Javascript%20developer%20in%20Philippines%2C%20Web%20developer%20in%20Philippines%2C%20Softwawre%20Engineer%20in%20Philippines&page=10&num_pages=3&date_posted=all', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err))










// const sendRequest = (method, url, header) => {
//     const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         header.map(obj => xhr.setRequestHeader(obj.name, obj.value));
//         xhr.responseType = 'json';
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             }
//             resolve(xhr.response);
//         };
//         xhr.send();
//     });
//     return promise;
// };

// let searchBtn = document.getElementById("search-btn");
// let result = document.getElementById("result");

// const getData = async () => {
//     try {
//         const res = await sendRequest(
//             'GET',
//             'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Philippines%2C%20Javascript%20developer%20in%20Philippines%2C%20Web%20developer%20in%20Philippines%2C%20Softwawre%20Engineer%20in%20Philippines&page=10&num_pages=3&date_posted=all',
//             [
//                 {
//                     name: 'X-RapidAPI-Key',
//                     value: '75f4c13246msh454d143971256acp14e37ajsn9af53cf1d0d3',
//                 },
//                 {
//                     name: 'X-RapidAPI-Host',
//                     value: 'jsearch.p.rapidapi.com',
//                 },
//             ]
//         );
        
//         console.log(res);
//         result.innerHTML = `<h3 class="msg">${res}</h3>`
//     } catch (err) {
//         console.log(err);
//     }
// };
// getData();
// searchBtn.addEventListener("click", getData);








// let jobTitle = document.getElementById("job-title");
// let searchBtn = document.getElementById(`search-btn`);
// let result = document.getElementById("result");

// let getJob = () => {
//     let jobSearch = jobTitle.value;
//     let url = `https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Philippines%2C%20Javascript%20developer%20in%20Philippines%2C%20Web%20developer%20in%20Philippines%2C%20Softwawre%20Engineer%20in%20Philippines&page=10&num_pages=3&date_posted=all${jobSearch}&apikey=${key}`

//     if (jobSearch.length <= 0)
//     {
//         result.innerHTML = `<h3 class="msg">Search a job </h3>;`
//     }
//     else
//     {
//         fetch(url).then((resp) => resp.json()).then((data) => {
//             if (data.Response == "True")
//             {
//                 result.innerHTML = `<h3 class="msg">${data.Response}</h3>`
//                 console.log(data.Response)
//             }
//             else
//             {
//                 result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
//             }
//         })
//         .catch(() => {
//             result.innerHTML = `<h3 class="msg">Something went wrong</h3>`
//         })
//     }
// }

// searchBtn.addEventListener("click",getJob);
// window.addEventListener("load", getJob);







function search(){
    let result = document.getElementById("result");
    let jobTitle = "Python";
    let job = document.getElementById("job-title").value;
    console.log(job);
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75f4c13246msh454d143971256acp14e37ajsn9af53cf1d0d3',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

fetch(`https://jsearch.p.rapidapi.com/search?query=${job}&page=1&num_pages=1`, options)

	.then(response => response.json())
	.then(response => {
        console.log(response);
        // result.innerHTML = `<h3 class="msg">${response.data[0].employer_name}</h3>`

        // response.data.forEach(item => {
        //     result.innerHTML = `<h3 class="msg">${item.employer_name}</h3>`
        // })

        const data = response.data.map(item => {
            return `<table>
            <thead>
            <tr>
            <th>Full time:<li>${item.job_title}</th> ${item.employer_name} ${item.job_employment_type}</li>`
        });
        result.innerHTML = `<ul>${data}</ul>`
    })
	.catch(err => console.error(err));
}
