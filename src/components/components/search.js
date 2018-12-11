 
import React, { Component } from 'react'

class Search extends Component {
 state = {
   query: '',
   isHidden: true
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 } 
 toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
 render() {
   return (
     <form>
       <input
         placeholder="What can we help you find?"
		 type="text"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
		 onClick={this.toggleHidden.bind(this)}
       />
	   {!this.state.isHidden && <div className="form_cnt_box"><p>{this.state.query}</p></div> } 
     </form>
   )
 }
}

export default Search
