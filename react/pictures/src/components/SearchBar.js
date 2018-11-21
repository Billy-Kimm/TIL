import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        keyword: ''
    }

    removeBadWrods(input){
        this.setState({ keyword: input }, () => {
            if(/.*fool.*/i.test(this.state.keyword)) {
                this.setState( 
                    {keyword: this.state.keyword.replace(/fool/i, 'NOPE')})
            }
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onUserSubmit(this.state.keyword);
    }
    
    render = () => {
        return (
          <div className="ui segment container">
            {/* </div><form onSubmit={e => this.onFormSubmit(e)} className='ui form'> */}
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <label htmlFor="keyword">Search</label>
             <input 
             id='keyword' 
             type="text"
             onChange={e => this.removeBadWrods(e.target.value)}
             value={this.state.keyword}
             />
         </form>
         </div>
    )
  }
}

export default  SearchBar;