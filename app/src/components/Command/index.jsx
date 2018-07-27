import React, {Component}  from 'react'
import * as psh from 'node-powershell'
import styles from './styles.css'
import Terminal from '../Terminal/'

export default class Command extends Component {
    constructor(props) {
        super(props);
        this.state = props;

        console.log("Creating new shell from constructor")
        this.ps = new psh({
            executionPolicy: 'Bypass',
            noProfile: true
        });
        this.ps.on('output', (data) => this.addOutput("stdout", data));
        this.ps.on('err', (data) => this.addOutput("stdout", data));

        this._handleCmdChange = this._handleCmdChange.bind(this);
        this._handleCmdSubmit = this._handleCmdSubmit.bind(this);
        this.run = this.invoke.bind(this);
    }

    addOutput(stream, data) {
        // Copy the state and output array, and append to it. Yeah, can't imagine
        // any performance problems here ...
        this.setState({
            commandline: this.state.commandline,
            output: this.state.output.concat([ { stream: stream, timestamp: Date.now(), data: data } ]),
        })
    }

    _handleCmdSubmit(evt) {
        console.log("Invoking " + this.state.commandline)

        this.setState({
            commandline: this.state.commandline,
            output: [],
        });

        // Prevent form from reloading page
        evt.preventDefault();
        evt.stopPropagation();

        try {
            this.invoke(this.state.commandline)
        } catch(err) {
            console.log("Error invoking command")
            console.log(err)
        }
    }

    _handleCmdChange(evt) {
        console.log("Setting commandline to " + evt.target.value)

        this.setState({
            commandline: evt.target.value,
            output: [],
        });
    }

    invoke(commandline) {
        // Copy the state and output array, and append to it. Yeah, can't imagine
        // any performance problems here ...
        this.ps.addCommand(commandline)

        this.ps.invoke()
        .catch(err => {
            this.addOutput("internalerror", "Encountered fatal error with shell, see console log for details")
            this.ps.dispose();
            console.log(err)

            console.log("Creating new shell after encountering an error")
            this.ps = new psh({
                executionPolicy: 'Bypass',
                noProfile: true
            });
        });
    }

    render() {
        console.log("Output: " + this.state.output)
        return (
            <div className={styles.command}>
                <div className={styles.input}>
                    <form onSubmit={this._handleCmdSubmit}>
                        <input type="text" onChange={this._handleCmdChange} value={this.state.commandline} className={styles.commandline} />
                    </form>
                </div>
                <div className={styles.output}>
                    <Terminal output={this.state.output} />
                </div>
            </div>
        )
    }
}
