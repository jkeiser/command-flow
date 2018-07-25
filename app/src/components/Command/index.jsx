import React, {Component}  from 'react'
import styles from './styles.css'
import Terminal from '../Terminal/'

export default class Command extends Component {
    render() {
        var output = "/home/jkeiser/hi\n/home/jkeiser/lo\n"
        return (
            <div className={styles.command}>
                <div className={styles.input}><span className={styles.commandline}>{this.props.commandline}</span></div>
                <div className={styles.output}><Terminal output={this.props.output}/></div>
            </div>
        )
    }
}
