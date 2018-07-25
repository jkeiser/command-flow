import React, {Component}  from 'react'
import styles from './styles.css'

export default class Terminal extends Component {
    render() {
        let output = this.props.output.map((output) => {
            let className = output.stream == "stderr" ? styles.stderr : styles.stdout;
            return <span className={className}>{output.data}</span>;
        });
        return (
            <div className={styles.terminal}>{output}</div>
        )
    }
}
