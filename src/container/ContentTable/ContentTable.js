import React, { useEffect, useState } from 'react';
import TableRow from '../../components/ContentTable/TableRow/TableRow';
import classes from './ContentTable.module.css'; 

const ContentTable = () => {
    const [data, setData] = useState([]);
    const [pages_Arr, setPages_Arr] = useState([]);
    const [pageInfo, setPageInfo] = useState({resultData: [], start: '', end: ''});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            res => res.json()
        ).then(responseData => {
            setData(responseData);
            const no_of_pages = Math.ceil(responseData.length/25);
            const arr = [ ];
            for(let i=1; i<=no_of_pages; i++){
                if(i===1){
                    arr.push({value: i, active: true});
                }
                else{
                    arr.push({value: i, active: false});
                }                
            }
            setPages_Arr(arr);
            setPageInfo({resultData: responseData.slice(0,25), start: 1, end: 25});
        })
    },[]);

    const setCurrentPage = (pageno, index) => {
        const start = (pageno-1)*25;
        const end = start + 25;
        const newdata = data.slice(start, end);   
        setPageInfo({resultData: newdata, start: start+1, end: end});

        const pages = pages_Arr;
        pages.forEach((page, ind) => {
            page.active = false;
            if(ind === index){
                page.active = true;
            }
        })

        setPages_Arr(pages);
    }

    return (
        <div>
            <div className={classes.contaniner}>
                <h3>Tasks</h3>            

                <div className={classes.ContentTable}>
                    <div className={classes.tableHead}>
                        <span>id</span> 
                        <span>user id</span> 
                        <span>title</span> 
                        <span>completed</span>
                    </div>
                    {pageInfo.resultData.map((row) => <TableRow key={row.id} id={row.id} uId={row.userId} title={row.title} status={row.completed} />)}            
                </div>                
            </div>

            
            
            <div className={classes.pageControl}>
                    <div className={classes.pageno}>
                        Showing <strong style={{color: 'black'}}>{pageInfo.start}</strong> to <strong style={{color: 'black'}}>{pageInfo.end}</strong> of <strong>200</strong> elements
                    </div>

                    <div className={classes.pagelist}>
                        <div>&lt;&lt;</div>
                        <div className={classes.innerpagelist}>
                            {pages_Arr.map((page,index) => <div key={index} className={page.active ? classes.active: classes.notActive } onClick={setCurrentPage.bind(this,page.value,index)} >
                                {page.value}</div>)}
                        </div>  
                        <div>&gt;&gt;</div>
                        
                    </div>
                    
                </div>
        </div>
    );
}

export default ContentTable;