import {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {hasError: true};
  }
//   componentDidCatch(error, info) {
//     console.log(`${error} ${info}`);
//   }
  render() {
    if (this.state.hasError) {
      return (
        <div className='errorDiv'>
         <h2>
          ⚠️ 
        </h2>
       <h2> There is an error please <Link to="/">go back</Link></h2> 
        </div>
        
          
      );
    }
    return this.props.children;
  }
}
