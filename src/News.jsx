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
                            <h3>{article.title}</h3>
                        <img src={article.urlToImage ? article.urlToImage : notfound} width="200px" alt="Could not Load Image" />
                        <div>
                            <div dangerouslySetInnerHTML={{__html: article.content.split("[")[0]+``}} ></div><a target='blank' href={article.url}>read More</a>
                        </div>
                        <div><b>Published At : </b> {article.publishedAt.split("T")[0]} / {article.publishedAt.split("T")[1].replace("Z","")}</div>
                        <div><b>Authored by : </b> {article.author}</div>
                    </div>
                ))
            }
            </div>
        </>
    )
}
export default News