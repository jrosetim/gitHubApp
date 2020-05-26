import React, {Component} from 'react'
import Square from './square'
import Button from './button';
// import ButtonLike from './buttonLike'
// import ButtonSearch  from './buttonSearch'

class App extends Component{
    constructor() {
        super();

        this.state = {
            color: 'purple'
        }
    }

    render(){
        return( 
            <div>
                <Square color={ this.state.color } />

                {['red', 'green', 'blue'].map((color) => (
                    <Button
                        key={color}
                        hanldeClick={ () => this.setState( {color} ) }>
                        { color }
                    </Button>    
                ))}
            </div>        
        )
    }
}


// class App extends Component{
//     render(){
//         return( 
//             <div className='container'>
//                 <ButtonLike />
//                 <ButtonSearch />
//             </div>        
//         )
//     }
// }


// class App extends Component{
//     render(){
//         return( 
//             <div onClick={ (e) => alert('Clicou')}>
//                 <Square color='purple' />
//             </div>        
//         )
//     }
// }


// const App = React.createClass({
//     render: function() {
//         return <div>
//             <Title name='Julio' lastName='Rosetim!' />
//         </div>
//     }
// })

export default App