const news1 = document.querySelector('.news-a');
const news2 = document.querySelector('.news-b');
const news3 = document.querySelector('.news-c');
const news4 = document.querySelector('.news-d');
const newsFeed = document.querySelector('.news-feed');
const sideNews = document.querySelector('.side-news');
const centerNews = [news1,news2,news3,news4];

fetch('https://coding-week-2024-api.onrender.com/api/data')
    .then((response) => response.json())
    .then((json) => {
      
        const centre_data = json.slice(0,4)

        const side_data = json.slice(4,8)

        centerNews.forEach((news, i) => {
            if (centre_data[i]) {
                news.style['background-image'] = `url(${centre_data[i].image})`;
                
                const div = document.createElement('div');
                
                news.classList.add('center-data');
                
                div.innerHTML = `<div style='margin:5px'>
                                    <span style='background-color:black; padding:4px; border-radius:10px'>
                                        ${centre_data[i].type}
                                    </span>
                                </div>
                                <div style='margin:5px'>
                                    <h2>
                                        ${centre_data[i].headline}
                                    </h2>
                                </div>
                                <div style='margin:5px'>
                                    <span>${centre_data[i].author}</span>
                                    <span style='margin-left:5px'>📅${centre_data[i].date}</span>
                                </div>`;
                
                news.appendChild(div);
                
                
                news.addEventListener('click', () =>alert(`${centre_data[i].content}`))
            }
        });

        side_data.forEach((newsData,i) =>{
            const div = document.createElement('div');
            
            div.classList.add('side-perdata');

            div.innerHTML = `<div style='padding:3px;'>
                                <img style='width:120px; height:110px; border-radius: 10px; object-fit: cover;' src=${newsData.image} />
                            </div>
                            <div>
                                <h4 style='margin-bottom: 8px;'>${newsData.headline}</h4>
                                <p>📅${newsData.date}</p>
                            </div>`;
                            
            sideNews.appendChild(div);

            div.addEventListener('click',() =>alert(newsData.content))
        });


    });








