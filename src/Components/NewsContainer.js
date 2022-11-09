import {Component} from "react";
import Newsitem from "./Newsitem";
import { Badge } from "react-bootstrap";

class NewsContainer extends Component
{
    constructor()
    {
        super()
        this.state = {
            isLoaded : false,
            items: []
        }
    }
    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e794659b40054edb8c27fd25f3a6698d"
        let body = await fetch(url);
        body = await body.json();
        this.setState({
            isLoaded: true,
            items:body.articles
        })  
        console.log(body);
      }
    render()
    {
        return(
            <div className="container pt-5">
                <h1>
                    <Badge bg="secondary">Top Headlines</Badge>   
                </h1>
                <br/>
                <div className="row">
                {this.state.isLoaded?this.state.items.map((ele) => {
                        return (
                            <div className="col-md-4" key = {ele.url}>
                                <Newsitem 
                                    url = {ele.url}
                                    title = {ele.title}
                                    url_image = {ele.urlToImage}
                                    description = {ele.description}
                                /> 
                            </div>
                        )
                    }):""}
                </div>
                {/* <div className="row">
                    <div className="col-sm">
                        <div className = "col-md-4">
                            <Newsitem 
                                title = {this.state.items?this.state.items[0].title:null} 
                                content = {this.state.items?this.state.items[0].content:null}
                                url_image = {this.state.items?this.state.items[0].urlToImage:null}
                                description = {this.state.items?this.state.items[0].description:null}
                                url = {this.state.items?this.state.items[0].url:null}
                             />
                        </div>
                        <br/>
                        <div className = "col-md-4">
                            <Newsitem
                                title = {this.state.items?this.state.items[1].title:null} 
                                content = {this.state.items?this.state.items[1].content:null}
                                url_image = {this.state.items?this.state.items[1].urlToImage:null}
                                description = {this.state.items?this.state.items[1].description:null}
                                url = {this.state.items?this.state.items[1].url:null}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className = "col-md-4">
                            <Newsitem
                                title = {this.state.items?this.state.items[2].title:null} 
                                content = {this.state.items?this.state.items[2].content:null}
                                url_image = {this.state.items?this.state.items[2].url:null}
                                description = {this.state.items?this.state.items[2].description:null}
                                url = {this.state.items?this.state.items[1].url:null}
                            />
                        </div>
                        <br/>
                        <div className = "col-md-4">
                            <Newsitem
                                title = {this.state.items?this.state.items[4].title:null} 
                                content = {this.state.items?this.state.items[4].content:null}
                                url_image = {this.state.items?this.state.items[4].urlToImage:null}
                                description = {this.state.items?this.state.items[4].description:null}
                                url = {this.state.items?this.state.items[1].url:null}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className = "col-md-4">
                            <Newsitem
                                title = {this.state.items?this.state.items[3].title:null} 
                                content = {this.state.items?this.state.items[3].content:null}
                                url_image = {this.state.items?this.state.items[3].urlToImage:null}
                                description = {this.state.items?this.state.items[3].description:null}
                                url = {this.state.items?this.state.items[1].url:null}
                            />
                        </div>  
                        <br/>
                        <div className = "col-md-4">
                            <Newsitem
                                title = {this.state.items?this.state.items[5].title:null} 
                                content = {this.state.items?this.state.items[5].content:null}
                                url_image = {this.state.items?this.state.items[5].urlToImage:null}
                                description = {this.state.items?this.state.items[5].description:null}
                                url = {this.state.items?this.state.items[0].url:null}
                            />
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default NewsContainer