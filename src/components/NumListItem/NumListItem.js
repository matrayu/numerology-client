import React, { Component } from 'react'
import HelpersService from '../../services/helpers-service'

export default class NumListItem extends Component {
    render() {
        let content;
        if (this.props.numData === 'karmic') {
            content = HelpersService.getKarmicLessons(this.props.number)
        }
        content = HelpersService.getHiddenTendencies(this.props.number)
        
        return (
            <div className='paragraph'>{content}</div>
        )
    }
}