import React, { Component } from 'react';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=09a8fd024bee47799b4575dd073c8a8a&pageSize=6&page=1";
        let data = await fetch(url);
        let newdata = await data.json()
        this.setState({
            data:newdata.articles
        })

    }

    render() {
        return (
            <>

                <div className="container">
                    <div className="row">
                        {
                            this.state.data.map((ele, index) => (
                                <div className="col-4" key={index}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{ele.title ? ele.title.slice(0,40) : "Hello It's codings first"}...</h5>
                                        </div>
                                        <div className="card-body">
                                            <img src={ele.urlToImage} alt="" style={{height:"120px", width:"100%"}}/>
                                            <p>{ele.description ? ele.description.slice(0,140) : "cash-strapped city in rural Texas will soon be home to the world’s largest bitcoin"}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button className='btn btn-dark'>Hello</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}
