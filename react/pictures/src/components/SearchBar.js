import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        keyword: ''
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    removeBadWrods(input){
        this.setState({ keyword: input }, () => {
            if(/.*fool.*/i.test(this.state.keyword)) {
                this.setState( 
                    {keyword: this.state.keyword.replace(/fool/i, 'NOPE')})
            }
        });
    }

    // afterUserInput(event){
    //     this.setState(event.target.value)
    // }

    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    // onInputClick(event){
    //     console.log('click');
    // }

    render() {
        return (
          <div className="ui segment container">
            <form className='ui form'>
                <label htmlFor="keyword">Search</label>
             <input 
             id='keyword' 
             type="text"
             onChange={e => this.removeBadWrods(e.target.value)}
             value={this.state.keyword}
             //  value={this.state.keyword}
            //  onChange={this.onInputChange}
            //  onClick={this.onInputClick}
             />
         </form>
         </div>
    )
  }
}

export default  SearchBar;