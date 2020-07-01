import React, {Component} from 'react';

class ErrorPage extends Component{
    render(){
        return(
            <div>
                <h1>Page Not Found</h1>
                <p>We couldn't find what you were looking for.</p>
                <div>
                    Please contact the owner of the site that linked you to the original 
                    URL and let them know their link is broken.
                </div>
            </div>
        )
    }
}

export default ErrorPage;