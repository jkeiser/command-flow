import React, {Component}  from 'react'
import styles from './styles.css'
import Command from '../Command/'

export default class Session extends Component {
    render() {
        let commands = this.props.commands.map((command, index) => <Command key={index} {...command} />);
        return <div className={styles.session}>{commands}</div>;
    }
}
