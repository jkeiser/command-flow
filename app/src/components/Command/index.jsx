import React, {Component}  from 'react'
import styles from './styles.css'

export default class Logo extends Component {
    render() {

        return (
            <div className="{styles.command}">
                <div className="{styles.input}"><span className="{styles.commandline}">{this.props.commandline}</span></div>
                <div className="{styles.output}"><span className="{styles.output}">hi
lo
</span></div>
            </div>
        )
    }
}
