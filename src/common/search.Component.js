import React, {Component} from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);
        let searchText = this.props.location.search;
        if(searchText){
            searchText = searchText.substr(searchText.indexOf("=")+1);
        }
        this.state = {
            searchText: searchText
        }
    }

    handleChange = (event)=>{
        this.setState({
            error: false,
            searchText: event.target.value
        })
    };

    onSearch = () => {
        if(!this.state.searchText.trim()){
            this.setState({
               error: true
            });
            return;
        }
        if(this.props.location.pathname === "/list"){
            this.props.searchForData(this.state.searchText);
        }else {
            console.log("Props are: ",this.props);
            this.props.searchData(this.state.searchText);
            this.props.history.push(`/list?searchTerm=${this.state.searchText}`);
        }

    };

    render(){
        return(
            <div className="search-component-container">
                <input type="text" className={`${this.state.error ? 'error': ''}`} placeholder="Please Enter Model-Id" value={this.state.searchText} onChange={this.handleChange}/>
                <button onClick={this.onSearch}>Search</button>
            </div>
        )
    }
}
