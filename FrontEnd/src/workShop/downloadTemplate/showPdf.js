import React, {Component} from 'react';
import template from './pdf/proposal.pdf';

class ShowPdf extends Component {
    render() {
        return (
            <embed src={template} type="application/pdf" width="100%" height="640px"/>
        )
    }
}

export default ShowPdf;