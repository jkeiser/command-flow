import React, {Component}  from 'react'
import styles from './styles.css'

export default class Logo extends Component {
    render() {
        var output = "/home/jkeiser/hi\n/home/jkeiser/lo\n"
        return (
            <div className={styles.command}>
                <div className={styles.input}><span className={styles.commandline}>{this.props.commandline}</span></div>
                <div className={styles.output}><span className={styles.stdout}>{output}</span></div>
            </div>
        )
    }
}
