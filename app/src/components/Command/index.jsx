import React, {Component}  from 'react'
import * as psh from 'node-powershell'
import styles from './styles.css'

export default class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = { args: 'ls', output: '' };

        console.log("Creating new shell from constructor")
        this.ps = new psh({
            executionPolicy: 'Bypass',
            noProfile: true
        });

        this._handleCmdChange = this._handleCmdChange.bind(this);
        this._handleCmdSubmit = this._handleCmdSubmit.bind(this);
        this.run = this.invoke.bind(this);
    }

    _handleCmdSubmit(evt) {
        console.log("Invoking " + this.state.args)

        // Prevent form from reloading page
        evt.preventDefault();
        evt.stopPropagation();

        try {
            this.invoke(this.state.args)
        } catch(err) {
            console.log("Error invoking command")
            console.log(err)
        }
      }

    _handleCmdChange(evt) {
        console.log("Setting args to " + evt.target.value)

        this.setState({
            args: evt.target.value
          });
      }

    invoke(args) {
        this.ps.addCommand(args)

        this.ps.invoke()
        .then(output => {
            console.log("Command result: " + output);
            this.setState({output: output});
        })
        .catch(err => {
            this.setState({ output: "Encountered fatal error with shell, see console log for details" })
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
        return (
            <div className="{styles.command}">
                <div className="{styles.input}">
                    <span className="{styles.commandline}">
                        <form onSubmit={this._handleCmdSubmit}>
                            <input type="text" onChange={this._handleCmdChange} />
                        </form>
                    </span>
                </div>
                <div className="{styles.output}">
                    <span className="{styles.output}">
                        <pre>{this.state.output}</pre>
                    </span>
                </div>
            </div>
        )
    }
}
