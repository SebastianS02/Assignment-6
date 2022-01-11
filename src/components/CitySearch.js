import React from "react" 

class CitySearch extends React.Component{
    constructor(){
        super();
        this.state={
            city:"",
            results:[]
        }
        this.handleChange=this.handleChange.bind(this)

    }
    

    handleChange(event){
       event.preventDefault();
       console.log(event.target.city.value)
       this.setState({
           city:event.target.city.value.toUpperCase
       })
        let upCity=event.target.city.value.toUpperCase()
        console.log(upCity)
        fetch('http://ctp-zip-api.herokuapp.com/city/'+upCity)
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
                    <div class="city-header">
                    <h1> Search City</h1>
                     <div class="submit-container">
                     <form onSubmit={this.handleChange}>
                        <h2>Input City:</h2><br/> 
                        <input 
                        type="Text"
                        placeholder="Search City"
                        name="city">

                        </input>
                        <input 
                        type="submit"
                        placeholder="Search">
                        </input> 

                        </form>
                    </div>
                    </div>
                </header>
                <h2>
                    <div class="city-body">
                     {this.state.results.map((data) => (
                        <p>{data}</p>
                            
                    ))}   
                    </div>
                </h2>
            </div>
            );
    }

}
export default CitySearch;