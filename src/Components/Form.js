import React from 'react';
import { Link} from 'react-router-dom'
class  Form extends React.Component{
    state = {
        text : ''
    }
    handleSubmit(e){
        e.preventDefault();
    }
   render(){
        return(
            <div>
              I am Form
              <form onSubmit={(e)=>this.handleSubmit(e)}>
                  <input type="text" name="item" onChange={(e)=>this.setState({text: e.target.value})} value={this.state.text} />
                  <button type="submit">Submit</button>              </form>
            </div>
          )
    }
}

  export default Form;