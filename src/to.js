import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class To extends Component{
constructor(props){
super(props)
this.state={
task:"",
tasks:[]
}
}
change(event){
this.setState({task:event.target.value});
}
add(){
this.state.tasks.push(this.state.task);
ReactDOM.render(<ol>
{this.state.tasks.map(a=><li><h1>{a}</h1></li>)}
</ol>,document.getElementById('p'))
}
render(){
return(
<React.Fragment>
<input type="text" value={this.state.task} onChange={this.change.bind(this)}/>
<button onClick={this.add.bind(this)}>add</button>
</React.Fragment>
)
}
}
export default To;
