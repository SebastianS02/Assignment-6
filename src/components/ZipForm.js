import React from "react"

class ZipSearch extends React.Component{
    constructor(){
        super();
        this.state={
            zipCode:"",
            results:[]

        }
        this.handleChange=this.handleChange.bind(this)

    }
    
    handleChange(event){
       event.preventDefault();
       this.setState({
           zipCode:event.target.zip.value
       })
       
        fetch('http://ctp-zip-api.herokuapp.com/zip/'+event.target.zip.value)
            .then(response=>{
                return response.json();
            })
            .then(data =>{
                this.setState({
                    results:[...data]
                })
                
            })
            .catch(error=>{
                console.log("error",error)
            })
            .then(()=>console.log(this.state.results));
            
    }
    

    render(){
        return(
            <div>
                <header>
                    <div class="zip-header">
                    <h1> ZipCode Searcher </h1>
                    
                    <div class="submit-container">
                    <form onSubmit={this.handleChange}>
                        <h2>Input ZipCode:</h2><br/> 
                        <input 
                        type="Text"
                        placeholder="ZipCode"
                        name="zip">

                        </input>
                        <br/>
                        <input 
                        type="submit"
                        placeholder="Search">
                        </input> 

                    </form>
                    </div>
                    </div>
                </header>
                <h2>
                    <div class="zip-body">
                        {this.state.results.map((data) => (
                            <p>City: {data.City}<br/>
                                State: {data.State}<br/>
                                ZipCode: {data.Zipcode}<br/>
                                Population: {data.EstimatedPopulation}</p>
                        ))}  
                        </div> 
                </h2>
                
            </div>
            );
    }

}
export default ZipSearch;