import React from "react"
import { Link,useRouteMatch,Route } from "react-router-dom"
import Information from "./Information"
export default function About()
{
    const {url}=useRouteMatch()
    console.log(url);
const subRoutes=[

    {
        id:"jsx",
        data:{
            title:"react-jsx",
            content:"jsx stands for java script xml"
        }

    },
    {
        id:"react-router",
        data:{
            title:"react-router",
            content:"react router dom used to create single page application"
        }

    },
    {
        id:"react-hooks",
        data:{
            title:"react-hooks",
            content:"javacript is a single threaded programming language"
        }

    }
]

return (
    <div>
        <h1>About us</h1>
        {
            subRoutes.map(({id,data})=>{
                return <Link className="nav-link" key={id} to={`${url}/${id}`}> {data.title} </Link>
            })
        }
        {
            subRoutes.map(({id,data})=>
            {
                return <Route path={`${url}/${id}`} key={data}> <Information info={data}/> </Route> 
            })
        }
    </div>

)
}