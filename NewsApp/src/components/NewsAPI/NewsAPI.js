import React, { useEffect, useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import moment from 'moment';
import styles from './css/NewsAPI.module.css'
import { ENDPOINT, API_KEY } from '../../credentails';

export default function NewsAPI() {
    let [reload, setReload] = useState(0);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("general");
    const [loading, setLoading] = useState(false);

    const selectCategory = (e)=>{
        console.log(e.target.name);
        setCategory(e.target.name)
        setReload(reload^1);
    }

    {/*  GET:  /top-headlines? */}
    useEffect(() => {
        setLoading(true);
        let fetchData = {}
        fetch(`${ENDPOINT}?country=us&category=${category}&apiKey=${API_KEY}`, fetchData)
        .then(res => res.json())
        .then(res2 => {
            setLoading(false);
            // console.log(res2);
            setData(res2.articles);
        })
        .catch(err => {
            setLoading(false);
            // console.log(err);
        })
    }, [reload])

    return (
        <div className='container min-height-md'>
            <div className='row'>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className={`marg-top-6 ${styles.categoryName}`}>
                        <span className={`${styles.categoryName}`}></span>{category.toUpperCase()}
                    </div>

                    <div className={`${styles.postView} marg-top-6 marg-bottom-6`}>
                    {
                        (loading)
                            ?(
                                <center><BeatLoader loading={loading} size={30} /></center>
                            ):(
                                <div>
                                {
                                    (data.length)
                                    ? data.map(article => {
                                        return (
                                            <>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="card-text">{article.description}</p>
                                                        <div>
                                                            <i>Published on</i><b> {moment(article.publishedAt).format('ll')}</b> <br/>
                                                            by <strong><b>{(!article.author)?("Anonymous"):(article.author)}</b></strong>
                                                        </div>
                                                        <div className='marg-top-3'>
                                                            <button className="btn btn-primary">Read More </button>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <hr style={{height:'3px',marginTop:'2vh',marginBottom:'2vh'}}/>
                                            </>
                                            
                                        )
                                    })
                                    :
                                    <p className={styles.noData}>No Results found</p>
                                }
                                </div>
                            )
                        } 
                    </div>
                    
                </div>

                <div className="col-md-2">
                    <div className='marg-top-6'>
                        <ul className="navbar-nav" styles={{'margin-top':'10vh;'}}>
                            <li className="nav-item dropdown">
                                <button className={`dropdown-toggle btn btn-success ${styles.nav_btn}`} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"general"} href="#">General</a></li>
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"business"} href="#">Business</a></li>
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"entertainment"} href="#">Entertainment</a></li>
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"health"} href="#">Health</a></li>
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"science"} href="#">Science</a></li>
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"sports"} href="#">Sports</a></li>
                                    <li><a className="dropdown-item" onClick={selectCategory} name={"technology"} href="#">Technology</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
