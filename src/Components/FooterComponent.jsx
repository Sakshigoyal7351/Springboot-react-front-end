import React, {Component} from 'react';

class FooterComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    render()
    {
        return (
            <div>
                <footer style={{color:"white"}} className="footer">
                    <span >All Rights Reserved 2022 @ExcelRTrainings </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent 