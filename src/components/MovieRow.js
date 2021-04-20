import React, {useState} from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) =>{
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0;
        }
        setScrollX(x)
    }
    
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 308;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }


    const handleMovie = (item)=>{
        console.log(item)
    }


    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className="movieRow-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 70}}></NavigateBeforeIcon>
            </div>
            
            <div className="movieRow-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 70}}></NavigateNextIcon>
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 285 * 5
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item" onClick={handleMovie}>

                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}  key={key}/>
                        </div>                        
                    ))}
                </div>
            </div>
        </div>
    )
}


