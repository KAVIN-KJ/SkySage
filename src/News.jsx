import test from './newstest.json' 
import { useState } from 'react';
import './styles/News.css'
import notfound from './assets/image-off-svgrepo-com.svg'
function News(){
    const [response,setResponse] = useState(test)

    console.log(response.data.articles);
    return(
        <>
        <h1 style={{margin:"20px"}} >Feed</h1>
        <div className='article-container'>
             {
                 response.data.articles.filter((item,index)=> item.author&&item.content!=="").map((article,key)=>(
                     <div className='newsArticle' key={key} >
                        <marquee behavior="slide" direction="left">
                            <h3>{article.title}</h3>
                        </marquee>
                        <img src={article.urlToImage ? article.urlToImage : notfound} width="200px" alt="Could not Load Image" />
                        <div style={{display:"inline"}}>
                            <div dangerouslySetInnerHTML={{__html: article.content.split("[")[0]+``}} ></div><a target='blank' href={article.url}>read More</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}
export default News